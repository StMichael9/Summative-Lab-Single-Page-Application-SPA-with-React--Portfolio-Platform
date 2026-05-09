import React from "react";
import App from "../App";

const SearchBar = ({ query, onSearchChange }) => {
  return (
    <div>
      <input
        type="Search"
        placeholder="Search projects..."
        value={query}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBar;
export { SearchBar };
