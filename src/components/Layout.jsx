import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <ul className="flex justify-between">
          <li>
            <Link to={"/"}>Logo</Link>
          </li>
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={"productos"}>Productos</Link>
          </li>
          <li>
            <Link to={"quienesSomos"}>Quienes Somos</Link>
          </li>
          <li>
            <Link to={"carrito"}>Carrito</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
