import React, { useState } from 'react';
import contactJpg from '../../images/contact.jpg';
import contactJpg2x from '../../images/contact@2x.jpg';
import contactWebp from '../../images/contact.webp';
import contactWebp2x from '../../images/contact@2x.webp';
import Facebook from '../../images/icons/Facebook';
import Twitter from '../../images/icons/Twitter';
import Youtube from '../../images/icons/Youtube';
import Linkedin from '../../images/icons/Linkedin';
import Worning from '../../images/icons/Worning';
import validator from '../../utils/validator';

import styles from './Team.module.css';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default function Team() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);

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

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    console.log('form submition started');
    const { nameValidator, emailValidator } = validator;
    nameValidator(name, setNameValid);
    emailValidator(email, setEmailValid);

    if (nameValid && emailValid && email !== '') {
      console.log('form submited');
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', name, email }),
      })
        .then(() => alert('Success!'))
        .catch(error => alert(error));

      setName('');
      setEmail('');
    }
  }

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
            <div className={styles.hoverBlock}>
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
            </div>
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
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleChangeName}
              onBlur={e =>
                validator.nameValidator(e.target.value, setNameValid)
              }
            />
            <input
              className={styles.inputSecond}
              style={{ marginBottom: !emailValid ? '8px' : '40px' }}
              type="text"
              placeholder="Enter email*"
              value={email}
              onChange={handleChangeEmail}
              onBlur={e =>
                validator.emailValidator(e.target.value, setEmailValid)
              }
            />
            {!emailValid && (
              <span className={styles.warning}>
                <Worning />
                This is a required field
              </span>
            )}
            <button className={styles.submitButton} type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
