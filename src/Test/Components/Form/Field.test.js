import React from 'react';
import {shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Field from "../../../Components/Form/Field";
configure({adapter: new Adapter()});

describe("Field Component", () => {
    it("Should Match Snapshot", () => {
        const wrapper = shallow(<Field id="Test" title="Test" onChange={() => {}} required/>);
        expect(wrapper.html()).toMatchSnapshot();
    });

    it("Should Render With Text Input Type", () => {
        const wrapper = shallow(<Field id="Test" title="Test" type="text" onChange={() => {}} required/>);
        expect(wrapper.find("input[type='text']")).toBeTruthy();
    });

    it("Should Render With Number Input Type", () => {
        const wrapper = shallow(<Field id="Test" title="Test" type="number" onChange={() => {}} required/>);
        expect(wrapper.find("input[type='number']")).toBeTruthy();
    });
});
