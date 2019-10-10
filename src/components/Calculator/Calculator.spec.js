import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';

describe('Calculator', ()=>{
    let wrapper;
    beforeEach(()=> wrapper = shallow(<Calculator />))

    it('renders a div', ()=>{
        expect(wrapper.find('div').length).toEqual(1);
    })
})