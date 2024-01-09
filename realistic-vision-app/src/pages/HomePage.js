import sample from "../assets/videos/file_example_720p.mp4";
import forestSample from "../assets/videos/file_sample_forest.mp4";
import VideoContainer from "../components/containers/video/VideoContainer";
import { createRef } from "react";
import ScrollToTopButton from "../components/footer/ScrollToTopButton";
import styles from "./Homepage.module.css";
import ScrollToSectionButton from "../components/footer/ScrollToSection";
import Section from "../components/containers/section/Section";

function HomePage() {
  const sectionOneRef = createRef();
  const sectionTwoRef = createRef();
  const sectionThreeRef = createRef();
  const sectionFourRef = createRef();

  return (
    <div className={styles["section-wrapper"]}>
      <Section ref={sectionOneRef} backgroundColor="white">
        <h2 className="text-primary">SECTION 1</h2>
        <ScrollToSectionButton sectionRef={sectionTwoRef} color="black" />
      </Section>
      <Section ref={sectionTwoRef} backgroundColor="blue">
        <h2 className="text-white">SECTION 2</h2>
        <ScrollToSectionButton sectionRef={sectionThreeRef} color="green" />
      </Section>
      <Section ref={sectionThreeRef}>
        <h2 className="text-secondary">SECTION 3</h2>
        <ScrollToSectionButton sectionRef={sectionFourRef} color="white" />
      </Section>
      <Section ref={sectionFourRef}>
        <h2 className="text-info">SECTION 4</h2>
        <ScrollToTopButton color="white" />
      </Section>
    </div>
  );
}

export default HomePage;
