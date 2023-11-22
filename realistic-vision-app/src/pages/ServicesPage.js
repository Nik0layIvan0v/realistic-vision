import { useOutletContext } from "react-router-dom";
import { Container } from "react-bootstrap";
import ServiceInfo from "../components/ourServices/ServiceInfo";
function ServicesPage() {
  const [content] = useOutletContext();
  const { Services } = content;
  console.log(Services.Sections);
  return (
    <Container className="text-light">
      {Services.Sections.map((section) => (
        <ServiceInfo section={section} />
      ))}
    </Container>
  );
}

export default ServicesPage;
