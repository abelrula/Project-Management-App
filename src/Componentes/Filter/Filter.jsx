import React, { useState } from 'react'
import "./filter.css"
const Filter = () => {
  const [search, setSearch] = useState("");
  const [firstSixMatching, setFirstSixMatching] = useState([]);

  // handle change event
  const handleChange = (e) => {
    setSearch(e.target.value);
  }
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleChange}
      />
      <ul>
        {/* Displaying the filter based on search as dropDown */}
        {firstSixMatching &&
          firstSixMatching.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setSearch(item.name);
              }}
              className={search === item.name ? "active" : ""}
            >
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Filter
