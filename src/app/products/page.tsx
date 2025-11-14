'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductsPage() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const mainProducts = [
    {
      title: 'CBG Manufacturing Plant',
      desc: 'State-of-the-art Compressed Biogas manufacturing facilities that transform organic waste into clean, renewable energy. Our CBG plants utilize advanced anaerobic digestion technology to produce high-quality biogas.',
      image: '/CBG-Plant.jpg',
      features: [
        'Organic Waste Processing',
        'Anaerobic Digestion Technology',
        'Biogas Compression',
        'Quality Control Systems',
        'Automated Operations',
      ],
      benefits: [
        'Reduces carbon emissions',
        'Converts waste to energy',
        'Sustainable fuel source',
        'Government incentives available',
      ],
    },
    {
      title: 'CBG Retail Outlet (Pump)',
      desc: 'Franchise opportunities for CBG retail outlets across India. Join our network of Bio-CNG/CBG pumps and provide clean, renewable fuel to vehicles. We offer complete support from setup to operations.',
      image: '/CBG-Retail.jpg',
      features: [
        'Franchise Support',
        'Training Programs',
        'Marketing Assistance',
        'Supply Chain Management',
        'Technology Integration',
      ],
      benefits: [
        'Proven business model',
        'Growing market demand',
        'Government support',
        'Sustainable business',
      ],
    },
    {
      title: 'Green Diesel Retail Outlet',
      desc: 'Eco-friendly renewable diesel retail outlets for sustainable transportation. Our green diesel is produced from renewable sources and offers a cleaner alternative to traditional diesel fuel.',
      image: '/Green-Diesel.jpg',
      features: [
        'Renewable Diesel Supply',
        'Modern Infrastructure',
        'Customer Service Excellence',
        'Environmental Compliance',
        'Quality Assurance',
      ],
      benefits: [
        'Lower emissions',
        'Better fuel efficiency',
        'Renewable source',
        'Market growth potential',
      ],
    },
  ];

  const upcomingProjects = [
    {
      location: 'Guwahati, Assam',
      capacity: '25 TPD CBG Plant',
      highlight: 'First large-scale CBG deployment in the Northeast, powering city logistics.',
    },
    {
      location: 'Latur, Maharashtra',
      capacity: '50 TPD CBG Plant',
      highlight: 'Integrated plant with on-site retail outlet for regional transport fleet.',
      featured: true,
    },
    {
      location: 'Sangli, Maharashtra',
      capacity: '100 TPD CBG Plant',
      highlight: 'Mega installation supporting agriculture value chain and city buses.',
    },
  ];

  const franchiseActions = [
    {
      title: 'Apply Now',
      description: 'Share land details and business interests to begin the franchise screening.',
      cta: 'Apply Online',
      href: '/contact',
      icon: '🖱️',
    },
    {
      title: 'Application Form',
      description: 'Download the detailed DODO model documentation and investment guide.',
      cta: 'Download PDF',
      href: '/docs/Nexgen-Franchise.pdf',
      icon: '📄',
    },
  ];

  const businessSectors = [
    {
      title: 'Biofuels',
      desc: 'Transform organic waste to clean energy through advanced biofuel production technologies.',
      products: ['CBG', 'Biodiesel', 'Bioethanol', 'Biomass Pellets']
    },
    {
      title: 'Electric Vehicles',
      desc: 'EV technology and charging infrastructure solutions for the future of transportation.',
      products: ['EV Charging Stations', 'Battery Solutions', 'Fleet Management', 'EV Services']
    },
    {
      title: 'Water Bottling',
      desc: 'Responsible water management and bottling solutions with focus on quality and sustainability.',
      products: ['Bottled Water', 'Water Treatment', 'Quality Control', 'Distribution']
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-green-100 border-2 border-gray-400 py-16 lg:py-24 text-center w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800">Our Products</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Innovative renewable energy solutions for a sustainable future
          </p>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Featured Products</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainProducts.map((product, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredProduct(idx)}
                onMouseLeave={() => setHoveredProduct(null)}
                className={`bg-white border-2 border-gray-400 p-6 rounded-lg transition-all duration-300 ${
                  hoveredProduct === idx
                    ? 'transform scale-105 shadow-xl border-green-500 bg-green-50'
                    : 'hover:shadow-lg hover:border-green-300'
                }`}
              >
                <div
                  className="relative w-full h-52 mb-4 rounded-xl overflow-hidden border-2 border-gray-200 shadow-inner"
                  style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-800">{product.title}</h3>
                <p className="text-sm text-gray-600 mb-4 text-center">{product.desc}</p>
                
                <div className="border-t border-gray-300 pt-4 mb-4">
                  <div className="text-sm font-semibold mb-2 text-gray-700">Key Features:</div>
                  <ul className="space-y-1">
                    {product.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-xs text-gray-600 flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-300 pt-4">
                  <div className="text-sm font-semibold mb-2 text-gray-700">Benefits:</div>
                  <ul className="space-y-1">
                    {product.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="text-xs text-gray-600 flex items-start">
                        <span className="text-green-600 mr-2">★</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full mt-4 border-2 border-green-600 px-4 py-2 text-sm rounded hover:bg-green-600 hover:text-white transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="bg-white border-2 border-gray-400 py-16 w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Let’s Check Out Our Latest Projects</h2>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            CBG plants coming online across India, expanding Nexgen Energia’s clean-energy footprint.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {upcomingProjects.map((project) => (
              <div
                key={project.location}
                className={`rounded-3xl border-2 p-8 transition-all duration-300 shadow-sm ${
                  project.featured
                    ? 'bg-slate-900 text-white border-slate-800 shadow-2xl scale-[1.02]'
                    : 'bg-white text-gray-800 border-gray-200 hover:shadow-xl'
                }`}
              >
                <div
                  className={`rounded-2xl border-2 mb-6 h-48 flex items-center justify-center relative overflow-hidden ${
                    project.featured ? 'border-slate-700 bg-slate-800' : 'border-emerald-100 bg-emerald-50'
                  }`}
                >
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-size-[20px_20px]" />
                  <div className={`text-center ${project.featured ? 'text-emerald-100' : 'text-emerald-700'}`}>
                    <div className="text-lg font-semibold">{project.location}</div>
                    <div className="text-sm opacity-80">{project.capacity}</div>
                  </div>
                </div>
                <p className="text-sm mb-6 opacity-90">{project.highlight}</p>
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 font-semibold ${
                    project.featured ? 'text-emerald-200 hover:text-white' : 'text-emerald-700 hover:text-emerald-900'
                  }`}
                >
                  More Details <span aria-hidden="true">➔</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 bg-slate-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-900 transition-colors"
            >
              Explore More <span aria-hidden="true">➤</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Business Sectors */}
      <section className="bg-white border-2 border-gray-400 py-16 w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Business Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessSectors.map((sector, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border-2 border-gray-300 p-6 rounded-lg hover:border-green-500 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">{sector.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{sector.desc}</p>
                <div className="border-t border-gray-300 pt-4">
                  <div className="text-sm font-semibold mb-2 text-gray-700">Products & Services:</div>
                  <div className="flex flex-wrap gap-2">
                    {sector.products.map((product, pIdx) => (
                      <span
                        key={pIdx}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs font-medium"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Franchisee */}
      <section className="bg-white border-2 border-gray-400 py-16 w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-600">Join Us</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Become a Franchisee</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Join the Nexgen CBG (CNG) pump network and make your land part of our retail footprint.
              Become the proud owner of a Nexgen CBG Retail Outlet (on DODO model).
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {franchiseActions.map((action) => (
              <div
                key={action.title}
                className="bg-white rounded-[32px] border-2 border-emerald-100 p-10 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="mx-auto w-24 h-24 rounded-3xl bg-slate-800 text-white flex items-center justify-center text-4xl shadow-xl mb-6">
                  {action.icon}
                </div>
                <p className="text-sm uppercase tracking-[0.5em] text-emerald-500 mb-2">
                  {action.title === 'Apply Now' ? 'Click to' : 'Download'}
                </p>
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">{action.title}</h3>
                <p className="text-gray-600 mb-6">{action.description}</p>
                <Link
                  href={action.href}
                  className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-900"
                >
                  {action.cta} <span aria-hidden="true">➔</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Technology & Innovation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Advanced Digestion', desc: 'Cutting-edge anaerobic digestion technology' },
              { title: 'Smart Monitoring', desc: 'IoT-based monitoring and control systems' },
              { title: 'Quality Control', desc: 'Rigorous quality assurance protocols' },
              { title: 'Eco-Friendly', desc: 'Sustainable and environmentally responsible' }
            ].map((tech, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-400 p-6 rounded-lg text-center hover:border-green-500 hover:shadow-lg transition-all duration-300"
              >
                <h4 className="font-bold mb-2 text-gray-800">{tech.title}</h4>
                <p className="text-xs text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

