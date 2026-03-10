import { useEffect, useState } from "react";
import "./Categorias.css";

function Categorias() {

  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const obtenerCategorias = async () => {

      try {

        const response = await fetch(
          `${import.meta.env.VITE_MEALS_API}/categories.php`
        );

        const data = await response.json();

        setCategorias(data.categories);

      } catch (error) {

        console.error("Error cargando categorías:", error);

      } finally {

        setLoading(false);

      }

    };

    obtenerCategorias();

  }, []);

  if (loading) return <p className="cargando">Cargando categorías...</p>;

  return (

    <div className="categorias-container">

      <h2>Categorías de Comida</h2>

      <div className="categorias-grid">

        {categorias.map((cat) => (

          <div key={cat.idCategory} className="categoria-card">

            <img
              src={cat.strCategoryThumb}
              alt={cat.strCategory}
            />

            <h3>{cat.strCategory}</h3>

            <p>
              {cat.strCategoryDescription.substring(0,120)}...
            </p>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Categorias;