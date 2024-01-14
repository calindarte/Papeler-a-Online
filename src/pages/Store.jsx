import { useEffect } from "react";
import CardBestSellers from "../components/sectionHome/CardBestSellers";
import CardCategory from "../components/sectionHome/CardCategory";
import HeaderStore from "../components/sectionStore/HeaderStore";


import imgProduct1 from "../images/5646252.jpg";
import { useFirestore } from "../hooks/useFirestore";

const Store = () => {
  const {data, error, loading, getData } = useFirestore()

  useEffect(() => {
    console.log("get data");
    getData()
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
            Los artículos de papelería en la Ciudad de Valledupar
          </span>
        </div>
        <div className="grid grid-cols-4 items-center gap-x-6 px-20 justify-center py-6">
        {
          data.map((item) => (
            <div key={item.id} >
            <CardBestSellers
            imgProduct={item.imagen}
            text={item.nombre}
            price={item.precio}
          />
            
            </div>
          ))
        }

        </div>






        <div className="flex col-span-4 gap-x-6 px-20 justify-center py-6">


          <CardBestSellers
            imgProduct={imgProduct1}
            text="Dolore nostrud proident sunt aliqua officia qui id anim anim eu pariatur."
            price="$11,500 - $6,000"
          />
          <CardBestSellers
            imgProduct={imgProduct1}
            text="Dolore nostrud proident sunt aliqua officia qui id anim anim eu pariatur."
            price="$11,500 - $6,000"
          />
          <CardBestSellers
            imgProduct={imgProduct1}
            text="Dolore nostrud proident sunt aliqua officia qui id anim anim eu pariatur."
            price="$11,500 - $6,000"
          />
          <CardBestSellers
            imgProduct={imgProduct1}
            text="Dolore nostrud proident sunt aliqua officia qui id anim anim eu pariatur."
            price="$11,500 - $6,000"
          />
        </div>
        <div>
          <p>Paginacion...</p>
        </div>
      </section>
    </>
  );
};

export default Store;
