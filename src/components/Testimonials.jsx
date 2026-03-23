import React from 'react';
import { testimonials } from '../data/mock';
import { Star, Play, MapPin, Wheat } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="bg-green-600 text-white hover:bg-green-700 mb-4 text-sm px-4 py-1.5">
              Real Stories
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Farmers Across India
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from farmers in Nanded District, Maharashtra who transformed their harvesting with KISAAN MITRA
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-green-300 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12 bg-green-600 text-white">
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  {/* Video Play Icon */}
                  <button className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-lg transition-colors duration-200">
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  </button>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Farm Details */}
                <div className="flex gap-2 pt-4 border-t border-gray-200">
                  <Badge variant="outline" className="text-xs">
                    <Wheat className="w-3 h-3 mr-1" />
                    {testimonial.acres}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.crop}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Banner */}
          <div className="mt-16 bg-gradient-to-r from-green-700 to-green-800 rounded-2xl p-8 sm:p-10 text-white text-center shadow-xl">
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-green-200">Happy Farmers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.9/5</div>
                <div className="text-green-200">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-green-200">Would Recommend</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
