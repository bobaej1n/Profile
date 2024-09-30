import "../../styles/MainCarousel.css";
import Carousel from "react-material-ui-carousel/dist";

const MainCarousel = () => {
  return (
    <div id="carousel">
      <div id="carouselTitle">It&#39;s Summer!</div>
      <Carousel navButtonsAlwaysVisible="true">
        {imgList.map((item, i) => (
          <img
            key={i}
            src={item.url}
            loading="lazy"
            decoding="async"
            width="100%"
            height="500px"
          ></img>
        ))}
      </Carousel>
    </div>
  );
};

const imgList = [
  {
    name: "jeju",
    url: "../../src/assets/images/jeju.jpg",
  },
  {
    name: "penguin",
    url: "../../src/assets/images/penguin.jpg",
  },
  {
    name: "watermelon",
    url: "../../src/assets/images/watermelon.jpg",
  },
  {
    name: "surfing",
    url: "../../src/assets/images/surfing.jpg",
  },
];

export default MainCarousel;
