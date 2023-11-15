import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function Navigation({ expand }) {
  return (
    <Navbar
      className="bg-body-transparent bg-white"
      expand={expand}
      sticky="top"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt="realistic vision logo"
            src="../../assets/logos/light-bulb.png"
            width="30"
            height="30"
            className="d-inline-block align-top mr-3"
          />
          <p className="d-inline ml-3">Realistic-Vision</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Welcome
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link className="nav-link" to={`/`}>
                Начало
              </Link>
              <Link className="nav-link" to={`/our-gallery`}>
                Галерия
              </Link>
              <Link className="nav-link" to={`/our-services`}>
                Услуги
              </Link>
              <Link className="nav-link" to={`/about-us`}>
                За Нас
              </Link>
              <Link className="nav-link" to={`/contact-us`}>
                Контакти
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
