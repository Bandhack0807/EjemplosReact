const STORAGE_KEY = "usuarios_registrados";

export const obtenerUsuarios = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const guardarUsuario = (usuario) => {
  const usuarios = obtenerUsuarios();
  usuarios.push({ ...usuario, id: Date.now() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
};

export const eliminarUsuario = (id) => {
  const usuarios = obtenerUsuarios().filter(u => u.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
};
