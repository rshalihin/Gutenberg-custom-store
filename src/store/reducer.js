import { ADD_TODO } from "./type";
const DEFAULT_STATS = {
    items: [],
};
const reducer = ( state = DEFAULT_STATS, action ) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, items: [...state.items, action.todo]}        
        default:
            return {...state};
    }
};

export default reducer;