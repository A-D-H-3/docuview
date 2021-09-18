import React from "react";
import { Container } from "react-bootstrap";
import "./app.css";
import Footer from "./sectioning/footer/footer";
import Header from "./sectioning/header/header";
import Main from "./sectioning/main/main";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
