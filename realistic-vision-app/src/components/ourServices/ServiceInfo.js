import { Container } from "react-bootstrap";

function ServiceInfo({ title, subTitle, description, imageSrc, isSwaped }) {
  const LeftSide = (
    <div className="m-3">
      <h1>{title}</h1>
      <hr />
      <h2>{subTitle}</h2>
      {description?.paragraphs?.map((paragraph, index) => {
        return <p key={index}>{paragraph?.text}</p>;
      })}
    </div>
  );

  const RightSide = (
    <div>
      <img src={imageSrc} />
    </div>
  );

  const content = isSwaped ? (
    <>
      {RightSide}
      {LeftSide}
    </>
  ) : (
    <>
      {LeftSide}
      {RightSide}
    </>
  );

  return <Container className="d-lg-flex m-3 d-sm-block">{content}</Container>;
}

export default ServiceInfo;
