import React, { useState } from 'react';
import styles from './Signup.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Signup: React.FC = () => {

  // const baseURL = 'http://localhost:8080'
const baseURL = 'https://puthub-backend-api-flask.onrender.com';


  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
    bio: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fData = await fetch(`${baseURL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const response = await fData.json();
    Swal.fire(response.message);
    if (response.message == "User created successfully!") {
      navigate("/login")
    }
  };

  return (
    <div className={styles.container}>
      <h2>Signup</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <select name="role" id={styles.role} onChange={handleChange}>
          <option style={{ color: 'grey' }}>Select Your role</option>
          <option value="head">Project Head</option>
          <option value="manager">Project Manager</option>
          <option value="member">Team Member</option>
          <option value="admin">Admin</option>
        </select>

        <textarea
          name="bio"
          placeholder="Write your Bio"
          value={formData.bio}
          onChange={handleChange}
          id={styles.bio}
        />

        <button type="submit">Signup</button>
      </form>
      <div className={styles.navigate}>
        <p>Have you registered already? <Link className={styles.signBtn} to='/login'>Login 👈</Link></p>
      </div>
    </div>
  );
};

export default Signup;
