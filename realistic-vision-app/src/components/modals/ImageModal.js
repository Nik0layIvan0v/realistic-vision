import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import styles from './ImageModal.module.css';

function ImageModal({ ...props }) {
	// const imageTitle =
	// 	props.img?.title == '' ? 'Default image title' : props.img?.title;
	//<Modal.Header closeButton>{imageTitle}</Modal.Header>
	return (
		<Modal {...props} fullscreen={true} centered style={{ padding: 0 }}>
			<Modal.Body closeButton style={{ padding: 0 }}>
				<CloseButton
					onClick={props.onHide}
					variant="white"
					className={styles['modal-close-button']}
				/>
				<div className="w-90 h-100 bg-black">
					<img
						src={props.img?.src}
						alt={`mansory ${props.img?.id}`}
						onClick={props.onHide}
						className={styles['image-modal-content']}
					/>
				</div>
			</Modal.Body>
		</Modal>
	);
}

export default ImageModal;
