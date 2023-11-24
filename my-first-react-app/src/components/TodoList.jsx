import { v4 as uuid } from 'uuid';

const todos = [
    { task: "mow the yard", id: uuid() },
    { task: "work on odin projects", id: uuid() },
    { task: "feed the cat", id: uuid() },
];

function TodoList() {
    return (
        <>
            <h2>ToDo List:</h2>
            <ul>
                {todos.map((todo) => (
                <li key={todo.id}>{todo.task}</li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;