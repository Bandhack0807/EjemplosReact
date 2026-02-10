import "./Contacto.css";

function Contacto() {
  return (
    <div className="contacto-contenedor">
      <form className="contacto-form">
        <label>Nombre:</label>
        <input type="text" placeholder="Tu nombre" />

        <label>Dirección:</label>
        <input type="text" placeholder="Tu dirección" />

        <label>Teléfono:</label>
        <input type="tel" placeholder="Tu teléfono" />

        <label>Email:</label>
        <input type="email" placeholder="ejemplo@correo.com" />

        <label>Mensaje:</label>
        <textarea placeholder="Escribe aquí..."></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
