import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function StudentDetails() {
  const { id } = useParams(); // Get the id from the URL params
  const [student, setStudent] = useState(null); // State to hold student details

  useEffect(() => {
    async function fetchStudent() {
      try {
        const response = await axios.get(`https://api.example.com/students/${id}`);
        setStudent(response.data); // Set student details in state
      } catch (error) {
        console.error('Error fetching student:', error);
      }
    }

    fetchStudent(); // Call fetchStudent function when component mounts
  }, [id]); // Trigger fetchStudent when id changes

  // Render loading message while fetching student details
  if (!student) {
    return <div>Loading...</div>;
  }

  // Render student details when data is fetched
  return (
    <div>
      <h2>Student Details</h2>
      <p>ID: {student.id}</p>
      <p>Name: {student.name}</p>
      <p>City: {student.city}</p>
      <p>Contact: {student.contact}</p>
      <p>Email: {student.email}</p>
    </div>
  );
}

export default StudentDetails;
