import { useOutletContext } from "react-router-dom";
import { Container } from "react-bootstrap";
import ServiceInfo from "../components/ourServices/ServiceInfo";
function ServicesPage() {
  const [content] = useOutletContext();
  const { Services } = content;

  console.log(content);
  return (
    <Container className="text-light" fluid={false}>
      {Services.Sections.map((section, index) => {
        const { title, subTitle, description, imageSrc, isSwaped } = section;
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
