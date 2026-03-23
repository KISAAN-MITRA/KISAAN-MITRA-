import React from 'react';
import { ownVsRentPoints } from '../data/mock';
import { CheckCircle2 } from 'lucide-react';

const OwnVsRent = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Own Instead of Renting?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ownership brings long-term value and operational freedom
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {ownVsRentPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-green-500 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                    {point}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-r from-green-700 to-green-800 rounded-2xl p-8 sm:p-10 text-white text-center shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Own Your Harvest, Own Your Future
            </h3>
            <p className="text-lg text-green-100 mb-6">
              Invest in equipment that pays for itself and generates income
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('demo-form');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Explore Ownership Options
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnVsRent;
