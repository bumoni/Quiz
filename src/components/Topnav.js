import { useEffect, useState } from "react";
import { useAuth } from "./Authentication";


const Topnav=()=>{

    const {email,data,open,setOpen,setEmail,time,setTime}=useAuth();
    const [totalCorrect,setTotalCorrect]=useState(0);
    const [totalAttempt,setTotalAttempt]=useState(0);
    function handleSubmit(){
        setOpen(true);
        let t1=0;
        let t2=0;
        data.map((ele)=>{
            if(ele.ans===ele.correct_answer){
                t1++;
                setTotalCorrect(t1);
            }
            if(ele.ans!==null){
                t2++;
                setTotalAttempt(t2)
            }
            return ele;
        })
    }
    useEffect(()=>{
      if(!open){
       let interval = setInterval(() => {
            setTime((prevTime) => {
              const { hours, minutes, seconds } = prevTime;

              if (hours === 0 && minutes === 0 && seconds === 0) {
                setOpen(true);
                clearInterval(interval);
                return prevTime;
              } else {

                if (seconds === 0) {
                  if (minutes === 0) {
                    return { hours: hours - 1, minutes: 59, seconds: 59 };
                  } else {
                    return { hours:hours, minutes: minutes - 1, seconds: 59 };
                  }
                } else {
                  return { hours:hours, minutes, seconds: seconds - 1 };
                }
              }
            });
        }, 1000);
      return () => clearInterval(interval);
    }
    },[open, setTime])
    return (
        <div
           style={{
            width:"100%",
            top: "0px",
            height:"40px",
            backgroundColor:"#f0fff5",
            borderBottom:"1px solid",
            }}
        >
            {open===true&&<div
               style={{
                   position:'absolute',
                   top:"7%",
                   backgroundColor:"#acf2f0",
                   height:"200px",
                   width:"100%",
                   zIndex:"2",
                   border:"1px solid gray",
                   borderRadius:"5px"

               }}
            >
               <div
                 style={{
                     display:"flex",
                     justifyContent:"center",
                     alignSelf:"center",
                 }}
            >
                   <span
                    style={{ display:"flex",
                     flexDirection:"column"}}
                   >
                        <h4>Total Correct Question: {totalCorrect}</h4>
                        <h4>Total Attempted Question: {totalAttempt}</h4>
                   </span>
               </div>
               <div
                 style={{
                    display:"flex",
                    justifyContent:"center",
                    marginBottom:"10px"
                 }}
                >
                   <button
                    style={{
                        backgroundColor:"red",
                        color:"white",
                        borderRadius:"5px",
                        border:"none",
                    }}
                    onClick={()=>{setEmail("");localStorage.clear();setOpen(false)}}
                   >Confirm and Exit</button>
                   {(time.hours || time.minutes || time.seconds) &&<button
                    style={{
                        backgroundColor:"yellow",
                        color:"red",
                        borderRadius:"5px",
                        border:"none",
                        marginLeft:"20px",
                    }}
                    onClick={()=>{setOpen(false)}}
                   >Resume Test</button>}
               </div>
            </div>}
            <span
            style={{
                height:"100%",
                display:"flex",
                flexDirection:"row",
                alignSelf:"center",
                color:"blueviolet"
            }}
            >
                <span
                  style={{
                      width:"40%"
                  }}
                ></span>
                <h4
                style={{
                    width:"40%"
                }}
                >Welcome {email}</h4>
                <div
                 style={{
                    width:"10%",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}
                >
                    <span>{time.hours}:</span>
                    <span>{time.minutes}:</span>
                    <span>{time.seconds}</span>
                </div>
                <button
                  style={{
                      border:"none",
                      width:"10%",
                  }}
                  onClick={()=>handleSubmit()}
                >Submit Test</button>
            </span>
        </div>
    )
}
export default Topnav;