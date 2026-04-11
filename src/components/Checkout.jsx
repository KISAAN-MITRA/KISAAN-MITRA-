import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { ShieldCheck, Package, Truck, Award } from 'lucide-react';

const Checkout = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    gstNumber: '',
    notes: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    // URLSearchParams automatically handles URL encoding of FormData
    const formDataObj = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataObj).toString(),
      });
      toast({
        title: 'Order Request Received!',
        description: `Our team will contact you within 24 hours.`,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        gstNumber: '',
        notes: '',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="checkout-section">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Complete Your Order
            </h2>
            <p className="text-lg text-gray-600">
              Fill in your details and our team will contact you to complete the purchase
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
                <form name="order" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="form-name" value="order" />
                  {/* Personal Details */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="mt-2"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div className="border-t pt-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Delivery Address</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address">Street Address *</Label>
                        <Textarea
                          id="address"
                          name="address"
                          required
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          rows={2}
                          className="mt-2"
                        />
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            name="city"
                            type="text"
                            required
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State *</Label>
                          <Input
                            id="state"
                            name="state"
                            type="text"
                            required
                            value={formData.state}
                            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="pincode">Pincode *</Label>
                          <Input
                            id="pincode"
                            name="pincode"
                            type="text"
                            required
                            value={formData.pincode}
                            onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                            className="mt-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* GST Details */}
                  <div className="border-t pt-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Business Details (Optional)</h3>
                    <div>
                      <Label htmlFor="gst">GST Number</Label>
                      <Input
                        id="gst"
                        name="gstNumber"
                        type="text"
                        value={formData.gstNumber}
                        onChange={(e) => setFormData({ ...formData, gstNumber: e.target.value })}
                        placeholder="Enter GST number if applicable"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="border-t pt-6">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={3}
                      placeholder="Any special requirements or questions..."
                      className="mt-2"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-700 hover:bg-green-800 text-white py-6 text-lg font-semibold"
                  >
                    {isSubmitting ? 'Processing...' : 'Submit Order Request'}
                  </Button>
                </form>
              </div>
            </div>

            {/* Trust Badges & Info */}
            <div className="space-y-6">
              {/* Trust Badges */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Purchase Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">1-Year Warranty</p>
                      <p className="text-sm text-gray-600">Full coverage included</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Truck className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Free Delivery</p>
                      <p className="text-sm text-gray-600">Across India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Installation Support</p>
                      <p className="text-sm text-gray-600">Setup assistance provided</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Training Included</p>
                      <p className="text-sm text-gray-600">Operator training session</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Note */}
              <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-2xl p-6 text-white shadow-lg">
                <h3 className="font-bold text-lg mb-3">Next Steps</h3>
                <ol className="space-y-2 text-sm text-green-100">
                  <li className="flex gap-2">
                    <span className="font-bold">1.</span>
                    <span>Submit your order request</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">2.</span>
                    <span>Our team will contact you within 24 hours</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">3.</span>
                    <span>Complete payment via Razorpay</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">4.</span>
                    <span>Receive your HVEV at your doorstep</span>
                  </li>
                </ol>
              </div>

              {/* Contact */}
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Need help?</p>
                <a href="tel:+917400543121" className="text-green-700 font-semibold">
                  Call +91 7400543121
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
