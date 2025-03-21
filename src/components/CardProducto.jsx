import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "./context";
import { motion } from "framer-motion";

function CardProducto({ filtroCategoria }) {
  const { agregarProducto } = useContext(dataContext);

  return (
    <div className="flex flex-wrap justify-items-center items-center justify-center">
      {filtroCategoria.map((prod) => (
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
          className="bg-linear-to-t from-sky-500 to-indigo-500 m-2 max-w-70 shadow-2xl rounded-2xl font-semibold"
          key={prod.id}
        >
          <img className="size-70" src={prod.imgf} alt="imgfrente" />
          <h1 className="mx-4 my-1 text-slate-700">{prod.nombre}</h1>
          <h1 className="mx-4 my-1 text-center text-slate-700">
            Precio: ${prod.precio}
          </h1>
          <h3 className="text-center text-slate-700">Stock: {prod.stock}</h3>

          <div className="flex justify-around my-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-sky-600 hover:bg-sky-700 text-white rounded p-1 shadow "
            >
              <Link to={`${prod.id}`}>Ver Detalles</Link>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-sky-600 hover:bg-sky-700 text-white rounded p-1 shadow cursor-pointer "
              onClick={() => agregarProducto(prod)}
            >
              Agregar
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default CardProducto;
