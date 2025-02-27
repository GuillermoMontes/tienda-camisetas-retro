import messiInicio from "../assets/img/messiInicio.jpg";

function Inicio() {
  return (
    <div className="h-screen">
      <div className="flex justify-center m-12">
        <img className="md:h-96" src={messiInicio} />
      </div>
      <footer className="text-white text-center">
        Copyright InduRetro - 2025. Todos los derechos reservados®.
      </footer>
    </div>
  );
}

export default Inicio;
