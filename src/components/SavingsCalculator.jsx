import React, { useState } from 'react';
import { calculateSavings } from '../data/mock';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Calculator, TrendingUp, Calendar, DollarSign } from 'lucide-react';

const SavingsCalculator = () => {
  const [landSize, setLandSize] = useState(5);
  const [cropsPerYear, setCropsPerYear] = useState(2);
  const [results, setResults] = useState(null);

  const handleCalculate = () => {
    const savings = calculateSavings(landSize, cropsPerYear);
    setResults(savings);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold mb-4">
              <Calculator className="w-5 h-5" />
              ROI Calculator
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Calculate Your Savings
            </h2>
            <p className="text-lg text-gray-600">
              See how quickly KISAAN MITRA pays for itself
            </p>
          </div>

          {/* Calculator Card */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="land-size" className="text-base">
                  Your Land Size (Acres)
                </Label>
                <Input
                  id="land-size"
                  type="number"
                  min="1"
                  max="20"
                  value={landSize}
                  onChange={(e) => setLandSize(Number(e.target.value))}
                  className="mt-2 text-lg"
                />
              </div>
              <div>
                <Label htmlFor="crops-year" className="text-base">
                  Harvests Per Year
                </Label>
                <Input
                  id="crops-year"
                  type="number"
                  min="1"
                  max="3"
                  value={cropsPerYear}
                  onChange={(e) => setCropsPerYear(Number(e.target.value))}
                  className="mt-2 text-lg"
                />
              </div>
            </div>

            <Button
              onClick={handleCalculate}
              className="w-full bg-green-700 hover:bg-green-800 text-white py-6 text-lg font-semibold mb-6"
            >
              Calculate My Savings
            </Button>

            {/* Results */}
            {results && (
              <div className="space-y-4 animate-in fade-in duration-500">
                <div className="border-t-2 border-gray-200 pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Your Savings Breakdown</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                        <span className="text-sm text-gray-600">Annual Savings</span>
                      </div>
                      <p className="text-3xl font-bold text-green-700">
                        ₹{results.annualSavings.toLocaleString()}
                      </p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <DollarSign className="w-6 h-6 text-blue-600" />
                        <span className="text-sm text-gray-600">Monthly Equivalent</span>
                      </div>
                      <p className="text-3xl font-bold text-blue-700">
                        ₹{results.monthlyEquivalent.toLocaleString()}
                      </p>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 sm:col-span-2">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-6 h-6 text-purple-600" />
                        <span className="text-sm text-gray-600">Break-Even Period</span>
                      </div>
                      <p className="text-3xl font-bold text-purple-700">
                        {results.roi} Season{results.roi > 1 ? 's' : ''} ({results.breakEvenMonths} months)
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 bg-gradient-to-r from-green-700 to-green-800 rounded-xl p-6 text-white text-center">
                    <p className="text-lg mb-2">After break-even, this is pure profit:</p>
                    <p className="text-4xl font-bold">
                      ₹{results.annualSavings.toLocaleString()}/year
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Note */}
          <p className="text-center text-sm text-gray-600 mt-6">
            * Calculations based on average savings of ₹3,800 per acre compared to manual harvesting
          </p>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
