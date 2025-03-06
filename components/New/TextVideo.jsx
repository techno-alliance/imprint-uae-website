import React from "react";

const VideoPlayer = () => {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        // className="w-[60px] md:w-[80px] lg:w-[150px] object-cover rounded-full"
        className="w-full 2xl:w-[67vw] h-[30rem] object-cover rounded-none rounded-t-3xl"
      >
        <source src="/Videos/imprint.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;