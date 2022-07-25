import React from 'react';
import contactJpg from '../images/contact.jpg';
import contactJpg2x from '../images/contact@2x.jpg';
import contactWebp from '../images/contact.webp';
import contactWebp2x from '../images/contact@2x.webp';

export default function Team() {
  const team = [
    {
      id: 1,
      imgJpg: require('../images/person1.jpg'),
      imgJpg2x: require('../images/person1@2x.jpg'),
      imgWebp: require('../images/person1.webp'),
      imgWebp2x: require('../images/person1@2x.webp'),
      name: 'John Doe',
      position: 'President',
    },
    {
      id: 2,
      imgJpg: require('../images/person2.jpg'),
      imgJpg2x: require('../images/person2@2x.jpg'),
      imgWebp: require('../images/person2.webp'),
      imgWebp2x: require('../images/person2@2x.webp'),
      name: 'Jane Doe',
      position: 'Vice President',
    },
    {
      id: 3,
      imgJpg: require('../images/person3.jpg'),
      imgJpg2x: require('../images/person3@2x.jpg'),
      imgWebp: require('../images/person3.webp'),
      imgWebp2x: require('../images/person3@2x.webp'),
      name: 'Steve Smith',
      position: 'Marketing Head',
    },
  ];

  return (
    <section>
      <p>Who we are</p>
      <h2>Our Professional Team</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <ul>
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
              <img src={teammate.imgJpg} alt={teammate.name} />
            </picture>
            <p>{teammate.name}</p>
            <p>{teammate.position}</p>
          </li>
        ))}
      </ul>
      <div id="4">
        <picture>
          <source
            srcset={`${contactWebp} 1x, ${contactWebp2x} 2x`}
            type="image/webp"
          />
          <source
            srcset={`${contactJpg} 1x, ${contactJpg2x} 2x`}
            type="image/jpeg"
          />
          <img src={contactJpg} alt="Contact" />
        </picture>
        <form action="">
          <input type="text" />
          <input type="text" />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}
