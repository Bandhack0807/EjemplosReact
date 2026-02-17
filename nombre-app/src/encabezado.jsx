import "./encabezado.css";
import logo from "./assets/GeometryDashLogo.png";
import { FaFacebookF, FaWhatsapp, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import PropTypes from "prop-types";
import Clima from "./Clima";

function Encabezado({ cambiarVista }) {
  return (
    <header className="encabezado">
      <Logotipo />
      <Menu cambiarVista={cambiarVista} />
      <Redes />
    </header>
  );
}

function Logotipo() {
  return (
    <div className="logo">
      <img src={logo} alt="Geometry Dash Logo" />
    </div>
  );
}

function Menu({ cambiarVista }) {
  return (
    <nav className="menu">
      <ul>
        <li onClick={() => cambiarVista("Inicio")}>Inicio</li>
        <li onClick={() => cambiarVista("AcercaDe")}>Acerca de</li>
        <li onClick={() => cambiarVista("Productos")}>Productos</li>
        <li onClick={() => cambiarVista("Galeria")}>Galería</li>
        <li onClick={() => cambiarVista("Sucursales")}>Sucursales</li>
        <li onClick={() => cambiarVista("Contacto")}>Contacto</li>
      </ul>
    </nav>
  );
}

function Redes() {
  return (
    <div className="redes-clima">
      <div className="redes">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaWhatsapp /></a>
        <a href="#"><FaYoutube /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedinIn /></a>
      </div>

      {/* 👇 Clima debajo de redes */}
      <Clima />
    </div>
  );
}

Encabezado.propTypes = {
  cambiarVista: PropTypes.func.isRequired,
};

export default Encabezado;
