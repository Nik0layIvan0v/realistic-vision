import office from "../assets/backgrounds/office-background.jpg";
import "./Pages.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import {
  faFacebook,
  faFacebookMessenger,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ContactUsPage.module.css";

function ContactUsPage() {
  const [formState, setFormState] = useState({});
  const handleChange = (event) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <div
      className="left-half-black"
      style={{
        background: `url(${office}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "fill",
        minHeight: "100vh",
        padding: 0,
        margin: 0,
        position: "relative",
      }}
    >
      <div className={`row ${styles["contact-us-form-wrapper"]}`}>
        <div className="col-12 col-lg-4 col-sm-12 col-md-5 mt-5">
          <Container>
            <div className="col-12 mt-5 text-center">
              <h1 className="text-center">OFFICE LOCATION</h1>
              <hr className="w-25 m-auto mb-3" />
              <ul style={{ listStyleType: "none" }}>
                <li>1 Druzba str, Sofia bulgaria</li>
                <li>office@inceptbg.com</li>
                <li>+35988897987987</li>
              </ul>
            </div>
            <div className="col-12 mt-3 text-center">
              <h1 className="text-center">OPENING HOURS</h1>
              <hr className="w-25 m-auto mb-3" />
              <ul style={{ listStyleType: "none" }}>
                <li>Mon - Fri: 7am - 10pm</li>
                <li>Saturday: 8am - 10pm</li>
                <li>Sunday: 8am - 11pm</li>
              </ul>
            </div>
            <div className="col-12 mt-4 mb-3 text-center d-flex justify-content-evenly w-100">
              <Link to={"https://www.facebook.com/bgautofun/"}>
                <FontAwesomeIcon size="2x" icon={faFacebook} color="white" />
              </Link>
              <Link to={"https://www.linkedin.com/"}>
                <FontAwesomeIcon size="2x" icon={faLinkedin} color="white" />
              </Link>
              <Link to={"https://www.messenger.com/?locale=bg_BG"}>
                <FontAwesomeIcon
                  size="2x"
                  icon={faFacebookMessenger}
                  color="white"
                />
              </Link>
              <Link to={"https://www.youtube.com/"}>
                <FontAwesomeIcon size="2x" icon={faYoutube} color="white" />
              </Link>
            </div>
          </Container>
        </div>
        <div className="col-12 col-lg-4 col-sm-12 col-md-5 mt-0">
          <Container fluid>
            <Form
              method="GET"
              action={`mailto:admin@realistic-vision.com?subject=${formState.subject}&body=${formState.body}`}
              encType="text/plain"
            >
              <Form.Group className="mb-3 mt-3">
                <h1 className="text-center">FIND US</h1>
                <hr className="w-25 m-auto" />
              </Form.Group>
              <FloatingLabel label="Name*" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Name*"
                  required
                  className="bg-dark text-light"
                  name="name"
                  value={formState.name ?? ""}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel label="Email Address*" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email*"
                  required
                  className="bg-dark text-light"
                  name="email"
                  value={formState.email ?? ""}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel label="Subject" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  required
                  className="bg-dark text-light"
                  name="subject"
                  value={formState.subject ?? ""}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel label="Message*" className="mb-3">
                <Form.Control
                  as="textarea"
                  required
                  placeholder="Message"
                  rows={50}
                  className="bg-dark text-light"
                  style={{ height: "134px", resize: "none" }}
                  name="body"
                  value={formState.body ?? ""}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <Form.Group className="mb-3 d-flex justify-content-center">
                <Button type="submit" variant="dark border" className="w-75 ">
                  SEND
                </Button>
              </Form.Group>
            </Form>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
