import React from 'react';
import Logo from '../../images/icons/Logo';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      <h2>
        <div className={styles.companyNameContainer}>
          <Logo />
          <div className={styles.companyName}>
            <span className={styles.green}>Finance</span>
            <span className={styles.white}>Ledger</span>
          </div>
        </div>
      </h2>
      <nav>
        <ul className={styles.navList}>
          <li>
            <a href="#0">Home</a>
          </li>
          <li>
            <a href="#1">About</a>
          </li>
          <li>
            <a href="#2">Cases</a>
          </li>
          <li>
            <a href="#3">Blog</a>
          </li>
          <li>
            <a href="#4">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
