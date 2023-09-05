import { Fragment, useEffect, useState } from "react";
import { useAuth } from "../../components/Authentication";
import Sidenav from "../../components/Sidenav";
import Topnav from "../../components/Topnav";
import "./Quiz.css"
const Quiz=()=>{
    const {question,setQuestion,data,setData,open}=useAuth();
    async function fetchData(){
        const res= await fetch("https://opentdb.com/api.php?amount=20")
        const temp = await res.json();
        console.log(temp);
        setQuestion(temp.results[0])
        temp.results.map((ele,i)=>{
            ele["ans"]=null;
            ele["id"]=i+1;
           return {...ele,"incorrect_answers":ele.incorrect_answers.push(ele.correct_answer)}
        })
        setQuestion(temp.results?.[0])
        setData(temp.results);
    }
    const handleRadio=(e)=>{
        setQuestion({...question,ans:e})
        let temp=data.map((ele)=>{
            if(question.id===ele.id){
                return {...question,ans:e};
            }
            else{
                return ele;
            }
        })
        setData(temp);
    }
    useEffect(()=>{
        fetchData();
    },[])
    return (
        <div className="container">
          <>
            <Topnav/>
          </>
          <div className="Quiz__div" >
               <div className="sidenav">
                  <Sidenav element={data}/>
                </div>
                   <div className="body">
                      <span
                         style={{
                             margin:"20px"
                         }}
                      >Q{question.id}. {question.question}</span>
                      <form>
                         <div>
                         {question?.incorrect_answers?.map((vl)=>{
                                return (
                                    <div
                                     style={{
                                        margin:"10px"
                                     }}
                                    >
                                      <input id={vl} type="radio" checked={question.ans===vl} onClick={(e)=>handleRadio(e.target.value)}  name={question.question} key={vl} value={vl}/>
                                      <label>{vl}</label>
                                    </div>
                                )
                         })}
                        </div>
                      </form>
                   </div>
            </div>

        </div>
    )
}
export default Quiz;