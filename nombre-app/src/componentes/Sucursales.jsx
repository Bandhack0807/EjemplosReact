import Mapa from "./Mapa";
import "./Sucursales.css";

function Sucursales() {
  const sedes = [
    {
      id: 1,
      ciudad: "CDMX",
      direccion: "Av. Reforma 222, Juárez",
      tel: "+52 55 1234 5678",
      lat: 19.432608,
      lng: -99.133209,
    },
    {
      id: 2,
      ciudad: "Monterrey",
      direccion: "San Pedro Garza García, NL",
      tel: "+52 81 8765 4321",
      lat: 25.686614,
      lng: -100.316113,
    },
    {
      id: 3,
      ciudad: "Guadalajara",
      direccion: "Colonia Americana, Jal",
      tel: "+52 33 4455 6677",
      lat: 20.659698,
      lng: -103.349609,
    },
  ];

  return (
    <div className="sucursales">
      <h2>Nuestras Sedes</h2>

      <div className="lista-sucursales">
        {sedes.map((sede) => (
          <div className="sucursal" key={sede.id}>
            <h3>{sede.ciudad}</h3>
            <p>📍 {sede.direccion}</p>
            <p>📞 {sede.tel}</p>

            <Mapa lat={sede.lat} lng={sede.lng} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sucursales;
