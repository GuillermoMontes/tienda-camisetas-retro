import CarritoElemento from "./CarritoElemento"
import CarritoTotal from "./CarritoTotal"
import { useContext } from "react"
import { dataContext } from "./context"


CarritoElemento

function Carrito() {

  const {cart} = useContext(dataContext);

  return (
    <div className="flex-col h-screen justify-items-center m-10">

      {cart.length > 0 ? (
        <>
          <CarritoElemento/>
          <CarritoTotal/>
        </>
      ) : (
        <div className="bg-amber-50 h-16 m-4  w-full flex justify-center">
          <h1 className="text-center text-xl font-semibold text-slate-700">El carrito está vacío</h1>
        </div>
      )}



    </div>

  
    
  )
}

export default Carrito