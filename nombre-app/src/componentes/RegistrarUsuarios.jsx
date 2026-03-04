import React, { useState, useEffect } from "react";
import api from "../Services/Api";
import "./RegistrarUsuarios.css";

function RegistrarUsuarios({
  usuarioEditando,
  limpiarSeleccion,
  onActualizacionExitosa,
}) {
  const [username, setUsername] = useState("");
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");

  // 🔄 Cargar datos si estamos editando
  useEffect(() => {
    if (usuarioEditando) {
      setUsername(usuarioEditando.username || "");
      setMail(usuarioEditando.email || "");
      setPassword("");
    } else {
      resetForm();
    }
  }, [usuarioEditando]);

  const resetForm = () => {
    setUsername("");
    setMail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoUsuario = {
      username,
      email,
      password,
    };

    try {
      if (usuarioEditando) {
        // ✏️ ACTUALIZAR
        const respuesta = await api.put(
          `/users/${usuarioEditando.id}`,
          nuevoUsuario
        );
        console.log("Usuario Actualizado:", respuesta.data);
        alert("¡Usuario actualizado con éxito!");
        if (limpiarSeleccion) limpiarSeleccion();
      } else {
        // ➕ REGISTRAR
        const respuesta = await api.post("/users", nuevoUsuario);
        console.log("Usuario Registrado:", respuesta.data);
        alert("¡Usuario guardado con éxito!");
      }

      resetForm();

      if (onActualizacionExitosa) {
        onActualizacionExitosa();
      }
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("¡Error al procesar la solicitud!");
    }
  };

  return (
    <div className="form-container">
      <h2>{usuarioEditando ? "Editar Usuario" : "Registrar Usuario"}</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Nombre de Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setMail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={!usuarioEditando}
        />

        <button type="submit">
          {usuarioEditando ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
}

export default RegistrarUsuarios;