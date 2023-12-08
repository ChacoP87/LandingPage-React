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
      <main class="sombra">
        <h2 class="servicios-heading">Mis servicios</h2>
        <div class="servicios">
          <Servicio />
        </div>

        <Contact />
      </main>

      <footer class="footer">
        <p>Todos los derechos reservados ©. Randy Santos Developer</p>
      </footer>
    </>
  )
}

export default App
