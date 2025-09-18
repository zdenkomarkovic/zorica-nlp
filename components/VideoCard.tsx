import React from "react";

const VideoCard = ({ video }: { video: string }) => {
  return (
    <section className="">
      <video
        controls
        autoPlay
        loop
        muted
        className="w-full max-h-screen object-cover aspect-[6/9] rounded-lg"
      >
        {" "}
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoCard;
