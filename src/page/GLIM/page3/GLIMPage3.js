import { Box } from "@chakra-ui/react";
import Carousel from "react-bootstrap/Carousel";
import "./GLIMPage3.css";

const GLIMPage3 = () => {
  return (
    <Box className="GLIMPage-3 bg-white" paddingTop={{ lg: "25px" }}>
      <div className="video-frame ">
        <div className="gp5-video bg-meynikara"></div>
      </div>
      <br />
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
  );
};

export default GLIMPage3;
