import React from 'react';
import Checkout from '../components/Checkout';
import FinalCTA from '../components/FinalCTA';
import OwnVsRent from '../components/OwnVsRent';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <Checkout />
      <OwnVsRent />
      <FinalCTA />
    </div>
  );
};

export default Contact;
