import React from 'react';
import { supportedCrops, keyBenefits } from '../data/mock';
import { Wheat, CheckCircle } from 'lucide-react';

const ProductDetails = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="product">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              HVEV EV Reaper
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Engineered for versatility and efficiency across multiple crop types
            </p>
          </div>

          {/* Product Image */}
          <div className="mb-16 relative">
            <div className="absolute inset-0 bg-green-400/20 blur-3xl rounded-full transform scale-75"></div>
            <img
              src="/Seed planter machine with HVEV product listing.webp"
              alt="HVEV EV Reaper"
              className="relative z-10 w-full max-w-3xl mx-auto h-auto drop-shadow-2xl rounded-2xl border-4 border-white"
            />
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Supported Crops */}
            <div className="bg-[#f8faf8] border border-[#e2e8e2] rounded-3xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6">
                Supported Crops
              </h3>
              <div className="grid grid-cols-3 gap-x-4 gap-y-6">
                {[
                  { name: 'Wheat', image: '/Crops/Wheat.webp' },
                  { name: 'Paddy', image: '/Crops/Paddy.webp' },
                  { name: 'Maize', image: '/Crops/Corn.webp' },
                  { name: 'Soybean', image: '/Crops/Soyabean.webp' },
                  { name: 'Grams (Chickpea)', image: '/Crops/Gram (Chickpea).webp' },
                  { name: 'Sorghum (Jowar)', image: '/Crops/Sorghum (Jowar).webp' },
                  { name: 'Toor (Pigeon Pea)', image: '/Crops/Toor (Pigeon Pea).webp' },
                  { name: 'Kodo Millets', image: '/Crops/Kodo Milets.webp' },
                  { name: 'Coriander', image: '/Crops/Coriander.webp' }
                ].map((crop, index) => (
                  <div key={index} className="flex flex-col items-center group">
                    <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 shadow-sm border border-black/5">
                      <img 
                        src={crop.image} 
                        alt={crop.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-800 text-center leading-tight sm:text-base">
                      {crop.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-2xl p-8 shadow-lg text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/20 p-3 rounded-lg">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Key Benefits</h3>
              </div>
              <div className="space-y-4">
                {keyBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-lg font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
