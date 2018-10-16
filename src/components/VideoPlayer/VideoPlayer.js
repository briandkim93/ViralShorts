import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({video}) => {
  if (!video) {
    return (
      <div className="vide-player col-xl-7 my-3">
        <div className="embed-responsive embed-responsive-16by9">
        </div>
      </div>
    );
  }
  const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="video-player col-xl-7 my-3">
      <div className="loader loader-lg" />
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoURL} title={videoURL}></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;