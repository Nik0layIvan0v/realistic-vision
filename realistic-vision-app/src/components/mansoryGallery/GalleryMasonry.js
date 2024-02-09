import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useContext, useEffect, useState } from "react";
import ImageModal from "../modals/ImageModal";
import { useSpring, animated } from "react-spring";
import { NavContext } from "../../contexts/NavContext";

function GalleyMasonry({ imageData }) {
  const [imageToShow, setImageToShow] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [setNavShowContext] = useContext(NavContext);

  const controlNavbar = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 100) {
      return setNavShowContext(false);
    }

    return setNavShowContext(true);
  };

  const zoomImage = (img) => {
    setImageToShow(img);
    setModalShow(true);
  };

  const spring = useSpring({
    from: { opacity: 0, transform: "translateY(100%)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  useEffect(() => {
    setNavShowContext(false);
    window.addEventListener("scroll", controlNavbar);
    const fetchData = async () => {
      setLoading(false);
    };

    fetchData();
    return () => {
      setNavShowContext(true);
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ImageModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          setImageToShow(null);
        }}
        img={imageToShow}
      />
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        style={{ marginTop: "56px" }}
      >
        <Masonry gutter="1px">
          {imageData.map((image, index) => (
            <animated.div
              key={index}
              style={{
                width: `100%`,
                height: `auto`,
                scrollbarWidth: "thin",
                ...spring,
              }}
            >
              <img
                src={image.src}
                key={index}
                alt={`mansory ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                onClick={() => zoomImage(image)}
              />
            </animated.div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
}

export default GalleyMasonry;
