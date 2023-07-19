import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Import the CSS file for styling
import logo from '../../assets/PutHub2-removebg-preview.png'
const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        <Link to="/" className={styles.navbar_logo}>
          <img src={logo} alt="logo" />
        </Link>
        <ul className={styles.nav_menu}>
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
            <Link to="/about" className={styles.nav_links}>
              About
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link to="/contact" className={styles.nav_links}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
