import './App.css';
import { todoAdded, todoToggled } from '../../features/todos/todosSlice'
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const [text, setText] = useState("")
  const renderList = () => {
    if (todos.length > 0) {
      return (
        todos.map(todo => {
          if (todo.completed) {
            return (
              <div key={todo.id}>
                {todo.text}
                - <button onClick={() => dispatch(todoToggled(todo.id))}>Undo </button>
              </div>
            );
          }
          return (
            <div key={todo.id}>
              {todo.text}
              - <button onClick={() => dispatch(todoToggled(todo.id))}>Do</button>
            </div>
          );
        })
      );
    } else {
      return (
        <div>There is nothing to do</div>
      );
    }

  }
  const addTodo = () => {
    dispatch(todoAdded({ text }));
    setText("");
  }
  return (
    <div className="App">
      <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      {renderList()}
    </div>
  );
}

export default App;
