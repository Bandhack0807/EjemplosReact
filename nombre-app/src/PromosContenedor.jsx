import Mapa from "./Mapa";
import "./PromosContenedor.css";

function PromosContenedor() {
  return (
    <div className="PromoContenedor">
      <h2>Hola bienvenido a nuestro sitio</h2>
      <p>Ofertas en todos los productos</p>

      <Mapa
        lat={20.276630146830644}
        lng={-97.95845980964982}
        nombre="ServiTec Sucursal Centro"
      />
    </div>
  );
}

export default PromosContenedor;
