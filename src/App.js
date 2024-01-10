import "bootstrap/dist/css/bootstrap.min.css";
import NavPage from "./page/navbar/NavPage";
import FirstPage from "./page/page1/FirstPage";
import SecondPage from "./page/page2/SecondPage";
import ThirdPage from "./page/page3/ThirdPage";
import FourthPage from "./page/page4/FourthPage";
import FooterPage from "./page/Footer/FooterPage";
import EmailPage from "./page/emailpage/EmailPage";
import ContactPageComp from "./page/contactpage/ContactPage";
import ClientPage from "./page/clientpage/ClientPage";
import "./App.css";
import VerticalFlip from "./page/verticalflippage/VerticalFlip";
import GLIMPage1 from "./page/GLIM/page1/GLIMPage1";
import GLIMPage2 from "./page/GLIM/page2/GLIMPage2";
import GLIMPage3 from "./page/GLIM/page3/GLIMPage3";
import GLIMPage4 from "./page/GLIM/page4/GLIMPage4";
import GLIMPage5 from "./page/GLIM/page5/GLIMPage5";
import GLIMPage6 from "./page/GLIM/page6/GLIMPage6";
import { Route, Routes } from "react-router-dom";
import GLIMPage7 from "./page/GLIM/page7/GLIMPage7";

function App() {
  return (
    <div className="App">
      <NavPage />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="bg-meynikara">
              <FirstPage />
              <SecondPage />
              <ThirdPage />
              <FourthPage />
              <VerticalFlip />
              <ClientPage />
              <EmailPage />
              <ContactPageComp />
            </div>
          }
        />
        <Route
          path="/glim"
          element={
            <>
              <GLIMPage1 />
              <GLIMPage2 />
              <GLIMPage3 />
              <GLIMPage4 />
              <GLIMPage5 />
              <GLIMPage6 />
              <GLIMPage7 />
            </>
          }
        />
      </Routes>
      <FooterPage />
    </div>
  );
}

export default App;
