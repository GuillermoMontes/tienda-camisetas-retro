import { useContext } from "react";
import { dataContext } from "./context";
import { motion } from "framer-motion";

function CarritoItemContador({ prod }) {
  const { cart, setCart, agregarProducto, setContProductos, contProductos } =
    useContext(dataContext);

  const decrementar = () => {
    const prodRepetido = cart.find((item) => item.id === prod.id);

    prodRepetido.quantity !== 1 &&
      setCart(
        cart.map((item) =>
          item.id === prod.id
            ? { ...prod, quantity: prodRepetido.quantity - 1 }
            : item
        )
      );
    if (prodRepetido.quantity > 1) {
      setContProductos(contProductos - 1);
    }
  };

  return (
    <div className="flex ">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mx-auto my-1 lg:mx-8 md:mx-6 cursor-pointer bg-white w-4 h-6 text-center rounded-full"
        onClick={decrementar}
      >
        -
      </motion.div>
      <div className="lg:mx-8 md:mx-6">{prod.quantity}</div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mx-auto lg:mx-8  md:mx-6 cursor-pointer bg-white w-4 h-6 text-center rounded-full"
        onClick={() => agregarProducto(prod)}
      >
        +
      </motion.div>
    </div>
  );
}

export default CarritoItemContador;
