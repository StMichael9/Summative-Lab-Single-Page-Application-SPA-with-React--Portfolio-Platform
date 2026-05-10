import React from "react";
import App from "../App";

const SearchBar = ({ query, onSearchChange }) => {
  return (
    <div className="search-bar toolbar">
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
