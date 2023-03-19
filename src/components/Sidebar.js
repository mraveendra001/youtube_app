import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar =() =>{
    const isMenuOpen= useSelector(store => store.app.isMenuOpen);
       // this is subscribing to the portion of the store 
    if (!isMenuOpen) return null;  // early return , if isMenuOpen is true it will go to return (home ,short and all) if its false it will return null
    return (
        <div className="px-6 w-[150px]">    
            <ul className="py-10 shadow-sm">
            <li className="hover:bg-slate-300 hover:border-slate-300 hover:rounded-md border border-transparent py-2">
                 <Link to="/">Home</Link>
            </li>
                    <li className="hover:bg-slate-300  hover:border-slate-300 hover:rounded-md border border-transparent py-2"><Link to="/shorts"> Shorts</Link> </li>
                    <li className="hover:bg-slate-300  hover:border-slate-300 hover:rounded-md border border-transparent py-2">Videos</li>
                    <li className="hover:bg-slate-300  hover:border-slate-300 hover:rounded-md border border-transparent py-2 shadow-2xl">Live</li>
            </ul>
            <h1 className="font-bold "> Subscriptions </h1>
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