import Image from 'react-bootstrap/Image';

function ImageContainer({ src }) {
	return (
		<Image
			style={{ width: '100%', height: '100%', objectFit: 'cover' }}
			src={src}
			alt="full width"
		/>
	);
}

export default ImageContainer;
