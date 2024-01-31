import '@/app/ui/global.css';
import React from 'react';

function Spotify() {
  // Your Spotify component logic goes here
  return (
      <div className="rounded-lg overflow-hidden">

  <iframe
    className="w-full"
    src="https://open.spotify.com/embed/playlist/1ErkUongn3cmWZRZ0ruGDP?utm_source=generator"
    height="152"
    frameBorder="0"
    allowFullScreen
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
</div>


  );
}


export default Spotify;