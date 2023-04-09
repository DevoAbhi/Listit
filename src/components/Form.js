const Form = (props) => {
    const inputTextHandler = (event) => {
        props.setInputText(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        props.setTodo([
            ...props.todo,
            {text: props.inputText, completed: false, id: Math.random() * 1000}
        ])
        props.setInputText("");
    }
    const statusHandler = (event) => {
        props.setStatus(event.target.value);
    }
    return (
        <form>
            <input value={props.inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;