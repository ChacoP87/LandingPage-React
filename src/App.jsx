import { useState } from 'react'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Servicio from './Servicio.jsx'
import Contact from './Contact.jsx'
import './App.css'
import './normalize.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <main className="sombra">
        <h2 className="servicios-heading">Mis servicios</h2>
        <div className="servicios">
          <Servicio />
        </div>

        <Contact />
      </main>

      <footer className="footer">
        <p>Todos los derechos reservados ©. BitterLeemos Developers</p>
      </footer>
    </>
  )
}

export default App
