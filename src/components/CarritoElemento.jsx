import { useContext } from "react";
import { dataContext } from "./context";
import CarritoItemContador from "./CarritoItemContador";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1,
          },
        }}
        viewport={{
          once: true,
        }}
        className="block md:flex w-full bg-blue-400/90 text-slate-700  font-semibold justify-between my-8  items-center rounded-2xl py-1"
        key={prod.id}
      >
        <div className="flex items-center justify-evenly">
          <img className="max-w-20 rounded-2xl mx-2" src={prod.imgf} alt="imagen frente" />
          <h3>{prod.nombre}</h3>
        </div>
        <div>
          <CarritoItemContador prod={prod} />
        </div>
        <h3 className="text-center">Stock: {prod.stock}</h3>
        <h3 className="text-center">${prod.precio * prod.quantity}</h3>
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer shadow mx-2"
            onClick={() => eliminarProducto(prod.id)}
          >
            ❌
          </motion.button>
        </div>
      </motion.div>
    );
  });
}

export default CarritoElemento;
