import "./Contacto.css";
import MapaGeolocalizacion from "../MapaGeolocalizacion";

function Contacto() {
  return (
    <div className="contacto-contenedor">
      <div className="contacto-wrapper">
        <form className="contacto-form">
          <h2>Contáctanos</h2>

          <label>Nombre:</label>
          <input type="text" placeholder="Tu nombre" />

          <label>Dirección:</label>
          <input type="text" placeholder="Tu dirección" />

          <label>Teléfono:</label>
          <input type="tel" placeholder="Tu teléfono" />

          <label>Email:</label>
          <input type="email" placeholder="ejemplo@correo.com" />

          <label>Mensaje:</label>
          <textarea placeholder="Escribe aquí..." />

          <button type="submit">Enviar</button>
        </form>

        <div className="mapa-contacto">
          <MapaGeolocalizacion />
        </div>
      </div>
    </div>
  );
}

export default Contacto;
