import { Link, Outlet } from "react-router-dom";
import { useContext } from "react"
import { dataContext } from "./context"



function Layout() {

  const {contProductos} = useContext(dataContext);

  return (
    <>
      <nav className="bg-blue-500 text-lg font-semibold h-14 content-center text-white  ">
        <ul className="flex  justify-between ">
          <li className="cursor-pointer mx-3 ">
            <Link to={"/"}>InduRetro⚽</Link>
          </li>
          <li className="cursor-pointer hover:text-zinc-600 transition ">
            <Link to={"/"}>Inicio</Link>
          </li>
          <li className="cursor-pointer hover:text-zinc-600 transition ">
            <Link to={"productos"}>Productos</Link>
          </li>
          <li className="cursor-pointer hover:text-zinc-600 transition ">
            <Link to={"quienesSomos"}>Quienes Somos</Link>
          </li>
          <li className="cursor-pointer mx-3 flex">
            <Link to={"carrito"}>🛒</Link><div>{contProductos}</div>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
