import Carousel from "react-bootstrap/Carousel";
import photo1 from "../../assets/aa.png";
import photo2 from "../../assets/bb.png";
import photo3 from "../../assets/cc.png";

export const CustomCarousel = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={photo1} alt="First slide" />
        <Carousel.Caption className="text-light">
          <h2>Welcome to our library</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="text-light">
        <img className="d-block w-100" src={photo2} alt="Second slide" />
        <Carousel.Caption>
          <h5>
            The only thing that you absolutely have to know, is the location of
            the library.
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="text-light">
        <img className="d-block w-100" src={photo3} alt="Third slide" />
        <Carousel.Caption className="text-light">
          <h5>Storing the energy that fuels the imagination</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
