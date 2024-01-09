import styles from './VideoContainer.module.css';
function VideoContainer({
	source,
	type = 'video/mp4',
	caption,
	poster,
	className,
}) {
	return (
		<div className={`${styles['video-wrapper']} ${className}`}>
			<video
				playsInline
				autoPlay
				muted
				loop
				poster={poster}
				className={styles['video-player']}
			>
				<source src={source} type={type} />
				Your browser does not support the video tag.
			</video>
			<div className={styles['video-header']}>{caption}</div>
		</div>
	);
}

export default VideoContainer;
