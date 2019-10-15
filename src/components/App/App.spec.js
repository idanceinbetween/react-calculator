import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Calculator from "../Calculator/Calculator";

describe('App', ()=>{
    let wrapper;
    beforeEach(()=> wrapper = shallow(<App />));

    it('this test will pass', expect(true).toBeTruthy);

    it('renders correctly with Snapshot', () => expect(wrapper).toMatchSnapshot());

    it('renders a div', ()=>{
        expect(wrapper.find('div').length).toEqual(1);
    })

    it('has a Calculator component', () => {
        expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
    })
})