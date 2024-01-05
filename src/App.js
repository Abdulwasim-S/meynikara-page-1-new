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

function App() {
  return (
    <div className="App">
      <div id="home">
        <NavPage />
        <FirstPage />
        <SecondPage />
      </div>
      <div id="services">
        <ThirdPage />
      </div>
      <div id="products">
        <FourthPage />
      </div>
      <ClientPage />
      <div id="contactus">
        <EmailPage />
        <ContactPageComp />
      </div>
      <div>
        <FooterPage />
      </div>
    </div>
  );
}

export default App;
