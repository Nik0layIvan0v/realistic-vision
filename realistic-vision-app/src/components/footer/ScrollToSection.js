import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./ScrollStyles.module.css";

const ScrollToSectionButton = React.forwardRef((props, ref) => {
  const scrollToSectionHandler = (ref) => {
    window.scrollTo({
      top: ref.current?.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={styles["animatedArrow"]}
      ref={ref}
      onClick={() => {
        console.log("Click");
        scrollToSectionHandler(props.sectionRef);
      }}
    >
      {props.children ?? (
        <div style={{ position: "relative" }}>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={styles["animationUpAndDown"]}
            size="xl"
            color={props.color ?? "black"}
          />
        </div>
      )}
    </div>
  );
});

export default ScrollToSectionButton;
