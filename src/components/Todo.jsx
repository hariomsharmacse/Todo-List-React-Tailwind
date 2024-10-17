import { LuListTodo } from "react-icons/lu";
import Todoitem from "./Todoitem";
import { useEffect, useRef, useState } from "react";

const Todo = () => {

  const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [])

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if(inputText === ""){
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,

    }

    setTodoList((prev)=> [...prev, newTodo]);
    inputRef.current.value = "";
  }

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
        return prevTodos.filter((todo) => todo.id !== id)
    })
  }


  const toggle = (id) => {
    setTodoList((prevTodo) => {
        return prevTodo.map((todo) => {
          if(todo.id === id){
            return {...todo, isComplete: !todo.isComplete}
          }
          return todo;
        })
    })
  }

  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todoList))
  },[todoList])


  return (
    <div className="backdrop-blur-md shadow-inner bg-black opacity-90 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      
    <div className="flex flex-col justify-center">
      <div className="text-green-600 text-4xl tracking-wide flex items-center font-semibold gap-2">
    <LuListTodo className="mt-1"/>
      <h1>Todo List</h1>
      </div>
      <div className="flex items-center my-7 bg-gray-200 rounded-[18px]">
      <input ref={inputRef} type="text" className="bg-transparent border-0 outline-none w-[80%] h-14 pl-6 pr-2 placeholder:text-slate-600" placeholder="Add your task" />
      <button onClick={add} className="border-none rounded-[18px] bg-green-600 w-[100px] h-14 text-white text-lg font-medium cursor-pointer]">Add Todo</button>
      </div>
    </div>

    {/* todo list */}
    <div>
    {todoList.map((item, index) => {
      return <Todoitem key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
    })}

    </div>

    </div>
  )
}

export default Todo