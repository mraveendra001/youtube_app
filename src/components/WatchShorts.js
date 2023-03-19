 import React from "react";
 //import { useSearchParams } from "react-router-dom";
const WatchShorts = ({info_short_videos, onArrowUpClick, onArrowDownClick }) =>{
    //console.log(info_short_videos);
    if (!info_short_videos) {
        return <div>No information available.</div>;
      }
    const {id,snippet}= info_short_videos;
   const {title}=snippet; 
   const {videoId}=id;

    //let [searchParams] = useSearchParams();
    //console.log(searchParams.get(videoId));


   
   
  
    console.log("loging id",videoId);
    console.log("title : ", title);


    return (
        <div className="px-[400px]"> 
        <div className="py-5 px-11">
        <button className="arrow-up px-[100px] bg-slate-400" onClick={onArrowUpClick}>
        &#9650;
    </button>
    </div>
        <iframe width="320" 
         height="520" 
src={"https://www.youtube.com/embed/"+videoId}
title={title}
 
allow="accelerometer; 

clipboard-write; encrypted-media; 
gyroscope; 
picture-in-picture; web-share" 
allowFullScreen>
</iframe>
      <div className="py-5 px-11">
      <button className="arrow-up px-[100px] bg-slate-400" onClick={onArrowDownClick}> &#9660;</button>
      </div> 
      
</div>
    )

    // className="arrow-down"
};

export default WatchShorts;

