import GalleyMasonry from '../components/mansoryGallery/GalleryMasonry';
import { useState } from 'react';

function GalleryPage() {
	const images = require.context('../assets/images', true);
	const imageList = images.keys().map((image) => images(image));
	let testImages = imageList.map((image) => {
		return { src: image, title: image.split('/').pop() };
	});

	const [imgSources, setImgSources] = useState(testImages);
	return <GalleyMasonry imageData={imgSources} />;
}

export default GalleryPage;
