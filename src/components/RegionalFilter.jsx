import React from "react";

const RegionalFilter = ({ regions, onFilter }) => {
  return (
    <div className="buttons my-3 text-center">
      {["All", ...regions].map((region) => (
        <button
          key={region}
          className="btn btn-outline-dark btn-sm m-2"
          onClick={() => onFilter(region)}
        >
          {region}
        </button>
      ))}
    </div>
  );
};

export default RegionalFilter;