import { useEffect } from "react"
import HeaderStore from "../components/sectionStore/HeaderStore"
import { useFirestore } from "../hooks/useFirestore"
import CardBestSellers from "../components/sectionHome/CardBestSellers"
import SearchProduct from "../components/header/searchProduct"

const PaperItems = () => {

  const {data, error, loading, getData, searchProduct, filteredData} = useFirestore()

  useEffect(() => {
    console.log('get paper')
    getData('papeleria')
  },[])

  if(loading.getData) return <p>Loading PaperItems...</p>
  if(error) return <p>{error}</p>

  const handleSearch = (productName) => {
    console.log(productName);
    // Lógica de búsqueda aquí (puedes llamar a la función searchProduct del hook)
    searchProduct(productName);
  };


  return (
    <section className="bg-[#f5f5f5]">
    <HeaderStore text="papeleria" path="/ Papeleria" parrafo="Imprimir, escribir o pintar son acciones igualmente cruciales que el medio en que las llevamos a cabo. Una impresión carece de significado sin un papel donde plasmarla. En La Moderna, ofrecemos una amplia gama de productos de papelería, que van desde agendas y planificadores hasta cartulinas y resaltadores, todos con los más altos estándares de calidad."/>

        <h1>Papeleria</h1>
        
       

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

              
    </section>
  )
}

export default PaperItems
