import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useObserver } from 'mobx-react';
import { useTodosStore } from './components/TodosContext';

import Todo from './components/todo';
import AddTodo from './components/AddTodo';

function App() {
    const todosStore = useTodosStore();

    console.log(todosStore.todos, 'are')

    return useObserver(() => (
        <>
            {todosStore.todos.map(todo => <Todo key={todo.id} text={todo.body} id={todo.id} />)}
            <AddTodo />
        </>
    ));
}

export default App;
