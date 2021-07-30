import DocSearchField from "../../components/docSearch";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <p>Home</p>
      <DocSearchField />
      <Button variant="danger" size="sm">
        Search
      </Button>
    </>
  );
};

export default Home;
