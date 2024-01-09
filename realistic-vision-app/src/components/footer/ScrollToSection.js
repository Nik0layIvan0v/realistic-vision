import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ScrollToSectionButton = React.forwardRef((props, ref) => {
  const scrollToSectionHandler = (ref) => {
    window.scrollTo({
      top: ref.current?.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        bottom: "3px",
        width: "100%",
        display: "flex",
        justifyItems: "center",
        justifyContent: "center",
      }}
    >
      {props.children ?? (
        <FontAwesomeIcon
          onClick={() => scrollToSectionHandler(props.sectionRef)}
          icon={faChevronDown}
          size="2xl"
          style={{ cursor: "pointer" }}
          color={props.color ?? "black"}
        />
      )}
    </div>
  );
});

export default ScrollToSectionButton;
