import { useEffect} from "react";
import { useParams } from "react-router-dom";
import { useFirestore } from "../hooks/useFirestore";


const ProductDetails = () => {
  const { id } = useParams();
  const { error, getProductById, loading, product } = useFirestore();

  useEffect(()=>{
   getProductById(id)
  },[])


  
  

  if (loading.getProductById) return <p>Cargando detalles del producto...</p>;

  if (error) return <p>Error al cargar los detalles del producto: {error}</p>;

  return (
    <div>
      <h2>Detalles del Producto</h2>
      {product ? <p>{product.nombre}</p> : <p>No se encontró el producto con el ID: {id}</p>}
    </div>
  );
};

export default ProductDetails;
