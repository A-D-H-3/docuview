import DocSearchField from "../../components/docSearch";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <DocSearchField />
      <Button variant="danger" size="sm">
        Search
      </Button>
    </>
  );
};

export default Home;
