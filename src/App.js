// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MyComponent = () => {
//   const [count, setCount] = useState(0);
//   const [data, setData] = useState("");

//   useEffect(() => {
//     console.log("useEffect is called");
//     fetchData();
//   }, [count]);

//   console.log("component rendered");

//   async function fetchData() {
//     try {
//       const response = await axios.get('https://reqbin.com/echo/get/json');
//       if (response.status !== 200) {
//         throw new Error('Network response was not ok');
//       }
//       const fetchedData = response.data;
//       setData(fetchedData);
//       console.log("Data fetched successfully...");
//     } catch (error) {
//       console.log("Error: " + error);
//     }
//   }

//   return (
//     <>
//       <div>My Component: {count}</div>
//       <div>Data: {JSON.stringify(data)}</div>
//     </>
//   );
// }

// export default MyComponent;


// import React, { useState } from 'react';
// import Page from './Page';

// export const UserContext = React.createContext();

// function App() {
//   const [username, setUsername] = useState("Meet Koladiya");

//   return (
//     <div className="App">
//       <UserContext.Provider value={{ username, setUsername }}>
//         <Page />
//       </UserContext.Provider>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Students from './Students';
import Teachers from './Teachers';
import Contact from './Contact';
import Navigation from './Navigation';
import StudentDetails from './StudentDetails';
import StudentInfo from './StudentInfo';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<StudentInfo/>} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

