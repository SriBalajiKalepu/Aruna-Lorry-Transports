import React from 'react';
import { Star, Quote, Building, Home, Wrench } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Builder & Contractor",
      company: "Kumar Constructions",
      location: "Rajahmundry",
      rating: 5,
      text: "Aruna Lorry Transports has been our go-to supplier for the past 8 years. Their reliability in delivering quality materials on time has been crucial for our construction projects. Never had any issues with quality or delivery schedules.",
      project: "50+ Residential Projects",
      icon: <Building className="h-6 w-6 text-blue-600" />
    },
    {
      id: 2,
      name: "Priya Reddy",
      role: "Homeowner",
      company: "Individual Customer",
      location: "Kakinada",
      rating: 5,
      text: "Building our dream home was made easier with Aruna Lorry Transports. They provided all materials from foundation to finishing at competitive prices. The team is very professional and helpful with material selection.",
      project: "2-Floor Residence Construction",
      icon: <Home className="h-6 w-6 text-green-600" />
    },
    {
      id: 3,
      name: "Venkat Rao",
      role: "Civil Engineer",
      company: "SR Engineering Solutions",
      location: "Amalapuram",
      rating: 5,
      text: "Quality of materials is consistently good. What I appreciate most is their technical knowledge - they help us choose the right materials for specific applications. The delivery network across East Godavari is impressive.",
      project: "Commercial & Industrial Projects",
      icon: <Wrench className="h-6 w-6 text-amber-600" />
    },
    {
      id: 4,
      name: "Lakshmi Devi",
      role: "Homeowner",
      company: "Individual Customer", 
      location: "Rajahmundry",
      rating: 5,
      text: "Renovated our entire house with materials from Aruna Lorry Transports. From sand to steel bars, everything was delivered as promised. The pricing was very reasonable and saved us a lot compared to other suppliers.",
      project: "Complete Home Renovation",
      icon: <Home className="h-6 w-6 text-purple-600" />
    },
    {
      id: 5,
      name: "Ravi Chandra",
      role: "Contractor",
      company: "Godavari Builders",
      location: "Kakinada",
      rating: 5,
      text: "15 years of business relationship speaks for itself. Aruna Lorry Transports understands our bulk requirements and always ensures timely supply. Their fleet capability is excellent for large projects.",
      project: "Multiple Township Projects",
      icon: <Building className="h-6 w-6 text-red-600" />
    },
    {
      id: 6,
      name: "Suresh Babu",
      role: "Site Engineer",
      company: "Modern Constructions",
      location: "East Godavari",
      rating: 5,
      text: "Working with Aruna Lorry Transports for past 5 years. They maintain good quality standards and their transportation is very reliable. Never faced material shortage issues during critical construction phases.",
      project: "Infrastructure Development",
      icon: <Wrench className="h-6 w-6 text-indigo-600" />
    }
  ];

  const stats = [
    { number: '1000+', label: 'Happy Customers' },
    { number: '15+', label: 'Years Experience' },
    { number: '4.9/5', label: 'Customer Rating' },
    { number: '95%', label: 'Repeat Customers' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-blue-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">What Our Customers Say</h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-gray-200">
            15+ years of trusted service in construction material supply across Andhra Pradesh
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Customer Reviews & Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from builders, contractors, and homeowners who trust us with their construction material needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 p-2 rounded-full">
                      {testimonial.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-amber-600 opacity-20" />
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">
                      <strong>Project:</strong> {testimonial.project}
                    </span>
                    <span className="text-gray-500">{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              We Serve All Types of Customers
            </h2>
            <p className="text-xl text-gray-600">
              From individual homeowners to large construction companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-blue-50 rounded-lg">
              <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Builders & Contractors</h3>
              <p className="text-gray-600">
                Large-scale projects, bulk orders, scheduled deliveries, and competitive pricing for construction companies.
              </p>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-lg">
              <Home className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Individual Homeowners</h3>
              <p className="text-gray-600">
                Home construction, renovation projects, small quantities, and personalized service for residential needs.
              </p>
            </div>

            <div className="text-center p-8 bg-amber-50 rounded-lg">
              <Wrench className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Engineers & Architects</h3>
              <p className="text-gray-600">
                Technical specifications, quality materials, project consultation, and reliable supply for professional projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join Our Satisfied Customers
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-amber-100">
            Experience the reliability and quality that has made us the trusted choice for construction materials in Andhra Pradesh
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919390244847"
              className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Call: +91 93902 44847
            </a>
            <a
              href="https://wa.me/919390244847?text=Hello!%20I%20need%20an%20instant%20quote%20for%20construction%20materials."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-amber-600 transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;