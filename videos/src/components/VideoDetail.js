import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Search and select a video</div>;
  }
  //   const videoUrl = "https://www.youtube.com/embed/" + video.id.videoId;
  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe
          title="video player"
          width="560"
          height="315"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
