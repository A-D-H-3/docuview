import { connect } from "react-redux";
import { createDocumentSearch } from "../redux/actions";
import DocData from "../docData";

export const SearchResults = ({ document }) => {
  console.log(DocData);

  return (
    <div>
      <div>{document}</div>
      {DocData.map((doc) => {
        return (
          <ul>
            <li>{doc.number}</li>
            <li>{doc.title}</li>
            <li>{doc.number}</li>
            <li>{doc.rev}</li>
            <img src={doc.img} />
          </ul>
        );
      })}
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
