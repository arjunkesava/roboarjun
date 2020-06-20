import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

const generateClassName = createGenerateClassName({
  productionPrefix: "c",
});

function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Header />
      <Home />
      <Footer />
    </StylesProvider>
  );
}

export default App;
