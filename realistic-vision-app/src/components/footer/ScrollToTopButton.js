import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ScrollStyles.module.css';
import React from 'react';
const ScrollToTopButton = React.forwardRef((props, ref) => {
	const scrollToIntoViewHandler = (ref, props) => {
		props.setMenuColor(props.color);
		ref.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	};

	return (
		<div
			ref={ref}
			style={{
				position: 'absolute',
				bottom: '3px',
				width: '100%',
				display: 'flex',
				justifyItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div style={{ position: 'relative' }}>
				<FontAwesomeIcon
					icon={faChevronUp}
					className={styles['animationUpAndDown']}
					size="xl"
					color={props.color ?? 'black'}
					onClick={() =>
						scrollToIntoViewHandler(props.sectionRef, props)
					}
				/>
			</div>
		</div>
	);
});

export default ScrollToTopButton;
