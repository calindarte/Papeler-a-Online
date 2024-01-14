import InputForm from "../components/sectionContact/InputForm";

const Contact = () => {
  return (
    <div>
      <div className="bg-amber-200 bg-opacity-60">
        <div className="pb-20 pt-24">
          <h1 className="text-4xl font-semibold text-gray-700 text-center">
            Contáctanos
          </h1>
        </div>
      </div>
      <div className="bg-opacity-70 bg-black text-gray-100 pb-24 shadow-2xl">
        <div className="flex items-center flex-col">
          <div className="pt-24">
            <h2 className="text-4xl font-bold text-gray-100">
              Enviar Un Mensaje
            </h2>
          </div>
          <form className="flex flex-col  gap-3 pt-10  w-[45%] text-xl">
            <InputForm type="text" id="nombre" label="Su nombre" />

            <InputForm type="email" id="email" label="Email" />

            <InputForm type="tel" id="telefono" label="Número de teléfono" />

            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              cols="30"
              rows="3"
              className="focus:outline-none p-2 bg-transparent border-b-2 border-amber-600 text-lg tracking-wide text-gray-200"
            />

            <button className="bg-amber-500 bg-opacity-70 p-2 rounded-md mt-2">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
