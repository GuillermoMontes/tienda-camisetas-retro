import { getFirestore,collection,getDocs,query,where} from "firebase/firestore"
import { useEffect} from "react"
function Productos() {
  

  useEffect(()=>{
    const db = getFirestore()
    const itemCollection = collection(db,"items")
    
    const itemsShort= query(itemCollection,where("categoria","==","shorts"))

    getDocs(itemsShort).then(snapshot=>{
      if (snapshot.size===0){
        console.log("No hay resultado para la busqueda")
      }else{
        snapshot.docs.map(docu=>console.log(docu.data()))
      }
    })
  },[])

  
  return (
    <>

      <h1>productos</h1>
    </>
  )
}

export default Productos