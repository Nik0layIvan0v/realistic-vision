import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useEffect, useState } from "react";
import ImageModal from "../modals/ImageModal";
import { useSpring, animated } from "react-spring";
import { getFileObjects } from "../../contexts/AppContext";

function GalleyMasonry({ imageData }) {
  const controlNavbar = () => {
    console.log("HERE!!!");
    // if (window.scrollY > 10000) {
    //   return setNavHideContext(false);
    // }

    // return setNavHideContext(true);
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

  const [imageToShow, setImageToShow] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    const fetchData = async () => {
      setLoading(false);
    };

    fetchData();
    return () => {
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
