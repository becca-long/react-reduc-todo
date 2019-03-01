const initialState = {
    todos: [],
}

const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos: [
                    ...state.todos,
                    {
                        task: action.text,
                        done: false,
                    }
                ]
            };
        case 'REMOVE_TODO':
            const newTodos = state.todos.slice()
            newTodos[action.index].done = true
            return {
                todos: newTodos
            }
        default: 
            return state;
    }
}

export default todoReducer;