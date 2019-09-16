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
            let tasks = {...state.data};
            delete tasks[action.payload];
            return {
                ...state,
                data: {...tasks}
            };
        case ACTIONS.TASK.COMPLETE: {
            let tasks = {...state.data};
            tasks[action.payload].completed = true;
            return {
                ...state,
                data: {...tasks}
            };
        }
        default:
            return {...state}
    }
}
