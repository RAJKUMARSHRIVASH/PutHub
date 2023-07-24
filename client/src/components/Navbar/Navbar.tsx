import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/PutHub_rm_bg3.png';
import Cookies from 'js-cookie';

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [active, setActive] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    checkLoginStatus();
  }, []);

  function checkLoginStatus(): void {
    const userData = Cookies.get("userdata");
    if (userData) {
      const parsedData = JSON.parse(userData);
      const userUsername = parsedData.username;
      setUsername(userUsername);
      setIsLoggedIn(true);
    } else {
      setUsername('');
      setIsLoggedIn(false);
    }
  }

  const handleLogout = (): void => {
    Cookies.remove("userdata"); // Clear the user data from cookies
    setIsLoggedIn(false); // Update the login status to log the user out
  };

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        <Link to="/" className={styles.navbar_logo}>
          <img src={logo} alt="logo" />
        </Link>

        {/* Hamburger Icon */}
        <div className={`${styles.hamburger} ${active ? styles.active : ''}`} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>

        {/* Navigation Menu */}
        <ul className={`${styles.nav_menu} ${active ? styles.active : ''}`}>
          <li className={styles.nav_item}>
            <Link to="/" className={styles.nav_links}>
              Home
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link to="/projects" className={styles.nav_links}>
              Projects
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link to="/services" className={styles.nav_links}>
              Services
            </Link>
          </li>
          <li className={styles.nav_item}>
          {isLoggedIn ? (
              <button className={styles.logoutBtn} onClick={handleLogout}>Logout</button>
            ) : (
              <Link to="/login" className={styles.nav_links}>
                Login
              </Link>
            )}
          </li>
          <li className={styles.user_name}>
            {isLoggedIn ? `Hi, ${username}` : null}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
