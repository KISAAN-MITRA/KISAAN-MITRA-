import React from 'react';
import { impactMetrics, sdgGoals } from '../data/mock';
import { Leaf, Droplet, TrendingDown, Users } from 'lucide-react';

const Impact = () => {
  const icons = [Users, Droplet, Leaf, TrendingDown];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="impact">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1560493676-04071c5f467b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwyfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlfGVufDB8fHx8MTc3NDI0NzkxNnww&ixlib=rb-4.1.0&q=85"
          alt="Sustainable Agriculture"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold mb-4">
              ESG & Social Impact
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Creating Impact That Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment goes beyond business - we're building a sustainable future for rural India
            </p>
          </div>

          {/* Impact Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {impactMetrics.map((metric, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-sm border-2 border-gray-200 rounded-xl p-6 text-center shadow-md hover:shadow-xl hover:border-green-500 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4">
                    <Icon className="w-7 h-7 text-green-700" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-green-700 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium leading-snug">
                    {metric.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* SDG Goals */}
          <div className="mb-12">
            <h3 className="text-center text-xl font-bold text-gray-900 mb-6">
              Aligned with UN Sustainable Development Goals
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {sdgGoals.map((goal) => (
                <div
                  key={goal.number}
                  className="flex items-center gap-3 bg-white border-2 border-gray-200 rounded-lg px-5 py-3 shadow-sm hover:shadow-md transition-all duration-300"
                  style={{ borderColor: goal.color }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: goal.color }}
                  >
                    {goal.number}
                  </div>
                  <span className="font-semibold text-gray-800">{goal.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="bg-gradient-to-r from-green-700 via-green-600 to-green-700 rounded-2xl p-8 text-white text-center shadow-xl">
            <p className="text-xl sm:text-2xl font-semibold">
              Aligned with Government Mechanisation & Climate Policies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
