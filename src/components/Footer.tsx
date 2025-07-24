import React from 'react';
import { MapPin, Phone, Mail, Clock, Truck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-amber-700 p-2 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Aruna Lorry Transports</h3>
                <p className="text-gray-400 text-sm">Since 2005</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Trusted construction material supplier in Andhra Pradesh with 15+ years of reliable service.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Materials</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Sand</li>
              <li>Cement & Bricks</li>
              <li>Crushed Stone</li>
              <li>Construction Aggregates</li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Rajahmundry</li>
              <li>Kakinada</li>
              <li>Amalapuram</li>
              <li>Surrounding Districts</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Rajahmundry, East Godavari District</p>
                  <p className="text-gray-400">Andhra Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <a href="tel:+919390244847" className="text-gray-400 hover:text-white transition-colors">
                  +91 93902 44847
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <a href="mailto:sales@arunalorrytransports.com" className="text-gray-400 hover:text-white transition-colors">
                  sales@arunalorrytransports.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-amber-500" />
                <p className="text-gray-400">Mon-Sat: 6:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Aruna Lorry Transports. All rights reserved. | Trusted Construction Material Suppliers in Andhra Pradesh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;