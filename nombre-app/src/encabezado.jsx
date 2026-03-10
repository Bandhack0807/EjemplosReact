import "./encabezado.css";
import logo from "./assets/GeometryDashLogo.png";
import { FaFacebookF, FaWhatsapp, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Clima from "./Clima";

function Encabezado() {
  return (
    <header className="encabezado">
      <Logotipo />
      <Menu />
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

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/acerca">Acerca de</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/galeria">Galería</Link></li>
        <li><Link to="/sucursales">Sucursales</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/usuarios">Usuarios</Link></li>
        <li><Link to="/carrito">Carrito</Link></li>
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

      <Clima />
    </div>
  );
}

export default Encabezado;