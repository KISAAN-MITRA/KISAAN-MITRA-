import React from 'react';
import { Badge } from './ui/badge';
import { TrendingUp, Award, Users, MapPin } from 'lucide-react';

const Traction = () => {
  const tractionItems = [
    {
      icon: <Award className="w-7 h-7" />,
      title: 'Design Patent Granted',
      description: 'Intellectual property protection secured',
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: 'Field Pilots Completed',
      description: 'Successfully tested with real farmers',
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: 'Growing Adoption',
      description: 'Expanding across rural communities',
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      title: 'Regional Deployments',
      description: 'Multiple states covered',
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="bg-green-600 text-white hover:bg-green-700 mb-4 text-sm px-4 py-1.5">
              Market Validation
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Proven Traction & Credibility
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From concept to reality - backed by real-world validation and institutional recognition
            </p>
          </div>

          {/* Traction Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tractionItems.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4">
                  <span className="text-green-700">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Institutional Recognition */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-10 text-white text-center shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Institutional Recognition
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Showcased at ICAR events and agricultural innovation forums
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-white/20 text-white border border-white/30 hover:bg-white/30 px-4 py-2 text-base">
                ICAR Exposure
              </Badge>
              <Badge className="bg-white/20 text-white border border-white/30 hover:bg-white/30 px-4 py-2 text-base">
                Government Recognition
              </Badge>
              <Badge className="bg-white/20 text-white border border-white/30 hover:bg-white/30 px-4 py-2 text-base">
                Innovation Awards
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traction;
