import React from 'react';
import UnitEconomics from '../components/UnitEconomics';
import ProblemSolution from '../components/ProblemSolution';
import WhyKisaanMitra from '../components/WhyKisaanMitra';
import Traction from '../components/Traction';

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-20 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <WhyKisaanMitra />
      <ProblemSolution />
      <UnitEconomics />
      <Traction />
    </div>
  );
};

export default AboutUs;
