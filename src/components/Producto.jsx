import Card from "./Card";
import { useState } from "react";

const categoria = {
  camisetas: "camisetas",
  shorts: "shorts",
};

function Producto({ items }) {
  const [selecCategoria, setSelecCategoria] = useState("");

  const filtroCategoria = selecCategoria
    ? items.filter((produ) => produ.categoria === selecCategoria)
    : items;

  return (
    <>
        <div className="flex justify-center m-4 ">
            <button className="mx-4 cursor-pointer" onClick={()=>setSelecCategoria()}>Todos los productos</button>
            <button className="mx-4 cursor-pointer" onClick={()=>setSelecCategoria(categoria.camisetas)}>Camisetas</button>
            <button className="mx-4 cursor-pointer" onClick={()=>setSelecCategoria(categoria.shorts)}>Shorts</button>
        </div>
      <div>
        {filtroCategoria.map((produ) => (
          <Card
            key={produ.id}
            nombre={produ.nombre}
            precio={produ.precio}
            descripcion={produ.descripcion}
            imgf={produ.imgf}
            imgd={produ.imgd}
          />
        ))}
      </div>
    </>
  );
}

export default Producto;
