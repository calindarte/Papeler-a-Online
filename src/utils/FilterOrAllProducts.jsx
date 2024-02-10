import { useState } from "react";
import IconSearch from "./IconSearch";


const FilterOrAllProducts = ({ onChangeOrder, onSearch, totalBusqueda, totalData }) => {


  const [textInput, setTextInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(textInput);

  };

 
  return (
    <div className="flex md:flex-row flex-col md:items-center gap-3 justify-between px-10 pb-10 py-10">
      <p className="text-left md:text-base text-sm ">{`Mostrando ${totalBusqueda > 0 ? totalBusqueda :totalData} resultados`}</p>

      <select onChange={(e) => onChangeOrder(e.target.value)} className=" w-[85%] md:w-auto md:text-base text-sm border border-slate-400 px-4 py-1 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500">
        <option value="asc" className="md:text-base text-xs">Ordenar por precio: Bajo a Alto</option>
        <option value="desc" className="md:text-base text-xs">Ordenar por precio: Alto a Bajo</option>
      </select>
      <div>
      <form
        className="flex items-center md:justify-center "
        onSubmit={handleSubmit}
      >
        
        <input
          type="text"
          placeholder="Buscar un Producto"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="relative border border-slate-400 px-4 py-1 rounded-lg text-sm md:text-base focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
        
        <IconSearch className="fill-blue-400 absolute md:right-[3.5%] right-[39%]" />
      </form>
      
    </div>

    </div>
  );
};

export default FilterOrAllProducts;
