import { connect } from "react-redux";
// import { docData } from "../docData";
import { createDocumentSearch } from "../redux/actions";
import { useState } from "react";

const DocSearchField = ({ dispatchDocument, document }) => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    const input = e.target.value;
    setSearch(input);
    dispatchDocument(input);
  };
  return (
    <div>
      <input onChange={handleChange} value={search} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  document: state.document,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchDocument: (document) => dispatch(createDocumentSearch(document)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DocSearchField);
