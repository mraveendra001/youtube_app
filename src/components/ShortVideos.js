import React, { useState } from "react";
import WatchShorts from "./WatchShorts";

const ShortVideos = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleArrowUpClick = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    } else {
      // wrap around to the last video
      setCurrentVideoIndex(videos.length - 1);
    }
  };

  const handleArrowDownClick = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      // wrap around to the first video
      setCurrentVideoIndex(0);
    }
  };

  return (
    <div>
      <div  onClick={handleArrowUpClick}>
        {/* &#9650; */}
      </div>
      
      {videos.map((video, index) => {
        const isSelected = index === currentVideoIndex;
        return (
          <div key={video.id}>
            {isSelected && (
              <WatchShorts
                info_short_videos={video}
                onArrowUpClick={handleArrowUpClick}
                onArrowDownClick={handleArrowDownClick}
              />
            )}
            <div onClick={handleArrowDownClick}>
        {/* &#9660; */}
      </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShortVideos;