import React from "react";

const VideoCards = ({ info }) =>{
     //console.log(info); 
     if (!info) {
        return <div>No information available.</div>;
      }
     const {snippet, statistics}= info; //extracting my statistics and snippet from info
     const {channelTitle,title,thumbnails}=snippet; 


     

function formatCount(count, withAbbr = true, decimals = 2) {
    const COUNT_ABBRS = [ '', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y' ];
    const i= 0 === count ? count : Math.floor(Math.log(count) / Math.log(1000));
    let result  = parseFloat((count / Math.pow(1000, i)).toFixed(decimals));
    if(withAbbr) {
        result = result+ COUNT_ABBRS[i]; 
        //console.log(COUNT_ABBRS[i]);
    }
    return result;
}

      const viewCount = formatCount(statistics.viewCount);

    return(
        <div className="p-3 m-3 w-72 overflow-hidden shadow-xl">
               <img className="rounded-lg" alt="thumbnail" src={thumbnails.high.url}/>
              <ul>
                 <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li> 
                 <li>{viewCount} views</li> 
                 
              </ul> 
        </div>
    )
}

export default VideoCards;