import React from 'react';
import {shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Icon, {ICONS} from "../../../Components/Utility/Icons";
configure({adapter: new Adapter()});

describe("Icon Component", () => {
    it("Should Match Snapshot", () => {
        const wrapper = shallow(<Icon icon={ICONS.SUCCESS}/>);
        expect(wrapper.html()).toMatchSnapshot();
    });
});
