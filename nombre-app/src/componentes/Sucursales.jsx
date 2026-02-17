import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const contenedorMapa = {
  width: "100%",
  height: "200px",
  borderRadius: "10px",
};

function MapaSucursal({ lat, lng }) {
  return (
    <GoogleMap
      mapContainerStyle={contenedorMapa}
      center={{ lat, lng }}
      zoom={15}
    >
      {/* 🔴 PIN ROJO */}
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  );
}

export default function Sucursales() {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="lista-sucursales">

        <div className="sucursal">
          <h3>CDMX</h3>
          <MapaSucursal lat={19.432608} lng={-99.133209} />
        </div>

        <div className="sucursal">
          <h3>Monterrey</h3>
          <MapaSucursal lat={25.686614} lng={-100.316113} />
        </div>

        <div className="sucursal">
          <h3>Guadalajara</h3>
          <MapaSucursal lat={20.659698} lng={-103.349609} />
        </div>

      </div>
    </LoadScript>
  );
}
