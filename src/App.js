import "bootstrap/dist/css/bootstrap.min.css";
import NavPage from "./page/navbar/NavPage";
import FirstPage from "./page/page1/FirstPage";
import SecondPage from "./page/page2/SecondPage";

function App() {
  return (
    <div>
      <NavPage />
      <FirstPage />
      <SecondPage />
    </div>
  );
}

export default App;
