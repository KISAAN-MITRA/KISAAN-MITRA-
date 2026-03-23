import React from 'react';
import Hero from '../components/Hero';
import WhatIsThis from '../components/WhatIsThis';
import ValueMetrics from '../components/ValueMetrics';
import Testimonials from '../components/Testimonials';
import StickyCTA from '../components/StickyCTA';

const Home = () => {
  return (
    <div className="min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <Hero />
      <WhatIsThis />
      <ValueMetrics />
      <Testimonials />
    </div>
  );
};

export default Home;
