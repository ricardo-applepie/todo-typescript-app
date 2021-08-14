import React, { useEffect,useState} from 'react';
import { useSelector} from 'react-redux';
import { useParams, useHistory} from 'react-router-dom';

interface Todo {
    text: string;
    id: string;
}
function TodoDetail() {
    let history = useHistory();

    const { id } = useParams<{ id: string }>();
    const todoList = useSelector((state: any) => state.todos.TodoList);
    const [todos,setTodo]= useState<any>({})
    // find todo item to delete 
    function findTodo(){
        console.log(todoList)
        const todo = todoList.find((todo: Todo) => todo.id == id);
        console.log(todo)

    setTodo(todo)
    
   }
    function returnToHomePage(){
        history.push("/");

    }
   // useEffect hook called once component renders ;
    useEffect(() => {
      findTodo()
    } );
    
    return (
        <div className='todo__details'>
            <p>Todo id :{id}</p>      
            <p> text : {todos?.text}</p>
            <button onClick={returnToHomePage}>back </button>
        </div>
    )
}

export default TodoDetail;
