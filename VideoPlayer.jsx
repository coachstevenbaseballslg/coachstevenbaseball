
import React from 'react';

const VideoPlayer = ({ video }) => {
  // Determine if it's an MP4 file based on type property or URL extension
  const isMp4 = video.type === 'mp4' || (video.url && video.url.endsWith('.mp4'));

  return (
    <div className="relative w-full pb-[56.25%] bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-800">
      {isMp4 ? (
        <video 
          controls 
          autoPlay 
          className="absolute top-0 left-0 w-full h-full object-contain bg-black"
          playsInline
        >
          <source src={video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
          title={video.title || "YouTube video player"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      )}
    </div>
  );
};

export default VideoPlayer;
