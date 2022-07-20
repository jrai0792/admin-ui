import React from 'react';
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="search-container">
      <form>
        <input className="search-bar" type="search" placeholder="Search by name, email or role"/>
      </form>
    </div>
  )
}