import React, { useState } from 'react'
import filterIcon from "../Images/filter-76.svg";

const FilterByStatus = () => {
  const [activeButton, setActiveButton] = useState(null);
  
  const btns = ['All', 'Done', 'In Progress', 'Todo'];
  
    return (
      <section>
        <h3 className="filter-header">Filter by status</h3>
        <div className="filter-by-status-wrapper">
          <div className="btn-container">
            {btns.map((btn, index) => (
              <button
                key={index + 1}
                style={{
                  backgroundColor: activeButton === index ? "#dbf9f9" : "#f3ebeb",
                  color: activeButton === index ? "#319797" : " #221f1f",
                }}
                onClick={() => setActiveButton(index)}
                className="status-btn"
              >
                {btn}
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