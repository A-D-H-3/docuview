import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createDocumentSearch } from "../redux/actions";
import docData from "../docData";
import { Card, Row, Col, CardGroup } from "react-bootstrap";

export const SearchResults = ({ document }) => {
  const [results, setResults] = useState();

  const handleLiveSearch = () => {
    const docMatch = docData.filter(
      (doc) =>
        doc.title.toLowerCase(document).indexOf(document) > -1 ||
        doc.number.toLowerCase().indexOf(document) > -1 ||
        doc.rev.toLowerCase().indexOf(document) > -1
    );

    setResults(docMatch);
  };

  useEffect(() => {
    if (!results) setResults(docData);
    handleLiveSearch();
  }, [document]);

  //**************-----Need to fix the display view for standard iPad dimensions-----***************//

  return (
    <div className="doc-cards">
      {results &&
        results.map((doc) => {
          return (
            // <Row xs={"auto"} md={3} className="g-4">
            //   {Array.from({ length: 1 }).map((_, idx) => (
            //     <Col>
            <CardGroup>
              <Card border="danger" style={{ width: "16rem" }} className="mb-4">
                <Card.Img variant="top" src={doc.img} />
                <Card.Body>
                  <Card.Title>{doc.title}</Card.Title>
                  <Card.Text>Document Number: {doc.number}</Card.Text>
                  <Card.Text>Revision: {doc.rev}</Card.Text>
                </Card.Body>
              </Card>
              {/* </Col>
              ))}
              <Col> */}
              <Card border="danger" style={{ width: "16rem" }} className="mb-4">
                <Card.Img variant="top" src={doc.img} />
                <Card.Body>
                  <Card.Title>{doc.title}</Card.Title>
                  <Card.Text>Document Number: {doc.number}</Card.Text>
                  <Card.Text>Revision: {doc.rev}</Card.Text>
                </Card.Body>
              </Card>
              {/* </Col>
              <Col> */}
              <Card border="danger" style={{ width: "16rem" }} className="mb-4">
                <Card.Img variant="top" src={doc.img} />
                <Card.Body>
                  <Card.Title>{doc.title}</Card.Title>
                  <Card.Text>Document Number: {doc.number}</Card.Text>
                  <Card.Text>Revision: {doc.rev}</Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
            //   </Col>
            // </Row>
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
