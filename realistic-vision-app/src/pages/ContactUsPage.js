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
import { useOutletContext } from "react-router-dom";

function ContactUsPage() {
  const [content] = useOutletContext();
  const [formState, setFormState] = useState({});
  const { Contacts: pageContent } = content;
  const locationSection = { ...pageContent.location };
  const workingScheduleSection = { ...pageContent.workingHours };
  const iconLinksSection = { ...pageContent.iconLinks };
  const formSection = { ...pageContent.form };

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
        background: `url(${office})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        padding: 0,
        margin: 0,
        position: "relative",
      }}
    >
      <div className={`row ${styles["contact-us-form-wrapper"]}`}>
        <div className="col-12 col-lg-4 col-sm-12 col-md-5 mt-5">
          <Container>
            <div className="col-12 mt-5 text-center">
              <h1 className="text-center">{locationSection?.title}</h1>
              <hr className="w-25 m-auto mb-3" />
              <ul style={{ listStyleType: "none" }}>
                <li>{locationSection?.address}</li>
                <li>{locationSection?.email}</li>
                <li>{locationSection?.phoneNumber}</li>
              </ul>
            </div>
            <div className="col-12 mt-3 text-center">
              <h1 className="text-center">{workingScheduleSection?.title}</h1>
              <hr className="w-25 m-auto mb-3" />
              <ul style={{ listStyleType: "none" }}>
                {workingScheduleSection?.hoursList?.map((listItem, index) => {
                  return <li key={index}>{listItem}</li>;
                })}
              </ul>
            </div>
            <div className="col-12 mt-4 mb-3 text-center d-flex justify-content-evenly w-100">
              <Link to={iconLinksSection?.facebook}>
                <FontAwesomeIcon size="2x" icon={faFacebook} color="white" />
              </Link>
              <Link to={iconLinksSection?.linkedin}>
                <FontAwesomeIcon size="2x" icon={faLinkedin} color="white" />
              </Link>
              <Link to={iconLinksSection?.messenger}>
                <FontAwesomeIcon
                  size="2x"
                  icon={faFacebookMessenger}
                  color="white"
                />
              </Link>
              <Link to={iconLinksSection?.youtube}>
                <FontAwesomeIcon size="2x" icon={faYoutube} color="white" />
              </Link>
            </div>
          </Container>
        </div>
        <div className="col-12 col-lg-4 col-sm-12 col-md-5 mt-0">
          <Container fluid>
            <Form
              action={formSection.action
                ?.replace("%SUBJECT%", formState.subject)
                ?.replace("%BODY%", formState.body)}
              method="GET"
              encType="multipart/form-data"
            >
              <Form.Group className="mb-3 mt-3">
                <h1 className="text-center">{formSection?.title}</h1>
                <hr className="w-25 m-auto" />
              </Form.Group>
              <FloatingLabel
                label={formSection?.nameField?.label}
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder={formSection?.nameField?.placeholder}
                  className="bg-dark text-light"
                  name="name"
                  value={formState.name ?? ""}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel
                label={formSection?.emailField?.label}
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder={formSection?.emailField?.placeholder}
                  required
                  className="bg-dark text-light"
                  name="email"
                  value={formState.email ?? ""}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel
                label={formSection?.subjectField?.label}
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder={formSection?.subjectField?.placeholder}
                  required
                  className="bg-dark text-light"
                  name="subject"
                  value={formState.subject ?? ""}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <FloatingLabel
                label={formSection?.bodyField?.label}
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  required
                  placeholder={formSection?.bodyField?.placeholder}
                  rows={50}
                  className="bg-dark text-light"
                  style={{
                    height: "134px",
                    resize: "none",
                  }}
                  name="body"
                  value={formState.body ?? ""}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <Form.Group className="mb-3 d-flex justify-content-center">
                <Button type="submit" variant="dark border" className="w-75 ">
                  {formSection.submitBtnText}
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
