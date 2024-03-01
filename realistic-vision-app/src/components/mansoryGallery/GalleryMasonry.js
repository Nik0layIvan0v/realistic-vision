import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useContext, useEffect, useState } from 'react';
import ImageModal from '../modals/ImageModal';
import { useSpring, animated } from 'react-spring';
import { NavContext } from '../../contexts/NavContext';
import Loader from '../AppLoader/Loader';
import styles from './GalleryMasonry.module.css';

function GalleyMasonry({ imageData }) {
	const [imageToShow, setImageToShow] = useState(null);
	const [modalShow, setModalShow] = useState(false);
	const [loading, setLoading] = useState(true);
	const [setNavShowContext] = useContext(NavContext);

	const controlNavbar = () => {
		if (window.scrollY >= 36) {
			return setNavShowContext(false);
		}

		return setNavShowContext(true);
	};

	const zoomImage = (img) => {
		setImageToShow(img);
		setModalShow(true);
	};

	const spring = useSpring({
		from: { opacity: 0, transform: 'translateY(100%)' },
		to: { opacity: 1, transform: 'translateY(0)' },
		config: { duration: 1000 },
	});

	useEffect(() => {
		controlNavbar();
		window.addEventListener('scroll', controlNavbar);
		const fetchData = async () => {
			setTimeout(() => {
				setLoading(false);
			}, 0);
		};

		fetchData();
		return () => {
			setNavShowContext(true);
			window.removeEventListener('scroll', controlNavbar);
		};
	}, []);

	if (loading) {
		return <Loader />;
	}

	return (
		<>
			<ImageModal
				show={modalShow}
				onHide={() => {
					setModalShow(false);
					setImageToShow(null);
				}}
				img={imageToShow}
			/>
			<ResponsiveMasonry
				columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
				style={{ marginTop: '56px' }}
			>
				<Masonry gutter="1px">
					{imageData.map((image, index) => (
						<animated.div
							key={index}
							style={{
								display: 'inline-block',
								overflow: 'hidden',
								width: `100%`,
								height: `auto`,
								scrollbarWidth: 'thin',
								...spring,
							}}
						>
							<img
								src={image.src}
								key={index}
								alt={`mansory ${index + 1}`}
								className={styles['hoverableImage']}
								onClick={() => zoomImage(image)}
							/>
						</animated.div>
					))}
				</Masonry>
			</ResponsiveMasonry>
		</>
	);
}

export default GalleyMasonry;
