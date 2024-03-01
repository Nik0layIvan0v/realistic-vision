import GalleyMasonry from '../components/mansoryGallery/GalleryMasonry';
import { useOutletContext } from 'react-router-dom';

function GalleryPage() {
	const [content] = useOutletContext();
	return <GalleyMasonry imageData={content.Gallery.images} />;
}

export default GalleryPage;
