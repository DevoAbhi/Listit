import { useState , useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {


  const [inputText, setInputText ] = useState("");
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodo, setFilteredTodo] = useState([]);

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    filterHandler();
    setLocalStorage();
  }, [todo, status]);

  const filterHandler = () => {
    switch(status) {
      case "completed":
        setFilteredTodo(todo.filter(item => item.completed === true));
        break;
      case "uncompleted":
        setFilteredTodo(todo.filter(item => item.completed === false));
        break;
      default:
        setFilteredTodo(todo);
        break;
    }
  }

  const setLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }

  const getLocalStorage = () => {
    if(localStorage.getItem("todos") === null) {
      console.log("hello")
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else {
      let lstodo = JSON.parse(localStorage.getItem("todos"));
      setTodo(lstodo);
    }
  }

  return (
    <div className='App'>
      <header>
        Your todo list
      </header>
      <Form inputText = {inputText} setInputText = {setInputText} todo= {todo} setTodo = {setTodo} status= {status} setStatus = {setStatus}></Form>
      <TodoList todos = {todo} setTodo = {setTodo} filteredTodo= {filteredTodo}></TodoList>
    </div>
  );
}

export default App;
