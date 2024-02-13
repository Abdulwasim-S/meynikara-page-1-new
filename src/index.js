import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollTop from "./component/ScrollPrevent/ScrollTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <div className="App">
      <Router>
        <ScrollTop />
        <App />
        <ToastContainer />
      </Router>
    </div>
  </ChakraProvider>
);
