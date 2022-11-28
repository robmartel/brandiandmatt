import Carousel from 'react-bootstrap/Carousel';
import "../../Styles/Carousel.css";

function CarouselFade() {
  return (
    <div id='carouselDiv'>
        <div className='carouselContainer'>
    <Carousel className='carousel' fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{ maxHeight: 500 }}
        src={require("../../images/ring.jpg")}
        alt="First slide"
      />
      <Carousel.Caption id='carouselCaptionWhite'>
        <h3 className='carouselCaptionHeader'>Ceremony</h3>
        <p>Thomson Farms Cider & Winery</p>
        <p>4057 Third Line West</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{ maxHeight: 500 }}
        src={require("../../images/brandimatt.jpg")}
        alt="Second slide"
      />

      <Carousel.Caption id="carouselCaptionWhite">
        <h3 className="carouselCaptionHeader">Ceremony</h3>
        <p>Will start at 3p.m. sharp</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{ maxHeight: 500 }}
        src={require("../../images/brandimatt2.jpg")}
        alt="Third slide"
      />

      <Carousel.Caption id="carouselCaptionWhite">
        <h3 className="carouselCaptionHeader">Ceremony</h3>
        <p>
          Drinking game of the day will be every time Brandi yells
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  </div>
  );
}

export default CarouselFade;