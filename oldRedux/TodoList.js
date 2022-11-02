import React from 'react'
import { connect } from 'react-redux';
import { todoToggled } from './actions'


function TodoList(props) {
    const renderList = () => {
        if (props.todos.length > 0) {
            return (
                props.todos.map(todo => {
                    if (!todo.completed) {
                        return (
                            <div key={todo.id}>
                                {todo.text}-
                                <button className='btn btn-primary' onClick={() => { props.todoToggled({ id: todo.id }) }}>Do</button>
                            </div>
                        );
                    }
                    return (
                        <div key={todo.id}>
                            {todo.text}-<button className='btn btn-danger' onClick={() => { props.todoToggled({ id: todo.id }) }}>Undo</button>
                        </div>
                    );
                })
            )
        } else {
            return (
                <h1>There is nothing to do</h1>
            )
        }
    }


    return (
        <div>
            {renderList()}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
}
export default connect(mapStateToProps, { todoToggled })(TodoList);