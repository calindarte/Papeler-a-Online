import { useEffect, useState } from "react";
import HeaderStore from "../components/sectionStore/HeaderStore";
import { useFirestore } from "../hooks/useFirestore";

import FilterOrAllProducts from "../utils/FilterOrAllProducts";
import CardBestSellers from "../components/sectionHome/CardBestSellers";

const OfficeItems = () => {
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
    console.log("get oficina");
    getData("oficina");
  }, []);

  useEffect(() => {
    orderData(selectedOrder);
  }, [selectedOrder]);

  if (loading.getData) return <p>loading office...</p>;
  if (loading.orderData) return <p>loading orderData...</p>;

  if (error) return <p>{error}</p>;

  const handleSearch = (productName) => {
    searchProduct(productName);
  };

  const handleChangeOrder = (newOrder) => {
    setSelectedOrder(newOrder);
  };

  return (
    <section className="bg-[#f5f5f5]">
      <HeaderStore
        text="oficina"
        path="/ Oficina"
        parrafo="Planifica tus jornadas con eficacia. En la sección dedicada a artículos de oficina, hemos elegido cuidadosamente los productos más destacados, que van desde elegantes agendas hasta prácticos programadores. Descubre todo lo necesario para mantener tus actividades perfectamente organizadas."
      />

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
                    item={item.id}
                  />
                </div>
              ))
            : data.map((item) => (
                <div key={item.id}>
                  <CardBestSellers
                    imgProduct={item.imagen}
                    text={item.nombre}
                    price={item.precio}
                    item={item.id}
                  />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeItems;
