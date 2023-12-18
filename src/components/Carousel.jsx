import Carousel from "react-bootstrap/Carousel";
// Update the paths after moving the images directory inside src/
import Image1 from "../images/DSC_0004.jpg";
import Image2 from "../images/DSC_0018.jpg";
import Image3 from "../images/DSC_0011.jpg";

function CarouselComponent() {
  return (
    <Carousel data-bs-theme="white">
      <Carousel.Item>
        <img className="d-block w-100" src={Image1} alt="First slide" />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Image2} alt="Second slide" />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Image3} alt="Third slide" />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
