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
import DummyPage from "./page/DummyPage";
import SHIELDPage1 from "./page/SHIELD/page1/SHIELDPage1";
import SHIELDPage2 from "./page/SHIELD/page2/SHIELDPage2";
import SHIELDPage3 from "./page/SHIELD/page3/SHIELDPage3";
import SHIELDPage4 from "./page/SHIELD/page4/SHIELDPage4";
import SHIELDPage5 from "./page/SHIELD/page5/SHIELDPage5";
import SHIELDPage6 from "./page/SHIELD/page6/SHIELDPage6";
import SHIELDPage7 from "./page/SHIELD/page7/SHIELDPage7";

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
        <Route
          path="/shield"
          element={
            <div>
              <SHIELDPage1 />
              <SHIELDPage2 />
              <SHIELDPage3 />
              <SHIELDPage4 />
              <SHIELDPage5 />
              <SHIELDPage6 />
              <SHIELDPage7 />
            </div>
          }
        />
        <Route path="/:id" element={<DummyPage />} />
      </Routes>

      <EmailPage />
      <ContactPageComp />
      <FooterPage />
    </div>
  );
}

export default App;
