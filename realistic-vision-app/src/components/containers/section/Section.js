import React from "react";

const Section = React.forwardRef((props, ref) => {
  return (
    <section
      style={{
        padding: "0px",
        minHeight: "57rem",
        background: props.backgroundColor ?? "black",
        position: "relative",
      }}
      ref={ref}
    >
      {props.children}
    </section>
  );
});

export default Section;