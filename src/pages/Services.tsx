import React, { useState } from 'react';
import { Truck, Clock, MapPin, Phone, Star } from 'lucide-react';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const materials = [
    {
      id: 1,
      name: 'River Sand',
      category: 'sand',
      description: 'High-quality river sand perfect for construction and plastering work',
      image: 'https://i.postimg.cc/HWcVDXFm/5-OLgo-Bz-Vq3-Z8-Hnj-UGc-Sf-M63-S85knuw-Mzw-Nlo-Ld-N9.jpg',
      features: ['Fine Grade', 'Clean & Sifted', 'Quick Delivery']
    },
    
    {
      id: 2,
      name: 'Red Bricks',
      category: 'bricks',
      description: 'Traditional red clay bricks for wall construction',
      image: 'https://i.postimg.cc/VvGSRWVZ/product-jpeg.jpg',
      features: ['Standard Size', 'High Strength', 'Bulk Orders']
    },
    {
      id: 3,
      name: 'Fly Ash Bricks',
      category: 'bricks',
      description: 'Lightweight, durable fly ash bricks',
      image: 'https://i.postimg.cc/Y0Zr0nV7/Fly-Ash-Bricks.jpg',
      features: ['Lightweight', 'Thermal Insulation', 'Eco-Friendly']
    },
    {
      id: 4,
      name: 'Coarse Crushed Stones or 20mm Crushed Stone',
      category: 'aggregates',
      description: 'High-quality coarse gravel for concrete and foundation work',
      image: 'https://i.postimg.cc/Fs050Hk3/coarse-gravel-stone-texture-coarse-gravel-stone-texture-grave-104763246.webp',
      features: ['Uniform Size', 'Clean & Washed', 'Foundation Grade']
    },
    {
      id: 5,
      name: 'Fine Crushed Stone or 10mm Crushed Stone',
      category: 'aggregates',
      description: 'Fine gravel suitable for concrete mixing and landscaping',
      image: 'https://i.postimg.cc/CK1Qrh5v/gravel-500x500.webp',
      features: ['Fine Grade', 'Multi-Purpose', 'Quality Assured']
    },

    {
      id: 6,
      name: 'OPC Cement',
      category: 'cement',
      description: 'Ordinary Portland Cement for general construction',
      image: 'https://i.postimg.cc/6QXQCPQ5/prod-image.jpg',
      features: ['Grade 43/53', 'Brand Options', 'Bulk Discounts']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Materials' },
    { id: 'sand', name: 'Sand & Soil' },
    { id: 'bricks', name: 'Bricks' },
    { id: 'aggregates', name: 'Aggregates' },
    { id: 'cement', name: 'Cement' }
  ];

  const filteredMaterials = selectedCategory === 'all' 
    ? materials 
    : materials.filter(material => material.category === selectedCategory);

  const services = [
    {
      icon: <Truck className="h-8 w-8 text-amber-600" />,
      title: "Doorstep Delivery",
      description: "We deliver materials directly to your construction site with our fleet of lorries"
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Timely Supply",
      description: "Scheduled deliveries to match your project timeline and requirements"
    },
    {
      icon: <MapPin className="h-8 w-8 text-green-600" />,
      title: "Wide Coverage",
      description: "Serving Rajahmundry, Kakinada, Amalapuram and surrounding districts"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-amber-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Construction Materials & Services</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-gray-200">
            Complete range of construction materials with competitive pricing and reliable delivery
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              End-to-end construction material supply solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Catalog */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Materials & Pricing
            </h2>
            <p className="text-xl text-gray-600">
              High-quality construction materials at competitive prices
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMaterials.map((material) => (
              <div key={material.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${material.image})` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{material.name}</h3>
                  <p className="text-gray-600 mb-4">{material.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {material.features.map((feature, index) => (
                      <span key={index} className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* Removed price and unit display as these properties do not exist */}
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Important Notes:</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>- Prices may vary based on market conditions</li>
                      <li>- Bulk order discounts available</li>
                      <li>- Transportation charges included within 20km</li>
                      <li>- GST applicable as per current rates</li>
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Delivery Information:</h4>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>- Same day delivery for stock items</li>
                      <li>- Minimum order quantities apply</li>
                      <li>- Free site inspection for bulk orders</li>
                      <li>- 24/7 customer support available</li>
                    </ul>
                  </div>
                  
                  <button
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
                    onClick={() => {
                      const whatsappNumber = "919390244847";
                      const message = `Hello! I need an instant quote for ${material.name}. Please provide pricing and delivery details.`;
                      const encodedMessage = encodeURIComponent(message);
                      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    Get Quote on WhatsApp
                  </button>
                    </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pricing Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">📋 Important Notes:</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Prices may vary based on market conditions</li>
                  <li>• Bulk order discounts available</li>
                  <li>• Transportation charges included within 20km</li>
                  <li>• GST applicable as per current rates</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🚚 Delivery Info:</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Same day delivery for stock items</li>
                  <li>• Minimum order quantities apply</li>
                  <li>• Free site inspection for bulk orders</li>
                  <li>• 24/7 customer support available</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="tel:+919390244847"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call for Latest Prices: +91 9390244847
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;