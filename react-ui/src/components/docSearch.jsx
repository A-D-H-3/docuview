import { connect } from "react-redux";
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
    <div className="search">
      <input
        onChange={handleChange}
        value={search}
        placeholder="Search document..."
      />
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
