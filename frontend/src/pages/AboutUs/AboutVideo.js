import React from "react";
import ReactPlayer from "react-player";

const AboutVideo = () => {
  return (
    <div className="py-12 lg:mx-4 md:mx-4 mx-1 rounded-md">
        <ReactPlayer width='100%' height='100vh' controls={true} url='https://youtu.be/jK8UwziLnJg' />
      {/* <video
        // autoPlay
        loop
        controls
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
        className="h-full w-full"
      >
        <source src="https://youtu.be/jK8UwziLnJg" />
      </video> */}
    </div>
  );
};

export default AboutVideo;
