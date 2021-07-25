import Footer from "./sectioning/footer/footer";
import Header from "./sectioning/header/header";
import Main from "./sectioning/main/main";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Button, Alert } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Button>Test Button</Button>
      <Footer />
    </>
  );
}

export default App;
