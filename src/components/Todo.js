const Todo = (props) => {

    const deleteHandler = () => {
        props.setTodo(props.todos.filter(t => t.id !== props.todo.id))
    }

    const completeHandler = () => {
        props.setTodo(props.todos.map(item => {
            if(item.id === props.todo.id) {
                return {...item, completed: !item.completed}
            }

            return item;
        }))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${props.todo.completed ? "completed" : ""}`}>{props.text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>

        </div>
    )
}

export default Todo;