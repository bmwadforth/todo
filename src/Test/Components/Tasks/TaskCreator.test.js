import React from 'react';
import {mount, shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import TaskCreator from "../../../Components/Tasks/TaskCreator";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
configure({adapter: new Adapter()});

describe("TaskCreator Component", () => {
    const initialState = {Tasks: {data: {}}};
    const mockStore = configureStore();
    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    });

    it("Should Match Snapshot", () => {
        const wrapper = shallow(<Provider store={store}><TaskCreator /></Provider>);
        expect(wrapper.html()).toMatchSnapshot();
    });
});
