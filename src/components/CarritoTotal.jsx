import { useContext } from "react"
import { dataContext } from "./context"

function CarritoTotal() {

    const {cart} = useContext(dataContext);

    const total = cart.reduce((acc,el) => acc + el.precio * el.quantity, 0)

  return (
    <div className="bg-sky-100 text-slate-700 font-light font-semibold flex w-300 justify-center">
        <h3>Total a pagar: ${total}</h3>
    </div>
  )
}

export default CarritoTotal