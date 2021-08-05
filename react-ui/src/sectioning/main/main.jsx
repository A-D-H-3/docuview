import { Switch } from "react-router-dom";
import Routes from "../../routes";
import "./main.css";
import DocSearchField from "../../components/docSearch";
import SearchResults from "../../components/searchResults";

const Main = () => {
  return (
    <>
      <Switch>
        <Routes />
      </Switch>
      <DocSearchField />
      <SearchResults />
    </>
  );
};

export default Main;
