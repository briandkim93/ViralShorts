import React from 'react';
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
    <div className="video-list">
      <ul>
        {videoListItems}
      </ul>
    </div>
  );
};

export default VideoList;