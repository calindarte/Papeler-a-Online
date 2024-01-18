import { useState } from "react"
import { db } from "../config/firebase";
import { collection, doc, getDoc, getDocs, orderBy, query, where } from "firebase/firestore";
 


export const useFirestore = () => {

    const [data, setData] = useState([])
    const [error, setError] =useState();
    const [loading, setLoading] = useState({});

    const [filteredData, setFilteredData] = useState([]);
    const [product, setProduct] =useState([])


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
    
          setFilteredData(orderData); 
        } catch (error) {
          console.log(error);
          setError(error.message);
        } finally {
          setLoading((prev) => ({ ...prev, orderData: false }));
        }
      };
    

      const getProductById = async (id) => {
        try {
          setLoading((prev) => ({ ...prev, getProductById: true }));

        const docRef = doc(db,"products",id)
        const docSnap = await getDoc(docRef);
        
          const idproduct = docSnap.data()
          setProduct(idproduct);
        
          
        } catch (error) {
          console.error(error);
          setError(error.message);
        } finally {
          setLoading((prev) => ({ ...prev, getProductById: false }));
        }
      };
      
     
    
      
      


    return {
        data, error, loading, getData, searchProduct, filteredData, orderData, getProductById, product

    }
}