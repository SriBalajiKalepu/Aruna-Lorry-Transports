import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Truck } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    material: '',
    quantity: '',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        material: '',
        quantity: '',
        location: '',
        message: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Phone Numbers",
      details: ["+91 9390244847"],
      action: "tel:+919390244847"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-green-600" />,
      title: "WhatsApp",
      details: ["+91 9390244847", "Quick responses available"],
      action: "https://wa.me/919390244847"
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-600" />,
      title: "Email",
      details: ["sales@arunalorrytransports.com"],
      action: "mailto:sales@arunalorrytransports.com"
    },
    {
      icon: <Clock className="h-6 w-6 text-amber-600" />,
      title: "Business Hours",
      details: ["Mon-Sat: 6:00 AM - 9:00 PM", "Sunday: 7:00 AM - 6:00 PM"],
      action: null
    }
  ];

  const materials = [
    "River Sand", "Red Bricks", "Fly Ash Bricks", "Crushed Stone(20mm)", 
    "Crushed Stone(10mm)", "OPC Cement", "Other Materials"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-blue-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://i.postimg.cc/25LKGfBT/tata-sk-407-tipper.webp')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-gray-200">
            Get in touch for quotes, orders, and all your construction material needs
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {info.action && idx === 0 ? (
                        <a href={info.action} className="hover:text-blue-600 transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Truck className="h-6 w-6 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Get Instant Quote</h2>
              </div>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800">
                    Thank you! We'll contact you within 30 minutes with your quote.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="material" className="block text-sm font-medium text-gray-700 mb-2">
                      Material Required *
                    </label>
                    <select
                      id="material"
                      name="material"
                      required
                      value={formData.material}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Material</option>
                      {materials.map((material, index) => (
                        <option key={index} value={material}>{material}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity Required *
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      required
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 5 trucks, 1000 pieces"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="City, District, Pincode"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any specific requirements, delivery dates, or questions..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => {
                    const whatsappNumber = "919390244847";
                    const message =
                      `Hello! I need an instant quote.\n` +
                      `Name: ${formData.name}\n` +
                      `Phone: ${formData.phone}\n` +
                      `Email: ${formData.email}\n` +
                      `Material: ${formData.material}\n` +
                      `Quantity: ${formData.quantity}\n` +
                      `Location: ${formData.location}\n` +
                      `Requirements: ${formData.message}`;
                    const encodedMessage = encodeURIComponent(message);
                    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center disabled:opacity-50"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Get Instant Quote on WhatsApp
                </button>
              </form>
            </div>

            {/* Map & Address */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-amber-600 mr-2" />
                  Our Location
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Head Office:</strong></p>
                  <p>Aruna Lorry Transports<br />
                     Near Transport Nagar<br />
                     Rajahmundry, East Godavari District<br />
                     Andhra Pradesh - 533101</p>
                  
                  <div className="border-t pt-4 mt-4">
                    <p><strong>Service Areas:</strong></p>
                    <p>Rajahmundry • Kakinada • Amalapuram<br />
                       East Godavari District • West Godavari District</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                    <p>Interactive Google Maps</p>
                    <p className="text-sm">Rajahmundry, Andhra Pradesh</p>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <a
                    href="https://share.google/udsTOy5LpkxB6nLS8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-12 bg-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Materials Urgently?</h3>
          <p className="text-amber-100 mb-6">Call us directly for immediate assistance and same-day delivery</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919390244847"
              className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call: +91 9390244847
            </a>
            <a
              href="https://wa.me/919390244847?text=Hi! I need construction materials urgently. Can you help?"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;