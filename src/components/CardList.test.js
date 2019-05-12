import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';
import toJson from 'enzyme-to-json';

it('expect to render CardList component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'john',
            email: 'john@gmail.com'
        }
    ]
    expect(toJson(shallow(<CardList robots={ mockRobots } />))).toMatchSnapshot();
});
