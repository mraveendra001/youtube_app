import React, { useEffect, useState } from "react";
import { YOUTUBE_SHORTS_API } from "../util/constants";
//import { Link } from "react-router-dom";
import ShortVideos from "./ShortVideos";

const ShortsContainer = () => {
  const [shortvideos, setShortVideos] = useState([]);

  useEffect(() => {
    getShortVideos();
  }, []);

  const getShortVideos = async () => {
    const data = await fetch(YOUTUBE_SHORTS_API);
    const json = await data.json();
    const filteredVideos = json.items.filter(
      (video) => video.snippet.liveBroadcastContent === "none"
    );
    setShortVideos(filteredVideos);
    console.log("filtered videos", filteredVideos);
  };

  return (
    <div>
      {shortvideos.length > 0 && (
        <ShortVideos videos={shortvideos} />
      )}
    </div>
  );
};

export default ShortsContainer;
