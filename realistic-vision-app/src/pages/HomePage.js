import sample from "../assets/videos/file_example_720p.mp4";
import forestSample from "../assets/videos/file_sample_forest.mp4";

import VideoContainer from "../components/containers/video/VideoContainer";
function HomePage() {
  return (
    <>
      <VideoContainer
        source={sample}
        caption={
          <div className="d-flex h-100 w-100 justify-content-center align-items-center">
            <h2 className="text-light">We create the best animations</h2>
          </div>
        }
      />
      <VideoContainer
        source={forestSample}
        caption={
          <div className="d-flex h-100 w-100 justify-content-top">
            <h2 className="text-light">We create the best animations</h2>
          </div>
        }
      />
      <VideoContainer
        source={sample}
        caption={
          <div className="d-flex h-100 w-100 justify-content-center align-items-center">
            <h2 className="text-light">We create the best animations</h2>
          </div>
        }
      />
    </>
  );
}

export default HomePage;
