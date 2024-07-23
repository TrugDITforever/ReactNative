import React from "react";
import { Link } from "react-router-dom";
import styles from "./DrawerMenu.module.css";
const DrawerMenu = () => {
  return (
    <div className={styles.drawer}>
      <div className="headerContainer">
        <h1 className={styles.headerText}>CookMate</h1>
      </div>

      <div className={styles.listContainer}>
        <ul>
          <li>
            <Link to="/drawer/dashboard">
              <div className={styles.listIconContainer}>
                <div className={styles.iconContainer}>
                  <i class="fa-solid fa-table-columns"></i>
                </div>
                <p>DashBoard</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/drawer/users">
              <div className={styles.listIconContainer}>
                <div className={styles.iconContainer}>
                  <i class="fa-solid fa-users-line"></i>
                </div>
                <p>Users</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/drawer/recipes">
              <div className={styles.listIconContainer}>
                <div className={styles.iconContainer}>
                  <i class="fa-solid fa-bowl-rice"></i>
                </div>
                <p>Recipes</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DrawerMenu;
