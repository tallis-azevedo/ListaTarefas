import { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = text => {
    const newTodo = { id: Date.now(), text, done: false }
    setTodos([newTodo, ...todos])
  }

  const toggleTodo = id => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    )
  }

  const deleteTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Lista de Tarefas
      </h1>
      <TodoInput onAdd={addTodo} />
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  )
}
