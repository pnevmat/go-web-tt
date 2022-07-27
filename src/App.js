import { useEffect } from 'react';
import Hero from './components/Hero/Hero';
import BestSolutions from './components/BestSolutions/BestSolutions';
import BusinessCases from './components/BusinessCases/BusinessCases';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    }
    return () => {
      for (let anchor of anchors) {
        anchor.removeEventListener('click', function (e) {});
      }
    };
  }, []);

  return (
    <>
      <Hero />
      <BestSolutions />
      <BusinessCases />
      <Team />
      <Footer />
    </>
  );
}

export default App;
