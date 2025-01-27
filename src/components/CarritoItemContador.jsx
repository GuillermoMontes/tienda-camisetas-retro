import { useContext } from "react"
import { dataContext } from "./context"

function CarritoItemContador({prod}) {

    const {cart,setCart,agregarProducto} = useContext(dataContext);

    const decrementar = ()=>{
        const prodRepetido = cart.find((item) => item.id === prod.id)

        prodRepetido.quantity !== 1 &&
        setCart(cart.map((item) => (item.id === prod.id ? {...prod, quantity: prodRepetido.quantity - 1 } : item )))

    }

  return (
    <div className="flex ">
        <div className="mx-20 cursor-pointer" onClick={decrementar}>-</div>
        <div>{prod.quantity}</div>
        <div className="mx-20 cursor-pointer" onClick={()=>agregarProducto(prod)}>+</div>
    </div>
  )
}

export default CarritoItemContador