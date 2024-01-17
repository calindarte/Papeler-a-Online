import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import CardBestSellers from "../components/sectionHome/CardBestSellers";
import CardCategory from "../components/sectionHome/CardCategory";
import HeaderStore from "../components/sectionStore/HeaderStore";

import { useFirestore } from "../hooks/useFirestore";
import FilterOrAllProducts from "../utils/FilterOrAllProducts";

const Store = () => {

  const location = useLocation();
  const producto = new URLSearchParams(location.search).get("producto");
  

  const {
    data,
    error,
    loading,
    getData,
    searchProduct,
    filteredData,
    orderData,
  } = useFirestore();
  const [selectedOrder, setSelectedOrder] = useState("");


  const totalBusqueda = filteredData.length;
  const totalData = data.length;


  useEffect(() => {
    console.log("get data");
    getData();
  }, []);

  useEffect(() => {
    orderData(selectedOrder);
  }, [selectedOrder]);

  useEffect(() => {
    if (producto) {
      searchProduct(producto);
    }
  }, [producto]);

  if (loading.getData) return <p>loading school...</p>;
  if (loading.orderData) return <p>loading orderData...</p>;

  if (error) return <p>{error}</p>;

  const handleSearch = (productName) => {
    
    searchProduct(productName);
  };

  const handleChangeOrder = (newOrder) => {
    setSelectedOrder(newOrder);
  };


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
          <FilterOrAllProducts
            onChangeOrder={handleChangeOrder}
            onSearch={handleSearch}
            totalBusqueda={totalBusqueda}
            totalData={totalData}
   
          />
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
      </section>
    </>
  );
};

export default Store;
