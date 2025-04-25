import { useState } from 'react'
import Saludo from './components/saludo'; // Importa el componente
// Importa tu nuevo logo usando una variable
import senaLogo from './assets/Sena_Colombia_logo.svg' // <-- ¡Bien!
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* Aquí estaba el error: faltaba cerrar el <a> */}
        <a href='https://www.sena.edu.co/' target="_blank" rel="noopener noreferrer"> {/* Puse la URL oficial del SENA, cámbiala si necesitas otra */}
          {/* Usa la variable importada 'senaLogo' en el src */}
          <img src={senaLogo} className="logo" alt="Logotipo del Sena" /> {/* <-- Corregido aquí */}
        </a> {/* <-- ¡Etiqueta <a> de cierre agregada aquí! */}
      </div> {/* <-- Este </div> ahora cierra el div correctamente */}

      <h1>Mi Primera App</h1>
      <div className="card">

        <h2>Contador: {count}</h2> {/* Agregué la visualización del contador aquí como hicimos antes */}

        {/* Botones de incrementar y decrementar */}
        <button onClick={() => setCount(prevCount => prevCount + 1)}>
          Incrementar
        </button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>
          Decrementar
        </button>

        <div>
          {/* Usa el componente como una etiqueta HTML */}
          <Saludo nombre="Obed Isai" />
        </div>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App