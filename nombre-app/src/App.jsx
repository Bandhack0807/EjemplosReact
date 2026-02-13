import { useState } from "react";
import Encabezado from "./encabezado";
import ContenedorTargetas from "./ContenedorTargetas";
import PromosContenedor from "./PromosContenedor";
import PieComponente from "./PieComponente";
import Expresiones from "./expresiones";

function App() {
  console.log("APP SE ESTÁ RENDERIZANDO");

  const [vista, setVista] = useState("Inicio");

  return (
    <div>
      <h1>APP CARGÓ</h1>
      <Encabezado cambiarVista={setVista} />
      <ContenedorTargetas vista={vista} />
      {vista === "Contacto" && <PromosContenedor />}
      <Expresiones name="Victor Manuel" mostrar={true} />
      <PieComponente />
    </div>
  );
}


export default App;
