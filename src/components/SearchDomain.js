import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { FiSearch, FiX } from "react-icons/fi";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import SearchResults from "./SearchResults";

export default function SearchDomain() {
  const [visibility, setVisibility] = useState(false);
  const [domainEntered, setDomainEntered] = useState("");
  const [sugArr, setSugArr] = useState([]);

  useEffect(() => {
    axios
      .get("https://605e5e1ce96e5c0017407759.mockapi.io/domains/data/1")
      .then((response) => {
        console.log(response.data.suggestions);
        setSugArr(response.data.suggestions);
      });
  }, []);

  const updateSugArr = () => {
    const newSugArr = sugArr.map((x) => x.replace(/fitness/g, domainEntered));
    setSugArr(newSugArr);
    setVisibility(true);
  };

  const resetPage = () => {
    setVisibility(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  return (
    <Container className="my-5">
      <Row className="main-content">
        <Col md={{ span: 8, offset: 2 }}>
          <InputGroup size="lg" className=" search-input mb-4">
            <FormControl
              placeholder="Enter Domain"
              onKeyDown={handleKeyDown}
              defaultValue=""
              onChange={(e) => {
                setDomainEntered(e.target.value);

                console.log(e.target.value);
              }}
            />

            {visibility ? (
              <button
                className="reset-domain"
                variant="link"
                onClick={resetPage}
              >
                <FiX />
              </button>
            ) : null}

            <h4 className="health-domain-text">.health</h4>
            <InputGroup.Append>
              <Button variant="warning" type="submit" onClick={updateSugArr}>
                <FiSearch />
              </Button>
            </InputGroup.Append>
          </InputGroup>

          <a href="https://get.health">View all domain retailers {">"}</a>
        </Col>
      </Row>
      {visibility ? <SearchResults theArr={sugArr} /> : null}
    </Container>
  );
}
