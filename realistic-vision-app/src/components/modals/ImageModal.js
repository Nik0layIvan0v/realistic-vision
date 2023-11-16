import Modal from 'react-bootstrap/Modal';

function ImageModal({ ...props }) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			style={{ padding: 0 }}
		>
			<Modal.Header closeButton></Modal.Header>
			<Modal.Body>
				<img
					src={props.img?.src}
					alt={`mansory ${props.img?.id}`}
					style={{
						width: '100%',
						display: 'block',
						objectFit: 'fill',
					}}
				/>
			</Modal.Body>
		</Modal>
	);
}

export default ImageModal;
