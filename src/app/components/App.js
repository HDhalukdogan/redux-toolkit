import './App.css';
import { todoAdded, todoToggled } from '../../features/todos/todosSlice'
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import '../../style/App.css'
import ReducerComp from './ReducerComp';
import { ContextComp } from './ContextComp';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  
  const [text, setText] = useState("")
  const renderList = () => {
    if (todos.length > 0) {
      return (
        todos.map(todo => {
          return (
            <div className='row' key={todo.id}>
              <h5 className='col-md-6 text-center'>{todo.text}</h5>
              {todo.completed
                ? <button className='btn btn-danger col-md-6' onClick={() => dispatch(todoToggled(todo.id))}>Undo </button>
                : <button className='btn btn-primary col-md-6' onClick={() => dispatch(todoToggled(todo.id))}>Do</button>}
            </div>
          );

        })
      );
    } else {
      return (
        <div>
          <h2 className='text-center'>
            There is nothing to do
          </h2>
        </div>
      );
    }

  }
  const addTodo = () => {
    dispatch(todoAdded({ text }));
    //dispatch({type:'todos/todoAdded', payload:{text}})
    setText("");
  }
  return (
    <div>
      <h1 className='text-center'>Add To Do</h1>
      <div className="card">
        <input type='text' value={text} placeholder='Enter what you want to do...' onChange={(e) => setText(e.target.value)} />
        <button className='btn btn-primary' onClick={addTodo}>Add</button>
      </div>
      <div className='card mt-5'>
        {renderList()}
      </div>
      <div className='card mt-5'>
        <ReducerComp/>
      </div>
      <div className='card mt-5'>
        <ContextComp/>
      </div>
    </div>
  );
}

export default App;
