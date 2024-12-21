import React from 'react'
import './Note.css'

function Note({task, onDelete, status}){
    const taskDo = status
        ? 'completada'
        : 'no_completada'
    return(
        <div>
            <span className={taskDo}>
                {task}
            </span>
            <button onClick={onDelete}>x</button>
        </div>
    )
}

export default Note