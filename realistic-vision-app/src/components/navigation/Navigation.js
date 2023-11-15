import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { LanguageContext } from "../../contexts/LanguageContext";

function Navigation({ expand }) {
  const content = useContext(AppContext);
  const selectedLanguage = useContext(LanguageContext);
  return (
    <Navbar
      className="bg-body-transparent bg-white"
      expand={expand}
      sticky="top"
    >
      <Container fluid>
        <Navbar.Brand>
          <Link className="nav-link" to={`/`}>
            {/* <img
            alt="realistic vision logo"
            src="../../assets/logos/light-bulb.png"
            width="30"
            height="30"
            className="d-inline-block align-top mr-3"
          /> */}
            <p className="d-inline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 700 512"
              >
                <path d="M0 32C0 14.3 14.3 0 32 0H160c17.7 0 32 14.3 32 32V416c0 53-43 96-96 96s-96-43-96-96V32zM223.6 425.9c.3-3.3 .4-6.6 .4-9.9V154l75.4-75.4c12.5-12.5 32.8-12.5 45.3 0l90.5 90.5c12.5 12.5 12.5 32.8 0 45.3L223.6 425.9zM182.8 512l192-192H480c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H182.8zM128 64H64v64h64V64zM64 192v64h64V192H64zM96 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
              </svg>
            </p>
            <p className="d-inline h5">{content.app.title}</p>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <p className="d-inline h5">{content.app.offcanvasNavbarLabel}</p>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {content[selectedLanguage].navlinks.map((navLink, index) => (
                <Link key={index} className="nav-link" to={navLink.link}>
                  {navLink.title}
                </Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
