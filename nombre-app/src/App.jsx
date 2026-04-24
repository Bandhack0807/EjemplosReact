import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./componentes/Navbar";
import Encabezado from "./encabezado";

import ProtectedRoute from "./componentes/ProtectedRoute";
import AdminRoute from "./componentes/AdminRoute";

import Login from "./componentes/Login";
import Usuarios from "./componentes/Usuarios";
import RegistrarUsuarios from "./componentes/RegistrarUsuarios";

import AcercaDe from "./componentes/AcercaDe";
import Productos from "./componentes/Productos";
import Galeria from "./componentes/Galeria";
import Sucursales from "./componentes/Sucursales";
import Contacto from "./componentes/Contacto";
import Carrito from "./componentes/Carrito";
import Categorias from "./componentes/Categorias";

import ContenedorTargetas from "./ContenedorTargetas";
import PromosContenedor from "./PromosContenedor";
import PieComponente from "./PieComponente";
import Expresiones from "./expresiones";

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

        <Route path="/sucursales" element={<ProtectedRoute><Sucursales /></ProtectedRoute>} />
        <Route path="/contacto" element={<ProtectedRoute><Contacto /></ProtectedRoute>} />
        <Route path="/carrito" element={<ProtectedRoute><Carrito /></ProtectedRoute>} />
        <Route path="/categorias" element={<ProtectedRoute><Categorias /></ProtectedRoute>} />

        <Route path="/usuarios" element={<AdminRoute><Usuarios /></AdminRoute>} />
        <Route path="/registrar" element={<AdminRoute><RegistrarUsuarios /></AdminRoute>} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;