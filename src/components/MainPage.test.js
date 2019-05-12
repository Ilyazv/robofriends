import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';
import toJson from 'enzyme-to-json';
import { jsxEmptyExpression } from '@babel/types';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps}/>)
});

it('expect to render MainPage component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'j',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2}/>)    
    expect(wrapper2.instance().filterRobots()).toEqual([{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
    }]);
});

it('filters robots correctly', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    }
    const wrapper3 = shallow(<MainPage {...mockProps3}/>)    
    expect(wrapper3.instance().filterRobots()).toEqual([]);
});
