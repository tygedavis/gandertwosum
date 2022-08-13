import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import _ from 'lodash';
import axios from 'axios';

Enzyme.configure({ adapter: new Adapter() });

describe('App.js', () => {
    let wrapper: any;
    let button: any;
    let n1: any;
    let n2: any;

    beforeEach(() => {
        wrapper = shallow(<App/>);
        n1 = wrapper.find('#n1');
        n2 = wrapper.find('#n2');
        button = wrapper.find('button');
    });


    it('should match the snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('Should render a header, two input boxes, and a button', () => {
        const inputs = wrapper.find('input');
        const header = wrapper.find('h1');

        expect(header).toHaveLength(1);
        expect(header.text()).toEqual('GanderSum');
        expect(inputs).toHaveLength(2);
        expect(button).toHaveLength(1);
        expect(button.text()).toEqual('Add These Numbers!');
    });

    it('Should not show the answer text on render', () => {
        const answerText = wrapper.find('#answer');

        expect(answerText.props()).toEqual({
            children: [
                'The answer is: ',
                0
            ],
            className: 'hide',
            id: 'answer'
        });
    });
})
