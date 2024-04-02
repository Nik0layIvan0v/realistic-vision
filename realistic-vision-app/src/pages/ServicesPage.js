import { useOutletContext } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ServiceInfo from '../components/ourServices/ServiceInfo';
import { NavContext } from '../contexts/NavContext';
import { useContext, useEffect } from 'react';

function ServicesPage() {
	const [content] = useOutletContext();
	const [setNavShowContext] = useContext(NavContext);
	const { Services } = content;

	const controlNavbar = () => {
		if (window.scrollY >= 18) {
			return setNavShowContext(false);
		}

		return setNavShowContext(true);
	};

	useEffect(() => {
		controlNavbar();
		window.addEventListener('scroll', controlNavbar);
		return () => {
			setNavShowContext(true);
			window.removeEventListener('scroll', controlNavbar);
		};
	}, []);

	return (
		<Container className="text-light" fluid={false}>
			{Services.Sections.map((section, index) => {
				const { title, subTitle, description, imageSrc, isSwaped } =
					section;
				return (
					<ServiceInfo
						key={index}
						title={title}
						subTitle={subTitle}
						description={description}
						imageSrc={imageSrc}
						isSwaped={isSwaped}
					/>
				);
			})}
		</Container>
	);
}

export default ServicesPage;
