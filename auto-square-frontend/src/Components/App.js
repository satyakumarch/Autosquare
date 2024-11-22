import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import DataDisplay from './DataDisplay';
import '../styles/App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <DataDisplay data={data} />
    </div>
  );
}

export default App;