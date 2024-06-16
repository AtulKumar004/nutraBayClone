// 'use client'
import React from "react";
import styles from "./navbar.module.css";
import classNames from "classnames";
import { CiMenuFries } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { useMediaQuery } from 'react-responsive'

import { FaUserCircle } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { IoMdCart } from "react-icons/io";
export default function Navbar() {
  
  
  
  return (
    <nav className={styles.navbarCont}>
      <div className="w-full flex items-center ">
        <div className= {classNames({
          [styles.navbarLeft]: true,
          " w-8/12  flex gap-20 items-center ": true
        })}>
          <div
            className={classNames({
              [styles.menuBtn]: true,
        
            })}
          >
            <div>
              <CgMenuLeft />
            </div>
          </div>
          <div className={styles.brandName}>HealthHustle</div>

          <div className={styles.searchBarCont}>
            <input
              id="search"
              name="search"
              className={styles.searchBarInput}
              placeholder="Search"
              type="search"
            />
            <div className={styles.searchIcon}>
              <IoSearchOutline aria-hidden="true" />
            </div>
          </div>
        </div>
        <div
          className={classNames({
            'w-4/12 flex items-center justify-end': true,
            [styles.navbarRight]: true
          })}
        >
          <div className={styles.loginBtn}>
            <FaUserCircle />
            <span >Login</span>
          </div>
          <div className={styles.cartBtn}>
            <IoMdCart />
            <span>Cart</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
