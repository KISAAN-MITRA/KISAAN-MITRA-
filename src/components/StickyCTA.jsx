import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ShoppingCart, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero section
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed scrollToSection as we now use React Router Links

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-green-700 to-green-800 shadow-2xl border-t-2 border-green-600 animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {/* Left: Product Info */}
          <div className="hidden md:block">
            <p className="text-white font-semibold text-lg">
              HVEV EV Reaper
            </p>
            <p className="text-green-200 text-sm">
              India's First Compact EV Reaper • 75% Cost Reduction
            </p>
          </div>

          {/* Right: CTAs */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Link to="/product" className="flex-1 md:flex-none">
              <Button
                className="w-full bg-white text-green-700 hover:bg-gray-100 font-semibold px-6 py-5 shadow-lg"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Get Details
              </Button>
            </Link>
            <Link to="/contact" className="flex-1 md:flex-none">
              <Button
                variant="outline"
                className="w-full border-2 border-white text-white hover:bg-white hover:text-green-700 font-semibold px-6 py-5"
              >
                <Phone className="w-4 h-4 mr-2" />
                Book Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
