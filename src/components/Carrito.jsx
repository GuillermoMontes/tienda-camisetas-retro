import CarritoElemento from "./CarritoElemento"
import CarritoTotal from "./CarritoTotal"
import { useContext } from "react"
import { dataContext } from "./context"


CarritoElemento

function Carrito() {

  const {cart} = useContext(dataContext);

  return (
    <div className="flex-col bg-slate-300 h-screen justify-items-center">

      {cart.length > 0 ? (
        <>
          <CarritoElemento/>
          <CarritoTotal/>
        </>
      ) : (
        <h1>El carrito está vacío</h1>
      )}

    </div>
    
  )
}

export default Carrito