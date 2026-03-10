import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <nav style={{display:"flex", gap:"20px", padding:"10px", background:"#eee"}}>

      <Link to="/">Inicio</Link>

      <Link to="/usuarios">Usuarios</Link>

      <Link to="/registrar">Registrar</Link>

      <Link to="/login">Login</Link>

      <button onClick={logout}>
        Cerrar sesión
      </button>

    </nav>
  );
}

export default Navbar;