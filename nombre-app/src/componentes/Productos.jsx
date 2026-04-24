import { useEffect, useState } from "react";
import Api from "../Services/Api";
import { useAuth } from "../AuthContext";
import "./Productos.css";

function Productos() {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [ , , , user ] = useAuth();

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const res = await Api.get("products?limit=6");
        setProductos(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, []);

  const agregarAlCarrito = (producto) => {

    if (!user) {
      alert("Debes iniciar sesión");
      return;
    }

    const carritos = JSON.parse(localStorage.getItem("carritos_registrados")) || [];

    let carrito = carritos.find(c => c.usuario === user.username);

    if (!carrito) {
      carrito = {
        id: Date.now(),
        usuario: user.username,
        fecha: new Date().toISOString(),
        productos: []
      };
      carritos.push(carrito);
    }

    const existente = carrito.productos.find(p => p.nombre === producto.title);

    if (existente) {
      existente.cantidad += 1;
    } else {
      carrito.productos.push({
        nombre: producto.title,
        cantidad: 1
      });
    }

    localStorage.setItem("carritos_registrados", JSON.stringify(carritos));

    alert("Producto agregado 🛒");
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="productos-container">
      <h2>Productos</h2>

      <div className="productos-grid">
        {productos.map(p => (
          <div key={p.id} className="producto-card">

            <img src={p.image} alt={p.title} />

            <h3>{p.title}</h3>

            <p>{p.description.substring(0, 80)}...</p>

            <span>${p.price}</span>

            {/* 👇 BOTÓN FUNCIONANDO */}
            {user?.role === "cliente" && (
              <button onClick={() => agregarAlCarrito(p)}>
                Agregar al carrito
              </button>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;