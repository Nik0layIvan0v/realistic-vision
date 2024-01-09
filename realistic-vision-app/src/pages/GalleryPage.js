import GalleyMasonry from "../components/mansoryGallery/GalleryMasonry";

function GalleryPage() {
  const images = require.context("../assets/images", true);
  const imageList = images.keys().map((image) => images(image));
  let testImages = imageList.map((image) => {
    return { src: image, title: image.split("/").pop() };
  });

  return <GalleyMasonry imageData={testImages} />;
}

export default GalleryPage;
