import React, { useState } from 'react';
import '../../Style/custom.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { deleteTodo, addTodo } from '../../State/Reducers/TodoReducer';

interface Todo {
  text: string;
  id: string;
}

function TodoList() {
  // function to list todo items ;
  const todoList = useSelector((state: any) => state.todos.TodoList);
  const [input, setInput] = useState<string>('');
  const [inputvalue, setInputval] = useState<string>('');
  const dispatch = useDispatch();

  function addTodoItem(text: string) {
    // dispatch addtodo action to redux store ;
    dispatch(addTodo(input));
    setInputval('');
  }

  function deleteTodoITem(todoid: string) {
    // dispatch deletetodo action to redux store ;
    dispatch(deleteTodo(todoid));
  }

  return (
    <div className="wrapper">
      <div className="display__flex ">
        <div>
          <input
            onChange={(e) => {
              setInput(e.target.value);
              setInputval(e.target.value);
            }}
            value={inputvalue}
            type="text"
            placeholder="please enter todo text"
          />{' '}
        </div>
        <div>
          <Button buttonAction={addTodoItem} text="add todo" />
        </div>
      </div>

      {todoList.map((todo: Todo) => (
        <div className="todo__list" key={todo.id}>
          <div className="todo__list__text">
            <Link to={`/details/${todo.id}`}>
              {todo.text} &nbsp; &nbsp; &gt;
            </Link>
          </div>
          <div className="todo__list__button">
            <Button
              text="delete"
              buttonAction={() => deleteTodoITem(todo.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
