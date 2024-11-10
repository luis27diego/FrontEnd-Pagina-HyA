import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Si decides usar axios
import CustomComponent from '../Pages';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/employees');
        setEmployees(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {employees.map((name, index) => (
        <CustomComponent
          key={index}
          title={`Employee ${index + 1}`}  // Puedes ajustar esto según tus datos
          subtitle={name}
          definition={`Details about employee ${index + 1}`}  // Ajusta esto también
          imageUrl="https://via.placeholder.com/150"  // Cambia esto por la URL de tu imagen si tienes
          imageAlt={`Image for employee ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
