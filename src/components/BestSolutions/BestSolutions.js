import React from 'react';
import peopleJpg from '../../images/people.jpg';
import peopleJpg2x from '../../images/people@2x.jpg';
import peopleWebp from '../../images/people.webp';
import peopleWebp2x from '../../images/people@2x.webp';

import styles from './BestSolutions.module.css';

export default function BestSolutions() {
  return (
    <section className={styles.container} id="1">
      <picture>
        <source
          srcset={`${peopleWebp} 1x, ${peopleWebp2x} 2x`}
          type="image/webp"
        />
        <source
          srcset={`${peopleJpg} 1x, ${peopleJpg2x} 2x`}
          type="image/jpeg"
        />
        <img className={styles.peopleImg} src={peopleJpg} alt="people" />
      </picture>
      <div className={styles.provideContainer}>
        <p className={styles.question}>What you are looking for</p>
        <h3 className={styles.title}>We provide bespoke solutions</h3>
        <p className={styles.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <a className={styles.link} href="#1">
          Read More
        </a>
      </div>
    </section>
  );
}
