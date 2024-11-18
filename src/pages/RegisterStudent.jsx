import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentForm from '../components/StudentForm';

const RegisterStudent = ({ addStudent }) => {
  const navigate = useNavigate();

  const handleSubmit = (studentData) => {
    addStudent(studentData);
    alert('Student registered successfully');
    navigate("/students"); 
  };

  return (
    <div>
      <h2>Register New Student</h2>
      <StudentForm onSubmit={handleSubmit} />
    </div>
  );
};

export default RegisterStudent;
