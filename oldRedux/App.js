import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './actions'
import { useState } from 'react';
import TodoList from './TodoList';
function App(props) {
  const [text, setText] = useState('');
  const add=()=>{
    props.addTodo(text);
    setText("")
  }
  return (
    <div className="container">
      <div className='card'>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button className='btn btn-primary' onClick={() => { add() }}>Add Todo</button>
      </div>
      <TodoList/>
    </div>
  );
}
// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos
//   };
// }
export default connect(null, { addTodo })(App);
