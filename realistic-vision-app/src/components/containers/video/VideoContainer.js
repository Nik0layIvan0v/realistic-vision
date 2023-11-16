import "./VideoContainer.css";

function VideoContainer({ source, type = "video/mp4", caption, poster }) {
  return (
    <div className="video-wrapper">
      <video playsInline autoPlay muted loop poster={poster}>
        <source src={source} type={type} />
        Your browser does not support the video tag.
      </video>
      <div className="video-header">{caption}</div>
    </div>
  );
}

export default VideoContainer;
