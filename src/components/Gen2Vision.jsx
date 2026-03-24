import React from 'react';
import { gen2Features } from '../data/mock';
import { Microscope, Cpu, Gauge, Sliders, Navigation, Sparkles } from 'lucide-react';
import { Badge } from './ui/badge';

const Gen2Vision = () => {
  const getIcon = (iconName) => {
    const icons = {
      Microscope,
      Cpu,
      Gauge,
      Sliders,
      Navigation,
    };
    return icons[iconName] || Cpu;
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden" id="gen2-vision">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>

      {/* Animated Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Building the Future of Intelligent Farming
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
              KISAAN MITRA is evolving from mechanisation to intelligent farm automation
            </p>
            <div className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold text-lg">
              From Mechanisation → Intelligent Automation
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/3912469/pexels-photo-3912469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="AI Sensor Technology"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Advanced Data Analytics</p>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1627920769541-daa658ed6b59?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxzbWFydCUyMGFncmljdWx0dXJlfGVufDB8fHx8MTc3NDI0OTQwMnww&ixlib=rb-4.1.0&q=85"
                alt="Autonomous Farming"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Autonomous Operations</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {gen2Features.map((feature, index) => {
              const Icon = getIcon(feature.icon);
              return (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl blur group-hover:blur-md transition-all duration-300"></div>
                  <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              );
            })}

            {/* Coming Soon Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur group-hover:blur-md transition-all duration-300"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 flex items-center justify-center min-h-[180px]">
                <div className="text-center">
                  <Sparkles className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">And More...</h3>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                    In Development
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Images */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/5230957/pexels-photo-5230957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Digital Agriculture"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Real-Time Monitoring</p>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/6147478/pexels-photo-6147478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="IoT Sensors"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Sustainable Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gen2Vision;
