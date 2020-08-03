import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="searchbar segment ui">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Search for a video:</label>
          <input
            type="text"
            onChange={(event) => setTerm(event.target.value)}
            value={term}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
