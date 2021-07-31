import { Switch } from "react-router-dom";
import Routes from "../../routes";
import "./main.css";
import { Container, Row, Button } from "react-bootstrap";
import DocSearchField from "../../components/docSearch";
import SearchResults from "../../components/searchResults";

const Main = () => {
  return (
    <div className="background">
      <Container fluid>
        <Row>
          <main>
            <Switch>
              <DocSearchField />
              <Routes />
            </Switch>
            <SearchResults />
            <Button variant="danger" size="sm">
              Search
            </Button>
          </main>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
