
import {  useState } from "react";
import CardProducto from "./CardProducto";
import { useContext } from "react"
import { dataContext } from "./context"




function Productos() {

  const {data} = useContext(dataContext);

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
         <div className="flex justify-center m-4 ">

           
            <button className="mx-4 cursor-pointer" onClick={()=>setSelecCategoria()}>Todos los productos</button>
            <button className="mx-4 cursor-pointer" onClick={()=>setSelecCategoria(categoria.camisetas)}>Camisetas</button>
            <button className="mx-4 cursor-pointer" onClick={()=>setSelecCategoria(categoria.shorts)}>Shorts</button>
        </div>
      
      <CardProducto filtroCategoria={filtroCategoria}/>

        
    </>
  );
}

export default Productos;
