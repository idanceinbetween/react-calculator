import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

describe('Calculator', ()=>{
    let wrapper;
    beforeEach(()=> wrapper = shallow(<Calculator />))

    it('renders correctly based on snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('renders a div', ()=> {
        expect(wrapper.find('div').length).toEqual(1);
    })

    it('renders the Display and Keypad components', () => {
        expect(wrapper.containsAllMatchingElements([<Display displayValue={wrapper.instance().state.displayValue}/>, <Keypad
            callOperator={wrapper.instance().callOperator}
            numbers={wrapper.instance().state.numbers}
            operators={wrapper.instance().state.operators}
            setOperator={wrapper.instance().setOperator}
            updateDisplay={wrapper.instance().updateDisplay}
        />])).toEqual(true);
    })
})