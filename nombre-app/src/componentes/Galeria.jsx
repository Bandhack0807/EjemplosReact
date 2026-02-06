import GeometryDash1 from "../assets/GeometryDash1.png";
import CODMobile from "../assets/CODMobile.png";
import BloodStrikeEmma from "../assets/BloodStrikeEmma.png";

function Galeria() {
    return (
        <div className="acerca-contenedor">
            <h2>Galería</h2>
            <p>
                Aquí se presentan imágenes y recursos visuales de los proyectos
                realizados durante la carrera de Desarrollo de Software.
            </p>
                <img src={BloodStrikeEmma} />
                <img src={GeometryDash1} />
                <img src={CODMobile} />
        </div>
    );
}

export default Galeria;
