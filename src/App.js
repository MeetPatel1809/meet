import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");

  useEffect(() => {
    console.log("useEffect is called");
    fetchData();
  }, [count]);

  console.log("component rendered");

  async function fetchData() {
    try {
      const response = await axios.get('https://reqbin.com/echo/get/json');
      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }
      const fetchedData = response.data;
      setData(fetchedData);
      console.log("Data fetched successfully...");
    } catch (error) {
      console.log("Error: " + error);
    }
  }

  return (
    <>
      <div>My Component: {count}</div>
      <div>Data: {JSON.stringify(data)}</div>
    </>
  );
}

export default MyComponent;
