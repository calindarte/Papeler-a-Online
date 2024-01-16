import { useEffect } from "react";
import HeaderStore from "../components/sectionStore/HeaderStore";
import { useFirestore } from "../hooks/useFirestore";
import CardBestSellers from "../components/sectionHome/CardBestSellers";

const OfficeItems = () => {
  const { data, error, loading, getData } = useFirestore();

  useEffect(() => {
    console.log("get oficina");
    getData("oficina");
  }, []);

  if (loading.getData) return <p>loading office...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="bg-[#f5f5f5]">
      <HeaderStore
        text="oficina"
        path="/ Oficina"
        parrafo="Planifica tus jornadas con eficacia. En la sección dedicada a artículos de oficina, hemos elegido cuidadosamente los productos más destacados, que van desde elegantes agendas hasta prácticos programadores. Descubre todo lo necesario para mantener tus actividades perfectamente organizadas."
      />
      <h1>OFFICE</h1>
      <div className="grid grid-cols-4  gap-12 px-32  py-6">
        {data.map((item) => (
          <div key={item.id}>
            <CardBestSellers
              imgProduct={item.imagen}
              text={item.nombre}
              price={item.precio}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfficeItems;
