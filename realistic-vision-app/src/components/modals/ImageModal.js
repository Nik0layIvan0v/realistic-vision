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
					variant="white"
					style={{
						position: 'absolute',
						right: 10,
						top: 10,
						fontSize: '30px',
					}}
				/>
				<div className="w-90 h-100 bg-black">
					<img
						src={props.img?.src}
						alt={`mansory ${props.img?.id}`}
						style={{
							display: 'block',
							objectFit: 'contain',
							height: '100%',
							width: '100%',
							marginLeft: 'auto',
							marginRight: 'auto',
							margin: 'auto',
						}}
					/>
				</div>
			</Modal.Body>
		</Modal>
	);
}

export default ImageModal;
