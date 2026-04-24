import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Navbar() {

  const navigate = useNavigate();
  const [isLoggedIn, , logout, user] = useAuth();

  const cerrarSesion = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#eee" }}>

      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/galeria">Galería</Link>

      {user && (
        <>
          <Link to="/carrito">Carrito</Link>
          <Link to="/categorias">Categorías</Link>
        </>
      )}

      {user?.role === "admin" && (
        <Link to="/usuarios">Usuarios</Link>
      )}

      {!user && <Link to="/login">Login</Link>}

      {user && (
        <button onClick={cerrarSesion}>
          Cerrar sesión
        </button>
      )}

    </nav>
  );
}

export default Navbar;