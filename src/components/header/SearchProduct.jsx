import { useState } from "react";

const SearchProduct = ({onSearch}) => {
  const [textInput, setTextInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(textInput);

  };

  return (
    <aside>
      <form
        className="flex items-center justify-center"
        onSubmit={handleSubmit}
      >
        
        <input
          type="text"
          placeholder="Buscar un Producto"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="relative w-80  border border-slate-400 px-4 py-1 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
        <span className="material-symbols-outlined text-blue-400 absolute right-[39%]">
          search
        </span>
      </form>
    </aside>
  );
};

export default SearchProduct;
