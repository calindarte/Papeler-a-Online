import { useEffect, useState } from "react";
import HeaderStore from "../components/sectionStore/HeaderStore";
import { useFirestore } from "../hooks/useFirestore";
import FilterOrAllProducts from "../utils/FilterOrAllProducts";
import CardBestSellers from "../components/sectionHome/CardBestSellers";

const PaperItems = () => {
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
    console.log("get paper");
    getData("papeleria");
  }, []);

  useEffect(() => {
    orderData(selectedOrder);
  }, [selectedOrder]);

  if (loading.getData) return <p>Loading PaperItems...</p>;
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
        text="papeleria"
        path="/ Papeleria"
        parrafo="Imprimir, escribir o pintar son acciones igualmente cruciales que el medio en que las llevamos a cabo. Una impresión carece de significado sin un papel donde plasmarla. En La Moderna, ofrecemos una amplia gama de productos de papelería, que van desde agendas y planificadores hasta cartulinas y resaltadores, todos con los más altos estándares de calidad."
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

export default PaperItems;
