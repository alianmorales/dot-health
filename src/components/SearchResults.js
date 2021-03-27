import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export default function SearchResults(props) {
  return (
    <Container className=" results-wrap mt-5">
      <h5>Alternatives domains that may be available</h5>

      <Row>
        {props.theArr.map((item) => (
          <Col md={4} key={item.id}>
            <ListGroup>
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                <div>
                  {item}
                  <b>.health</b>
                </div>
                <Button size="sm" className="ml-3" variant="outline-primary">
                  Try
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
