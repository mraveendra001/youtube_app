import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../util/constants";
import VideoCards from "./VideoCards";

const VideoContainer =()=>{
 const [videos,setVidoes]=useState([]);


    useEffect( () =>{
        getVideos();
    },[]);

    const getVideos= async() => {
        const data=await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        console.log(json);
        setVidoes(json.items);
    };

if (!videos) return null;
    return (
        <div className="flex flex-wrap">
{     videos.map(
    (video) => (
    <Link key={video.id} to ={"/watch?v="+video.id}> <VideoCards key={video.id} info={video} /> </Link>
               ) 
 )}

        </div>
    )
} 

export default VideoContainer;



// <VideoCards info={videos[0]}/>    always do for one and then do for map because debuggin will be easy ,this is a kind of key principle


// {videos.map(
//     (video) => <VideoCards key={video.id} info={video} />
//           )}   