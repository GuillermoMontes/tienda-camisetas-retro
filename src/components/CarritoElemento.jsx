import { useContext } from "react";
import { dataContext } from "./context";
import CarritoItemContador from "./CarritoItemContador";

function CarritoElemento() {
  const { cart, setCart, setContProductos, contProductos } =
    useContext(dataContext);

  const eliminarProducto = (id) => {
    const buscarId = cart.find((el) => el.id === id);

    const carritoNuevo = cart.filter((el) => {
      return el !== buscarId;
    });

    setCart(carritoNuevo);
    setContProductos(contProductos - 1);
  };

  return cart.map((prod) => {
    return (
      <div
        className="block md:flex w-full bg-sky-100 text-slate-700  font-semibold justify-between my-8  items-center"
        key={prod.id}
      >
        <div className="flex items-center justify-center">
          <img className="max-w-20" src={prod.imgf} alt="imagen frente" />
          <h3>{prod.nombre}</h3>
        </div>
        <div><CarritoItemContador prod={prod} /></div>
        <h3 className="text-center">Stock: {prod.stock}</h3>
        <h3 className="text-center">${prod.precio * prod.quantity}</h3>
        <div className="text-center">
          <button
            className="cursor-pointer shadow mx-2"
            onClick={() => eliminarProducto(prod.id)}
          >
            ❌
          </button>
        </div>
      </div>
    );
  });
}

export default CarritoElemento;
