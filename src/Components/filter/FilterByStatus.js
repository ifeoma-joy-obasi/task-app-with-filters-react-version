import React, { useState } from 'react'
import filterIcon from "../Assets/Images/filter-76.svg";
import "../filter/filterByStatus.css";



const FilterByStatus = () => {
  const [activeButton, setActiveButton] = useState('all');
  
  const btns = ['All', 'Done', 'In Progress', 'Todo'];

  const handleClick = (label) => {
    setActiveButton(label);
  };
    
    return (
      <section>
        <h3 className="filter-header">Filter by status</h3>
        <div className="filter-by-status-wrapper">
          <div className="btn-container">
            {btns.map((label) => (
              <button
                key={label}
                className={`status-btn ${activeButton === label ? 'highlight' : ''}`}
                onClick={() => handleClick(label)}
              >
              {label}
              </button>
            ))}
          </div>

          <div className="icon">
            <img src={filterIcon} alt="filter icon" className="filter-icon" />
          </div>
        </div>
      </section>
    );
}

export default FilterByStatus