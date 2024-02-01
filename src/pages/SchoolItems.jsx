import { useEffect, useState } from "react";
import HeaderStore from "../components/sectionStore/HeaderStore";
import { useFirestore } from "../hooks/useFirestore";
import FilterOrAllProducts from "../utils/FilterOrAllProducts";
import CardBestSellers from "../components/sectionHome/CardBestSellers";
import IconArrowBack from "../components/sectionHome/IconArrowBack";
import IconArrowNext from "../components/sectionHome/IconArrowNext";

const SchoolItems = () => {
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

  const [currentPage, setCurrentPage] = useState(1);

  const productosPorPagina = 16;

  const totalBusqueda = filteredData.length;
  const totalData = data.length;

  const totalPages = Math.ceil(totalData / productosPorPagina);
  const totalPagesFilter = Math.ceil(totalBusqueda / productosPorPagina);

  useEffect(() => {
    getData("escolar");
  }, []);

  useEffect(() => {
    orderData(selectedOrder);
  }, [selectedOrder]);

  if (loading.getData) return <p>loading school...</p>;
  if (loading.orderData) return <p>loading orderData...</p>;

  if (error) return <p>{error}</p>;

  const handleSearch = (productName) => {
    searchProduct(productName);
    setCurrentPage(1);
  };

  const handleChangeOrder = (newOrder) => {
    setSelectedOrder(newOrder);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * productosPorPagina;
  const endIndex = startIndex + productosPorPagina;
  const productsToShowData = data.slice(startIndex, endIndex);
  const productsToShowFilterData = filteredData.slice(startIndex, endIndex);

  return (
    <section className="bg-[#f5f5f5]">
      <HeaderStore
        text="escolar"
        path="/ Escolar"
        parrafo="Los materiales escolares son fundamentales para todo estudiante, ya que la calidad de estos productos desempeñará un papel crucial en el éxito académico de cada alumno. Descubre nuestra sección dedicada a materiales escolares."
      />

      <div className="flex flex-col">
        <FilterOrAllProducts
          onChangeOrder={handleChangeOrder}
          onSearch={handleSearch}
          totalBusqueda={totalBusqueda}
          totalData={totalData}
        />
        <div className="grid md:grid-cols-4  gap-12 px-10  py-6">
          {filteredData.length > 0
            ? productsToShowFilterData.map((item) => (
                <div key={item.id}>
                  <CardBestSellers
                    imgProduct={item.imagen}
                    text={item.nombre}
                    price={item.precio}
                    item={item.id}
                    product={item}
                  />
                </div>
              ))
            : productsToShowData.map((item) => (
                <div key={item.id}>
                  <CardBestSellers
                    imgProduct={item.imagen}
                    text={item.nombre}
                    price={item.precio}
                    item={item.id}
                    product={item}
                  />
                </div>
              ))}
        </div>
        <div className="flex  justify-center gap-x-4 py-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
             
            >
              <IconArrowBack/>
            </button>
            <span>{`Página ${currentPage} de ${filteredData.length > 0 ? totalPagesFilter:totalPages}`}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === (filteredData.length > 0 ? totalPagesFilter:totalPages)}
            >
              <IconArrowNext/>
            </button>
          </div>
      </div>
    </section>
  );
};

export default SchoolItems;
