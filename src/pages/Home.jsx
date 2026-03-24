import React from 'react';
import Hero from '../components/Hero';
import WhatIsThis from '../components/WhatIsThis';
import ValueMetrics from '../components/ValueMetrics';
import Testimonials from '../components/Testimonials';
import StickyCTA from '../components/StickyCTA';
import Impact from '../components/Impact';
import Gen2Vision from '../components/Gen2Vision';

const Home = () => {
  return (
    <div className="relative min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      {/* Global Background Patterns */}
      <div className="absolute inset-0 z-[0] opacity-10 pointer-events-none fixed">
        <img
          src="https://images.unsplash.com/photo-1560493676-04071c5f467b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwyfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlfGVufDB8fHx8MTc3NDI0NzkxNnww&ixlib=rb-4.1.0&q=85"
          alt="Sustainable Agriculture"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 z-[0] opacity-10 pointer-events-none fixed">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>
      <Hero />
      <WhatIsThis />
      <ValueMetrics />
      <Testimonials />
      <Impact />
      <Gen2Vision />
    </div>
  );
};

export default Home;
