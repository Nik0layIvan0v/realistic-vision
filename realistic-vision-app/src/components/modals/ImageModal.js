import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';

function ImageModal({ ...props }) {
	// const imageTitle =
	// 	props.img?.title == '' ? 'Default image title' : props.img?.title;
	//<Modal.Header closeButton>{imageTitle}</Modal.Header>
	return (
		<Modal
			{...props}
			fullscreen={true}
			aria-labelledby="contained-modal-title-vcenter"
			centered
			style={{ padding: 0 }}
		>
			<Modal.Body closeButton style={{ padding: 0 }}>
				<CloseButton
					onClick={props.onHide}
					aria-label="Close"
					style={{
						position: 'absolute',
						right: 10,
						top: 10,
						fontSize: '30px',
					}}
				/>
				<img
					src={props.img?.src}
					alt={`mansory ${props.img?.id}`}
					style={{
						width: '100%',
						display: 'block',
						objectFit: 'cover',
					}}
				/>
			</Modal.Body>
		</Modal>
	);
}

export default ImageModal;
