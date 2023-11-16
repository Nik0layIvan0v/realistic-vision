import GalleyMasonry from '../components/mansoryGallery/GalleryMasonry';
import { useState } from 'react';
//import fs from 'fs';

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

const range = (start, stop, step) =>
	Array.from({ length: (stop - start) / step + 1 }, (_, i) => {
		return {
			id: start + i * step,
			src: `https://picsum.photos/${getRandomInt(3)}000/${getRandomInt(
				2
			)}000`,
			title: '',
		};
	});
//
function GalleryPage() {
	const [images, setImages] = useState(range(1, 50, 2));
	//TODO: Dynamically add them from assets folder
	//const files = fs.readdirSync('/assets/photos/');
	return <GalleyMasonry imageData={images} />;
}

export default GalleryPage;
