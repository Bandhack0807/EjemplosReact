import { useEffect, useState } from "react";
import "./Clima.css";

function Clima() {
  const [clima, setClima] = useState(null);
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const lat = 20.386863742310716;
  const lon = -97.88103810113562;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`
    )
      .then((res) => res.json())
      .then((data) => setClima(data))
      .catch((error) => console.error("Error clima:", error));
  }, []);

  return (
    <div className="clima">
      {clima ? (
        <>
          <p className="ciudad">{clima.name}</p>
          <p className="temp">{Math.round(clima.main.temp)}°C</p>
          <p className="desc">{clima.weather[0].description}</p>
        </>
      ) : (
        <p className="cargando">Cargando clima...</p>
      )}
    </div>
  );
}

export default Clima;
