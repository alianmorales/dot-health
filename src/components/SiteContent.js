import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchDomain from "./SearchDomain";
import SearchResults from "./SearchResults";

export default function SiteContent() {
  return (
    <Container className="my-5">
      <Row className="main-content">
        <Col md={{ span: 8, offset: 2 }}>
          <SearchDomain />
          <a href="https://get.health">View all domain retailers {">"}</a>
        </Col>

        <SearchResults />
      </Row>
    </Container>
  );
}
