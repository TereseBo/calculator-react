import './Calculator.css';
import Num from './Num';
import { useState } from 'react';
export default function Calculator() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,'C','='];
    const operators = ["+", "-", "*", "/"];
    const[ currentValue, setCurrentValue] = useState('');

    const [oldValue, setOldValue] = useState('');
    const [operator, setOperator] = useState('');

    return (
        <div className="calculator">
            <div key='display' className="display">
                {currentValue}

            </div>
            <div key='numbers' className="numbers">
                {numbers.map((number) => {
                    return <Num key={number} number={number} setOld={setOldValue} setCurrent={setCurrentValue} currentValue={currentValue} oldValue={oldValue} op={operator} setOp={setOperator}/>
                })}
            </div>
            <div key='operators' className="operators">
                {operators.map((operator) => {
                    return <Num key={operator} number={operator} setOld={setOldValue} setCurrent={setCurrentValue} currentValue={currentValue} oldValue={oldValue} op={operator} setOp={setOperator}/>
                })}
            </div>
        </div>
    )
}