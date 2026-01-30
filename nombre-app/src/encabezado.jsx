import "./encabezado.css";

// IMÁGENES DE LAS CARDS
import GeometryDash1 from "./assets/GeometryDash1.png";
import CODMobile from "./assets/CODMobile.png";
import BloodStrikeEmma from "./assets/BloodStrikeEmma.png";

import {
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

function Encabezado() {
  return (
    <>
      <header className="encabezado">
        <Logotipo />
        <Menu />
        <Redes />
      </header>

      <section className="cards-container">

        {/* CARD 1 */}
        <div className="card">
          <img
            src={GeometryDash1}
            alt="Geometry Dash"
            className="card-img"
          />
          <h3>Puro Geometry Dash GOD :P</h3>
        </div>

        {/* CARD 2 */}
        <div className="card">
          <img
            src={CODMobile}
            alt="Call Of Duty Mobile"
            className="card-img"
          />
          <h3>Puro CallOfDuty Mobile ALV :P</h3>
        </div>

        {/* CARD 3 */}
        <div className="card">
          <img
            src={BloodStrikeEmma}
            alt="BloodStrike"
            className="card-img"
          />
          <h3>BloodStrike Emma ;P</h3>
        </div>

      </section>
    </>
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
