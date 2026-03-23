import React from 'react';
import { TrendingDown, DollarSign, Clock } from 'lucide-react';

const UnitEconomics = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Massive Cost Savings",
      description: "Up to 75% reduction in harvesting costs compared to manual labor",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Clock,
      title: "Rapid ROI",
      description: "Investment pays for itself within 12-18 months of regular use",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: DollarSign,
      title: "Zero Fuel Costs",
      description: "Electric operation eliminates diesel dependency and ongoing fuel expenses",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="economics">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold mb-4">
              <TrendingDown className="w-5 h-5" />
              Economics That Work
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Built for Profitability
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              An investment that transforms your farm operations and bottom line
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-transparent transition-all duration-300 transform hover:-translate-y-1">
                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl mb-6 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Comparison Visual */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 text-white shadow-2xl border border-gray-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">The Traditional Way</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">✗</span>
                    <span>High labor costs & availability issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">✗</span>
                    <span>Diesel expenses & price volatility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">✗</span>
                    <span>Slower harvesting, crop losses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">✗</span>
                    <span>Weather-dependent operations</span>
                  </li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl blur-lg opacity-30"></div>
                <div className="relative bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">The KISAAN MITRA Way</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-green-200 text-xl">✓</span>
                      <span>Predictable, low operating costs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-200 text-xl">✓</span>
                      <span>Zero fuel dependency</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-200 text-xl">✓</span>
                      <span>4-5 acres/charge capacity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-200 text-xl">✓</span>
                      <span>Timely harvesting, better yields</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 pt-8 border-t border-gray-700">
              <p className="text-xl font-semibold mb-4">Want to see the exact numbers for your farm?</p>
              <button
                onClick={() => {
                  const element = document.getElementById('demo-form');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
              >
                Request Custom ROI Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnitEconomics;
