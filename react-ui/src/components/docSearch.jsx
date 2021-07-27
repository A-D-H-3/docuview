import { connect } from "react-redux";
import { docSearch } from "../redux/actions";

const DocSearchField = ({ docSearch, document }) => {
  const handleChange = (e) => {
    const document = e.target.value;
    docSearch(document);
  };

  return <input onChange={handleChange} value={document} />;
};

const mapStateToProps = (state) => ({
  document: state.document,
});

const mapDispatchToProps = (dispatch) => ({
  docSearch: (document) => dispatch(docSearch(document)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DocSearchField);
