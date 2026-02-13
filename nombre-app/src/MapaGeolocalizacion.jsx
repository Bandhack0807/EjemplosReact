import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function MapaGeolocalizacion() {
    const{ubicacion, setUbicacion} = useState(null);
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
            (position)=> (
                setUbicacion({
                    lat: position.coords.latitude,
                    ing: position.coords.longitude
                })
            ),
            (error) => console.error(error),
            {enableHighAccuraty:true}
        )
    },[])
    return(
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            {ubicacion && (
            <GoogleMap
            mapContainerStyle={{width:"100%", height:"300px"}}
            center={ubicacion}
            zoom={15}
            >
                <Marker position={ubicacion}></Marker>
            </GoogleMap>
            )
            }
        </LoadScript>
    )
}

export default MapaGeolocalizacion