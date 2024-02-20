import React from 'react';

const StudentInfo = ({ student }) => {
  return (
    <div>
      <h2>Stuudent Information</h2>
      <p>ID: {student.id}</p>
      <p>Name: {student.name}</p>
      <p>City: {student.city}</p>
      <p>Contact: {student.contact}</p>
      <p>Email: {student.email}</p>
    </div>
  );
}

export default StudentInfo;
