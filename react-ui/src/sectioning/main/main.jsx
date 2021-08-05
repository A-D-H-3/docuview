import { Switch } from "react-router-dom";
import Routes from "../../routes";
import "./main.css";
import { Container, Row, Image } from "react-bootstrap";
import DocSearchField from "../../components/docSearch";
import SearchResults from "../../components/searchResults";
// import background from "../../images/background.jpg";

const Main = () => {
  return (
    <div>
      <Container className="background" fluid>
        <Row>
          <main>
            <Switch>
              <Routes />
            </Switch>
            <DocSearchField />
            <SearchResults />
          </main>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
