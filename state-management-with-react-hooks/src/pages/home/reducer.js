export const initState = {
    list: []
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "LOAD":
            return { ...state, list: action.todos }
        case "ADD_ELEMENT":
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case "DELETE_ELEMENT":
            let index = state.list.findIndex(todo => todo.id === action.id)
            return {
                ...state,
                list: state.list
                    .slice(0, index)
                    .concat(state.list.slice(index + 1))
            }
        case "EDIT_ELEMENT":
            return {
                ...state,
                list: state.list.map(todo =>
                    todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
                )
            }
        case 'TOGGLE_TODO':
            return {
                ...state,
                list: state.list.map(todo =>
                    todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
                )
            }
        default:
            return state;
    }
};