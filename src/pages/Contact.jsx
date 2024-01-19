import { useState } from "react";
import InputForm from "../components/sectionContact/InputForm";

const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  return (
    <div>
      <div className="bg-yellow-500 bg-opacity-70 ">
        <div className="pb-20 pt-24">
          <h1 className="text-4xl font-semibold text-gray-800 text-center">
            Contáctanos
          </h1>
        </div>
      </div>

      <div className=" bg-[#f5f5f5] text-gray-800 pb-24 shadow-sm">
        <div className="flex items-center flex-col">
          <div className="pt-24">
            <h2 className="text-4xl font-bold text-gray-800">
              Enviar Un Mensaje
            </h2>
          </div>
          <form
            className="flex flex-col  gap-3 pt-10  w-[45%] text-xl text-gray-800"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <InputForm
              type="text"
              id="nombre"
              label="Su nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <InputForm
              type="email"
              id="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputForm
              type="tel"
              id="telefono"
              label="Número de teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />

            <label htmlFor="mensaje" className="font-medium">Mensaje</label>
            <textarea
              id="mensaje"
              cols="30"
              rows="3"
              className="focus:outline-none p-2 bg-transparent border-b-2 border-amber-600 text-lg tracking-wide"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />

            <button
              type="submit"
              className="bg-amber-600 bg-opacity-70 p-2 rounded-md mt-2 text-gray-50  hover:bg-amber-700"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>

      <section className="py-20">
        <div className="flex justify-center text-4xl font-medium ">
          <p className="flex flex-col items-center">
            <span>¿Tienes Una Pregunta?</span>
            <span>¡Nos Encantaría Ayudarte!</span>
          </p>
        </div>

        <div className="flex justify-center gap-x-12  py-20">

          <div className="flex bg-[#f5f5f5] items-center gap-4 rounded-lg py-6 px-10">
            <span className="material-symbols-outlined text-4xl text-white font-light bg-amber-600 rounded-full px-2 py-1 ">mail</span>
          
            <p className="flex flex-col ">
              <span className="font-medium text-xl">Envianos un Email</span>
              <span>moderna@moderna.com</span>
            </p>
          </div>

          <div className="flex bg-[#f5f5f5] items-center gap-4 rounded-lg py-6 px-10">
            <span className="material-symbols-outlined text-4xl text-white font-light bg-amber-600 rounded-full px-2 py-1 ">call</span>
          
            <p className="flex flex-col ">
              <span className="font-medium text-xl">Llámanos</span>
              <span>(+57) 301 4782097</span>
            </p>
          </div>

          <div className="flex bg-[#f5f5f5] items-center gap-4 rounded-lg py-6 px-10">
            <span className="material-symbols-outlined text-4xl text-white font-light bg-amber-600 rounded-full px-2 py-1 ">location_on</span>
          
            <p className="flex flex-col ">
              <span className="font-medium text-xl">Encuéntranos</span>
              <span>Carrera 11a #24a-40</span>
              <span>Agustín Codazzi, Cesar</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
