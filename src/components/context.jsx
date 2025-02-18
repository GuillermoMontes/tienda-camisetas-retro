import { createContext, useState, useEffect} from "react";
import {getFirestore,collection,getDocs,} from "firebase/firestore";

export const dataContext = createContext();

const DataProvider = ({ children })=>{

    const [data, setData] = useState([]);

    const [contProductos, setContProductos] = useState(0)
    
      useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "items");
    
        getDocs(itemCollection).then((snapshot) => {
          const products = snapshot.docs.map((doc) => ({id: doc.id,...doc.data()}));
          setData(products);  
        });
    
      }, []);

      const  [cart, setCart] = useState([])

      const agregarProducto = (prod)=>{
        
        const prodRepetido = cart.find((item) => item.id === prod.id)
        
        if (prodRepetido){
          setCart(cart.map((item) => (item.id === prod.id ? {...prod,  quantity: prodRepetido.quantity + 1 } : item )))
          setContProductos(contProductos + 1)
        }else{
          
          setCart([...cart,prod])
          setContProductos(contProductos + 1)

        }
        
      }

      

      return (<dataContext.Provider value={{data,cart,setCart,agregarProducto,contProductos,setContProductos}}>{children}</dataContext.Provider>);

    
}


export default DataProvider;