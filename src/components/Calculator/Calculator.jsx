import React, {Component} from 'react';
import './Calculator.css';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

class Calculator extends Component {

    state = {
        displayValue: '0',
        numbers: ['9','8','7','6','5','4','3','2','1','0','.','ce'],
        operators: ['/', 'x', '-', '+'],
        selectedOperator: '',
        storedValue: ''
    }

    callOperator = () => console.log('Call Operator')
    setOperator = () => console.log('Set Operator')
    updateDisplay = () => console.log('Update Display')

    render() {
        const { displayValue, numbers, operators} = this.state

        return (
            <div className="calculator-container">
                <Display displayValue={displayValue}/>
                <Keypad
                    callOperator={this.callOperator}
                    numbers={numbers}
                    operators={operators}
                    setOperator={this.setOperator}
                    updateDisplay={this.updateDisplay}
                />
            </div>
        );
    }
}

export default Calculator;