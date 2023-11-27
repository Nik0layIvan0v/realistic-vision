import { useOutletContext } from "react-router-dom";

function AboutUsPage() {
  const [content] = useOutletContext();
  return <h1 className="text-white">This is about page</h1>;
}

export default AboutUsPage;
