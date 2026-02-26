import { useEffect, useState } from "react";
import "./Carrito.css";
import {
  obtenerCarritos,
  guardarCarrito,
  eliminarCarrito,
} from "../Services/registroCarritos";

function Carrito() {
  const [carritos, setCarritos] = useState([]);
  const [productos, setProductos] = useState([]);
  const [productoNombre, setProductoNombre] = useState("");
  const [cantidad, setCantidad] = useState("");

  useEffect(() => {
    setCarritos(obtenerCarritos());
  }, []);

  const agregarProducto = () => {
    if (!productoNombre || !cantidad) return;

    setProductos([
      ...productos,
      { nombre: productoNombre, cantidad },
    ]);

    setProductoNombre("");
    setCantidad("");
  };

  const crearCarrito = () => {
    if (productos.length === 0) return;

    const nuevoCarrito = {
      fecha: new Date().toISOString(),
      productos,
    };

    guardarCarrito(nuevoCarrito);
    setCarritos(obtenerCarritos());
    setProductos([]);
  };

  const borrarCarrito = (id) => {
    eliminarCarrito(id);
    setCarritos(obtenerCarritos());
  };

  return (
    <div className="carrito-container">
      <h2>Crear Carrito</h2>

      {/* FORMULARIO */}
      <div className="carrito-form">
        <input
          type="text"
          placeholder="Nombre del producto"
          value={productoNombre}
          onChange={(e) => setProductoNombre(e.target.value)}
        />

        <input
          type="number"
          placeholder="Cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />

        <button onClick={agregarProducto}>Agregar Producto</button>
      </div>

      {productos.length > 0 && (
        <div className="productos-preview">
          <h4>Productos en este carrito:</h4>
          <ul>
            {productos.map((p, index) => (
              <li key={index}>
                {p.nombre} — Cantidad {p.cantidad}
              </li>
            ))}
          </ul>

          <button className="btn-crear" onClick={crearCarrito}>
            Crear Carrito
          </button>
        </div>
      )}

      <hr />

      {/* LISTA DE CARRITOS */}
      <h2>Carritos creados</h2>

      <div className="carritos-grid">
        {carritos.map((c, index) => (
          <div key={c.id} className="carrito-card">
            <h3>Carrito #{index + 1}</h3>
            <p className="fecha">{c.fecha}</p>

            <ul>
              {c.productos.map((p, i) => (
                <li key={i}>
                  {p.nombre} — Cantidad {p.cantidad}
                </li>
              ))}
            </ul>

            <button
              className="btn-eliminar"
              onClick={() => borrarCarrito(c.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrito;
