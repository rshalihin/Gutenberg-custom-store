export const getTodos = ( state ) => {
    return state.items;
};

export const getTodosNumbers = ( state ) => {
    return state.items.length;
}

export const getDoneTodosNumbers = ( state ) => {
    return state.items.filter( ( todo ) => todo.completed ).length;
}

export const getUndoneTodosNumbers = ( state ) => {
    return state.items.filter( todo => !todo.completed ).length;
} 