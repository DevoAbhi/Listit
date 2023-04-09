import Todo from './Todo'

const TodoList = (props) => {
    

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {props.filteredTodo.map(todo => (
                    <Todo
                        key={todo.id}
                        text={todo.text}
                        todo = {todo}
                        todos = {props.todos}
                        setTodo = {props.setTodo}
                    >
                    </Todo>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;