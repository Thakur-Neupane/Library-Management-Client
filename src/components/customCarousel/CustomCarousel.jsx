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
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="text-light">
        <img className="d-block w-100" src={photo2} alt="Second slide" />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="text-light">
        <img className="d-block w-100" src={photo3} alt="Third slide" />
        <Carousel.Caption className="text-light">
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
