import React, {useState} from 'react';
import './App.css';

function Todo({todo, index, completeTodo, deleteTodo}) {
    return (
        <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
            <input type="checkbox" onClick={() => completeTodo(index)}/> {todo.text}
            <button onClick={() => deleteTodo(index)}>x</button>
        </div>
    )
}

function TodoForm({addTodo}) {

    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="input" value={value} placeholder="Add new todos..."
                   onChange={e => setValue(e.target.value)}/>
        </form>
    )
}

function App() {
    const [todos, setTodos] = useState([
        {
            text: 'Learn about react',
            isCompleted: false
        },
        {
            text: 'Learn about react 2',
            isCompleted: false
        },
        {
            text: 'Learn about react 3',
            isCompleted: true
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };

    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
                ))}
                <TodoForm addTodo={addTodo}/>
            </div>
        </div>
    )
}

export default App;
