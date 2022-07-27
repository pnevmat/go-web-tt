import React, { useState } from 'react';
import blog from '../../images/blog.jpg';
import loading from '../../images/loading.gif';

import styles from './BusinessCases.module.css';

export default function BusinessCases() {
  const [currentImg, setCurrentImg] = useState('');
  const [prevHover, setPrevHover] = useState(false);
  const [nextHover, setNextHover] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const cases = [
    {
      imgJpg: require('../../images/cases1.jpg'),
      imgJpg2x: require('../../images/cases1@2x.jpg'),
      imgWebp: require('../../images/cases1.webp'),
      imgWebp2x: require('../../images/cases1@2x.webp'),
    },
    {
      imgJpg: require('../../images/cases3.jpg'),
      imgJpg2x: require('../../images/cases3@2x.jpg'),
      imgWebp: require('../../images/cases3.webp'),
      imgWebp2x: require('../../images/cases3@2x.webp'),
    },
    {
      imgJpg: require('../../images/cases5.jpg'),
      imgJpg2x: require('../../images/cases5@2x.jpg'),
      imgWebp: require('../../images/cases5.webp'),
      imgWebp2x: require('../../images/cases5@2x.webp'),
    },
    {
      imgJpg: require('../../images/cases7.jpg'),
      imgJpg2x: require('../../images/cases7@2x.jpg'),
      imgWebp: require('../../images/cases7.webp'),
      imgWebp2x: require('../../images/cases7@2x.webp'),
    },
    {
      imgJpg: require('../../images/cases2.jpg'),
      imgJpg2x: require('../../images/cases2@2x.jpg'),
      imgWebp: require('../../images/cases2.webp'),
      imgWebp2x: require('../../images/cases2@2x.webp'),
    },
    {
      imgJpg: require('../../images/cases4.jpg'),
      imgJpg2x: require('../../images/cases4@2x.jpg'),
      imgWebp: require('../../images/cases4.webp'),
      imgWebp2x: require('../../images/cases4@2x.webp'),
    },
  ];

  function openModal(img) {
    setCurrentImg(img);
    const timerId = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(timerId);
    }, 1500);
  }

  function closeModal() {
    setCurrentImg('');
    setIsLoading(true);
  }

  function plusSlides(n) {
    setIsLoading(true);
    cases.find((image, i) => {
      if (image.imgJpg === currentImg.imgJpg) {
        if (i + n < 0 || i + n > cases.length - 1) {
          setIsLoading(false);
          return image;
        }

        const timerId = setTimeout(() => {
          setCurrentImg(cases[i + n]);
          setIsLoading(false);
          clearTimeout(timerId);
        }, 1500);
      }
      return image.imgJpg === currentImg.imgJpg;
    });
  }

  return (
    <section className={styles.container} id="2">
      <p className={styles.whatWeDo}>This is what we do</p>
      <h2 className={styles.title}>Business Cases</h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <ul className={styles.casesContainer}>
        {cases.map((item, i) => {
          return (
            <li key={i}>
              <picture>
                <source
                  srcset={`${item.imgWebp} 1x, ${item.imgWebp2x} 2x`}
                  type="image/webp"
                />
                <source
                  srcset={`${item.imgJpg} 1x, ${item.imgJpg2x} 2x`}
                  type="image/jpeg"
                />
                <img
                  className={styles.casesImg}
                  src={item.imgJpg}
                  alt="Business case"
                  onClick={() => openModal(item)}
                />
              </picture>
            </li>
          );
        })}
      </ul>
      {currentImg !== '' && (
        <div className={styles.backdrop}>
          <div className={styles.modal}>
            <div class="mySlides">
              {isLoading ? (
                <div className={styles.loadingContainer}>
                  <img
                    className={styles.loadingImg}
                    src={loading}
                    alt="Business case"
                  />
                </div>
              ) : (
                <picture>
                  <source
                    srcset={`${currentImg.imgWebp} 1x, ${currentImg.imgWebp2x} 2x`}
                    type="image/webp"
                  />
                  <source
                    srcset={`${currentImg.imgJpg} 1x, ${currentImg.imgJpg2x} 2x`}
                    type="image/jpeg"
                  />
                  <img
                    className={styles.modalImg}
                    src={currentImg.imgJpg}
                    alt="Business case"
                  />
                </picture>
              )}
            </div>
            {!isLoading && (
              <div
                className={styles.prevContainer}
                onMouseOver={() => {
                  setNextHover(false);
                  setPrevHover(true);
                }}
              >
                <button
                  type="button"
                  class={styles.prev}
                  style={{ opacity: prevHover ? 1 : '' }}
                  onClick={() => plusSlides(-1)}
                >
                  {'<'}
                </button>
              </div>
            )}
            {!isLoading && (
              <div
                className={styles.nextContainer}
                onMouseOver={() => {
                  setPrevHover(false);
                  setNextHover(true);
                }}
              >
                <button
                  type="button"
                  class={styles.next}
                  style={{ opacity: nextHover ? 1 : '' }}
                  onClick={() => plusSlides(1)}
                >
                  {'>'}
                </button>
              </div>
            )}
            <span class={styles.close} onClick={() => closeModal()}>
              &times;
            </span>
          </div>
        </div>
      )}
      <div className={styles.blogContainer} id="3">
        <img className={styles.blogImg} src={blog} alt="Blog" />
        <div className={styles.blogTextContainer}>
          <p className={styles.postDate}>April 16 2020</p>
          <h3 className={styles.postTitle}>Blog Post One</h3>
          <p className={styles.postText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <a className={styles.link} href="#3">
            Read Our Blog
          </a>
        </div>
      </div>
    </section>
  );
}
