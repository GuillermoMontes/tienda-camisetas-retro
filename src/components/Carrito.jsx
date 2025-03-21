import CarritoElemento from "./CarritoElemento";
import CarritoTotal from "./CarritoTotal";
import { useContext } from "react";
import { dataContext } from "./context";
import { motion } from "framer-motion";

CarritoElemento;

function Carrito() {
  const { cart } = useContext(dataContext);

  return (
    <div className="flex-col md:h-screen justify-items-center m-10">
      {cart.length > 0 ? (
        <>
          <CarritoElemento />
          <CarritoTotal />
        </>
      ) : (
        <div className="h-screen w-full">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1.5, type: "spring" }}
            className="bg-amber-50 h-16 m-4  flex justify-center rounded-2xl"
          >
            <h1 className="text-center text-xl font-semibold text-slate-700">
              El carrito está vacío
            </h1>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Carrito;
