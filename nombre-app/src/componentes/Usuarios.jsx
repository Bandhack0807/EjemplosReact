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

  // Cargar usuarios
  useEffect(() => {
    const datos = obtenerUsuarios();
    console.log("Usuarios cargados:", datos);
    setUsuarios(datos);
  }, []);

  // Manejo de inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Guardar / Editar
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Datos enviados desde el formulario:", formData);

    if (editandoId) {
      const nuevos = usuarios.map((u) =>
        u.id === editandoId ? { ...formData, id: editandoId } : u
      );

      localStorage.setItem("usuarios_registrados", JSON.stringify(nuevos));

      console.log("Usuario actualizado:", formData);

      setUsuarios(nuevos);
      setEditandoId(null);

    } else {
      guardarUsuario(formData);

      console.log("Usuario registrado correctamente:", formData);

      const nuevosUsuarios = obtenerUsuarios();
      console.log("Lista actualizada:", nuevosUsuarios);

      setUsuarios(nuevosUsuarios);
    }

    setFormData({
      nombre: "",
      apellidos: "",
      direccion: "",
      telefono: "",
      correo: "",
    });
  };

  // Editar
  const editarUsuario = (usuario) => {
    console.log("Editando usuario:", usuario);
    setFormData(usuario);
    setEditandoId(usuario.id);
  };

  // Eliminar
  const borrarUsuario = (id) => {
    console.log("Eliminando usuario con id:", id);

    eliminarUsuario(id);

    const nuevos = obtenerUsuarios();
    console.log("Lista después de eliminar:", nuevos);

    setUsuarios(nuevos);
  };

  return (
    <div className="usuarios-container">
      <h2>Usuarios Registrados</h2>

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
                <button className="btn-editar" onClick={() => editarUsuario(u)}>
                  Editar
                </button>
              </td>

              <td>
                <button className="btn-eliminar" onClick={() => borrarUsuario(u.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Usuarios;
