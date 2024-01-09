import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const ScrollToTopButton = ({ color }) => {
	// const [showScrollTopButton, setShowScrollTopButton] = useState(false);

	// useEffect(() => {
	//   window.addEventListener("scroll", () => {
	//     if (window.scrollY > 300) {
	//       setShowScrollTopButton(true);
	//     } else {
	//       setShowScrollTopButton(false);
	//     }
	//   });
	// }, []);

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div
			style={{
				position: 'absolute',
				bottom: '3px',
				width: '100%',
				display: 'flex',
				justifyItems: 'center',
				justifyContent: 'center',
			}}
		>
			<FontAwesomeIcon
				icon={faChevronUp}
				style={{
					cursor: 'pointer',
					filter: 'drop-shadow(0 0 1rem black)',
				}}
				size="xl"
				color={color ?? 'black'}
				className="m-0 p-0"
				onClick={scrollTop}
			/>
		</div>
	);
};

export default ScrollToTopButton;
