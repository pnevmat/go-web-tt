import React from 'react';
import Header from './Header';
import ArrowRight from '../../images/icons/ArrowRight';

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.container} id="0">
      <Header />
      <h1 className={styles.title}>The Sky Is The Limit</h1>
      <h3 className={styles.subtitle}>
        We provide world class financial assistance
      </h3>
      <a className={styles.readMore} href="#1">
        <ArrowRight />
        Read More
      </a>
    </section>
  );
}
