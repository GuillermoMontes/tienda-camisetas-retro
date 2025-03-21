import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "./context";
import { motion } from "framer-motion";

function Layout() {
  const { contProductos } = useContext(dataContext);

  const navLinks = document.querySelector(".nav-links");

  function onToggleMenu(e) {
    e.currentTarget.name = e.currentTarget.name === "menu" ? "close" : "menu";
    navLinks.classList.toggle("top-[5.7%]");
  }

  return (
    <>
      <nav className=" bg-linear-to-t from-sky-500 to-indigo-500 text-lg font-semibold text-white flex justify-between items-center  mx-auto ">
        <div>
          <span className="cursor-context-menu">InduRetro⚽</span>
        </div>

        <div className="nav-links duration-500 bg-linear-to-t from-sky-500 to-indigo-500 md:static absolute  md:min-h-fit min-h-[30vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vh] gap-8">
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer hover:text-zinc-600 transition duration-300 "
            >
              <Link to={"/"}>Inicio</Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer hover:text-zinc-600 transition duration-300 "
            >
              <Link to={"productos"}>Productos</Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer hover:text-zinc-600 transition duration-300 "
            >
              <Link to={"quienesSomos"}>Quienes Somos</Link>
            </motion.li>
          </ul>
        </div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-6 mx-2"
        >
          <Link className="flex cursor-pointer " to={"carrito"}>
            🛒<div>{contProductos}</div>
          </Link>
          <button className="cursor-pointer text-3xl mt-2 md:hidden">
            <ion-icon onClick={onToggleMenu} name="menu"></ion-icon>
          </button>
        </motion.div>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
