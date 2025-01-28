
import { useParams } from "react-router-dom";
import { useContext } from "react"
import { dataContext } from "./context"
import messiNoProducto from "../assets/img/messiNoProducto.jpg"

function DetallesProducto() {
  const {data} = useContext(dataContext);

  const {id} = useParams();

  const producto = data.find(prod=>prod.id === (id))

  if (!producto){
    return <div className="flex justify-center m-12 "><img src={messiNoProducto} /></div>
  }

  return (
    <div className="text-white grid justify-items-center bg-sky-700 ">
      <div className="flex">
        <img className="w-md" src={producto.imgf} alt="frente" />
        <img className="w-md" src={producto.imgd} alt="dorsal" />
      </div>
      
        <h2 className="font-light text-lg">{producto.nombre}</h2>
        <h2 className="font-light text-lg">Precio: ${producto.precio}</h2>
        <h2 className="font-light text-lg">🔥{producto.descripcion}</h2>
        
      

    </div>
  )
}

export default DetallesProducto