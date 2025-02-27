import { useContext } from "react";
import { dataContext } from "./context";
import { useState } from "react";

function CarritoTotal() {
  const { cart, setCart, setContProductos } = useContext(dataContext);

  const resetear = () => {
    setCart([]);
    setContProductos(0);
  };

  const total = cart.reduce((acc, el) => acc + el.precio * el.quantity, 0);

  const [usuario, setUsuario] = useState({
    nombre: "",
    mail: "",
    telefono: "",
  });

  const handleUsuarioInput = (e) => {
    setUsuario({ ...usuario, nombre: e.target.value() });
  };

  const handleMailInput = (e) => {
    setUsuario({ ...usuario, mail: e.target.value() });
  };

  const handleTelefonoInput = (e) => {
    setUsuario({ ...usuario, telefono: e.target.value() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCart([]);
    setContProductos(0);
    alert("Se realizó la compra con exito");
  };

  return (
    <>
      <div className="bg-sky-100 text-slate-700 font-semibold flex w-full justify-center">
        <h3>Total a pagar: ${total}</h3>
      </div>
      <div>
        <button
          className="cursor-pointer bg-sky-100 rounded p-1 font-semibold text-slate-700 shadow my-4"
          onClick={resetear}
        >
          Vaciar carrito
        </button>
      </div>
      <form
        className="bg-sky-500 m-2 p-2  text-slate-700 font-semibold shadow-2xl justify-between rounded-2xl w-full"
        onSubmit={handleSubmit}
      >
        <div className="md:flex md:justify-between">
          <fieldset>
            <label htmlFor="nombre">Nombre:</label>
            <input
              className="bg-sky-200 p-1 m-1"
              type="text"
              id="nombre"
              onChange={handleUsuarioInput}
              required
            />
          </fieldset>
          <fieldset>
            <label className="ml-5" htmlFor="mail">
              Email:
            </label>
            <input
              className="bg-sky-200 p-1 m-1 "
              type="email"
              id="mail"
              onChange={handleMailInput}
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="telefono">Telefono:</label>
            <input
              className="bg-sky-200 p-1 m-1"
              type="number"
              id="telefono"
              onChange={handleTelefonoInput}
              required
            />
          </fieldset>
          <div className="flex justify-center my-1">
            <button className="bg-blue-600 hover:bg-blue-700 p-1 rounded cursor-pointer text-white">
            Comprar
            </button>
        </div>
        </div>

      </form>
    </>
  );
}

export default CarritoTotal;
