import React from 'react';
import { useParams } from 'react-router-dom';

const StudentDetails = ({ students }) => {
  const { email } = useParams();
  const student = students.find((s) => s.email === email);

  if (!student) return <p>Student not found.</p>;

  return (
    <div className='student-details'>
      <h2>{student.name}'s Details</h2>
      <p>Email: {student.email}</p>
      <p>Class: {student.class}</p>
      <p>Address: {student.address}</p>
      <p>Phone: {student.phone}</p>
    </div>
  );
};

export default StudentDetails;
