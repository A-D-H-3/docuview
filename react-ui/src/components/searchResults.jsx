import { connect } from "react-redux";
import { createDocumentSearch } from "../redux/actions";
import DocData from "../docData";
import { Card, Button } from "react-bootstrap";

export const SearchResults = ({ document }) => {
  console.log(DocData);

  return (
    <div>
      <div>{document}</div>
      {DocData.map((doc) => {
        return (
          <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src={doc.img} />
            <Card.Body>
              <Card.Title>{doc.title}</Card.Title>
              <Card.Text>Document Number: {doc.number}</Card.Text>
              <Card.Text>Revision: {doc.rev}</Card.Text>
            </Card.Body>
          </Card>
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
