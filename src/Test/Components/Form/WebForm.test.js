import React from 'react';
import {shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import WebForm from "../../../Components/Form/WebForm";
configure({adapter: new Adapter()});

describe("WebForm Component", () => {
    it("Should Match Snapshot", () => {
        const wrapper = shallow(<WebForm actionTitle="Test" onSubmit={() => {}}/>);
        expect(wrapper.html()).toMatchSnapshot();
    });
});
