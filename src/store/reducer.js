import { ADD_TODO, POPULATED_TODOS } from "./type";
const DEFAULT_STATS = {
    items: [],
};
const reducer = ( state = DEFAULT_STATS, action ) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, items: [...state.items, action.todo]}
        case POPULATED_TODOS:
           return { ...state, items: action.todos }
        default:
            return {...state};
    }
};

export default reducer;