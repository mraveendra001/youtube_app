import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import {useDispatch,useSelector} from "react-redux";
import { addMessage } from "../util/chatSlice";
import { generateRandomName, makeRandomMessage } from "../util/helper";
const LiveChat = () =>{
    const [liveMessage,setLiveMessage] =useState("");
    const dispatch =useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    
    useEffect (() =>{
     const i =setInterval(()=>{
        //Api polling  , for this chat to store we can use redux store

         console.log("API Polling")
         dispatch(addMessage({
            name : generateRandomName() ,
            message : makeRandomMessage(30) ,
         })
         )
     },2000);
    
    return ()=>clearInterval(i);
},[]);
    return (
        <>
        <div className="p-2 ml-2 h-[500px] bg-slate-100 rounded-md border border-black overflow-y-scroll flex flex-col-reverse"> 
           {/* dont use index as key  */}
           <div>
           {chatMessages.map((c,i) =>(<ChatMessage  key={i} name={c.name} message={c.message}/>
           ))}
           </div>
       </div>

       <form className="w-full p-4 ml-2 border border-black " 
       onSubmit={(e) =>{
        e.preventDefault();
       // console.log("on form submit")
        dispatch(
            addMessage({
                name:"meghana R",
                message:liveMessage,
            })
        );
        }}
        >
        
         <input className=" px-4 w-[480px] border border-slate-300" type="text" 
         value={liveMessage}
         onChange={(e)=>{setLiveMessage(e.target.value)}}/>
          <button className="px-2 mx-2 bg-green-100">Send</button>
       </form>
       </>
    )
}

export default LiveChat;