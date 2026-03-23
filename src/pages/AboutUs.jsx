import React from 'react';
import UnitEconomics from '../components/UnitEconomics';
import ProblemSolution from '../components/ProblemSolution';
import Impact from '../components/Impact';
import WhyKisaanMitra from '../components/WhyKisaanMitra';
import Gen2Vision from '../components/Gen2Vision';
import Traction from '../components/Traction';

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-20 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <WhyKisaanMitra />
      <ProblemSolution />
      <UnitEconomics />
      <Impact />
      <Traction />
      <Gen2Vision />
    </div>
  );
};

export default AboutUs;
