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
              KISAAN MITRA EV Reaper
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Engineered for versatility and efficiency across multiple crop types
            </p>
          </div>

          {/* Product Image */}
          <div className="mb-16 relative">
            <div className="absolute inset-0 bg-green-400/20 blur-3xl rounded-full transform scale-75"></div>
            <img
              src="https://customer-assets.emergentagent.com/job_kisaan-mitra-rebuild/artifacts/zg968nxs_ChatGPT%20Image%20Mar%2023%2C%202026%2C%2009_42_08%20AM.png"
              alt="Kisaan Mittra EV Reaper"
              className="relative z-10 w-full max-w-3xl mx-auto h-auto drop-shadow-2xl"
            />
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Supported Crops */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Wheat className="w-7 h-7 text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Supported Crops</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {supportedCrops.map((crop, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-700 font-medium"
                  >
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    {crop}
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
