import { useContext } from "react"
import { dataContext } from "./context"
import CarritoItemContador from "./CarritoItemContador";


function CarritoElemento() {
    const {cart,setCart} = useContext(dataContext);

    const eliminarProducto = (id)=>{
        const buscarId = cart.find((el) => el.id === id)
        
        const carritoNuevo = cart.filter((el) =>{
            return el !== buscarId
        })

        setCart(carritoNuevo)
    }

    return cart.map((prod)=>{
        return (
            <div className="flex w-350 bg-sky-200 justify-between my-4 items-center" key={prod.id}>
                <img className="w-20" src={prod.imgf} alt="imagen frente" />
                <h3>{prod.nombre}</h3>
                <CarritoItemContador prod ={prod}/>
                <h3>{prod.precio * prod.quantity}</h3>
                <div className="cursor-pointer" onClick={()=>eliminarProducto(prod.id)}>❌</div>
            </div>
          )
    })

}

export default CarritoElemento