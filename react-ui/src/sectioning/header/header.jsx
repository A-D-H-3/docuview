import { NavLink } from "react-router-dom";
import Greeting from "../../components/greeting";

const Header = () => {
  return (
    <header>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <ul>
        <li>
          <NavLink to="/mechanical">Mechanical</NavLink>
        </li>
        <li>
          <NavLink to="/electrical">Electrical</NavLink>
        </li>
        <li>
          <NavLink to="/plumbing">Plumbing</NavLink>
        </li>
        <li>
          <NavLink to="/lifefiresafety">Life/Fire Safety</NavLink>
        </li>
        <li>
          <NavLink to="/commissioning">Commissioning</NavLink>
        </li>
        <li>
          <NavLink to="/orsetback">O.R. Setback</NavLink>
        </li>
        <li>
          <NavLink to="/specifications">Specifications</NavLink>
        </li>
      </ul>
      <Greeting />
    </header>
  );
};

export default Header;
