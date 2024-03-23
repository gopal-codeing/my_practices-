import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('/category/allCategory')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Category List</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
          // You can add more details here based on your API response structure
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
