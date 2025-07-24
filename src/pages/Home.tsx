import React from 'react';
import { ArrowRight, Truck, Clock, Shield, DollarSign, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <Truck className="h-8 w-8 text-amber-600" />,
      title: "Fleet of Lorries",
      description: "Modern fleet ensures timely delivery to your doorstep"
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "On-Time Delivery",
      description: "Reliable scheduling and prompt service across AP"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "20+ Years Trusted",
      description: "Proven track record with builders and contractors"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-purple-600" />,
      title: "Affordable Pricing",
      description: "Competitive rates for bulk orders and regular supply"
    }
  ];

  const materials = [
    { name: "Sand & Gravel", image: "https://i.postimg.cc/HWcVDXFm/5-OLgo-Bz-Vq3-Z8-Hnj-UGc-Sf-M63-S85knuw-Mzw-Nlo-Ld-N9.jpg" },
    { name: "Bricks", image: "https://i.postimg.cc/VvGSRWVZ/product-jpeg.jpg" },
    { name: "Gravel & Aggregates", image: "https://i.postimg.cc/Fs050Hk3/coarse-gravel-stone-texture-coarse-gravel-stone-texture-grave-104763246.webp" },
    { name: "Cement", image: "https://i.postimg.cc/6QXQCPQ5/prod-image.jpg" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://i.postimg.cc/25LKGfBT/tata-sk-407-tipper.webp')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Construction Materials
              <span className="block text-amber-400">Delivered to Your Doorstep</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              15+ years of trusted service in Andhra Pradesh. Sand, cement, steel, bricks, and more - 
              delivered on time with our reliable lorry fleet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919390244847?text=Hello!%20I%20need%20an%20instant%20quote%20for%20construction%20materials."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Get Instant Quote on WhatsApp
              </a>
              <Link
                to="/services"
                className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
              >
                View Materials
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Banner */}
      <section className="bg-amber-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-6 text-center">
            <MapPin className="h-5 w-5" />
            <p className="font-semibold">
              Serving: Rajahmundry • Kakinada • Amalapuram • East Godavari District
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Aruna Lorry Transports?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for construction material supply with unmatched reliability and service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-100 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Gallery */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Construction Materials We Supply
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality materials for all your construction needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {materials.map((material, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${material.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 text-center">{material.name}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-700 transition-colors duration-300 inline-flex items-center"
            >
              View All Materials & Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get instant quotes and schedule delivery for all your construction material needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919390244847"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call: +91 93902 44847
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              Get Quote Online
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;