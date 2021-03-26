import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function SearchDomain() {
  return (
    <InputGroup size="lg" className=" search-input mb-4">
      <FormControl
        placeholder="Enter domain"
        aria-label="Amount (to the nearest dollar)"
      />
      <h4 className="input-domain">.health</h4>
      <InputGroup.Append>
        <Button variant="primary">Search</Button>
      </InputGroup.Append>
    </InputGroup>
  );
}
