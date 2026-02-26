import { useState } from "react";
import "./Contacto.css";
import MapaGeolocalizacion from "../MapaGeolocalizacion";
import api from "../Services/Api";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    direccion: "",
    telefono: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/users", formData);

      setFormData({
        nombre: "",
        apellidos: "",
        direccion: "",
        telefono: "",
        email: "",
      });

      alert("Usuario registrado correctamente ✅");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };

  return (
    <div className="contacto-contenedor">
      <div className="contacto-wrapper">
        
        {/* 📋 FORMULARIO */}
        <form className="contacto-form" onSubmit={handleSubmit}>
          <h2>Contáctanos</h2>

          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <label>Apellidos:</label>
          <input
            type="text"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            required
          />

          <label>Dirección:</label>
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
          />

          <label>Teléfono:</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <button type="submit">Enviar</button>
        </form>

        {/* 🗺️ MAPA */}
        <div className="mapa-contacto">
          <MapaGeolocalizacion />
        </div>
      </div>
    </div>
  );
}

export default Contacto;