import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "220px",
  borderRadius: "10px",
};

function Mapa({ lat, lng }) {
  const apiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return <p style={{ color: "red" }}>API KEY no encontrada</p>;
  }

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });

  if (loadError) return <p>Error cargando Google Maps</p>;
  if (!isLoaded) return <p>Cargando mapa...</p>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat, lng }}
      zoom={15}
    >
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  );
}

export default Mapa;
