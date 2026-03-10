import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./componentes/Navbar";
import ProtectedRoute from "./componentes/ProtectedRoute";
import Login from "./componentes/Login";
import Usuarios from "./componentes/Usuarios";
import RegistrarUsuarios from "./componentes/RegistrarUsuarios";

import Encabezado from "./encabezado";
import ContenedorTargetas from "./ContenedorTargetas";
import PromosContenedor from "./PromosContenedor";
import PieComponente from "./PieComponente";
import Expresiones from "./expresiones";

import AcercaDe from "./componentes/AcercaDe";
import Productos from "./componentes/Productos";
import Galeria from "./componentes/Galeria";
import Sucursales from "./componentes/Sucursales";
import Contacto from "./componentes/Contacto";
import Carrito from "./componentes/Carrito";
import Categorias from "./componentes/Categorias";

function Inicio() {
  return (
    <>
      <ContenedorTargetas vista="Inicio" />
      <PromosContenedor />
      <Expresiones name="Victor Manuel" mostrar={true} />
      <PieComponente />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Encabezado />

      <Navbar />

      <Routes>

        <Route path="/" element={<Inicio />} />

        <Route path="/login" element={<Login />} />

        <Route path="/acerca" element={<AcercaDe />} />

        <Route path="/productos" element={<Productos />} />

        <Route path="/galeria" element={<Galeria />} />

        <Route path="/sucursales" element={<Sucursales />} />

        <Route path="/contacto" element={<Contacto />} />

        <Route path="/carrito" element={<Carrito />} />

        <Route path="/categorias" element={<Categorias />} />

        <Route
          path="/usuarios"
          element={
            <ProtectedRoute>
              <Usuarios />
            </ProtectedRoute>
          }
        />

        <Route
          path="/registrar"
          element={
            <ProtectedRoute>
              <RegistrarUsuarios />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;