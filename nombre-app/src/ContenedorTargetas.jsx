import './ContenedorTargetas.css';
import PropTypes from 'prop-types';

import GeometryDash1 from './assets/GeometryDash1.png';
import CODMobile from './assets/CODMobile.png';
import BloodStrikeEmma from './assets/BloodStrikeEmma.png';

function ContenedorTargetas({ vista }) {

  const vistas = {
    Inicio: <Inicio />,
    AcercaDe: <AcercaDe />,
    Productos: <Productos />,
    Galeria: <Galeria />,
    Sucursales: <Sucursales />,
    Contacto: <Contacto />
  };

  return (
    <div className="ContenedorDiv">
      {vistas[vista] || <Inicio />}
    </div>
  );
}

/* ===== VISTAS ===== */

function Inicio() {
  return (
    <>
      <TarjetaComponent
        imagen={GeometryDash1}
        titulo="Geometry Dash"
        texto="Juego de ritmo extremo donde la precisión lo es todo."
      />

      <TarjetaComponent
        imagen={CODMobile}
        titulo="Call of Duty Mobile"
        texto="Shooter competitivo con acción intensa y multijugador."
      />

      <TarjetaComponent
        imagen={BloodStrikeEmma}
        titulo="BloodStrike"
        texto="Batallas rápidas estilo battle royale en móvil."
      />
    </>
  );
}

function AcercaDe() { return <h2>Acerca de nosotros</h2>; }
function Productos() { return <h2>Productos</h2>; }
function Galeria() { return <h2>Galería</h2>; }
function Sucursales() { return <h2>Sucursales</h2>; }
function Contacto() { return <h2>Contacto</h2>; }

/* ===== TARJETA ===== */

function TarjetaComponent({ imagen, titulo, texto }) {
  return (
    <div className="TarjetaDiv">
      <img src={imagen} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{texto}</p>
      <a href="#">Ver más</a>
    </div>
  );
}

TarjetaComponent.propTypes = {
  imagen: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired
};

ContenedorTargetas.propTypes = {
  vista: PropTypes.string.isRequired
};

export default ContenedorTargetas;
