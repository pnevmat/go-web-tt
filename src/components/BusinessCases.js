import React from 'react';
import blog from '../images/blog.jpg';

export default function BusinessCases() {
  const cases = [
    {
      imgJpg: require('../images/cases1.jpg'),
      imgJpg2x: require('../images/cases1@2x.jpg'),
      imgWebp: require('../images/cases1.webp'),
      imgWebp2x: require('../images/cases1@2x.webp'),
    },
    {
      imgJpg: require('../images/cases3.jpg'),
      imgJpg2x: require('../images/cases3@2x.jpg'),
      imgWebp: require('../images/cases3.webp'),
      imgWebp2x: require('../images/cases3@2x.webp'),
    },
    {
      imgJpg: require('../images/cases5.jpg'),
      imgJpg2x: require('../images/cases5@2x.jpg'),
      imgWebp: require('../images/cases5.webp'),
      imgWebp2x: require('../images/cases5@2x.webp'),
    },
    {
      imgJpg: require('../images/cases7.jpg'),
      imgJpg2x: require('../images/cases7@2x.jpg'),
      imgWebp: require('../images/cases7.webp'),
      imgWebp2x: require('../images/cases7@2x.webp'),
    },
    {
      imgJpg: require('../images/cases2.jpg'),
      imgJpg2x: require('../images/cases2@2x.jpg'),
      imgWebp: require('../images/cases2.webp'),
      imgWebp2x: require('../images/cases2@2x.webp'),
    },
    {
      imgJpg: require('../images/cases4.jpg'),
      imgJpg2x: require('../images/cases4@2x.jpg'),
      imgWebp: require('../images/cases4.webp'),
      imgWebp2x: require('../images/cases4@2x.webp'),
    },
  ];
  return (
    <section id="2">
      <p>This is what we do</p>
      <h2>Business Cases</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <ul>
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
                <img src={item.imgJpg} alt="Business case" />
              </picture>
            </li>
          );
        })}
      </ul>
      <div id="3">
        <img src={blog} alt="Blog" />
        <div>
          <p>April 16 2020</p>
          <h3>Blog Post One</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <a href="#3">Read Our Blog</a>
        </div>
      </div>
    </section>
  );
}
