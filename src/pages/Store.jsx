import { useEffect } from "react";
import CardBestSellers from "../components/sectionHome/CardBestSellers";
import CardCategory from "../components/sectionHome/CardCategory";
import HeaderStore from "../components/sectionStore/HeaderStore";

import { useFirestore } from "../hooks/useFirestore";
import SearchProduct from "../components/header/searchProduct";

const Store = () => {
  const { data, error, loading, getData, searchProduct, filteredData } =
    useFirestore();

  const handleSearch = (productName) => {
    console.log(productName);
    // Lógica de búsqueda aquí (puedes llamar a la función searchProduct del hook)
    searchProduct(productName);
  };

  useEffect(() => {
    console.log("get data");
    getData();
  }, []);

  if (loading.getData) return <p>loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <HeaderStore />

      <section>
        <CardCategory />
      </section>
      <section className="bg-[#f5f5f5]">
        <div className="flex flex-col p-16 items-center justify-center gap-5">
          <h2 className="text-4xl font-medium">Nuestros Productos</h2>
          <span className="text-gray-800 text-lg">
            Los artículos de papelería en la ciudad de Valledupar
          </span>
        </div>

        <div className="flex flex-col">
          <div className="">
            <SearchProduct onSearch={handleSearch} />
          </div>

          <div className="grid grid-cols-4  gap-12 px-10  py-6">


            
            {filteredData.length > 0
              ? filteredData.map((item) => (
                  <div key={item.id}>
                    <CardBestSellers
                      imgProduct={item.imagen}
                      text={item.nombre}
                      price={item.precio}
                    />
                  </div>
                ))
              : data.map((item) => (
                  <div key={item.id}>
                    <CardBestSellers
                      imgProduct={item.imagen}
                      text={item.nombre}
                      price={item.precio}
                    />
                  </div>
                ))}
          </div>
        </div>

        <div>
          <p>Paginacion...</p>
        </div>
      </section>
    </>
  );
};

export default Store;
