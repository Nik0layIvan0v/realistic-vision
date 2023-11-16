import sample from "../assets/videos/file_example.mp4";
import VideoContainer from "../components/containers/video/VideoContainer";
function HomePage() {
  return (
    <>
      <VideoContainer
        source={sample}
        caption={
          <div className="d-flex">
            <h2>Your caption here</h2>
          </div>
        }
      />
      <VideoContainer source={sample} caption={<h2>Your caption here</h2>} />
      <VideoContainer source={sample} caption={<h2>Your caption here</h2>} />
    </>
  );
}

export default HomePage;
