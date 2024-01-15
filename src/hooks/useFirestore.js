import { useState } from "react"
import { db } from "../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
 


export const useFirestore = () => {

    const [data, setData] = useState([])
    const [error, setError] =useState();
    const [loading, setLoading] = useState({});

    const getData = async (category = null) => {
        try {
          setLoading((prev) => ({ ...prev, getData: true }));
          const dataRef = collection(db, "products");
          let dataQuery;
    
          if (category) {
            dataQuery = query(dataRef, where("categoria", "==", category));
          } else {
            dataQuery = dataRef;
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

    return {
        data, error, loading, getData

    }
}