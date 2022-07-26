import React from 'react';
import Facebook from '../../images/icons/Facebook';
import Twitter from '../../images/icons/Twitter';
import Youtube from '../../images/icons/Youtube';
import Linkedin from '../../images/icons/Linkedin';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <ul className={styles.list}>
        <li>
          <Facebook />
        </li>
        <li>
          <Twitter />
        </li>
        <li>
          <Youtube />
        </li>
        <li>
          <Linkedin />
        </li>
      </ul>
      <p className={styles.text}>Copyright © 2021 - FinanceLedger</p>
    </footer>
  );
}
