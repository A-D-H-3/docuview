import React from "react";
import "./app.css";
import Footer from "./sectioning/footer/footer";
import Header from "./sectioning/header/header";
import Main from "./sectioning/main/main";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="background">
      <Container fluid>
        <Row>
          <Header />
          <Main />
          <Footer />
        </Row>
      </Container>
    </div>
  );
}

export default App;
