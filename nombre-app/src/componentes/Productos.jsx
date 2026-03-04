import { useEffect, useState } from "react";
import Api from "../Services/Api";
import "./Productos.css";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await Api.get("products?limit=6");
        setProductos(response.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, []);

  // 🗑️ ELIMINAR PRODUCTO
  const eliminarProducto = async (id) => {
    const confirmar = window.confirm("¿Seguro que deseas eliminar este producto?");
    if (!confirmar) return;

    try {
      await Api.delete(`products/${id}`);

      // 👉 quitarlo del estado
      setProductos(productos.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };

  if (loading) return <p className="cargando">Cargando productos...</p>;

  return (
    <div className="productos-container">
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.image} alt={producto.title} />
            <h3>{producto.title}</h3>
            <p className="descripcion">{producto.description}</p>
            <span className="precio">${producto.price}</span>

            {/* 🗑️ BOTÓN ELIMINAR */}
            <button
              className="btn-eliminar"
              onClick={() => eliminarProducto(producto.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
