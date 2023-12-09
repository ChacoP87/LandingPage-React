
import "./Hero.css"

function Hero() {
    return (
        <>
            <section className="hero">
                <div className="contenedor-hero">
                    <h2 className="titulo">Diseño y desarrollo web</h2>
                    <div className="ubicacion">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="84"
                            height="84" viewBox="0 0 24 24" strokeWidth="1" stroke="#ff9300" fill="none" strokeLinecap="round"
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                        </svg>
                        <p>Mérida, Yucatán</p>
                    </div>
                    <a className="boton" href="">Contactar</a>
                </div>
            </section>
        </>
    )
}

export default Hero;