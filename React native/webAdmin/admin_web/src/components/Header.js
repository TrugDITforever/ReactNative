// src/components/Header.js
import React from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.drawerPlace}></div>
        {/*  */}
        <div className={styles.flexContainer}>
          <div className={styles.searchContainer}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search here..."
              className={styles.searchInput}
            />
          </div>
          <div className={styles.headerRight}>
            <div className={styles.bellIcon}>
              <i class="fa-regular fa-bell"></i>
            </div>
            <div className={styles.userProfile}>
              <img
                src="https://pbs.twimg.com/profile_images/472848472979152896/FlmO7OIC_400x400.jpeg"
                alt="user"
                className={styles.userImage}
              />
              <div className={styles.userInfo}>
                <span>CookMate</span>
                <span>Admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
