import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== "") {
      setErrorMsg("");
      props.handleSearch(searchTerm);
    } else {
      setErrorMsg("Please enter a search term.");
    }
  };
  return (
    <div className="search-bar">
      <h3>Spotify Search Engine</h3>
      <Form onSubmit={handleSearch}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <InputGroup className="mb-3">
          <Form.Control
            type="search"
            name="searchTerm"
            value={searchTerm}
            placeholder="Search for track, album, artist or playlist"
            onChange={handleInputChange}
            autoComplete="off"
          />
          <InputGroup.Append>
            <Button className="search-button" type="submit">
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </div>
  );
};
export default Search;
