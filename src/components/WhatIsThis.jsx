import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhatIsThis = () => {
  const keyPoints = [
    'Works on small & uneven farms',
    'Easy to operate (low skill)',
    'Designed for Indian crop conditions',
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Built for Bharat, Not Adapted for It
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              India's first compact EV reaper designed specifically for small and marginal farmers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            {keyPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-green-300"
              >
                <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto mb-4" />
                <p className="text-gray-800 font-semibold text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsThis;
