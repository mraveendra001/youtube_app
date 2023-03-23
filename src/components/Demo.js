import { useState } from "react";
import { findPrime } from "../util/helper";

const Demo= () =>{

      const [text,setText]=useState(0);
   //   const [isDarkTheme, setIsDarkTheme]=useState(false);
      console.log("Rendering...");
      //heavy operation ,everytime the state changes heavy operation happens
      //there by we use useMemo() hook , live chat is not so heavy
      //lets take an example of calculating n th prime no. 
   const prime = findPrime(text);  //now if the give the text 1234567 , it completely hang it wont come ,that means the operation is so heavy

    return( <div className="m-4 p-2 w-96 border border-black">
    
    <div>
        <input className="border border-black w-72"
         type="number" 
        value={text}
         onChange={(e)=>setText(e.target.value)}
         />
    </div>
    <div>
        <h1 className="mt-4 font-bold text-lg">nth prime : {prime}</h1>
    </div>
    </div>
    )
}

export default Demo;