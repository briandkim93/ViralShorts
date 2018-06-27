import React from 'react';
import './VideoList.css'

import VideoListItem from '../VideoListItem/VideoListItem';

const VideoList = props => {
  const videoListItems = props.viralShorts.map(video => {
    return (
      <VideoListItem 
        video={video} 
        key={video.id.videoId} 
        onSelectVideo={props.onSelectVideo} />
    );
  });
  return (
    <ul className="video-list col-lg-4 list-group mx-3">
      {videoListItems}
    </ul>
  );
};

export default VideoList;