import { useEffect, useState } from "react";
import Api from "../Services/Api";
import RegistrarProductos from "./RegistrarProductos";
import "./Productos.css";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <div className="productos-container">

      {/* 📝 FORMULARIO REGISTRAR PRODUCTO */}
      <RegistrarProductos />

      {/* 📦 LISTADO DE PRODUCTOS */}
      <h2 className="titulo">Nuestro Catálogo Tecnológico</h2>

      {loading ? (
        <p className="cargando">Cargando productos...</p>
      ) : (
        <div className="productos-grid">
          {productos.map((producto) => (
            <div key={producto.id} className="producto-card">
              <img src={producto.image} alt={producto.title} />
              <h3>{producto.title}</h3>
              <p className="descripcion">{producto.description}</p>
              <span className="precio">${producto.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Productos;