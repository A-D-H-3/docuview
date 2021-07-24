import { Route } from "react-router-dom";
import Commissioning from "./commissioning/commisioning";
import Electrical from "./electrical/electrical";
import Life from "./life/life";
import Mechanical from "./mechanical/mechanical";
import Plumbing from "./plumbing/plumbing";
import Setback from "./setback/setback";
import Specificaitons from "./specifications/specifications";

const Routes = () => {
  return (
    <>
      <Route exact={true} path="/" render={() => <p>Home</p>} />
      <Route exact={true} path="/mechanical" render={() => <Mechanical />} />
      <Route exact={true} path="/electrical" render={() => <Electrical />} />
      <Route exact={true} path="/plumbing" render={() => <Plumbing />} />
      <Route exact={true} path="/lifefiresafety" render={() => <Life />} />
      <Route
        exact={true}
        path="/commissioning"
        render={() => <Commissioning />}
      />
      <Route exact={true} path="/orsetback" render={() => <Setback />} />
      <Route
        exact={true}
        path="/specifications"
        render={() => <Specificaitons />}
      />
    </>
  );
};

export default Routes;
