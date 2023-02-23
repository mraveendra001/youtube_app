import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar =() =>{
    const isMenuOpen= useSelector(store => store.app.isMenuOpen);
       // this is subscribing to the portion of the store 
    if (!isMenuOpen) return null;  // early return , if isMenuOpen is true it will go to return (home ,short and all) if its false it will return null
    return (
        <div className="p-5 shadow-2xl w-[150px]">    
            <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li>Shorts</li>
                    <li>Videos</li>
                    <li>Live</li>
            </ul>
            <h1 className="font-bold"> Subscriptions </h1>
                    <ul>
                        <li>Music</li>
                        <li>Sports</li>
                        <li>Gaming</li>
                        <li>Movies</li>
                    </ul>
            <h1 className="font-bold pt-7"> Watch Later </h1>
                    <ul>
                        <li>Music</li>
                        <li>Sports</li>
                        <li>Gaming</li>
                        <li>Movies</li>
                    </ul>
           
               


        </div>
    )
}

export default Sidebar;