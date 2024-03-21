import Banner from "../../components/Banner/Banner";
import BannerImg from "../../assets/bannerhome.png";
import Card from "../../components/Card/Card";

const Content = "Chez vous, partout et ailleurs";

function Home() {
  return (
    <>
      <Banner imgUrl={BannerImg} content={Content} />
      <Card />
    </>
  );
}

export default Home;
