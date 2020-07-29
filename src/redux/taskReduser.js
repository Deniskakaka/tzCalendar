import { LIST_TASKS } from "./taskActions.js";

const initialState = {
    tasks: []
};

const mainReduser = (state = initialState, action) => {
    switch(action.type) {
        case LIST_TASKS: 
            return {
                ...state,
                tasks: action.payload.list
            }
        default:
            return state;
    }
};

export default mainReduser;