import { useState } from "react";
import Encabezado from "./encabezado";
import ContenedorTargetas from "./ContenedorTargetas";
import PromosContenedor from "./PromosContenedor";
import PieComponente from "./PieComponente";
import Expresiones from "./expresiones";

function App() {
  const [vista, setVista] = useState("Inicio");

  return (
    <div>
      <Encabezado cambiarVista={setVista} />

      {/* CONTENEDOR CORRECTO */}
      <ContenedorTargetas vista={vista} />

      {/* PROMOS */}
      <PromosContenedor />

      {/* PIE */}
      <PieComponente />

      {/* EXPRESIONES */}
      <Expresiones
        name="Victor Manuel"
        mostrar={true}
        mostrarPromos={true}
      />
    </div>
  );
}

export default App;
