import './encabezado.css'
import miImagen from './assets/logo.png'
import { FaFacebookF, FaWhatsapp, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

function Encabezado() {
    return (
        <>
            <header className="encabezado">
                <Logotipo />
                <Menu />
                <Redes />
            </header>

            <section className="cards-container">
                <div className="card">
                    <img src="https://picsum.photos/300/180?random=1" alt="card" />
                    <h3>Ejemplo de card</h3>
                </div>

                <div className="card">
                    <img src="https://picsum.photos/300/180?random=2" alt="card" />
                    <h3>Ejemplo de card</h3>
                </div>

                <div className="card">
                    <img src="https://picsum.photos/300/180?random=3" alt="card" />
                    <h3>Ejemplo de card</h3>
                </div>
            </section>
        </>
    )
}

function Logotipo() {
    return (
        <div className="logo">
            <img src={miImagen} alt="Logotipo" />
        </div>
    )
}

function Menu() {
    return (
        <nav className="menu">
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contactos</li>
                <li>Sucursales</li>
            </ul>
        </nav>
    )
}

function Redes() {
    return (
        <div className="redes">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
        </div>
    )
}

export default Encabezado
