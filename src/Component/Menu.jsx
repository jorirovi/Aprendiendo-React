
function Menu(props){
    const {notas} = props
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nota</th>
                    </tr>
                </thead>
                <tbody>
                {
                    notas.map(({ _id, nota }) => (
                        <tr key={_id}>
                            <td>{_id}</td>
                            <td>{nota}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default Menu