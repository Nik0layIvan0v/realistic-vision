import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Measure from "react-measure";
import { useState } from "react";
import ImageModal from "../modals/ImageModal";

function GalleyMasonry({ imageData }) {
  const [imageToShow, setImageToShow] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const zoomImage = (img) => {
    setImageToShow(img);
    setModalShow(true);
  };

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
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="5px">
          {imageData.map((img, index) => (
            <Measure key={index}>
              {({ measureRef }) => (
                <div ref={measureRef}>
                  <img
                    src={img.src}
                    key={index}
                    alt={`mansory ${index + 1}`}
                    style={{
                      width: "100%",
                      display: "block",
                      objectFit: "fill",
                    }}
                    onClick={() => zoomImage(img)}
                  />
                </div>
              )}
            </Measure>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
}

export default GalleyMasonry;
