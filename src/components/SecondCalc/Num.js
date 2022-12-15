import './Num.css'
export default function Num({number, setOld, setCurrent , currentValue, oldValue, op, setOp}) {

    function calcResult(currentValue, oldValue, op) {
        let result=0;
        switch (op) {
           
            case '+':
                result= parseInt(oldValue) + parseInt(currentValue);    
                break;
            case '-':
                result= parseInt(oldValue) - parseInt(currentValue);
                break;
            case '*':
                result =parseInt(currentValue) * parseInt(oldValue);
                break;
            case '/':
                result= parseInt(oldValue) / parseInt(currentValue) ;
                break;
            default:
                break;
                
        };
        return result;
    }

    function swicheRoo(number){
        switch (number) {
            case 'C':
                setCurrent('');
                setOld('');
                setOp('');
                break;
            case '=':
                setCurrent(calcResult(currentValue, oldValue, op));
                setOld('');
                setOp('');
                break;
            case '+':
                setOld(currentValue);
                setOp(number);
                setCurrent('');
                break;
            case '-':
                setOld(currentValue);
                setOp(number);
                setCurrent('');
                break;
            case '*':
                setOld(currentValue);
                setOp(number);
                setCurrent('');
                break;
            case '/':
                setOld(currentValue);
                setOp(number);
                setCurrent('');
                break;
                
            default:
                if(oldValue === 'resultShown'){
                    setCurrent('');
                    setOld('');
                }
                setCurrent(currentValue.toString() + number.toString());
                break;
        }
    }
    
    return (
        <div className="box" onClick={()=>{swicheRoo(number)}}>
            <p>{number}</p>
        </div>
    )
}