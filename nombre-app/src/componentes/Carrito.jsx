import { useEffect, useState } from "react";
import "./Carrito.css";
import {obtenerCarritos, guardarCarrito, eliminarCarrito,} from "../Services/registroCarritos";

function Carrito() {
  const [carritos, setCarritos] = useState([]);
  const [productos, setProductos] = useState([]);
  const [productoNombre, setProductoNombre] = useState("");
  const [cantidad, setCantidad] = useState("");

  //Cargar carritos al iniciar
  useEffect(() => {
    setCarritos(obtenerCarritos());
  }, []);

  //Agregar producto al carrito temporal
  const agregarProducto = () => {
    if (!productoNombre || !cantidad) return;

    const nuevoProducto = {
      nombre: productoNombre,
      cantidad,
    };

    setProductos([...productos, nuevoProducto]);

    //MENSAJE EN CONSOLA
    console.log("Producto agregado al carrito:", nuevoProducto);

    setProductoNombre("");
    setCantidad("");
  };

  //Crear carrito
  const crearCarrito = () => {
    if (productos.length === 0) return;

    const nuevoCarrito = {
      id: Date.now(), // ID único
      fecha: new Date().toISOString(),
      productos,
    };

    guardarCarrito(nuevoCarrito);
    setCarritos(obtenerCarritos());
    setProductos([]);

    //MENSAJE EN CONSOLA
    console.log("Carrito creado correctamente:", nuevoCarrito);
  };

  //Eliminar carrito
  const borrarCarrito = (id) => {
    eliminarCarrito(id);
    setCarritos(obtenerCarritos());

    //MENSAJE EN CONSOLA
    console.log("Carrito eliminado con ID:", id);
  };

  return (
    <div className="carrito-container">
      <h2>Crear Carrito</h2>

      {/*FORMULARIO */}
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

      {/*PREVIEW DEL CARRITO */}
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

      {/*LISTA DE CARRITOS */}
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
