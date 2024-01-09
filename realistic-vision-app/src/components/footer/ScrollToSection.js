import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './ScrollStyles.module.css';

const ScrollToSectionButton = React.forwardRef((props, ref) => {
	const scrollToSectionHandler = (ref) => {
		window.scrollTo({
			top: ref.current?.offsetTop,
			behavior: 'smooth',
		});
	};

	return (
		<div className={styles['animatedArrow']} ref={ref}>
			{props.children ?? (
				<div style={{ position: 'relative' }}>
					<FontAwesomeIcon
						onClick={() => scrollToSectionHandler(props.sectionRef)}
						icon={faChevronDown}
						className={styles['animationUpAndDown']}
						size="xl"
						color={props.color ?? 'black'}
					/>
				</div>
			)}
		</div>
	);
});

export default ScrollToSectionButton;
