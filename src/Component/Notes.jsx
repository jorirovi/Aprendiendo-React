import Note from './Note'

function Notes({task, onDelete = () => {}}){
    //const {task, valor} = props
    return (
        <div>
            <h1>Listado de Tareas</h1>
            <ol>
                {
                    task.map(({id, task, completed}) => (
                        <li key={id}>
                            <Note
                                onDelete = {onDelete.bind(null, id)}
                                task={task}
                                status={completed}
                            />
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}

export default Notes