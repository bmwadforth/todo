import React from 'react';
import {shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Ephemeral from "../../../Components/Utility/Ephemeral";
configure({adapter: new Adapter()});

describe("Ephemeral Component", () => {
    it("Should Match Snapshot", () => {
        const wrapper = shallow(<Ephemeral countdown={1000}><p>Test</p></Ephemeral>);
        expect(wrapper.html()).toMatchSnapshot();
    });
});
