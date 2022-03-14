import Footer from "./layout/Footer";
import Head from "./jasa/Head";
import Banner from "./jasa/Banner";
import Article from "./jasa/Article";
import Media from "./home/Media";
import Navbar from "./jasa/Navbar";
import Brand from "./jasa/Brand";
import { useParams } from "react-router-dom";

const Jasa = () => {
  const params = useParams();
  const data = params.slug;
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Head data={data} />
      <Banner />
      <Article data={data} />
      <Brand />
      <Media />
      <Footer />
    </div>
  );
};

export default Jasa;
