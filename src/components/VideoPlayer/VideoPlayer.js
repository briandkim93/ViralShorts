import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="video-player col-lg-7 my-3">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoURL} title={videoURL}></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;