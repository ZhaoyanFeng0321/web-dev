import TodoItem from "./TodoItem.js";
import todos from "./todos.json";

// const TodoList = () => {
//     return(`
//         <ul>
//             ${TodoItem('Buy milk')}
//             ${TodoItem('Pickup the kids')}
//             ${TodoItem('Walk the dog')}
//         </ul>
//     `);
// }
const TodoList = () => {
    return (
        <ul>
            {
                todos.map(todo => {
                    return (<TodoItem todo={todo}/>);
                    // return(TodoItem(todo));
                })//.join('')
            }
        </ul>
    );
}
export default TodoList;