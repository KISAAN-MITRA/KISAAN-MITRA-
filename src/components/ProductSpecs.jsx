import React from 'react';
import { Battery, Zap, Gauge, Weight, Plug, RefreshCw } from 'lucide-react';
import { Badge } from './ui/badge';

const ProductSpecs = () => {
  const specs = [
    {
      icon: Battery,
      title: "5–6 Hour",
      subtitle: "Battery Endurance",
      description: "Full day coverage on a single charge",
      color: "from-green-500 to-emerald-600",
      delay: "0ms",
    },
    {
      icon: Zap,
      title: "~4.5 Hours",
      subtitle: "Rapid Charging",
      description: "Fast turnaround, minimal downtime",
      color: "from-blue-500 to-cyan-600",
      delay: "100ms",
    },
    {
      icon: Gauge,
      title: "1.5–3 Inches",
      subtitle: "Adaptive Cutting",
      description: "Precision height adjustment for all crops",
      color: "from-purple-500 to-pink-600",
      delay: "200ms",
    },
    {
      icon: Weight,
      title: "142–178 kg",
      subtitle: "Lightweight Build",
      description: "Easy maneuverability on small farms",
      color: "from-orange-500 to-red-600",
      delay: "300ms",
    },
    {
      icon: Plug,
      title: "Standard 3-Pin",
      subtitle: "Universal Power",
      description: "Charges from any household socket",
      color: "from-teal-500 to-green-600",
      delay: "400ms",
    },
    {
      icon: RefreshCw,
      title: "Swappable",
      subtitle: "Modular Battery",
      description: "Hot-swap for continuous operation",
      color: "from-indigo-500 to-purple-600",
      delay: "500ms",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white border-0 mb-4 text-sm px-5 py-2">
              Engineering Excellence
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Built for Performance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every specification engineered to perfection for Indian farming conditions
            </p>
          </div>

          {/* Specs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: spec.delay }}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${spec.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Card */}
                  <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:border-transparent transition-all duration-500 transform hover:-translate-y-2">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${spec.color} rounded-xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-3xl font-bold text-gray-900">{spec.title}</h3>
                      <p className="text-lg font-semibold text-gray-700">{spec.subtitle}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{spec.description}</p>
                    </div>

                    {/* Animated Border on Hover */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} style={{ padding: '2px' }}>
                      <div className="w-full h-full bg-white rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Banner */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-2xl blur-lg opacity-50"></div>
            <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 sm:p-10 text-white text-center shadow-2xl border border-gray-700">
              <p className="text-xl sm:text-2xl font-semibold mb-2">
                Validated by ICAR • Patent Protected • Made for Indian Farms
              </p>
              <p className="text-gray-400 text-sm">
                Source: Internal testing & field validation data
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;
