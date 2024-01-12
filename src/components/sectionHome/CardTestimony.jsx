
const CardTestimony = () => {
  return (
    <div className="bg-white p-8 flex flex-col items-center justify-center gap-y-2 rounded-md">
           
            <h4 className="font-medium text-lg">Siempre Confío En La Moderna Para Adquirir Los Útiles Escolares De Mi Sobrina.</h4>
            <p className="text-justify">He sido cliente de ellos por más de 10 años desde que estudiaba en el colegio, durante mi carrera profesional y espero seguir contando con sus servicios durante mucho tiempo más.</p>
            
            <div className="bg-[#ebe8e5] rounded-full w-full px-5 py-2 flex items-center gap-x-6">

              <img src="src/images/perfil.png" alt="perfil" className="size-20 text-left" />
              <div className="flex flex-col">
              <span className="text-lg tracking-wider text-[#b38944]">Carlos Lindarte</span>
              <span>Independiente</span>
              </div>

            </div>
          </div>
  )
}

export default CardTestimony
