import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav className="bg-blue-500 text-lg font-semibold h-14 content-center text-white  ">
        <ul className="flex  justify-between ">
          <li className="cursor-pointer mx-3 ">
            <Link to={"/"}>InduRetro⚽</Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/"}>Inicio</Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"productos"}>Productos</Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"quienesSomos"}>Quienes Somos</Link>
          </li>
          <li className="cursor-pointer mx-3">
            <Link to={"carrito"}>🛒</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
