import React from 'react';
import {shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Button from "../../../Components/Utility/Button";
configure({adapter: new Adapter()});

describe("Button Component", () => {
    it("Should Match Snapshot", () => {
        const wrapper = shallow(<Button title="Test" status="success"/>);
        expect(wrapper.html()).toMatchSnapshot();
    });
});
