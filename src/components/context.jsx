import { createContext, useState, useEffect} from "react";
import {getFirestore,collection,getDocs,} from "firebase/firestore";

export const dataContext = createContext();

const DataProvider = ({ children })=>{

    const [data, setData] = useState([]);
    
      useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "items");
    
        getDocs(itemCollection).then((snapshot) => {
          const products = snapshot.docs.map((doc) => ({id: doc.id,...doc.data()}));
          setData(products);  
        });
    
      }, []);

      const  [animal, setAnimal] = useState("gato")

      return (<dataContext.Provider value={{data}}>{children}</dataContext.Provider>);

    
}


export default DataProvider;