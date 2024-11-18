import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StudentList = ({ students, onDelete }) => {
  const [search, setSearch] = useState('');

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (email) => {
    onDelete(email);
    alert('Deleted successfully!');
  };

  return (
    <div>
      <h2>Student List</h2>
      <input 
        type="text" 
        placeholder="Search by name" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Class</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.email}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.class}</td>
              <td className='buttons'>
                <Link to={`/student/${student.email}`}>
                  <button>View</button>
                </Link>
                <Link to={`/edit/${student.email}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(student.email)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
