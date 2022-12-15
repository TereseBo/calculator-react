import './Num.css';
export default function Num({number, index}) {
    console.log(number)
    return (
        <li key={index} className="box">
            <p>{number}</p>
        </li>
    )
}