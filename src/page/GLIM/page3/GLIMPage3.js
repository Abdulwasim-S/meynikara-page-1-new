import { Box } from "@chakra-ui/react";
import Carousel from "react-bootstrap/Carousel";
import "./GLIMPage3.css";

const GLIMPage3 = () => {
  return (
    <div>
      <Box className="GLIMPage-3 bg-white">
        <Carousel interval={1500}>
          <Carousel.Item>
            <Box className="slider bg-g-senju m-5">
              Workers can practice tasks in a safe, controlled environment
              through digital twins of their industry. The simulations are
              accessible on various device like web browsers, mobile and VR.
            </Box>
          </Carousel.Item>
          <Carousel.Item>
            <Box className="slider bg-g-senju m-5">
              Studies have shown that companies save money by reducing accidents
              and injuries, according to the National Safety Council workplace
              incidents and accidents costs companies $171 billion in 2019
            </Box>
          </Carousel.Item>
          <Carousel.Item>
            <Box className="slider bg-g-senju m-5">
              XR technologies such as VR and AR have the potential to
              revolutionise workplace training and reduce the number of
              accidents. With XR, workers can be trained in realistic, immersive
              simulations that allow them to practise tasks in a safe and
              controlled.
            </Box>
          </Carousel.Item>
        </Carousel>
        <div className="round-box">
          <div className="m-r bg-namikaze">
            <p className="m-i"></p>
          </div>
          <div className="m-r bg-senju hidden">
            <p className="m-i hidden-p"></p>
          </div>
          <div className="m-r bg-senju">
            <p className="m-i"></p>
          </div>
        </div>
        <br />
      </Box>
    </div>
  );
};

export default GLIMPage3;
