import { useOutletContext } from "react-router-dom";

function AboutUsPage() {
  const [content] = useOutletContext();
  console.log(content);
  return <h1>This is about page</h1>;
}

export default AboutUsPage;
