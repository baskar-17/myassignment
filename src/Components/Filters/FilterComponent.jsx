import React from "react";

function FilterComponent({ applyFilters }) {
  // State to hold the selected filter options
  const [filterOptions, setFilterOptions] = React.useState({
    // Initialize the filter options here
  });

  // Function to handle changes in the filter options
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  // Function to handle the filter apply action
  const handleApplyFilters = () => {
    applyFilters(filterOptions);
  };

  return (
    <div>
      {/* Render your filter inputs/options here */}
      {/* Example: */}
      <input
        type="text"
        name="search"
        value={filterOptions.search || ""}
        onChange={handleFilterChange}
        placeholder="Search"
      />

      <select
        name="category"
        value={filterOptions.category || ""}
        onChange={handleFilterChange}
      >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        {/* Add more options based on your needs */}
      </select>

      {/* Add more filter inputs/options as needed */}

      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
}

export default FilterComponent;
