import React from 'react';
import {shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import TaskListItem from "../../../Components/Tasks/TaskListItem";
configure({adapter: new Adapter()});

describe("TaskListItem Component", () => {
    const initialState = {Tasks: {data: {}}};
    const mockStore = configureStore();
    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    });

    it("Should Match Snapshot", () => {
        const wrapper = shallow(<Provider store={store}><TaskListItem id="1" title="Test" created={new Date()} /></Provider>);
        expect(wrapper.html()).toMatchSnapshot();
    });
});
