import React from 'react';
import contactJpg from '../../images/contact.jpg';
import contactJpg2x from '../../images/contact@2x.jpg';
import contactWebp from '../../images/contact.webp';
import contactWebp2x from '../../images/contact@2x.webp';

import styles from './Team.module.css';

export default function Team() {
  const team = [
    {
      id: 1,
      imgJpg: require('../../images/person1.jpg'),
      imgJpg2x: require('../../images/person1@2x.jpg'),
      imgWebp: require('../../images/person1.webp'),
      imgWebp2x: require('../../images/person1@2x.webp'),
      name: 'John Doe',
      position: 'President',
    },
    {
      id: 2,
      imgJpg: require('../../images/person2.jpg'),
      imgJpg2x: require('../../images/person2@2x.jpg'),
      imgWebp: require('../../images/person2.webp'),
      imgWebp2x: require('../../images/person2@2x.webp'),
      name: 'Jane Doe',
      position: 'Vice President',
    },
    {
      id: 3,
      imgJpg: require('../../images/person3.jpg'),
      imgJpg2x: require('../../images/person3@2x.jpg'),
      imgWebp: require('../../images/person3.webp'),
      imgWebp2x: require('../../images/person3@2x.webp'),
      name: 'Steve Smith',
      position: 'Marketing Head',
    },
  ];

  return (
    <section className={styles.container}>
      <p className={styles.whoWeAre}>Who we are</p>
      <h2 className={styles.title}>Our Professional Team</h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <ul className={styles.cardList}>
        {team.map(teammate => (
          <li key={teammate.id}>
            <picture>
              <source
                srcset={`${teammate.imgWebp} 1x, ${teammate.imgWebp2x} 2x`}
                type="image/webp"
              />
              <source
                srcset={`${teammate.imgJpg} 1x, ${teammate.imgJpg2x} 2x`}
                type="image/jpeg"
              />
              <img
                className={styles.cardListImg}
                src={teammate.imgJpg}
                alt={teammate.name}
              />
            </picture>
            <p className={styles.name}>{teammate.name}</p>
            <p className={styles.position}>{teammate.position}</p>
          </li>
        ))}
      </ul>
      <div className={styles.contactContainer} id="4">
        <picture>
          <source
            srcset={`${contactWebp} 1x, ${contactWebp2x} 2x`}
            type="image/webp"
          />
          <source
            srcset={`${contactJpg} 1x, ${contactJpg2x} 2x`}
            type="image/jpeg"
          />
          <img className={styles.contactImg} src={contactJpg} alt="Contact" />
        </picture>
        <div className={styles.contactFormContainer}>
          <p className={styles.contactFormTitle}>Request Callback</p>
          <form className={styles.contactForm} action="">
            <input
              className={styles.input}
              type="text"
              placeholder="Enter your name"
            />
            <input
              className={styles.inputSecond}
              type="text"
              placeholder="Enter email*"
            />
            <button className={styles.submitButton} type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}