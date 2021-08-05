import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createDocumentSearch } from "../redux/actions";
import docData from "../docData";
import { Card, Button } from "react-bootstrap";

export const SearchResults = ({ document }) => {
  const [results, setResults] = useState();

  const handleLiveSearch = () => {
    const match = docData.filter((doc) => doc.number.indexOf(document) > -1);
    // const match =
    //   docData.filter((doc) => doc.number.indexOf(document) > -1) ||
    //   docData.filter((doc) => doc.title.indexOf(document));
    setResults(match);
  };

  useEffect(() => {
    if (!results) setResults(docData);
    handleLiveSearch();
  }, [document]);

  return (
    <div>
      <div>{document}</div>
      {results &&
        results.map((doc) => {
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
  return { document: state.document };
};

const mapDispatchToProps = (dispatch) => ({
  dispatchDocument: (document) => dispatch(createDocumentSearch(document)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
