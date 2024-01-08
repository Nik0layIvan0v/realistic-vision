import office from "../assets/backgrounds/office-background.jpg";
function ContactUsPage() {
  return (
    <div
      style={{
        background: `url(${office}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        padding: 0,
        margin: 0,
        position: "relative",
      }}
    >
      <h1
        className="text-white"
        style={{
          position: "absolute",
          top: "5%",
          fontFamily: "fantasy",
          fontSize: "35px",
          width: "100%",
          textAlign: "center",
        }}
      >
        This is about page
      </h1>
    </div>
  );
}

export default ContactUsPage;
