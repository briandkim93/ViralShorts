import React from 'react';

const VideoPlayer = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="video-player">
      <div className="embedded-video">
        <iframe src={videoURL}></iframe>
      </div>
      <div className="video-description">
        {video.snippet.description}
      </div>
    </div>
  );
};

export default VideoPlayer;