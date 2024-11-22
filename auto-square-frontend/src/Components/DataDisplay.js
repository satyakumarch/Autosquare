import React from 'react';

function DataDisplay({ data }) {
  return (
    <div>
      <h2>Data from Server:</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataDisplay;