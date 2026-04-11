import React from 'react';
import { problemPoints, solutionPoints } from '../data/mock';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section className="py-10 bg-white" id="problem-solution">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Problem Section */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold text-sm">
                  THE CHALLENGE
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Small farmers are priced out of mechanisation
                </h3>
              </div>

              <div className="space-y-4">
                {problemPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-red-50 border border-red-200 rounded-lg p-4 hover:bg-red-100 transition-colors duration-200"
                  >
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-800 font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution Section */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm">
                  THE SOLUTION
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  HVEV bridges the mechanisation gap
                </h3>
              </div>

              <div className="space-y-4">
                {solutionPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-green-50 border border-green-200 rounded-lg p-4 hover:bg-green-100 transition-colors duration-200"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-800 font-medium">{point}</p>
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

export default ProblemSolution;
