import React from "react";
import { Container } from "react-bootstrap";

function ServiceInfo({ title, subTitle, description, imageSrc, isSwaped }) {
  const LeftSide = (
    <div className="m-3 col">
      <h1>{title}</h1>
      <hr />
      <h2>{subTitle}</h2>
      {description?.paragraphs?.map((paragraph, index) => {
        let formatedText = `<span>${paragraph.text}</span>`;
        for (const boldedWord of paragraph.boldedWords) {
          formatedText = formatedText.replace(
            boldedWord,
            `<b>${boldedWord}</b>`
          );
        }

        return (
          <p key={index} dangerouslySetInnerHTML={{ __html: formatedText }} />
        );
      })}
    </div>
  );

  const RightSide = (
    <div className="m-3 col">
      <img width={"100%"} src={imageSrc} />
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

  return (
    <Container className="d-lg-flex m-3 d-sm-block w-100 row">
      {content}
    </Container>
  );
}

export default ServiceInfo;
