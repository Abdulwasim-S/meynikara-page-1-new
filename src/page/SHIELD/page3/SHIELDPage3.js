import { Box } from "@chakra-ui/react";
import Carousel from "react-bootstrap/Carousel";
import "./GLIMPage3.css";

const SHIELDPage3 = () => {
  return (
    <div>
      <Box className="GLIMPage-3 bg-white">
        <Carousel interval={5000}>
          <Carousel.Item>
            <Box className="slider bg-g-senju s1">
              Preventive Measures : Offering gamified safety tours, immersive
              training, personalised OSH sessions, and continuous PPE compliance
              for a safety-centric workplace culture.
            </Box>
          </Carousel.Item>
          <Carousel.Item>
            <Box className="slider bg-g-senju s2">
              Continuous Monitoring : Utilise our exclusive AI detection
              algorithms to monitor workers' adherence to PPE standards and
              their access to hazardous areas on the job floor.
            </Box>
          </Carousel.Item>
          <Carousel.Item>
            <Box className="slider bg-g-senju s3">
              Continuous Monitoring : Utilise our exclusive AI detection
              algorithms to monitor workers' adherence to PPE standards and
              their access to hazardous areas on the job floor.
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

export default SHIELDPage3;
