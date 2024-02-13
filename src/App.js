import "bootstrap/dist/css/bootstrap.min.css";
import NavPage from "./page/navbar/NavPage";
import FirstPage from "./page/page1/FirstPage";
import SecondPage from "./page/page2/SecondPage";
import ThirdPage from "./page/page3/ThirdPage";
import FourthPage from "./page/page4/FourthPage";
import FooterPage from "./page/Footer/FooterPage";
import EmailPage from "./page/emailpage/EmailPage";
import ContactPageComp from "./page/contactpage/ContactPage";
import VerticalFlip from "./page/verticalflippage/VerticalFlip";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import GLIMPage1 from "./page/GLIM/page1/GLIMPage1";
import GLIMPage2 from "./page/GLIM/page2/GLIMPage2";
import GLIMPage3 from "./page/GLIM/page3/GLIMPage3";
import GLIMPage4 from "./page/GLIM/page4/GLIMPage4";
import GLIMPage5 from "./page/GLIM/page5/GLIMPage5";
import GLIMPage6 from "./page/GLIM/page6/GLIMPage6";
import GLIMPage7 from "./page/GLIM/page7/GLIMPage7";
import DummyPage from "./page/DummyPage";
import SHIELDPage1 from "./page/SHIELD/page1/SHIELDPage1";
import SHIELDPage2 from "./page/SHIELD/page2/SHIELDPage2";
import SHIELDPage3 from "./page/SHIELD/page3/SHIELDPage3";
import SHIELDPage4 from "./page/SHIELD/page4/SHIELDPage4";
import SHIELDPage5 from "./page/SHIELD/page5/SHIELDPage5";
import SHIELDPage6 from "./page/SHIELD/page6/SHIELDPage6";
import SHIELDPage7 from "./page/SHIELD/page7/SHIELDPage7";
import AgilePage from "./page/agilepage/AgilePage";
import MEPage1 from "./page/MARKETING/page1/MEPage1";
import MEPage2 from "./page/MARKETING/page2/MEPage2";
import MEPage3 from "./page/MARKETING/page3/MEPage3";
import MEPage4 from "./page/MARKETING/page4/MEpage4";
import MEPage6 from "./page/MARKETING/page6/MEPage6";
import MEPage7 from "./page/MARKETING/page7/MEPage7";
import ARRAPage1 from "./page/ARRA/page1/ARRAPage1";
import ARRAPage3 from "./page/ARRA/page3/ARRAPage3";
import ARRAPage4 from "./page/ARRA/page4/ARRAPage4";
import ARRAPage5 from "./page/ARRA/page5/ARRAPage5";
import MK1 from "./page/METAKalvi/page1/MK1";
import MK2 from "./page/METAKalvi/page2/MK2";
import Mk3 from "./page/METAKalvi/page3/MK3";
import MK4 from "./page/METAKalvi/page4/MK4";
import Mk5 from "./page/METAKalvi/page5/MK5";
import Q1 from "./page/Qualisence/page1/Q1";
import Q2 from "./page/Qualisence/page2/Q2";
import Q4 from "./page/Qualisence/page4/Q4";
import Q3 from "./page/Qualisence/page3/Q3";
import Q5 from "./page/Qualisence/page5/Q5";
import VideoPage from "./page/METAKalvi/videoPage/VideoPage";
import NavPage2 from "./component/TempNavBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="bg-meynikara">
              <NavPage />
              <FirstPage />
              <SecondPage />
              <ThirdPage />
              <FourthPage />
              <VerticalFlip />
              <AgilePage />
            </div>
          }
        />
        <Route
          path="/glim"
          element={
            <>
              <NavPage2 />
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
            <>
              <NavPage2 />
              <SHIELDPage1 />
              <SHIELDPage2 />
              <SHIELDPage3 />
              <SHIELDPage4 />
              <SHIELDPage5 />
              <SHIELDPage6 />
              <SHIELDPage7 />
            </>
          }
        />
        <Route
          path="/marketing&events"
          element={
            <>
              <NavPage2 />
              <MEPage1 />
              <MEPage2 />
              {/* <MEPage3 /> */}
              {/* <MEPage4 /> */}
              <MEPage6 />
              <MEPage7 />
            </>
          }
        />
        <Route
          path="/arra"
          element={
            <>
              <NavPage />
              <ARRAPage1 />
              <ARRAPage3 />
              <ARRAPage4 />
              <ARRAPage5 />
            </>
          }
        />
        <Route
          path="/metakalvi"
          element={
            <>
              <NavPage />
              <MK1 />
              <MK2 />
              <VideoPage />
              <MK4 />
              <Mk3 />
              <Mk5 />
            </>
          }
        />
        <Route
          path="/qualisence"
          element={
            <>
              <NavPage />
              <Q1 />
              <Q2 />
              <Q3 />
              <Q5 />
              <Q4 />
            </>
          }
        />
        <Route
          path="/:id"
          element={
            <>
              <NavPage />
              <DummyPage />
            </>
          }
        />
      </Routes>

      <div id="contact-us">
        <EmailPage />
      </div>
      <ContactPageComp />
      <FooterPage />
    </div>
  );
}

export default App;
