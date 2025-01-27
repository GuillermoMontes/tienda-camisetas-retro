import { useContext } from "react"
import { dataContext } from "./context"


function Nosotros() {
  const {data} = useContext(dataContext);
  
  return data.map((prod)=>{
    return (
      <div key={prod.id}>
        <h2>{prod.nombre}</h2>
        <h2>{prod.precio}</h2>
      </div>
    )
  })

}

export default Nosotros


