import React from 'react'
import { v4 as uuidv4} from 'uuid'
import Notes from './Notes.jsx'
import { useState } from 'react'

function Principal() {
    const notes = [
        {
            id: uuidv4(),
            task: 'Learn React',
            completed: false
        },
        {
            id: uuidv4(),
            task: 'Do laundry',
            completed: false
        }
    ]
    
    const [tasks, setTasks] = useState(notes)
    const [tarea, setTarea] = useState('')

    const addNote = () => {
        setTasks([...tasks, {id: uuidv4(), task: tarea, completed: false}])
        setTarea('')
    }
    const deleteNote = (id, e) => {
        //setTasks(tasks.filter(t => t.id !== id))
        e.stopPropagation()
        setTasks(tasks.map(task => 
            task.id === id
                ? {...task, completed: !task.completed}
                : task
        ))   
    }
    const handleChange = (e) => {
        setTarea(e.target.value)
    }
    return (
        <div>
            <h1>Listado de Tareas</h1>
            <div>
                <span>Nueva Terea: </span>
                <input type="text" value={tarea} onChange={handleChange}/>
                <button onClick={addNote}>+</button>
            </div>
            
            <Notes task={tasks} onDelete={deleteNote} />
            
        </div>
    )
    
}

export default Principal