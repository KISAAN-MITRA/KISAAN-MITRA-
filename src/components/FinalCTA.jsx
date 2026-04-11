import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../data/mock';
import { useToast } from '../hooks/use-toast';
import { MessageCircle, Mail, Users, Briefcase } from 'lucide-react';

const FinalCTA = () => {
  const { toast } = useToast();
  const [activeForm, setActiveForm] = useState('demo');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [demoForm, setDemoForm] = useState({
    name: '',
    phone: '',
    location: '',
    landSize: '',
  });

  const [partnerForm, setPartnerForm] = useState({
    name: '',
    email: '',
    phone: '',
    partnerType: '',
    message: '',
  });

  const handleDemoSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: 'Demo Request', ...demoForm }),
      });
      toast({
        title: 'Success!',
        description: 'Your demo request has been submitted!',
      });
      setDemoForm({ name: '', phone: '', location: '', landSize: '' });
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

  const handlePartnerSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: 'Partnership Inquiry', ...partnerForm }),
      });
      toast({
        title: 'Success!',
        description: 'Your partnership inquiry has been submitted!',
      });
      setPartnerForm({ name: '', email: '', phone: '', partnerType: '', message: '' });
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

  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="cta">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Harvesting?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get in touch with us to explore ownership, partnership, or investment opportunities
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <MessageCircle className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Connect on WhatsApp</h3>
              <p className="text-green-100 mb-6">
                Get instant responses to your queries
              </p>
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-white text-green-700 hover:bg-gray-100 font-semibold py-3 text-lg"
              >
                Chat Now
              </Button>
            </div>

            {/* Email Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <Mail className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Email Us</h3>
              <p className="text-gray-300 mb-6">
                Detailed inquiries and proposals
              </p>
              <Button
                onClick={() => window.location.href = 'mailto:info@hvev.in'}
                className="w-full bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 text-lg"
              >
                Send Email
              </Button>
            </div>
          </div>

          {/* Form Tabs */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-xl overflow-hidden">
            {/* Tab Headers */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveForm('demo')}
                className={`flex-1 py-4 px-6 font-semibold text-lg transition-colors duration-200 ${
                  activeForm === 'demo'
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Users className="w-5 h-5 inline mr-2" />
                Book a Demo
              </button>
              <button
                onClick={() => setActiveForm('partner')}
                className={`flex-1 py-4 px-6 font-semibold text-lg transition-colors duration-200 ${
                  activeForm === 'partner'
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Briefcase className="w-5 h-5 inline mr-2" />
                Partner With Us
              </button>
            </div>

            {/* Form Content */}
            <div className="p-8" id="demo-form">
              {activeForm === 'demo' ? (
                <form name="demo" method="POST" data-netlify="true" onSubmit={handleDemoSubmit} className="space-y-6">
                  <input type="hidden" name="form-name" value="demo" />
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="demo-name">Full Name *</Label>
                      <Input
                        id="demo-name"
                        name="name"
                        type="text"
                        required
                        value={demoForm.name}
                        onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                        placeholder="Enter your name"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="demo-phone">Phone Number *</Label>
                      <Input
                        id="demo-phone"
                        name="phone"
                        type="tel"
                        required
                        value={demoForm.phone}
                        onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                        placeholder="Enter your phone number"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="demo-location">Location *</Label>
                      <Input
                        id="demo-location"
                        name="location"
                        type="text"
                        required
                        value={demoForm.location}
                        onChange={(e) => setDemoForm({ ...demoForm, location: e.target.value })}
                        placeholder="Village/City, State"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="demo-land">Land Size (Acres)</Label>
                      <Input
                        id="demo-land"
                        name="landSize"
                        type="text"
                        value={demoForm.landSize}
                        onChange={(e) => setDemoForm({ ...demoForm, landSize: e.target.value })}
                        placeholder="e.g., 5 acres"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-700 hover:bg-green-800 text-white py-6 text-lg font-semibold"
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Demo'}
                  </Button>
                </form>
              ) : (
                <form name="partner" method="POST" data-netlify="true" onSubmit={handlePartnerSubmit} className="space-y-6">
                  <input type="hidden" name="form-name" value="partner" />
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="partner-name">Full Name *</Label>
                      <Input
                        id="partner-name"
                        name="name"
                        type="text"
                        required
                        value={partnerForm.name}
                        onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                        placeholder="Enter your name"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="partner-email">Email *</Label>
                      <Input
                        id="partner-email"
                        name="email"
                        type="email"
                        required
                        value={partnerForm.email}
                        onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                        placeholder="Enter your email"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="partner-phone">Phone Number *</Label>
                      <Input
                        id="partner-phone"
                        name="phone"
                        type="tel"
                        required
                        value={partnerForm.phone}
                        onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                        placeholder="Enter your phone number"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="partner-type">Partnership Type *</Label>
                      <select
                        id="partner-type"
                        name="partnerType"
                        required
                        value={partnerForm.partnerType}
                        onChange={(e) => setPartnerForm({ ...partnerForm, partnerType: e.target.value })}
                        className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="">Select type</option>
                        <option value="dealer">Become a Dealer</option>
                        <option value="fpo">FPO Partnership</option>
                        <option value="government">Government/CSR</option>
                        <option value="investor">Investor Inquiry</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="partner-message">Message</Label>
                    <Textarea
                      id="partner-message"
                      name="message"
                      value={partnerForm.message}
                      onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                      placeholder="Tell us about your interest..."
                      rows={4}
                      className="mt-2"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-700 hover:bg-green-800 text-white py-6 text-lg font-semibold"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Partnership Inquiry'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
