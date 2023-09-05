import { useState } from "react";
import { useAuth } from "./Authentication";


const Sidenav=({element})=>{
    const {question,setQuestion}=useAuth();

   return(
       <div
          style={{
              borderRight:"1px solid",
              height:"100%"

            }}
       >
           {element.map((ele)=>{
              return(<button key={ele.id}
               onClick={()=>setQuestion(ele)}
               style={{
                   width:"100%",
                   backgroundColor:question.question===ele.question?"blue":"gray",
                   marginTop:"2px"

               }}
               >
              <span
              style={{color:"white"}}
               >Q-{ele.id}</span></button>)
           })}
       </div>
   )
}
export default Sidenav;