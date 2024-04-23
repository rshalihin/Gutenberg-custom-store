import { ADD_TODO, POPULATED_TODOS, UPDATED_TODO } from "./type";
const DEFAULT_STATS = {
    items: [],
};
const reducer = ( state = DEFAULT_STATS, action ) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, items: [...state.items, action.todo]}

        case POPULATED_TODOS:
           return { ...state, items: action.todos }
           
        case UPDATED_TODO:{
            const itemsCopy = [...state.items];
            itemsCopy[action.index] = action.todo;
            return { ...state, items: itemsCopy }
        }

        default:
            return {...state};
    }
};

export default reducer;