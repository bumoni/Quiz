import { useState } from "react";
import { useContext } from "react";
import React from "react";

const AuthContex=React.createContext();

export const Authprovider=({children})=>{
    const [email,setEmail]=useState(localStorage.getItem("email")??"");
    const [question,setQuestion]=useState({});
    const [data,setData]=useState([]);
    const [open,setOpen]=useState(false);
    const [time,setTime]=useState({ hours: 0, minutes: 30, seconds: 0 });
    return(
      <AuthContex.Provider
        value={{
            email,
            setEmail,
            question,
            setQuestion,
            data,
            setData,
            open,
            setOpen,
            time,
            setTime,
        }}
        >
         {children}
        </AuthContex.Provider>
    )
}
export const  useAuth= () =>useContext(AuthContex);