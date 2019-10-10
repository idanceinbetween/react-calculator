import React from 'react';
import { shallow  } from 'enzyme';
import Display from './Display';
import './Display.css';

describe('Display', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Display displayValue={''}/>));

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot(true);
    })

    it('renders a div', () => {
        expect(wrapper.find('div').length).toEqual(1);
    })

    it('renders display value', () => {
        wrapper.setProps({displayValue: 'test'});
        expect(wrapper.text()).toEqual('test');
    })

})