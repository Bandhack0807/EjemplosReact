import './encabezado.css'
import miImagen from './assets/GeometryDashlogo.png'
import { FaFacebookF, FaWhatsapp, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

function Encabezado() {
    return (
        <>
            <header className="encabezado">
                <Logotipo />
                <Menu />
                <Redes />
            </header>
            <section className="contenido-texto">
                <h2>Expresiones</h2>

                <p>
                    Tu Nombre Es: Victor Manuel Y Tus Apellidos Son: Hdez Hdez
                </p>

                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>MichBand</td>
                            <td>Web Developer</td>
                        </tr>
                        <tr>
                            <td>Samuel</td>
                            <td>Web Designer</td>
                        </tr>
                        <tr>
                            <td>Osmar</td>
                            <td>Team Leader</td>
                        </tr>
                    </tbody>
                </table>

                <h1>5C DSM</h1>
                <h3>D.S.M VICTOR MANUEL HDEZ HDEZ</h3>
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
