const data = [
    {
        _id: "123",
        do: "Accelerate the world's transition to sustainable energy",
        done: false
    },
    {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
    },
];
const todosReducer = (state = data, action) => {
    switch (action.type) {
        case 'update-todo':
            const newTodos = state.map(todo => {
                const newTodo = todo._id === action.todo._id ? action.todo : todo;
                return newTodo;
            });
            return newTodos;
        case 'delete-todo':
            return state
                .filter(todo =>
                            todo !== action.todo); // use filter -- render the rest except removed one
        case 'create-todo':
            const newTodo = {
                ...action.todo,
                _id: (new Date()).getTime() + ""
            };
            return [
                ...state,
                newTodo
            ]
            // return [
            //     ...state,
            //     action.todo // new tdo add to the end of old todos
            //
            // ]
        default:
            return state; // old todos
    }
}

// const todosReducer = () => {
//     return data;
// }

export default todosReducer;