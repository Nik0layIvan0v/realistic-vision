import { useContext, useEffect, useState, useMemo } from 'react';
import ImageModal from '../modals/ImageModal';
import { NavContext } from '../../contexts/NavContext';
import Loader from '../AppLoader/Loader';
import useMeasure from 'react-use-measure';
import { useTransition, a } from '@react-spring/web';
import useMedia from '../../hooks/useMedia';
import styles from './GalleryMasonry.module.css';

function GalleyMasonry({ imageData }) {
	const [ref, { width }] = useMeasure();
	const [items, set] = useState([]);
	const [imageToShow, setImageToShow] = useState(null);
	const [modalShow, setModalShow] = useState(false);
	const [setNavShowContext] = useContext(NavContext);

	const fetchImage = async () => {
		const images = [];
		for (const image of imageData) {
			const res = await fetch(image.src);
			const imageBlob = await res.blob();
			const imageObjectURL = URL.createObjectURL(imageBlob);
			images.push({
				id: image.id,
				title: image.title,
				src: imageObjectURL,
				height: image.height,
			});
		}

		set([...images]);
	};

	const columns = useMedia(
		['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'],
		[4, 3, 2],
		1
	);

	const [heights, gridItems] = useMemo(() => {
		let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
		let gridItems = items.map((child, i) => {
			const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
			const x = (width / columns) * column; // x = container width / number of columns * column index,
			const y = (heights[column] += child.height / 2) - child.height / 2; // y = it's just the height of the current column
			return {
				...child,
				x,
				y,
				width: width / columns,
				height: child.height / 2,
			};
		});
		return [heights, gridItems];
	}, [columns, items, width]);

	const transitions = useTransition(gridItems, {
		key: (item) => item.src,
		from: ({ x, y, width, height }) => ({
			x,
			y,
			width,
			height,
			opacity: 0,
		}),
		enter: ({ x, y, width, height }) => ({
			x,
			y,
			width,
			height,
			opacity: 1,
		}),
		update: ({ x, y, width, height }) => ({ x, y, width, height }),
		leave: { height: 0, opacity: 0 },
		config: { mass: 5, tension: 500, friction: 100 },
		trail: 25,
	});

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

	useEffect(() => {
		fetchImage();
		controlNavbar();
		window.addEventListener('scroll', controlNavbar);
		return () => {
			setNavShowContext(true);
			window.removeEventListener('scroll', controlNavbar);
		};
	}, []);

	if (items.length == 0) {
		return <Loader />;
	}

	return (
		<div style={{ marginTop: '56px' }}>
			<ImageModal
				show={modalShow}
				onHide={() => {
					setModalShow(false);
					setImageToShow(null);
				}}
				img={imageToShow}
			/>

			<div
				ref={ref}
				className={styles.list}
				style={{ height: Math.max(...heights) }}
			>
				{transitions((style, image) => (
					<a.div style={style}>
						<div>
							<img
								src={image.src}
								key={image.id}
								alt={`mansory ${image.id}`}
								className={styles['hoverableImage']}
								onClick={() => zoomImage(image)}
							/>
						</div>
					</a.div>
				))}
			</div>
		</div>
	);
}

export default GalleyMasonry;
