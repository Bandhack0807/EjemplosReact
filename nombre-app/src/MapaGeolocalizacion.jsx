import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function MapaGeolocalizacion() {
  const [ubicacion, setUbicacion] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Tu navegador no soporta geolocalización");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUbicacion({
          lat: position.coords.latitude,
          lng: position.coords.longitude, // 🔴 ERA lng, no ing
        });
      },
      (error) => {
        console.error(error);
        alert("Permiso de ubicación denegado");
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      {ubicacion && (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "350px", borderRadius: "10px" }}
          center={ubicacion}
          zoom={15}
        >
          {/* 🔴 PIN ROJO */}
          <Marker position={ubicacion} />
        </GoogleMap>
      )}
    </LoadScript>
  );
}

export default MapaGeolocalizacion;
