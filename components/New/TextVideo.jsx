import React from "react";

const VideoPlayer = () => {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        // className="w-[60px] md:w-[80px] lg:w-[150px] object-cover rounded-full"
        className="lg:w-[40vw] 2xl:w-[35vw] h-[20rem] object-cover rounded-3xl"
      >
        <source src="/Videos/imprint.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;