import { useEffect, useState } from "react";
import "./Usuarios.css";
import {
  obtenerUsuarios,
  guardarUsuario,
  eliminarUsuario,
} from "../Services/registroUsuarios";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    direccion: "",
    telefono: "",
    correo: "",
  });

  // 🔄 Cargar usuarios al entrar
  useEffect(() => {
    setUsuarios(obtenerUsuarios());
  }, []);

  // ✍️ Manejo de inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 📩 Guardar / Editar
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editandoId) {
      const nuevos = usuarios.map((u) =>
        u.id === editandoId ? { ...formData, id: editandoId } : u
      );
      localStorage.setItem("usuarios_registrados", JSON.stringify(nuevos));
      setUsuarios(nuevos);
      setEditandoId(null);
    } else {
      guardarUsuario(formData);
      setUsuarios(obtenerUsuarios());
    }

    setFormData({
      nombre: "",
      apellidos: "",
      direccion: "",
      telefono: "",
      correo: "",
    });
  };

  // ✏️ Editar
  const editarUsuario = (usuario) => {
    setFormData(usuario);
    setEditandoId(usuario.id);
  };

  // 🗑️ Eliminar
  const borrarUsuario = (id) => {
    eliminarUsuario(id);
    setUsuarios(obtenerUsuarios());
  };

  return (
    <div className="usuarios-container">
      <h2>Usuarios Registrados</h2>

      {/* 📋 FORMULARIO */}
      <form className="usuarios-form" onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
        <input name="apellidos" placeholder="Apellidos" value={formData.apellidos} onChange={handleChange} required />
        <input name="direccion" placeholder="Dirección" value={formData.direccion} onChange={handleChange} />
        <input name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} />
        <input name="correo" type="email" placeholder="Correo" value={formData.correo} onChange={handleChange} required />

        <button type="submit">
          {editandoId ? "Actualizar" : "Registrar"}
        </button>
      </form>

      {/* 📊 TABLA */}
      <table className="usuarios-tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>{u.nombre}</td>
              <td>{u.apellidos}</td>
              <td>{u.direccion}</td>
              <td>{u.telefono}</td>
              <td>{u.correo}</td>
              <td>
                <button className="btn-editar" onClick={() => editarUsuario(u)}>Editar</button>
              </td>
              <td>
                <button className="btn-eliminar" onClick={() => borrarUsuario(u.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Usuarios;
