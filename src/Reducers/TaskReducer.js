import {ACTIONS} from "../Actions/Actions";

const initialState = {
    data: {},
    errors: {}
};

export default function TaskReducer(state = initialState, action){
    switch (action.type){
        case ACTIONS.TASK.CREATE:
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.payload.id]: {
                        ...action.payload
                    }
                }
            };
        case ACTIONS.TASK.DELETE:
            return {
                ...state,
                data: {...state.data, ...action.payload}
            };
        default:
            return {...state}
    }
}
