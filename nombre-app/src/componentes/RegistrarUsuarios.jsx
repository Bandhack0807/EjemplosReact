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

  useEffect(() => {
    if (usuarioEditando) {
      setUsername(usuarioEditando.username);
      setMail(usuarioEditando.email);
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

    console.log("Enviando datos:", nuevoUsuario);

    try {
      if (usuarioEditando) {
        //ACTUALIZAR USUARIO
        const respuesta = await api.put(
          `/users/${usuarioEditando.id}`,
          nuevoUsuario
        );

        console.log("Usuario actualizado:", respuesta.data);
        alert("¡Usuario actualizado con éxito!");

        if (limpiarSeleccion) limpiarSeleccion();
      } else {
        //REGISTRAR USUARIO
        const respuesta = await api.post("/users", nuevoUsuario);

        console.log("Usuario registrado correctamente:");
        console.log(respuesta.data);

        alert("¡Usuario guardado con éxito!");
      }

      resetForm();

      if (onActualizacionExitosa) {
        onActualizacionExitosa();
      }
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      alert("¡Error al procesar la solicitud!");
    }
  };

  return (
    <div className="form-container">
      <h2>
        {usuarioEditando ? "Editar Usuario" : "Registrar Usuario"}
      </h2>

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
          required
        />

        <button type="submit">
          {usuarioEditando ? "Actualizar Usuario" : "Guardar Usuario"}
        </button>

        {usuarioEditando && (
          <button type="button" onClick={limpiarSeleccion}>
            Cancelar
          </button>
        )}
      </form>
    </div>
  );
}

export default RegistrarUsuarios;
