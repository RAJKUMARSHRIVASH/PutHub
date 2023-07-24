import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { FadeLoader } from 'react-spinners';
import Cookies from 'js-cookie';

// useNavigate("/login") this can also be used to to navigate between pages
// useNavigate can be imported from 'react-router-dom'
const Login: React.FC = () => {
  // const baseURL = 'http://localhost:8080'

  const baseURL = 'https://puthub-backend-api-flask.onrender.com';

  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const fData = await fetch(`${baseURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const response = await fData.json();
    setIsLoading(false);
    Swal.fire(response.message);
    if (response.message == "Login successful!") {

      // Setting the token and username into the cookie so that it can be user later 
      Cookies.set("userdata",JSON.stringify({"token" : response.token,"username":response.username}));

      navigate("/");
    }

  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
        {isLoading && (
          <div className={styles.loading} style={{ textAlign: 'center', margin: "auto", marginTop: '20px' }}>
            <FadeLoader color="#36d7b7" loading={isLoading} />
          </div>
        )}
      </form>
      <div className={styles.navigate}>
        <p>Don't have an account? <Link className={styles.signBtn} to='/signup'>Signup 👈</Link></p>
      </div>
    </div>
  );
};

export default Login;
