import React from "react";

const VideoPlayer = () => {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        className="w-[150px] object-cover rounded-full"
      >
        <source src="/Videos/Techno.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;