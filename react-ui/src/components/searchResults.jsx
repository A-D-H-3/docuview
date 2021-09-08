import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createDocumentSearch } from "../redux/actions";
import docData from "../docData";
import { Card, Row, Col } from "react-bootstrap";

export const SearchResults = ({ document }) => {
  const [results, setResults] = useState();

  const handleLiveSearch = () => {
    const docMatch = docData.filter(
      (doc) =>
        doc.title.toLowerCase().indexOf(document) > -1 ||
        doc.number.indexOf(document) > -1 ||
        doc.rev.indexOf(document) > -1
    );

    setResults(docMatch);
  };

  useEffect(() => {
    if (!results) setResults(docData);
    handleLiveSearch();
  }, [document]);

  return (
    <div className="doc-cards">
      {results &&
        results.map((doc) => {
          return (
            <Card border="danger" style={{ width: "30rem" }} className="mb-4">
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
  return { document: state.document };
};

const mapDispatchToProps = (dispatch) => ({
  dispatchDocument: (document) => dispatch(createDocumentSearch(document)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
