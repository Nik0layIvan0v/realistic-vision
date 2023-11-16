import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css';

function Navigation({ expand, lang, onLangChange, ...app }) {
	return (
		<Navbar
			className="bg-body-transparent bg-white"
			expand={expand}
			sticky="top"
		>
			<Container fluid>
				<Navbar.Brand>
					<Link className="nav-link" to={`/`}>
						{app.logo ? (
							<img
								alt="realistic vision logo"
								src={app.logo}
								width="30"
								height="30"
								className="d-inline-block align-top mr-3"
							/>
						) : null}
						<p className="d-inline h5"> {app.title}</p>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls={`offcanvasNavbar-expand-${expand} basic-navbar-nav rounded bg-white border border-0`}
				>
					<FontAwesomeIcon icon={faBars} />
				</Navbar.Toggle>
				<Navbar.Offcanvas
					id={`offcanvasNavbar-expand-${expand}`}
					aria-labelledby={`offcanvasNavbarLabel-expand-${expand} basic-navbar-nav`}
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title
							id={`offcanvasNavbarLabel-expand-${expand}`}
						>
							<p className="d-inline h5">
								{app.offcanvasNavbarLabel}
							</p>
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3 align-items-center">
							{app.navlinks[lang].map((navLink, index) => (
								<Link
									key={index}
									className="nav-link display-1"
									to={navLink.link}
								>
									<i className="fa-solid fa-user" />
									{navLink.title}
								</Link>
							))}
							<div className="nav-link d-flex">
								<img
									onClick={() => onLangChange('bg')}
									className="flex-grow-1 pe-1 align-items-center btn"
									src="https://flagsapi.com/BG/shiny/24.png"
								/>
								<img
									onClick={() => onLangChange('en')}
									className="flex-grow-1 pe-1 align-items-center btn"
									src="https://flagsapi.com/US/shiny/24.png"
								/>
							</div>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
}

export default Navigation;
