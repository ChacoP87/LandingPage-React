import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'
import './normalize.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1 class="titulo">Randy Santos <span>Developer</span></h1>

        <nav class="navegacion-principal container container2">
          <a href="">Inicio</a>
          <a href="">Sobre mí</a>
          <a href="">Clientes</a>
          <a href="">Contactos</a>
        </nav>
      </header>
      <section class="hero">
        <div class="contenedor-hero">
          <h2 class="titulo">Diseño y desarrollo web</h2>
          <div class="ubicacion">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="84"
              height="84" viewBox="0 0 24 24" stroke-width="1" stroke="#ff9300" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <p>Mérida, Yucatán</p>
          </div>
          <a class="boton" href="">Contactar</a>
        </div>
      </section>

      <main class="sombra">
        <h2 class="servicios-heading">Mis servicios</h2>
        <div class="servicios">
          <section class="servicio">
            <h3>Servicios Web</h3>
            <div class="icons">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="40"
                height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
                <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              </svg>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </section>

          <section class="servicio">
            <h3>Aplicaciones Moviles</h3>
            <div class="icons">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-android"
                width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 10l0 6" />
                <path d="M20 10l0 6" />
                <path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" />
                <path d="M8 3l1 2" />
                <path d="M16 3l-1 2" />
                <path d="M9 18l0 3" />
                <path d="M15 18l0 3" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-apple" width="40"
                height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z" />
                <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
              </svg>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </section>

          <section class="servicio">
            <h3>E-Commerse</h3>
            <div class="icons">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-bag" width="40"
                height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
                <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
              </svg>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </section>
        </div>

        <section>
          <h2 class="contacto-heading">Contacto</h2>
          <form class="formulario">
            <fieldset>
              <legend>Llena tus datos para establecer contacto.</legend>
              <div class="contenedor-campos">
                <div class="campo">
                  <label> Nombre </label>
                  <input type="text" placeholder="Tu Nombre" />
                </div>
                <div class="campo">
                  <label> Telefono </label>
                  <input type="tel" placeholder="Tu Numero" />
                </div>
                <div class="campo">
                  <label> Correo </label>
                  <input type="email" placeholder="Tu Correo" />
                </div>
                <div class="campo">
                  <label> Mensaje </label>
                  <textarea></textarea>
                </div>
              </div>

              <div class="alinear-derecha flex">
                <input class="boton w-sm-100" type="submit" value="Enviar" />
              </div>
            </fieldset>
          </form>

        </section>
      </main>

      <footer class="footer">
        <p>Todos los derechos reservados ©. Randy Santos Developer</p>
      </footer>
    </>
  )
}

export default App
