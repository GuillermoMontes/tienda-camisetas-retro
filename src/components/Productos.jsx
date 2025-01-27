import {getFirestore,collection,getDocs,} from "firebase/firestore";
import { useEffect, useState } from "react";
import CardProducto from "./CardProducto";




function Productos() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");

    getDocs(itemCollection).then((snapshot) => {
      const products = snapshot.docs.map((doc) => ({id: doc.id,...doc.data()}));
      setItems(products);  
    });

  }, []);

  const categoria = {
    camisetas: "camisetas",
    shorts: "shorts",
  };

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
      
      <CardProducto filtroCategoria={filtroCategoria}/>

        
    </>
  );
}

export default Productos;
