import React from 'react';
import {shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import App from "../App";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
configure({adapter: new Adapter()});

describe("App Component", () => {
    const initialState = {Tasks: {data: {}}};
    const mockStore = configureStore();
    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    });

    it("Should Match Snapshot", () => {
        const wrapper = shallow(<Provider store={store}><App /></Provider>);
        expect(wrapper.html()).toMatchSnapshot();
    });
});
