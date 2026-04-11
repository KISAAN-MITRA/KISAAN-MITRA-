import React from 'react';
import { whyKisaanMitra } from '../data/mock';
import { Users, Settings, Zap, Cpu } from 'lucide-react';

const WhyKisaanMitra = () => {
  const icons = [Users, Settings, Zap, Cpu];

  return (
    <section className="py-10 bg-white" id="why-us">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why HVEV
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategic advantages that make HVEV the right choice for India's agricultural future
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {whyKisaanMitra.map((point, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gray-900 group-hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-7 h-7 text-green-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image Section */}
          <div className="mt-16 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/5622362/pexels-photo-5622362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Farmer with machinery"
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKisaanMitra;
