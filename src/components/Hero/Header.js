import React, { useRef } from 'react';
import Logo from '../../images/icons/Logo';

import styles from './Header.module.css';

export default function Header() {
  const header = useRef(null);

  window.onscroll = () => {
    const scroll = window.scrollY;
    const viewPortWidth = document.documentElement.clientWidth;

    if (
      (viewPortWidth > 767 && scroll > 70) ||
      (viewPortWidth < 768 && scroll > 120)
    ) {
      header.current.classList.add(styles.headerFixed);
    } else if (
      (viewPortWidth > 767 && scroll < 70) ||
      (viewPortWidth < 768 && scroll < 120)
    ) {
      header.current.classList.remove(styles.headerFixed);
    }
  };
  return (
    <header ref={header} className={styles.container}>
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
