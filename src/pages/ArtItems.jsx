import { useEffect } from "react"
import HeaderStore from "../components/sectionStore/HeaderStore"
import { useFirestore } from "../hooks/useFirestore"
import CardBestSellers from "../components/sectionHome/CardBestSellers"

const ArtItems = () => {

  const {data,error, loading, getData} = useFirestore()

  useEffect(() => {
    console.log('get arte')
    getData('arte');
  }, [])

  if (loading.getData) return <p>loading ArtItems...</p>;
  if (error) return <p>{error}</p>;


  return (
    <section className="bg-[#f5f5f5]">
      <HeaderStore text="arte" path="/ Arte" parrafo="Permítete inspirarte explorando nuestra increíble sección de productos artísticos. Desde lienzos y pinceles hasta acuarelas y óleos, disponemos de todo lo que necesitas para dar vida a tu próxima obra maestra."/>
        <h1>Arte</h1>
        <div className="grid grid-cols-4  gap-12 px-32  py-6">
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
    </section>
  )
}

export default ArtItems
