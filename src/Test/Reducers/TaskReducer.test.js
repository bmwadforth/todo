import Reducer from "../../Reducers/TaskReducer";
import {ACTIONS} from "../../Actions/Actions";

describe("TaskReducer", () => {
    it("Should Create Tasks", () => {
        const state = Reducer({data: {"1": {id: "1", title: "Test1"}}}, {
            type: ACTIONS.TASK.CREATE,
            payload: {id: "2", title: "Test2"}
        });
        expect(state).toEqual({data: {"1": {id: "1", title: "Test1"}, "2": {id: "2", title: "Test2"}}})
    });

    it("Should Complete Tasks", () => {
        const state = Reducer({data: {"1": {id: "1", title: "Test1", completed: false}}}, {
            type: ACTIONS.TASK.COMPLETE,
            payload: "1"
        });
        expect(state).toEqual({data: {"1": {id: "1", title: "Test1", completed: true}}});
    });

    it("Should Delete Tasks", () => {
        const state = Reducer({data: {"1": {id: "1", title: "Test1"}}}, {
            type: ACTIONS.TASK.DELETE,
            payload: "1"
        });
        expect(state).toEqual({data: {}});
    });
});