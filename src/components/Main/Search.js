import { FiSearch } from "react-icons/fi";
import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="search-container">
      <input
        className="search-input"
        placeholder="Search for documents, modules, books"
      />
      <FiSearch />
    </div>
  );
}

export default Search;
