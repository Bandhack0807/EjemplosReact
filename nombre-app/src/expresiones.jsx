import "./expresiones.css";

function Expresiones({ name, mostrar, mostrarPromos }) {
  const tieneDatos = name && name.trim() !== "";

  return (
    <div className="expresiones">
      <h2>Expresiones</h2>

      {/* 🔹 Saludo */}
      {mostrar ? (
        tieneDatos ? (
          <p>Hola, bienvenido {name}</p>
        ) : (
          <p className="no-datos">No Hay Datos</p>
        )
      ) : null}

      {/* 🔹 Información */}
      {tieneDatos ? (
        <>
          <p>Tu nombre es: {name} y tus apellidos: Hdz Hdez</p>
          <p>Sección de Promociones</p>
        </>
      ) : (
        <p className="no-datos">No Hay Datos</p>
      )}

      {/* 🔹 Texto promocional */}
      {mostrarPromos ? (
        <p className="promo-texto">
          EN ESTA SECCIÓN SE DA A CONOCER LA INFORMACIÓN CORRESPONDIENTE A
          PROMOCIONES DEL SITIO
        </p>
      ) : (
        <p className="no-datos">No Hay Datos</p>
      )}
    </div>
  );
}

export default Expresiones;
