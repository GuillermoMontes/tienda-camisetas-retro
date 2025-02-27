
import { useParams } from "react-router-dom";
import { useContext } from "react"
import { dataContext } from "./context"
import messiNoProducto from "../assets/img/messiNoProducto.jpg"

function DetallesProducto() {
  const {data} = useContext(dataContext);

  const {id} = useParams();

  const producto = data.find(prod=>prod.id === (id))

  if (!producto){
    return <div className="flex justify-center m-12 h-screen
    "><img className="h-96" src={messiNoProducto} /></div>
  }

  return (
    <div className="text-white grid justify-items-center md:h-screen   ">

      <div className="md:flex">
        <img className="size-96 " src={producto.imgf} alt="frente" />
        <img className="size-96 " src={producto.imgd} alt="dorsal" />
      </div>
      
        <div className=" bg-sky-700 p-4 m-4">
        <h2 className="font-light text-lg">{producto.nombre}</h2>
        <h2 className="font-light text-lg">Precio: ${producto.precio}</h2>
        <h2 className="font-light text-lg">🔥{producto.descripcion}</h2>
        <h3>Stock: {producto.stock}</h3>
        </div>
        
      

    </div>
  )
}

export default DetallesProducto