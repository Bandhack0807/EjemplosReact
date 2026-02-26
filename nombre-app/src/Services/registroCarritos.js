const STORAGE_KEY = "carritos_registrados";

const carritosIniciales = [
  {
    id: 1,
    fecha: "2020-03-02T00:00:00.000Z",
    productos: [
      { nombre: "Producto #1", cantidad: 4 },
      { nombre: "Producto #2", cantidad: 1 },
      { nombre: "Producto #3", cantidad: 6 },
    ],
  },
  {
    id: 2,
    fecha: "2020-01-02T00:00:00.000Z",
    productos: [
      { nombre: "Producto #2", cantidad: 4 },
      { nombre: "Producto #1", cantidad: 10 },
      { nombre: "Producto #5", cantidad: 2 },
    ],
  },
];

export const obtenerCarritos = () => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!data || data.length === 0) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(carritosIniciales));
    return carritosIniciales;
  }

  return data;
};

export const guardarCarrito = (carrito) => {
  const carritos = obtenerCarritos();
  carritos.push({ ...carrito, id: Date.now() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(carritos));
};

export const eliminarCarrito = (id) => {
  const carritos = obtenerCarritos().filter(c => c.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(carritos));
};
