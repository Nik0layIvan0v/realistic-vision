import { useOutletContext } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ServiceInfo from '../components/ourServices/ServiceInfo';
import { NavContext } from '../contexts/NavContext';
import { useContext, useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';

function ServicesPage() {
	const [content] = useOutletContext();
	const [setNavShowContext] = useContext(NavContext);
	const [category, setCategory] = useState(null);
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
		<>
			<div style={{ marginTop: '56px' }}>
				<Nav
					as="ul"
					variant="underline"
					className="justify-content-center mb-3"
					defaultActiveKey="none"
					onSelect={(selectedKey) =>
						setCategory(selectedKey == 'none' ? null : selectedKey)
					}
				>
					{Services?.buttons.map((button, index) => {
						return (
							<Nav.Item key={index} as="li">
								<Nav.Link
									eventKey={button.eventKey}
									className="text-white p-0"
								>
									{button.name}
								</Nav.Link>
							</Nav.Item>
						);
					})}
				</Nav>
				<Container className="text-light" fluid={false}>
					{Services.Sections.map((section, index) => {
						const {
							title,
							subTitle,
							description,
							imageSrc,
							isSwaped,
						} = section;
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
			</div>
		</>
	);
}

export default ServicesPage;
