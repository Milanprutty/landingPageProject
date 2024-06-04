import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.css";
import { data } from "./CarouselData";
import Button from "../ReusableButton/Button";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        {data.map((data, i) => {
          return (
            <div key={i} className="dataContainer">
              <div className="carouselLeftSide">
                <div>
                  {data.headerText}
                  <p>{data.spanText}</p>
                </div>
                <div>{data.descriptionText}</div>
                <div style={{ paddingTop: "5px" }}>
                  <Button variant="primary">Register</Button>
                </div>
              </div>
              <div className="carouselRightSide">
                <img src={data.img} />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
