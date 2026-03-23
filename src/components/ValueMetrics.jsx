import React from 'react';
import { valueMetrics } from '../data/mock';
import { TrendingDown, Users, Zap } from 'lucide-react';

const ValueMetrics = () => {
  const metrics = [
    {
      icon: TrendingDown,
      value: "75%",
      label: "Cost Reduction",
      description: "vs traditional methods",
    },
    {
      icon: Zap,
      value: "4-5 Acres",
      label: "Per Charge",
      description: "Single operator",
    },
    {
      icon: Users,
      value: "21,000+",
      label: "Livelihoods",
      description: "Impacted nationwide",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Transforming Indian Agriculture
            </h2>
            <p className="text-lg text-gray-600">Impact delivered, numbers proven</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-200 hover:border-green-500"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                    {metric.value}
                  </div>
                  <div className="text-xl font-semibold text-gray-900 mb-2">{metric.label}</div>
                  <div className="text-sm text-gray-600">{metric.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueMetrics;
