import React, { useState } from 'react';
import { modularAttachments } from '../data/mock';
import { Droplet, Settings, Leaf, ChevronRight } from 'lucide-react';
import { Badge } from './ui/badge';

const ModularPlatform = () => {
  const [activeModule, setActiveModule] = useState(null);

  const getIcon = (iconName) => {
    const icons = {
      Droplet: Droplet,
      Settings: Settings,
      Leaf: Leaf,
    };
    return icons[iconName] || Settings;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="modular-platform">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="bg-green-600 text-white hover:bg-green-700 mb-4 text-sm px-4 py-1.5">
              Core Differentiator
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              1 Platform. Multiple Farming Solutions.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your EV Reaper into a complete farming powerhouse with plug-and-play attachments
            </p>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white border-2 border-green-200 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-green-700 mb-2">Plug & Play</div>
              <p className="text-gray-600">Quick attachment switching</p>
            </div>
            <div className="bg-white border-2 border-green-200 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-green-700 mb-2">60% Less CapEx</div>
              <p className="text-gray-600">Compared to buying separate machines</p>
            </div>
            <div className="bg-white border-2 border-green-200 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-green-700 mb-2">Multi-Crop</div>
              <p className="text-gray-600">One platform, year-round utility</p>
            </div>
          </div>

          {/* Base Platform + Modules */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Product Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-green-400/20 blur-3xl rounded-full transform scale-75"></div>
              <img
                src="/Seed planter machine with HVEV product listing.png"
                alt="HVEV Base Platform"
                className="relative z-10 w-full h-auto drop-shadow-2xl"
              />
              <div className="absolute top-4 left-4 z-20 bg-green-700 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                Base Platform
              </div>
            </div>

            {/* Right: Modular Attachments */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Modular Attachments</h3>
              
              {modularAttachments.map((module, index) => {
                const Icon = getIcon(module.icon);
                return (
                  <div
                    key={module.id}
                    className={`group bg-white border-2 rounded-xl p-5 cursor-pointer transition-all duration-300 ${
                      activeModule === module.id
                        ? 'border-green-500 shadow-lg'
                        : 'border-gray-200 hover:border-green-300 hover:shadow-md'
                    }`}
                    onMouseEnter={() => setActiveModule(module.id)}
                    onMouseLeave={() => setActiveModule(null)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                          activeModule === module.id
                            ? 'bg-green-600 text-white'
                            : 'bg-green-100 text-green-700 group-hover:bg-green-600 group-hover:text-white'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-lg font-bold text-gray-900">{module.name}</h4>
                            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 text-xs">
                              Coming Soon
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">{module.description}</p>
                        </div>
                      </div>
                      <ChevronRight className={`w-5 h-5 text-gray-400 transition-all duration-300 ${
                        activeModule === module.id ? 'text-green-600 transform translate-x-1' : ''
                      }`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-r from-green-700 to-green-800 rounded-2xl p-8 sm:p-10 text-white text-center shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Future-Proof Your Farm Operations
            </h3>
            <p className="text-lg text-green-100 mb-6">
              Start with the reaper today, expand with attachments as your needs grow
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('product-catalog');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              View Base Platform
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModularPlatform;
