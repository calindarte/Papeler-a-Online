import { useEffect } from "react";
import HeaderStore from "../components/sectionStore/HeaderStore";
import { useFirestore } from "../hooks/useFirestore";
import CardBestSellers from "../components/sectionHome/CardBestSellers";

const SchoolItems = () => {
  const { data, error, loading, getData } = useFirestore();

  useEffect(() => {
    console.log("get scchol");
    getData("escolar");
  }, []);

  if (loading.getData) return <p>loading school...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="bg-[#f5f5f5]">
      <HeaderStore text="escolar" path="/ Escolar" parrafo="Los materiales escolares son fundamentales para todo estudiante, ya que la calidad de estos productos desempeñará un papel crucial en el éxito académico de cada alumno. Descubre nuestra sección dedicada a materiales escolares." />

      <h1>Escolar</h1>
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

export default SchoolItems;
