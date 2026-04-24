import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Login() {

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [ , login ] = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario === "admin" && password === "1234") {

      login({
        token: "admin-token",
        user: {
          username: "admin",
          nombre: "Administrador",
          role: "admin"
        }
      });

      navigate("/usuarios");
      return;
    }

    if (usuario === "cliente" && password === "1234") {

      login({
        token: "cliente-token",
        user: {
          username: "cliente",
          nombre: "Cliente",
          role: "cliente"
        }
      });

      navigate("/");
      return;
    }

    alert("Credenciales incorrectas");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Iniciar sesión
        </button>

      </form>
    </div>
  );
}

export default Login;