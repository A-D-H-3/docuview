import { connect } from "react-redux";
import { DocSearch } from "./docSearch";

const DocReturn = ({ docReturn, document }) => {

  const 

  return (
    <div>
      <input onChange={handleChange} value={document} />
      <div>{document}</div>
    </div>
  );
};
