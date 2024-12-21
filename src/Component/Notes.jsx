import Note from './Note'

function Notes({task, onDelete = () => {}}){
    //const {task, valor} = props
    return (
        <div>
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