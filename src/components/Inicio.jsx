import messiInicio from "../assets/img/messiInicio.jpg";
import { motion } from "framer-motion";

function Inicio() {
  return (
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
      className="h-screen"
    >
      <div className="flex justify-center m-12">
        <img className="md:h-96 rounded-2xl" src={messiInicio} />
      </div>
      <footer className="text-white text-center">
        Copyright InduRetro - 2025. Todos los derechos reservados®.
      </footer>
    </motion.div>
  );
}

export default Inicio;
