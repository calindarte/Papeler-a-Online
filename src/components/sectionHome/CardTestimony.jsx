
const CardTestimony = ({title, descripcion, nombre, role}) => {
  return (
    <div className="bg-white p-8 flex flex-col  gap-y-4 rounded-md ">
      <div className="min-h-52 flex flex-col gap-y-2">
            <h4 className="font-medium text-lg">{title}</h4>
            <p className="text-justify">{descripcion}</p>

      </div>
           
        

            <div className="bg-[#ebe8e5] rounded-full w-full px-5 py-2 flex items-center gap-x-6">

              <img src="src/images/perfil.png" alt="perfil" className="size-20 text-left" />
              <div className="flex flex-col">
              <span className="text-lg tracking-wider text-[#b38944]">{nombre}</span>
              <span>{role}</span>
              </div>

       
            </div>
            
          </div>
  )
}

export default CardTestimony
