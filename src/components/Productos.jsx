import {getFirestore,collection,getDocs,} from "firebase/firestore";
import { useEffect, useState } from "react";
import Producto from "./Producto";


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

  return (
    <>
        <Producto items={items}/>
    </>
  );
}

export default Productos;
