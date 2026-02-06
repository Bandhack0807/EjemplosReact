import './ContenedorTargetas.css';
import PropTypes from 'prop-types';
import GeometryDash1 from './assets/GeometryDash1.png';
import CODMobile from './assets/CODMobile.png';
import BloodStrikeEmma from './assets/BloodStrikeEmma.png';
import AcercaDe from "./componentes/AcercaDe";
import Productos from "./componentes/Productos";
import Galeria from "./componentes/Galeria";
import Sucursales from "./componentes/Sucursales";
import Contacto from "./componentes/Contacto";

function ContenedorTargetas({ vista }) {

  const vistas = {
    Inicio: <Inicio />,
    AcercaDe: <AcercaDe />,   // ❌ ESTE COMPONENTE NO EXISTE
    Productos: <Productos />,
    Galeria: <Galeria />,
    Sucursales: <Sucursales />,
    Contacto: <Contacto />
};

  return (
<div className="ContenedorDiv">
  <h1>Vista actual: {vista}</h1>
  {vistas[vista] || <Inicio />}
</div>

  );
}

/* ===== VISTA INICIO ===== */

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
