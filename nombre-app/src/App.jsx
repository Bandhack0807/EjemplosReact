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

      <ContenedorTargetas vista={vista} />

      {vista === "Contacto" && <PromosContenedor />}

      <Expresiones name="Victor Manuel" mostrar={true} />
      <PieComponente />
    </div>
  );
}

export default App;
