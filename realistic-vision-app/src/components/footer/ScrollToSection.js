import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ScrollToSectionButton = React.forwardRef((props, ref) => {
	const scrollToSectionHandler = (ref) => {
		window.scrollTo({
			top: ref.current?.offsetTop,
			behavior: 'smooth',
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
				textShadow: '#0a0a0a 0px 0px 5px',
			}}
		>
			{props.children ?? (
				<FontAwesomeIcon
					onClick={() => scrollToSectionHandler(props.sectionRef)}
					icon={faChevronDown}
					style={{
						cursor: 'pointer',
						filter: 'drop-shadow(0 0 1rem black)',
					}}
					size="xl"
					color={props.color ?? 'black'}
				/>
			)}
		</div>
	);
});

export default ScrollToSectionButton;
