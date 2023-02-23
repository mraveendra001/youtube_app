import React from "react";
 import { useDispatch } from "react-redux";
 import { toggleMenu } from "../util/appSlice";
 

const Head = () =>{
     const dispatch = useDispatch();

   const toggleMenuHandler = () =>{
       dispatch(toggleMenu());
    };   // this will dispatch an action  dispatch () is a function , dispatch comes from useDispatch() from react -redux s
    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
    <div className="flex col-span-1">
        <img onClick={() => toggleMenuHandler()} className="w-11 h-9 cursor-pointer" alt="menu" 
        src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg"/>
        <img className="w-36 h-8 mx-2"
        alt="youtube logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"/>
     </div>
       <div className="flex col-span-10">
       <input  className="px-20 w-1/2 rounded-l-full border border-gray-300 h-9" type="text"/>
            <button className="border border-gray-500 w-[60px] h-9 rounded-r-full"><img className="px-3 w-15 h-8" alt="search" src="https://i.pinimg.com/564x/d0/db/51/d0db51bfb8797366caebdf2a238849f0.jpg"/></button>
       </div>
       <div >
       <img className="h-8"
        alt="user-icon"
        src="https://static.vecteezy.com/system/resources/thumbnails/007/407/996/small/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg"/>

       </div>
         </div>
     
    )
}

export default Head;