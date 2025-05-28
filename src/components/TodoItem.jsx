import { AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai'

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      className={`flex items-center justify-between p-2 mb-2 border rounded ${
        todo.done ? 'bg-green-100' : ''
      }`}
    >
      <span
        className={`flex-grow cursor-pointer ${
          todo.done ? 'line-through text-gray-500' : ''
        }`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <div className="flex space-x-2">
        <button onClick={() => onToggle(todo.id)}>
          <AiOutlineCheck size={18} />
        </button>
        <button onClick={() => onDelete(todo.id)}>
          <AiOutlineDelete size={18} />
        </button>
      </div>
    </li>
  )
}
