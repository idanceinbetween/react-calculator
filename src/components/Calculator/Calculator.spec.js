import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

describe('Calculator', ()=>{
    let wrapper;
    beforeEach(()=> wrapper = shallow(<Calculator />))

    it('renders a div', ()=>{
        expect(wrapper.find('div').length).toEqual(1);
    })

    it('renders the Display component', () => {
        expect(wrapper.containsMatchingElement(<Display displayValue={wrapper.instance().state.displayValue}/>)).toEqual(true);
    })

    it('renders the Keypad component', () => {
        expect(wrapper.containsMatchingElement(<Keypad
            callOperator={wrapper.instance().callOperator}
            numbers={wrapper.instance().state.numbers}
            operators={wrapper.instance().state.operators}
            setOperator={wrapper.instance().setOperator}
            updateDisplay={wrapper.instance().updateDisplay}
        />)).toEqual(true);
    })
})