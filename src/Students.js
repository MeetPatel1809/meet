import React, { useState } from 'react';
import StudentInfo from './StudentInfo'; // Import the StudentInfo component

function Students() {
  // Assuming you have an array of students with their details
  const students = [
    { id: 1, name: 'meet koldiya', city: 'amreli', contact: '1234567890', email: 'meet@example.com' },
    { id: 2, name: 'Joshi dev', city: 'jamanagr', contact: '0987654321', email: 'dev@example.com' },
    { id: 3, name: 'harsh langariya', city: 'bhavanagr', contact: '0987654321', email: 'harsh@example.com' },
  ];

  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleButtonClick = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div>
      <h2>Students</h2>
      <div className="student-list">
        {students.map(student => (
          <div key={student.id}>
            <h3>{student.name}</h3>
            <button onClick={() => handleButtonClick(student)}>View Info</button>
          </div>
        ))}
      </div>
      {selectedStudent && <StudentInfo student={selectedStudent} />}
    </div>
  );
}

export default Students;
