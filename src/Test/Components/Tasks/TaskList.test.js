import React from 'react';
import {shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import TaskList from "../../../Components/Tasks/TaskList";
configure({adapter: new Adapter()});

describe("TaskList Component", () => {
    const initialState = {Tasks: {data: {}}};
    const mockStore = configureStore();
    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    });

    it("Should Match Snapshot", () => {
        const wrapper = shallow(<Provider store={store}><TaskList tasks={[{id: "1", title: "Test"}]}/></Provider>);
        expect(wrapper.html()).toMatchSnapshot();
    });
});
