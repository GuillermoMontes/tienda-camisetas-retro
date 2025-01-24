
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Error from "./components/Error";
import Productos from "./components/Productos";
import Carrito from "./components/Carrito";
import DetallesProducto from "./components/DetallesProducto";


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Inicio/>}/>
            <Route path="productos" element={<Productos/>}/>
           {/* <Route path="productos/:id" element={<DetallesProducto/>}/>*/}
            <Route path="quienesSomos" element={<Nosotros/>}/>
            <Route path="carrito" element={<Carrito/>}/>
            <Route path="*" element={<Error/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    

    </>
  );
}

export default App;
