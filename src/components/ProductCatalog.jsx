import React, { useState } from 'react';
import { products } from '../data/mock';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCatalog = () => {
  const product = products.reaper;

  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/contact');
  };

  return (
    <section className="pb-20 pt-8 bg-gradient-to-b from-white to-gray-50" id="product-catalog">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0 mb-4 text-sm px-5 py-2">
              <Sparkles className="w-4 h-4 inline mr-2" />
              Available Now
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The Future of Small Farm Mechanisation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              India's first purpose-built EV reaper for sub-5 acre farms
            </p>
          </div>

          {/* Product Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-blue-400/30 blur-3xl rounded-full transform scale-75"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 border-gray-200 shadow-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                {product.inStock && (
                  <Badge className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 text-sm shadow-lg">
                    In Production
                  </Badge>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              {/* Title */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-xl text-gray-600">{product.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-green-600 to-emerald-600 rounded-full"></div>
                  Core Capabilities
                </h4>
                <div className="grid gap-3">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:border-green-500 hover:shadow-md transition-all duration-200"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-4 pt-4">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group"
                >
                  Request Details & Pricing
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    onClick={scrollToContact}
                    className="border-2 border-gray-300 hover:border-green-600 hover:bg-green-50 text-gray-700 py-5 font-semibold"
                  >
                    Book Demo
                  </Button>
                  <Button
                    variant="outline"
                    onClick={scrollToContact}
                    className="border-2 border-gray-300 hover:border-green-600 hover:bg-green-50 text-gray-700 py-5 font-semibold"
                  >
                    Talk to Sales
                  </Button>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  Free Installation
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  1-Year Warranty
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  Training Included
                </div>
              </div>
            </div>
          </div>

          {/* Purchase Options */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 text-white shadow-2xl border border-gray-700">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">Flexible Ownership Models</h3>
              <p className="text-gray-400 text-lg">Choose what works best for your farm</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Direct Purchase */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h4 className="text-xl font-bold mb-2">Direct Purchase</h4>
                <p className="text-gray-400 text-sm mb-4">Own the equipment outright</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Full ownership
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Immediate availability
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Rental income opportunity
                  </li>
                </ul>
              </div>

              {/* VLE Program */}
              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border-2 border-green-500 rounded-xl p-6 relative overflow-hidden">
                <Badge className="absolute top-4 right-4 bg-orange-500 text-white text-xs">
                  For Entrepreneurs
                </Badge>
                <h4 className="text-xl font-bold mb-2">VLE Program</h4>
                <p className="text-gray-300 text-sm mb-4">Village Level Entrepreneur model</p>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Lower initial investment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Business opportunity
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Community impact
                  </li>
                </ul>
              </div>

              {/* Financing */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h4 className="text-xl font-bold mb-2">Flexible Financing</h4>
                <p className="text-gray-400 text-sm mb-4">Easy payment options</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    EMI options available
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Quick approval
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Farmer-friendly terms
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg shadow-lg"
              >
                Discuss Options with Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
