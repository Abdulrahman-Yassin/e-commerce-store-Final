/*eslint-disable */

import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";
import Search from "./Search";


function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  
  
  return (
    <>
      <div className={styles.headerBorder}>
        <div className={styles.container}>
          <nav>
            <div className={styles.containerHeader}>
              <span className={styles.categories} >
                Exclusive
              </span>
              <ul
                className={styles.navLinks}
              >
                <li>
                  <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="Contact" onClick={closeMenu}>Contact</NavLink>
                </li>
                <li>
                  <NavLink to="About" onClick={closeMenu}>About</NavLink>
                </li>
                {/* <li>
                  <NavLink to="AdminDashboard" onClick={closeMenu}>AdminDashboard</NavLink>
                </li> */}
              </ul>
              {/* <div className={styles.burgerIcon} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
              </div> */}
              <div className={styles.searchAndIcon}>
                <Search />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
  
}

export default Header;
