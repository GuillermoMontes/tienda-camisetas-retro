import { useState } from "react";
import CardProducto from "./CardProducto";
import { useContext } from "react";
import { dataContext } from "./context";
import { motion } from "framer-motion";

function Productos() {
  const { data } = useContext(dataContext);

  const categoria = {
    camisetas: "camisetas",
    shorts: "shorts",
  };

  const [selecCategoria, setSelecCategoria] = useState("");

  const filtroCategoria = selecCategoria
    ? data.filter((produ) => produ.categoria === selecCategoria)
    : data;

  return (
    <>
      <div className="flex justify-center bg-sky-500/25 text-white font-semibold shadow">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mx-4 cursor-pointer hover:text-zinc-600 transition duration-300"
          onClick={() => setSelecCategoria()}
        >
          Todos los productos
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mx-4 cursor-pointer hover:text-zinc-600 transition duration-300"
          onClick={() => setSelecCategoria(categoria.camisetas)}
        >
          Camisetas
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mx-4 cursor-pointer hover:text-zinc-600 transition duration-300"
          onClick={() => setSelecCategoria(categoria.shorts)}
        >
          Shorts
        </motion.button>
      </div>

      <CardProducto filtroCategoria={filtroCategoria} />
    </>
  );
}

export default Productos;
