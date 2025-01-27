
import { useParams } from "react-router-dom";
import { useContext } from "react"
import { dataContext } from "./context"

function DetallesProducto() {
  const {data} = useContext(dataContext);

  const {id} = useParams();

  const producto = data.find(prod=>prod.id === (id))

  if (!producto){
    return <h1>El producto no existe</h1>
  }

  return (
    <div>
      <h1>Detalle del Producto</h1>
      <h2>{producto.nombre}</h2>
      <h2>Precio: ${producto.precio}</h2>
      <h2>{producto.descripcion}</h2>
      <img src={producto.imgf} alt="frente" />
      <img src={producto.imgd} alt="dorsal" />
    </div>
  )
}

export default DetallesProducto