import React from 'react';
import { Users, Award, Truck, MapPin, Calendar, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '20+', label: 'Years of Service', icon: <Calendar className="h-8 w-8 text-amber-600" /> },
    { number: '1000+', label: 'Projects Completed', icon: <Target className="h-8 w-8 text-blue-600" /> },
    { number: '10+', label: 'Fleet Vehicles', icon: <Truck className="h-8 w-8 text-green-600" /> },
    { number: '4', label: 'Districts Covered', icon: <MapPin className="h-8 w-8 text-purple-600" /> }
  ];

  const values = [
    {
      icon: <Award className="h-12 w-12 text-amber-600" />,
      title: "Quality Assurance",
      description: "We ensure all materials meet industry standards and quality requirements for construction projects."
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Customer First",
      description: "Our customers' needs are our priority. We build lasting relationships through reliable service."
    },
    {
      icon: <Truck className="h-12 w-12 text-green-600" />,
      title: "Timely Delivery",
      description: "We understand construction timelines. Our fleet ensures materials reach you exactly when needed."
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
            backgroundImage: "url('https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Aruna Lorry Transports</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-gray-200">
            Building Andhra Pradesh's construction industry with reliable material supply since 2005
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Journey Since 2005
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Aruna Lorry Transports was founded with a simple mission: to provide reliable, 
                  affordable construction materials to builders, contractors, and homeowners across 
                  East Godavari, Andhra Pradesh. What started as a small family business has grown into one of the 
                  region's most trusted material suppliers.
                </p>
                <p>
                  Over the past 20+ years, we've built our reputation on three core principles: 
                  quality materials, timely delivery, and exceptional customer service. Our deep 
                  understanding of the local construction industry allows us to anticipate our 
                  customers' needs and deliver solutions that keep projects on track.
                </p>
                <p>
                  Today, we operate a modern fleet of lorries and heavy vehicles, ensuring that 
                  whether you need sand for a small home renovation or steel for a major 
                  construction project, we can deliver exactly what you need, when you need it.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://i.postimg.cc/9QfbCx20/IMG-20200322-WA0005.jpg" 
                alt="Construction site with materials"
                className="rounded-lg shadow-xl"
                width={1080}
                height={1920}
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">20+</div>
                  <div className="text-sm">Years Serving AP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Proud milestones in our journey of reliable service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-100 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Areas We Serve
            </h2>
            <p className="text-xl text-blue-100">
              Delivering construction materials across East Godavari District and beyond
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Rajahmundry', 'Kakinada', 'Amalapuram', 'Surrounding Areas'].map((area, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-lg p-6 text-center backdrop-blur-sm">
                <MapPin className="h-8 w-8 text-blue-200 mx-auto mb-3" />
                <h3 className="text-xl font-semibold">{area}</h3>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-blue-100 text-lg">
              Don't see your area? <a href="tel:+919390244847" className="text-white font-semibold underline hover:no-underline">Call us</a> to check if we can serve your location!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;