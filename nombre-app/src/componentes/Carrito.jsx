import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import "./Carrito.css";

function Carrito() {

  const [ , , , user ] = useAuth();
  const [carritos, setCarritos] = useState([]);

  useEffect(() => {
    cargarCarritos();
  }, [user]);

  const cargarCarritos = () => {
    const data = JSON.parse(localStorage.getItem("carritos_registrados")) || [];

    if (user?.role === "admin") {
      setCarritos(data);
    } else {
      setCarritos(data.filter(c => c.usuario === user?.username));
    }
  };

  // ✏️ ACTUALIZAR CANTIDAD (cliente)
  const actualizarCantidad = (carritoId, indexProducto) => {

    const data = JSON.parse(localStorage.getItem("carritos_registrados")) || [];

    const nuevos = data.map(c => {

      if (c.id === carritoId && c.usuario === user.username) {

        const nuevaCantidad = prompt("Nueva cantidad:");

        if (!nuevaCantidad || nuevaCantidad <= 0) return c;

        c.productos[indexProducto].cantidad = Number(nuevaCantidad);
      }

      return c;
    });

    localStorage.setItem("carritos_registrados", JSON.stringify(nuevos));
    cargarCarritos();
  };

  // 🗑️ ELIMINAR PRODUCTO (cliente)
  const eliminarProducto = (carritoId, indexProducto) => {

    const data = JSON.parse(localStorage.getItem("carritos_registrados")) || [];

    const nuevos = data.map(c => {

      if (c.id === carritoId && c.usuario === user.username) {
        c.productos.splice(indexProducto, 1);
      }

      return c;
    });

    localStorage.setItem("carritos_registrados", JSON.stringify(nuevos));
    cargarCarritos();
  };

  return (
    <div className="carrito-container">
      <h2>🛒 Carritos</h2>

      {carritos.length === 0 && <p>No hay carritos</p>}

      <div className="carritos-grid">

        {carritos.map((c, i) => (
          <div key={c.id} className="carrito-card">

            <h3>Carrito #{i + 1}</h3>

            <p className="fecha">
              {new Date(c.fecha).toLocaleString()}
            </p>

            <ul>
              {c.productos.map((p, index) => (
                <li key={index} className="producto-item">

                  <span>
                    {p.nombre} - {p.cantidad}
                  </span>

                  {/* 👤 CLIENTE */}
                  {user?.role === "cliente" && (
                    <div className="acciones">

                      <button
                        className="btn-actualizar"
                        onClick={() => actualizarCantidad(c.id, index)}
                      >
                        ✏️
                      </button>

                      <button
                        className="btn-eliminar"
                        onClick={() => eliminarProducto(c.id, index)}
                      >
                        🗑️
                      </button>

                    </div>
                  )}

                </li>
              ))}
            </ul>

            {/* 👑 ADMIN VE QUIÉN ES */}
            {user?.role === "admin" && (
              <p className="usuario">
                Usuario: {c.usuario}
              </p>
            )}

          </div>
        ))}

      </div>
    </div>
  );
}

export default Carrito;