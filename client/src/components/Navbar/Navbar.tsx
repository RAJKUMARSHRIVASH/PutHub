import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/PutHub_rm_bg3.png';

const Navbar: React.FC = () => {
  const [login, setLogin] = useState(false)
  const [active, setActive] = useState(false);

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
            <Link to="/about" className={styles.nav_links}>
              About
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link to="/login" className={styles.nav_links}>
              Login
            </Link>
          </li>
          <li className={styles.user_name}>
            {login ? `Hi, ${"name"}` : null}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
