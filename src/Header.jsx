import { useState } from 'react'
import "./Header.css"

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1 className="titulo">Bitter Lemons <span>Developers</span></h1>

        <nav className="navegacion-principal container">
          <a href="">Inicio</a>
          <a href="">Sobre mí</a>
          <a href="">Clientes</a>
          <a href="">Contactos</a>
        </nav>
      </header>
    </>
  )
}

export default Header;
