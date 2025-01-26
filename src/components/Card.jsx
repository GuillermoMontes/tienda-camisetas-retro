

function Card({nombre,precio,descripcion,imgf,imgd}) {
  return (
    <div className="block bg-sky-300 ">
        <h2>{nombre}</h2>
        <h2>Precio: ${precio}</h2>
        <h3>{descripcion}</h3>
        <img className="w-40" src={imgf} alt="frente" />
        <img className="w-40" src={imgd} alt="dorsal" />
    </div>
  )
}

export default Card