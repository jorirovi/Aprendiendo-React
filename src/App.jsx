import './App.css'
import Menu from './Component/Menu.jsx'
import Notes from './Component/Notes'
import Reactividad from './Component/Reactividad'
import Principal from './Component/Principal'
const notas = [
  {
      _id: 1,
      nota: "Aprender React"
  },
  {
      _id: 2,
      nota: "Documentar imagenes de MCD"
  },
  {
      _id: 3,
      nota: 'Realizar Sandwich compartir Mary'
  }
]

function App() {
  return (
    <>
      <div>
        <section>
          <Principal />
        </section>
      </div>
    </>
  )
}

export default App
