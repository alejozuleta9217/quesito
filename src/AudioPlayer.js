import React from 'react';
import YouTube from 'react-youtube';

function AudioPlayer() {
  const videoId = 'K2DLzSZElOo'; // Reemplaza esto con el ID de tu video de YouTube

  const opts = {
    height: '250',
    width: '500',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />      
      <h2>Reprodúceme</h2>
    </div>
  );
}

export default AudioPlayer;
