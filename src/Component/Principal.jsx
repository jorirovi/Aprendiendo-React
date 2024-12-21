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
    const [hecha, setHecha] = useState(false)

    const addNote = () => {
        setTasks([...tasks, {id: uuidv4(), task: 'Another Task', completed: hecha}])
        console.log(tasks)
    }
    const deleteNote = (id, e) => {
        //setTasks(tasks.filter(t => t.id !== id))
        e.stopPropagation()
        setHecha(!hecha)
        setTasks(tasks.map(task => 
            task.id === id
                ? {...task, completed: hecha}
                : task
        ))
        
    }
    return (
        <div>
            <Notes task={tasks} onDelete={deleteNote} />
            <button onClick={addNote}>Add Task</button>
        </div>
    )
    
}

export default Principal