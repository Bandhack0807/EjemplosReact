import "./Carrito.css";

function Carrito() {
  const carritos = [
    {
      id: 1,
      fecha: "2020-03-02T00:00:00.000Z",
      productos: [
        { nombre: "Producto #1", cantidad: 4 },
        { nombre: "Producto #2", cantidad: 1 },
        { nombre: "Producto #3", cantidad: 6 },
      ],
    },
    {
      id: 2,
      fecha: "2020-01-02T00:00:00.000Z",
      productos: [
        { nombre: "Producto #2", cantidad: 4 },
        { nombre: "Producto #1", cantidad: 10 },
        { nombre: "Producto #5", cantidad: 2 },
      ],
    },
  ];

  return (
    <div className="carrito-contenedor">
      <h2>Carrito de compras</h2>

      <div className="carrito-grid">
        {carritos.map((carrito) => (
          <div key={carrito.id} className="carrito-card">
            <span className="carrito-id">{carrito.id}</span>
            <p className="carrito-fecha">{carrito.fecha}</p>

            <h4>Productos</h4>
            <ul>
              {carrito.productos.map((p, index) => (
                <li key={index}>
                  {p.nombre} — Cantidad {p.cantidad}
                </li>
              ))}
            </ul>

            <button className="btn-comprar">Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrito;