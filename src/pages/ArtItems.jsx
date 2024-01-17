import { useEffect, useState } from "react";
import HeaderStore from "../components/sectionStore/HeaderStore";
import { useFirestore } from "../hooks/useFirestore";
import CardBestSellers from "../components/sectionHome/CardBestSellers";
import FilterOrAllProducts from "../utils/FilterOrAllProducts";

const ArtItems = () => {
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
    console.log("get arte");
    getData("arte");
  }, []);

  useEffect(() => {
    orderData(selectedOrder);
  }, [selectedOrder]);

  if (loading.getData) return <p>loading ArtItems...</p>;
  // if (loading.orderData) return <p>loading orderData...</p>;
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
        text="arte"
        path="/ Arte"
        parrafo="Permítete inspirarte explorando nuestra increíble sección de productos artísticos. Desde lienzos y pinceles hasta acuarelas y óleos, disponemos de todo lo que necesitas para dar vida a tu próxima obra maestra."
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
  );
};

export default ArtItems;
