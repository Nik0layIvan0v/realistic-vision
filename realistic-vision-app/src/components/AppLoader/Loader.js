import styles from './Loader.module.css';
function Loader() {
	return (
		<div className={styles['center']}>
			<div
				style={{
					width: '5rem',
					height: '5rem',
					color: 'white',
				}}
				className="spinner-border text-center"
				role="status"
			>
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
}

export default Loader;
