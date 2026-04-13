import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Battery, Leaf, Wheat, Wrench } from 'lucide-react';

import { Link } from 'react-router-dom';

const Hero = () => {

  const features = [
    { icon: <Leaf className="w-4 h-4" />, text: 'Zero Diesel Operation' },
    { icon: <Battery className="w-4 h-4" />, text: '5–6 Hr Swappable Battery' },
    { icon: <Wheat className="w-4 h-4" />, text: 'Multi-Crop Compatible' },
    { icon: <Wrench className="w-4 h-4" />, text: 'Design Patent Granted' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/4723058/pexels-photo-4723058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Indian Farmer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 py-12">
            <div className="inline-block">
              <Badge className="bg-green-600 text-white hover:bg-green-700 mb-4 text-sm px-4 py-1.5">
                Affordable Mechanisation for Bharat's Farmers
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Powering Harvests for Every Small Farmer
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl">
              Purpose-built EV reaper for sub-5 acre farms. Cut harvesting costs by up to 75% with zero diesel dependency.
            </p>

            {/* Credibility Line */}
            <div className="flex flex-wrap gap-4 text-sm sm:text-base font-semibold text-green-300">
              <span>4-5 acres/charge</span>
              <span className="text-gray-400">|</span>
              <span>5–6 hr battery</span>
              <span className="text-gray-400">|</span>
              <span>Multi-crop compatible</span>
              <span className="text-gray-400">|</span>
              <span>Autonomous Capabilities</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/product">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  Request Details
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-6 text-lg font-semibold transition-all duration-200"
                >
                  Book a Demo
                </Button>
              </Link>
            </div>

            {/* Feature Chips */}
            <div className="grid grid-cols-2 gap-3 pt-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 hover:bg-white/20 transition-all duration-200"
                >
                  <span className="text-green-400">{feature.icon}</span>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-green-500/30 blur-2xl rounded-full"></div>
              <video
                src="/Machine_Ad_Video_Generation.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="relative z-10 w-full h-auto rounded-3xl border-4 border-green-400 shadow-[0_0_50px_rgba(74,222,128,0.3)] transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
