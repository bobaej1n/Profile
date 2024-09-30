import Header from "../components/Main/Header";
import MainSection from "../components/Main/MainSection";
import Footer from "../components/Main/Footer";

const MainPage = () => {
  const styleObj = {
    minWidth: "1340px",
    display: "block",
  };

  return (
    <div style={styleObj}>
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
};

export default MainPage;
