'use client'
import { Edit2Icon, Trash2Icon } from 'lucide-react'
import React, { useRef, useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([])
    const inputRef = useRef(null)
    const handleAddTodo =()=>{
        setTodos([...todos, inputRef.current.value])
        inputRef.current.value = ''

    }

    const handleDelete=(indexToDelete)=>{
        const updatedTodos = [...todos]; // Copy the todos array
        updatedTodos.splice(indexToDelete, 1); // Remove the item at the index
        setTodos(updatedTodos)
    }
  return (
    <div>
        <input type="text" placeholder='Enter to do' ref={inputRef}/>
        <button onClick={handleAddTodo} className="bg-blue-500 text-white px-4 py-2 rounded"> Add Todo </button>
        <button onClick={() => setTodos([])} className="bg-red-500 text-white px-4 py-2 rounded"> Clear </button>
        {todos.map((item, index) =>(
            <div>
            <p className='w-full p-3 m-3 bg-red-300 rounded'>{item} </p>
                    <div className="flex gap-2">
                            <Edit2Icon className="cursor-pointer hover:text-blue-600" />
                            <Trash2Icon onClick={()=>handleDelete(index)} className="cursor-pointer hover:text-red-600" />
                    </div>
                    </div>))
        }

    </div>
  )
}

export default Todo