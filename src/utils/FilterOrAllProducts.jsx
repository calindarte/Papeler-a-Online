import { useState } from "react";


const FilterOrAllProducts = ({ onChangeOrder, onSearch, totalBusqueda, totalData }) => {


  const [textInput, setTextInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(textInput);

  };

 
  return (
    <div className="flex items-center justify-between px-10 py-10">
      <p className="text-left">{`Mostrando ${totalBusqueda > 0 ? totalBusqueda :totalData} resultados`}</p>

      <select onChange={(e) => onChangeOrder(e.target.value)} className=" border border-slate-400 px-4 py-1 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500">
        <option value="asc">Ordenar por precio: Bajo a Alto</option>
        <option value="desc">Ordenar por precio: Alto a Bajo</option>
      </select>
      <div>
      <form
        className="flex items-center justify-center"
        onSubmit={handleSubmit}
      >
        
        <input
          type="text"
          placeholder="Buscar un Producto"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="relative border border-slate-400 px-4 py-1 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
        <span className="material-symbols-outlined text-blue-400 absolute right-[3.5%]">
          search
        </span>
      </form>
      
    </div>

    </div>
  );
};

export default FilterOrAllProducts;
