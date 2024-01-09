import sample from '../assets/videos/file_example_720p.mp4';
import forestSample from '../assets/videos/file_sample_forest.mp4';
import VideoContainer from '../components/containers/video/VideoContainer';
import { createRef } from 'react';
import ScrollToTopButton from '../components/footer/ScrollToTopButton';
import styles from './Homepage.module.css';
import ScrollToSectionButton from '../components/footer/ScrollToSection';
import Section from '../components/containers/section/Section';

function HomePage() {
	const sectionOneRef = createRef();
	const sectionTwoRef = createRef();
	const sectionThreeRef = createRef();
	const sectionFourRef = createRef();

	return (
		<div className={styles['section-wrapper']}>
			<Section ref={sectionOneRef} backgroundColor="white">
				<div className="h-100 w-100 d-flex">
					<img
						style={{ width: '100%', height: '100%' }}
						src="https://vivid-vision.net/wp-content/uploads/2023/04/22075_sothebys3.jpg"
						alt="section"
					/>
				</div>
				<ScrollToSectionButton
					sectionRef={sectionTwoRef}
					color="white"
				/>
			</Section>
			<Section ref={sectionTwoRef} backgroundColor="blue">
				<div className="h-100 w-100 d-flex">
					<VideoContainer source={sample} />
				</div>
				<ScrollToSectionButton
					sectionRef={sectionThreeRef}
					color="green"
				/>
			</Section>
			<Section ref={sectionThreeRef} backgroundColor="dark">
				<div className="h-100 w-100 d-flex">
					<img
						style={{ width: '100%', height: '100%' }}
						src="https://thechive.com/wp-content/uploads/2019/12/person-hilariously-photoshops-animals-onto-random-things-xx-photos-25.jpg"
						alt="section"
					/>
				</div>
				<ScrollToSectionButton
					sectionRef={sectionFourRef}
					color="dark"
				/>
			</Section>
			<Section ref={sectionFourRef} backgroundColor="grey">
				<div className="h-100 w-100 d-flex">
					<VideoContainer source={forestSample} />
				</div>
				<ScrollToTopButton color="white" />
			</Section>
		</div>
	);
}

export default HomePage;
