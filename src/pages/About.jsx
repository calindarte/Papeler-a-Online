import InfoAbout from "../components/sectionAbout/InfoAbout";

const About = () => {
  return (
    <section className="bg-[#f5f5f5] px-16 py-24 ">
      <div className=" bg-white flex flex-col gap-8 p-12 shadow-lg text-lg text-gray-800">

        <div className="flex flex-col gap-y-10 text-center pb-6 ">
          <h2 className=" text-4xl font-bold">
            Papeleria en Agustín Codazzi, La Moderna
          </h2>
          <p className="text-gray-700">
            Bienvenido a Moderna, un referente de excelencia en papelería y
            útiles escolares ubicado estratégicamente en Agustín Codazzi, Cesar.
            Desde nuestra fundación hace más de 5 años, nos hemos consolidado
            como un establecimiento que combina experiencia, calidad y variedad
            para satisfacer las necesidades de nuestra apreciada clientela.
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-8 ">
          <InfoAbout
            titulo="Nuestra Historia"
            parrafo="Desde 2019, hemos sido parte integral de la comunidad, creciendo junto
          con Agustín Codazzi. Nuestra historia es un testimonio de dedicación y
          compromiso con la excelencia. Iniciamos con la visión de proporcionar
          a nuestros clientes una experiencia única de compras para papelería, y
          a lo largo de los años, hemos evolucionado para convertirnos en un
          punto de referencia en el suministro de productos escolares, de
          oficina, arte y papelería."
          />
          <InfoAbout titulo="Compromiso con la Calidad" parrafo="En Moderna, nos enorgullece destacar por la calidad inigualable de
              nuestros productos. Colaboramos estrechamente con proveedores de
              confianza, seleccionando cuidadosamente cada artículo para
              garantizar que cumpla con los más altos estándares. Nos esforzamos
              por ofrecer productos duraderos y funcionales que superen las
              expectativas de nuestros clientes." />
          <InfoAbout titulo="Variedad para Todos los Gustos" parrafo="Sabemos que cada cliente es único, y por ello, nuestro extenso
              catálogo abarca desde productos escolares que estimulan la
              creatividad hasta sofisticados suministros de oficina que impulsan
              la productividad. En la Moderna, te invitamos a explorar nuestra
              variedad, donde encontrarás desde las marcas más reconocidas hasta
              opciones exclusivas que satisfarán tus necesidades más
              específicas." />
          
          <InfoAbout titulo="Nuestra Ubicación" parrafo="Ubicados estratégicamente en Cra 11a #24a - 40, en el corazón de
              Agustín Codazzi, nuestra tienda ofrece conveniencia y
              accesibilidad a la comunidad. Nuestra ubicación central se traduce
              en un fácil acceso para todos nuestros clientes, quienes pueden
              disfrutar de una experiencia de compra única en un entorno
              acogedor y profesional." />

        </div>
        <div className="py-8">
        <p className="text-center  text-gray-600">
          Gracias por confiar en La Moderna. Nuestro compromiso con la calidad,
          la variedad y el servicio excepcional nos impulsa a seguir siendo tu
          elección número uno en papelería y útiles escolares. ¡Esperamos
          recibirte pronto en nuestra tienda para brindarte la atención
          personalizada que mereces!
        </p>

        </div>
      </div>
    </section>
  );
};

export default About;
