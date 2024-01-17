import { useState } from "react"
import { db } from "../config/firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
 


export const useFirestore = () => {

    const [data, setData] = useState([])
    const [error, setError] =useState();
    const [loading, setLoading] = useState({});

    const [filteredData, setFilteredData] = useState([]);
    




    const getData = async (category = null) => {
      try {
        setLoading((prev) => ({ ...prev, getData: true }));
        const dataRef = collection(db, "products");
        let dataQuery;
    
        if (category) {
          dataQuery = query(dataRef, where("categoria", "==", category));
        } else {
          dataQuery = query(dataRef, orderBy("stock", "desc"));
        }
    
        const querySnapshot = await getDocs(dataQuery);
        const dataDB = querySnapshot.docs.map((doc) => doc.data());
        setData(dataDB);
        // setFilteredData(dataDB);

      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading((prev) => ({ ...prev, getData: false }));
      }
    };

      const searchProduct = (productName) => {
        try {
          setLoading((prev) => ({ ...prev, searchProduct: true }));
    
          if (productName) {
            const results = data.filter((product) => (product.nombre.toLowerCase().startsWith(productName.toLowerCase())
            ));
            setFilteredData(results);
            
          } else {
            setFilteredData(data);
            
          }
        } catch (error) {
          console.log(error);
          setError(error.message);
        } finally {
          setLoading((prev) => ({ ...prev, searchProduct: false }));
        }
      };

      const orderData = (order) => {
        try {
          setLoading((prev) => ({ ...prev, orderData: true }));
    
          const orderData = [...data].sort((a, b) => {
            if (order === "asc") {
              return a.precio - b.precio;
            } else if (order === "desc") {
              return b.precio - a.precio;
            }
            return 0;
          });
    
          setFilteredData(orderData);  // Cambia setData por setFilteredData
        } catch (error) {
          console.log(error);
          setError(error.message);
        } finally {
          setLoading((prev) => ({ ...prev, orderData: false }));
        }
      };
      
      


    return {
        data, error, loading, getData, searchProduct, filteredData, orderData

    }
}