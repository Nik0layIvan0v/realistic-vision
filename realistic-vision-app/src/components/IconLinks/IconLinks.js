import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faFacebookMessenger,
	faLinkedin,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

function IconLinks({ iconsColor = 'white' }) {
	const [content] = useOutletContext();
	const { Contacts } = content;
	const iconLinksSection = { ...Contacts.iconLinks };

	return (
		<div
			style={{
				position: 'absolute',
				bottom: '25px',
				right: '18px',
				zIndex: 10,
			}}
		>
			<div className="col-12 text-center d-flex flex-column justify-content-between h-100">
				<Link to="/contact-us">
					<FontAwesomeIcon
						size="2x"
						icon={faEnvelope}
						color={iconsColor}
					/>
				</Link>
				<Link to={iconLinksSection?.facebook}>
					<FontAwesomeIcon
						size="2x"
						icon={faFacebook}
						color={iconsColor}
					/>
				</Link>
				<Link to={iconLinksSection?.linkedin}>
					<FontAwesomeIcon
						size="2x"
						icon={faLinkedin}
						color={iconsColor}
					/>
				</Link>
				<Link to={iconLinksSection?.messenger}>
					<FontAwesomeIcon
						size="2x"
						icon={faFacebookMessenger}
						color={iconsColor}
					/>
				</Link>
				<Link to={iconLinksSection?.youtube}>
					<FontAwesomeIcon
						size="2x"
						icon={faYoutube}
						color={iconsColor}
					/>
				</Link>
			</div>
		</div>
	);
}

export default IconLinks;
