import maradona404 from "../assets/img/maradona404.jpg";
import { motion } from "framer-motion";

function Error() {
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
      className="flex justify-center m-12 h-screen"
    >
      <img className="h-96 rounded-2xl" src={maradona404} alt="d10s" />
    </motion.div>
  );
}

export default Error;
