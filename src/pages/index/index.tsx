import React from 'react';
import Link from 'next/link'; 
import Header from '../../components/header';
import Hero from '../../components/Hero';
import Overlay from '../../components/Overlay';
import Work from '../../components/Work';
import Footer from '../../components/footer';
import About from '../../components/About';
import Workrow from '../../components/Workrow';
import Testimonials from '../../components/Testimonials';
import Burger from '../../components/Burger';
import './styles.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <Overlay />
      <About />
      <Burger />
      <Work />
      <Workrow />
      <Testimonials />
      <Link href="/contact-us">
        <button className="contact-button">Contact Us</button>
      </Link>
      <Footer />
    </div>
  );
};

export default LandingPage;
