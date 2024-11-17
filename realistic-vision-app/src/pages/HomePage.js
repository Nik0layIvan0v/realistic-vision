import sample from '../assets/videos/file_example_720p.mp4';
import forestSample from '../assets/videos/file_sample_forest.mp4';
import VideoContainer from '../components/containers/video/VideoContainer';
import { useRef } from 'react';
import ScrollToTopButton from '../components/footer/ScrollToTopButton';
import styles from './Homepage.module.css';
import ScrollToSectionButton from '../components/footer/ScrollToSection';
import Section from '../components/containers/section/Section';
import ImageContainer from '../components/containers/Image/ImageContainer';
import CarouselSection from '../components/containers/carousels/CarouselSection';
import IconLinks from '../components/IconLinks/IconLinks';
import { useState } from 'react';

function HomePage() {
	const sectionOneRef = useRef();
	const sectionTwoRef = useRef();
	const sectionThreeRef = useRef();
	const sectionFourRef = useRef();
	const sectionFiveRef = useRef();
	const [menuColor, setMenuColor] = useState('white');

	const components = [
		<ImageContainer src="./static/media/xxs-1_Livingroom_1_BIG_PNG_F.9964b8593226c07a60e6.jpg" />,
		<div className="d-flex justify-content-center align-content-center align-items-center h-100">
			<h1 className="text-white">Second Slide</h1>
		</div>,
		<ImageContainer src="./static/media/xxs-Bathtub_nature_1_BIG_PNG_F.ceb062275cbd4759d6f5.jpg" />,
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
					menuColor={menuColor}
					setMenuColor={setMenuColor}
				/>
			</Section>
			<Section ref={sectionTwoRef} backgroundColor="dark">
				<VideoContainer source={sample} className={'w-100 h-100'} />
				<ScrollToSectionButton
					sectionRef={sectionThreeRef}
					color="white"
					menuColor={menuColor}
					setMenuColor={setMenuColor}
				/>
			</Section>
			<Section ref={sectionThreeRef} backgroundColor="dark">
				<CarouselSection
					components={components}
					defaultActiveIndex={1}
				/>
				<ScrollToSectionButton
					sectionRef={sectionFourRef}
					color="black"
					menuColor={menuColor}
					setMenuColor={setMenuColor}
				/>
			</Section>
			<Section ref={sectionFourRef} backgroundColor="dark">
				<ImageContainer src="./static/media/xxs-Franklin_Night_R3_BIG_F.d5890dfa124186ff6a95.jpg" />
				<ScrollToSectionButton
					sectionRef={sectionFiveRef}
					color="white"
					menuColor={menuColor}
					setMenuColor={setMenuColor}
				/>
			</Section>
			<Section
				ref={sectionFiveRef}
				backgroundColor="dark"
				setMenuColor={setMenuColor}
			>
				<VideoContainer
					source={forestSample}
					className={'w-100 h-100'}
				/>
				<ScrollToTopButton
					sectionRef={sectionOneRef}
					color="white"
					menuColor={menuColor}
					setMenuColor={setMenuColor}
				/>
			</Section>
			<IconLinks iconsColor={menuColor}></IconLinks>
		</div>
	);
}

export default HomePage;
