import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RegisterStudent from './pages/RegisterStudent';
import StudentList from './pages/StudentList';
import StudentDetails from './pages/StudentDetails';
import EditStudent from './pages/EditStudent';
import Intro from './pages/Intro';
import './App.css';

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(students.map((student) =>
      student.email === updatedStudent.email ? updatedStudent : student
    ));
  };

  const deleteStudent = (email) => {
    setStudents(students.filter((student) => student.email !== email));
  };

  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/students" className="nav-link">Student List</Link>
        <Link to="/register" className="nav-link">Register Student</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/students" element={<StudentList students={students} onDelete={deleteStudent} />} />
        <Route path="/register" element={<RegisterStudent addStudent={addStudent} />} />
        <Route path="/student/:email" element={<StudentDetails students={students} />} />
        <Route path="/edit/:email" element={<EditStudent students={students} onUpdate={updateStudent} />} />
      </Routes>
    </Router>
  );
};

export default App;
