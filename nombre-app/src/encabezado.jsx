import "./encabezado.css";
import logo from "./assets/GeometryDashLogo.png";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Clima from "./Clima";

function Encabezado() {

  const [ , , , user ] = useAuth();

  return (
    <header className="encabezado">

      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <nav className="menu">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/acerca">Acerca</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/galeria">Galería</Link></li>
          <li><Link to="/sucursales">Sucursales</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>

          {user && <li><Link to="/categorias">Categorías</Link></li>}
          {user?.role === "admin" && <li><Link to="/usuarios">Usuarios</Link></li>}
          {user && <li><Link to="/carrito">Carrito</Link></li>}
        </ul>
      </nav>

      <Clima />

    </header>
  );
}

export default Encabezado;