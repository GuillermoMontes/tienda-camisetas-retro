import { useState,useEffect } from "react";
import {getFirestore,collection,getDocs,} from "firebase/firestore";
import { useParams } from "react-router-dom";

function DetallesProducto() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");

    getDocs(itemCollection).then((snapshot) => {
      const products = snapshot.docs.map((doc) => ({id: doc.id,...doc.data()}));
      setItems(products);  
    });

  }, []);

  const {id} = useParams();

  const producto = items.find(prod=>prod.id === (id))

  if (!producto){
    return <h1>El producto no existe</h1>
  }

  return (
    <div>
      <h1>Detalle del Producto</h1>
      <h2>{producto.nombre}</h2>
      <h2>Precio: ${producto.precio}</h2>
      <h2>{producto.descripcion}</h2>
      <img src={producto.imgf} alt="frente" />
      <img src={producto.imgd} alt="dorsal" />
    </div>
  )
}

export default DetallesProducto