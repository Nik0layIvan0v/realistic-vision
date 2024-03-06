import sample from '../assets/videos/file_example_720p.mp4';
import forestSample from '../assets/videos/file_sample_forest.mp4';
import VideoContainer from '../components/containers/video/VideoContainer';
import { createRef } from 'react';
import ScrollToTopButton from '../components/footer/ScrollToTopButton';
import styles from './Homepage.module.css';
import ScrollToSectionButton from '../components/footer/ScrollToSection';
import Section from '../components/containers/section/Section';
import ImageContainer from '../components/containers/Image/ImageContainer';
import CarouselSection from '../components/containers/carousels/CarouselSection';

function HomePage() {
	const sectionOneRef = createRef();
	const sectionTwoRef = createRef();
	const sectionThreeRef = createRef();
	const sectionFourRef = createRef();

	const components = [
		<ImageContainer src="https://vivid-vision.net/wp-content/uploads/2023/04/22075_sothebys3.jpg" />,
		<div className="d-flex justify-content-center align-content-center">
			<h1>Second Slide</h1>
		</div>,
		<ImageContainer src="https://vivid-vision.net/wp-content/uploads/2023/04/22075_sothebys3.jpg" />,
	];

	return (
		<div className={styles['section-wrapper']}>
			<Section ref={sectionOneRef} backgroundColor="dark">
				<CarouselSection
					components={components}
					defaultActiveIndex={1}
				/>
				<ScrollToSectionButton
					sectionRef={sectionTwoRef}
					color="white"
				/>
			</Section>
			<Section ref={sectionTwoRef} backgroundColor="dark">
				<VideoContainer source={sample} className={'w-100 h-100'} />
				<ScrollToSectionButton
					sectionRef={sectionThreeRef}
					color="white"
				/>
			</Section>
			<Section ref={sectionThreeRef} backgroundColor="dark">
				<ImageContainer src="https://thechive.com/wp-content/uploads/2019/12/person-hilariously-photoshops-animals-onto-random-things-xx-photos-25.jpg" />
				<ScrollToSectionButton
					sectionRef={sectionFourRef}
					color="dark"
				/>
			</Section>
			<Section ref={sectionFourRef} backgroundColor="dark">
				<VideoContainer
					source={forestSample}
					className={'w-100 h-100'}
				/>
				<ScrollToTopButton sectionRef={sectionOneRef} color="white" />
			</Section>
		</div>
	);
}

export default HomePage;
