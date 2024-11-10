import Image from 'react-bootstrap/Image';
import './ImageContainer.css';

function ImageContainer({ src }) {
	return <Image className="image-container" src={src} alt={src} />;
}

export default ImageContainer;
