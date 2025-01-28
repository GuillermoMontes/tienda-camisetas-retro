import { Link } from "react-router-dom"
import { useContext } from "react"
import { dataContext } from "./context"

function CardProducto({filtroCategoria}) {
  const {agregarProducto} = useContext(dataContext);


  return (
    <div className="flex flex-wrap justify-items-center items-center">
    {filtroCategoria.map((prod)=>(
      <div className="bg-sky-500 m-2 max-w-70 shadow-2xl rounded-2xl font-semibold" key={prod.id}>
        <img className="size-70" src={prod.imgf} alt="imgfrente" />
        <h1 className="mx-4 my-1 text-slate-700">{prod.nombre}</h1>
        <h1 className="mx-4 my-1 text-center text-slate-700">Precio: ${prod.precio}</h1>
        <h3 className="text-center text-slate-700">Stock: {prod.stock}</h3> 
        

        <div className="flex justify-around my-2">
          <div className="bg-sky-600 text-white rounded p-1 shadow "><Link to={`${prod.id}`}>Ver Detalles</Link></div>
          <button className="bg-sky-600 text-white rounded p-1 shadow cursor-pointer " onClick={()=>agregarProducto(prod)}>Agregar</button>
        </div>

      </div>
    ))}
  </div>
  )
}

export default CardProducto