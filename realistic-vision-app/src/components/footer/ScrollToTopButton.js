import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ScrollStyles.module.css';
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
			<div style={{ position: 'relative' }}>
				<FontAwesomeIcon
					icon={faChevronUp}
					className={styles['animationUpAndDown']}
					size="xl"
					color={color ?? 'black'}
					onClick={scrollTop}
				/>
			</div>
		</div>
	);
};

export default ScrollToTopButton;
