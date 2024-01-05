import "bootstrap/dist/css/bootstrap.min.css";
import NavPage from "./page/navbar/NavPage";
import FirstPage from "./page/page1/FirstPage";
import SecondPage from "./page/page2/SecondPage";
import ThirdPage from "./page/page3/ThirdPage";
import FourthPage from "./page/page4/FourthPage";

function App() {
  return (
    <div>
      <NavPage />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
    </div>
  );
}

export default App;
