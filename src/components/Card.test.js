import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import toJson from 'enzyme-to-json';

it('expect to render Card component', () => {
    expect(toJson(shallow(<Card />))).toMatchSnapshot();
});
