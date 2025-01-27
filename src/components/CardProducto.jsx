import { Link } from "react-router-dom"

function CardProducto({filtroCategoria}) {
  return (
    <div className="flex-colum">
    {filtroCategoria.map((prod)=>(
      <div className="bg-red-300 m-2" key={prod.id}>
        <h1>{prod.nombre}</h1>
        <h2>{prod.descripcion}</h2>
        <Link to={`${prod.id}`}>Ver Detalles</Link>
      </div>
    ))}
  </div>
  )
}

export default CardProducto