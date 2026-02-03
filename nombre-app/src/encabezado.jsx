import "./encabezado.css";
import GeometryDash1 from "./assets/GeometryDash1.png";
import CODMobile from "./assets/CODMobile.png";
import BloodStrikeEmma from "./assets/BloodStrikeEmma.png";
import {FaFacebookF,FaWhatsapp,FaYoutube,FaInstagram,FaLinkedinIn} from "react-icons/fa";

function Encabezado() {
  return (
    <>
      <header className="encabezado">
        <Logotipo />
        <Menu />
        <Redes />
      </header>

      <section className="cards-container">

        <Card
          imagen={GeometryDash1}
          titulo="Geometry Dash Deidad :P"
          descripcion="Juego de ritmo extremo donde la precisión lo es todo."
        />

        <Card
          imagen={CODMobile}
          titulo="Call Of Duty Mobile :P"
          descripcion="Shooter competitivo con acción intensa y multijugador."
        />

        <Card
          imagen={BloodStrikeEmma}
          titulo="BloodStrike Emma ;P"
          descripcion="Batallas rápidas estilo battle royale en móvil."
        />

      </section>
    </>
  );
}

function Card({ imagen, titulo, descripcion }) {
  return (
    <div className="card">
      <img src={imagen} alt={titulo} className="card-img" />
      <h3>{titulo}</h3>
      <p className="card-desc">{descripcion}</p>
    </div>
  );
}

function Logotipo() {
  return (
    <div className="logo">
      <h2>Mi Proyecto</h2>
    </div>
  );
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
  );
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
  );
}

export default Encabezado;
