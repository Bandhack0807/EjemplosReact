import "./Contacto.css";

function Contacto() {
  return (
    <div className="ContactoContenedor">
      <h2>Contacto</h2>

      <ul className="ContactoLista">
        <li>
          <strong>Correo:</strong>{" "}
          <a href="mailto:vicoman0807@gmail.com">
            vicoman0807@gmail.com
          </a>
        </li>

        <li>
          <strong>WhatsApp:</strong>{" "}
          <a href="https://wa.me/527761027208" target="_blank" rel="noreferrer">
            776 102 7208
          </a>
        </li>

        <li>
          <strong>Facebook:</strong>{" "}
          <a
            href="https://www.facebook.com/victor.manuel.719290"
            target="_blank"
            rel="noreferrer"
          >
            facebook.com/victor.manuel
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contacto;
