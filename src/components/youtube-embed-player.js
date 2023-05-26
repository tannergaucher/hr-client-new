import React from "react";

export default function YoutubeEmbedPlayer({ title, youtubeVideoId, style }) {
  return (
    <div className="responsive-container">
      <iframe
        title={title}
        className="responsive-iframe"
        id="player"
        type="text/html"
        src={`https://www.youtube.com/embed/${youtubeVideoId}?enablejsapi=1&origin=https://homerice.app&cc_load_policy=0&autoplay=0&rel=0`}
        frameBorder="0"
        allowFullScreen={true}
        style={style}
      ></iframe>
    </div>
  );
}
