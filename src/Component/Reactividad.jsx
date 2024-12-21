import { useState } from "react"

function Reactividad() {
    const [numero, setnumero] = useState(0)
    const [nombre, setNombre] = useState('Tu Nombre')
    const [valor, setValor] = useState('')
    const [nom, setNom] = useState('')
    const condition = true
    const contador = () => {
        setnumero(numero + 1)
        console.log(numero)
    }

    const handleInput = (e) => {
        setValor(e.target.value)
    }

    const onGuardar = () => {
        setNom(valor)
    }
    return (
        <div>
            <button onClick={contador}>Contar</button>
            <h2>{numero}</h2>
            <input type="text" placeholder={nombre} value={valor} onChange={handleInput}/>
            <button onClick={onGuardar}>Guardar</button>
            {(nom === 'Jorge Romero') ? (<h2>{nom}</h2>) : (<h2>No es Jorge Romero</h2>)}
        </div>
    )
}

export default Reactividad