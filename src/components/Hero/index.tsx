import React, { FC } from 'react';
import Image from 'next/image';  // Import the Image component from Next.js
import './styles.css';
import HeroImg from '../../assets/hero-img.png';

const Index: FC = () => {
  return (
    <div className="hero">
      <Image
        src={HeroImg}
        alt="hero"
        className="hero-image"
        layout="responsive" 
        width={500}   
        height={300}  
      />
      <div className="running-text">
        Mumet Developer - UI/UX Ora kober
      </div>
    </div>
  );
};

export default Index;
