import React, { Component } from 'react';

const VideoItem = props => {
    return (
      <li className="video-item" onClick={() => {props.onSelectVideo(props.video)}}>
        <div className="video-thumbnail">
          <img 
            src={props.video.snippet.thumbnails.default.url}
            alt='Video Thumbnail' />
        </div>
        <div className="video-title">
          {props.video.snippet.title}
        </div>
      </li>
    );
};

export default VideoItem;