import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!text.trim()) return
    onAdd(text.trim())
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Nova tarefa..."
        className="flex-grow p-2 border rounded-l focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 p-2 rounded-r hover:bg-blue-600 transition"
      >
        <AiOutlinePlus size={20} color="#fff" />
      </button>
    </form>
  )
}
