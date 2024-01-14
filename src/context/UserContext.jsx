import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState, createContext } from "react";
import { auth } from "../config/firebase";



const UserContext = createContext();

export default function UserContextProvider ({children}) {

    const [user, setUser] = useState(false);

    useEffect(()=> {
        console.log('useEffect en accion')
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            console.log(user)
            setUser(user)
        })
        return unsubscribe;
    }, [])


    if (user === false) return <p>Loading...</p>
    return (
    <UserContext.Provider value={{user}} >
        {children}
    </UserContext.Provider>
    );

}
export const useUserContext = () => useContext(UserContext);
