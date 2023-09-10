import { useState } from "react";
import { useAuth } from "../../components/Authentication";
import "./Login.css"

const Login=()=>{
    const {setEmail,setOpen,setTime}=useAuth();
    const [tempEmail,setTempEmail]=useState("")
    function handleSubmit(){
        // if(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(tempEmail)){
       if(true){
           setEmail(tempEmail);
           localStorage.setItem("email",tempEmail);
           setOpen(false);
           setTime({hours: 0, minutes: 30, seconds: 0 });
        }
        else{
            alert("Not a valid email");
        }
    }
    return(
        <div className="container">
        <div className="Login" >
            <span>Enter Your Email Address</span>
            <input value={tempEmail} onChange={(e)=>setTempEmail(e.target.value)}  type="email" placeholder={"Email"}/>
            <button onClick={()=>handleSubmit()}>Submit</button>
        </div>
        </div>
    )
}
export default Login;