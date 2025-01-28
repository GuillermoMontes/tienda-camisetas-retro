import messiInicio from "../assets/img/messiInicio.jpg"

function Inicio() {
  return (

    <>
      <div className="flex justify-center m-12 ">
       <img className="h-96" src={messiInicio} />
      </div>
      <footer className="text-white text-center">Copyright InduRetro - 2025. Todos los derechos reservados®.</footer> 
    </>
  )
}

export default Inicio