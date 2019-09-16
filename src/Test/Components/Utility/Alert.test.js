import React from 'react';
import Alert from "../../../Components/Utility/Alert";
import {shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe("Alert Component", () => {
    it("Should Match Snapshot", () => {
        const wrapper = shallow(<Alert title="Test" status="success"/>);
        expect(wrapper.html()).toMatchSnapshot();
    });

    it("Should Render With Success Class", () => {
        const wrapper = shallow(<Alert title="Test" status="success"/>);
        expect(wrapper.find(".alert-success")).toBeTruthy();
    });
});
