const KEY = "usuarios_registrados";

export const obtenerUsuarios = () => {
  const datos = localStorage.getItem(KEY);
  return datos ? JSON.parse(datos) : [];
};

export const guardarUsuario = (usuario) => {
  const usuarios = obtenerUsuarios();

  const nuevoUsuario = {
    ...usuario,
    id: Date.now()
  };

  usuarios.push(nuevoUsuario);

  localStorage.setItem(KEY, JSON.stringify(usuarios));
};

export const eliminarUsuario = (id) => {
  const usuarios = obtenerUsuarios();

  const nuevos = usuarios.filter((u) => u.id !== id);

  localStorage.setItem(KEY, JSON.stringify(nuevos));
};
