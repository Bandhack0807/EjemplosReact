import GeometryDash1 from "../assets/GeometryDash1.png";
import CODMobile from "../assets/CODMobile.png";
import BloodStrikeEmma from "../assets/BloodStrikeEmma.png";

function Productos() {
    return (
        <div className="acerca-contenedor">
            <h2>Productos</h2>
            <p>
                En esta sección se mostrarán los productos desarrollados como
                proyectos académicos, prácticas y demostraciones en React.
            </p>
                <img src={GeometryDash1} />
                <img src={CODMobile} />
                <img src={BloodStrikeEmma} />
        </div>
    );
}

export default Productos;