import {ACTIONS} from "../Actions/Actions";

const initialState = {
    data: [],
    errors: {}
};

export default function TaskReducer(state = initialState, action){
    switch (action.type){
        case ACTIONS.TASK.CREATE:
            return {
                ...state
            };
        case ACTIONS.TASK.DELETE:
            return {
                ...state
            };
        default:
            return {...state}
    }
}
