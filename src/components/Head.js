
import React, { useEffect, useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { toggleMenu } from "../util/appSlice";
import { YOUTUBE_SEARCH_API } from "../util/constants";
import { cacheResults } from "../util/searchSlice";


const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions,setSuggestions]=useState([]);
  const [showSuggestions , setShowSuggestions]=useState(false);
  const dispatch = useDispatch();
  
  const searchCache = useSelector((store) =>store.search);
  // here we are subscribing to the cache
  /**
   * searchCache = {
   * "iphone": ["iphone 11","iphone 14"]
   *  }
   * searchQuery = iphone
   */
  useEffect(()=>{
    //console.log(searchQuery)
   
    //make an api call after every key press, 
    //if the difference between 2  key press < 200 ms 
    //decline the api call 
    const timer = setTimeout(()=>  {
      if (searchCache[searchQuery]) { //how do u find the the searched query is there in cache we must subscribe to the cache
        setSuggestions(searchCache[searchQuery]);
      } else {
    getSearchSuggestions();
      }
     } , 200);
  
    return ()=>{
      clearTimeout(timer);
    }; //it clears the timer everytime ,when 200 ms happens and api call is declined
  },[searchQuery]);
   
   
  //  key - i 
  //  -render the Component
  //  -calls useEffect()

  //  key - ip
  //  -re render the Component
  //  -useEffect()
  //   - starts the timer and make api call after 200 ms 
 //  key- ip
//  - re render again
//  -useEffect
//  - start new timer => make api call after 200ms
    
//but when we do settimeout we must clear it as well, there by write like const timer = setTimeOut(()=>getsearchsuggestion(),200)
//this will clear the timeout when the api call is done and declined if its more than 200 ms 


const getSearchSuggestions = async () =>{
  console.log("API CALL"+searchQuery); 
  const data = await fetch(YOUTUBE_SEARCH_API+ searchQuery);
   const json= await data.json();
   //console.log(json);
   setSuggestions(json[1]);

   //if the search query is not found in cache we shd update the cache with this search query by dispatching an action
   dispatch(cacheResults({

     [searchQuery] : json[1]
   })
   );

  }

  

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }; // this will dispatch an action  dispatch () is a function .. , dispatch comes from useDispatch() from react -redux s
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="w-11 h-9 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg"
        />
        <img
          className="w-36 h-8 mx-2"
          alt="youtube logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="col-span-10 px-10">
      <div className="flex">
     <input 
          className="px-7 w-1/2 rounded-l-full border border-gray-300 h-9"
            placeholder="search"
            type="text"
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
          />
  <button className="border border-gray-500 w-[60px] h-9  rounded-r-full">
    <img
      className="px-3 w-15 h-8"
      alt="search"
      src="https://i.pinimg.com/564x/d0/db/51/d0db51bfb8797366caebdf2a238849f0.jpg"
    />
  </button>
  </div>
  {showSuggestions && (
  <div className="fixed py-2 px-3 w-[500px] bg-white rounded-lg shadow-lg border border-grey-100">
    <ul>
      {suggestions.map((s)=>
      (<li key={s}className="py-2 shadow-sm hover:bg-slate-200">🔍{s}</li>
      ))}
      
    </ul>
  </div>
  )}
</div>

      <div>
        <img
          className="h-8"
          alt="user-icon"
          src="https://static.vecteezy.com/system/resources/thumbnails/007/407/996/small/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
