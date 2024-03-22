import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children})=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (token)=>{
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
    }

    const logout = () =>{
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    }

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            setIsLoggedIn(true);
        }
    },[]);
    const value = {
        isLoggedIn,
        login,
        logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}