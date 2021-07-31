import { connect } from "react-redux";
import { createDocumentSearch } from "../redux/actions";
import { docData } from "../docData";

export const SearchResults = ({ document }) => {
  console.log(docData);

  const searchedDocuments = docData.filter(
    (value) => value === JSON.stringify("")
  );

  return (
    <div>
      <div>{searchedDocuments}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("I am here");
  return { document: state.document };
};

const mapDispatchToProps = (dispatch) => ({
  dispatchDocument: (document) => dispatch(createDocumentSearch(document)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
