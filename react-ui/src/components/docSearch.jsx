import { connect } from "react-redux";
// import data from "../mocks/data.json";
import { docSearch } from "../redux/actions";

const DocSearchField = ({ docSearch, document }) => {
  const handleChange = (e) => {
    const document = e.target.value;
    docSearch(document);
  };

  return <input onChange={handleChange} value={document} />;
};

const DocReturnField = ({ docReturn, doc }) => {
  const handleReturn = (e) => {
    const doc = e.target.value;
    docReturn(doc);
  };
  return <input onChange={handleReturn} value={document} />;
};

const mapStateToProps = (state) => ({
  document: state.docSearch,
});

const mapDispatchToProps = (dispatch) => ({
  docSearch: (document) => dispatch(docSearch(document)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DocSearchField);
