import { useContext } from "react"
import { dataContext } from "./context"

function CarritoTotal() {

    const {cart} = useContext(dataContext);

    const total = cart.reduce((acc,el) => acc + el.precio * el.quantity, 0)

  return (
    <div>
        <h3>Total a pagar: ${total}</h3>
    </div>
  )
}

export default CarritoTotal