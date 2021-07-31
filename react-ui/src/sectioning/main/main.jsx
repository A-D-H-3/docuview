import { Switch } from "react-router-dom";
import Routes from "../../routes";

const Main = () => {
  return (
    <div>
      <main>
        <Switch>
          <Routes />
        </Switch>
      </main>
    </div>
  );
};

export default Main;
