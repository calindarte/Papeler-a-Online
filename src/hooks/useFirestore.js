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
            const results = data.filter(
              (product) =>
                product.nombre.toLowerCase().startsWith(productName.toLowerCase())
            );
            setFilteredData(results);
            
          } else {
            setFilteredData([]);
            
          }
        } catch (error) {
          console.log(error);
          setError(error.message);
        } finally {
          setLoading((prev) => ({ ...prev, searchProduct: false }));
        }
      };
    

    return {
        data, error, loading, getData, searchProduct, filteredData

    }
}