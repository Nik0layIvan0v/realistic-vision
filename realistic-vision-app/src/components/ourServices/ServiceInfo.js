import { Container } from "react-bootstrap";

function ServiceInfo(section) {
  console.log(section);
  return (
    <Container className="d-flex">
      <div>
        <img src={section.imageSrc} alt={section.title} />
      </div>
      <div>
        <h1>{section.title}</h1>
      </div>
    </Container>
  );
}

export default ServiceInfo;
