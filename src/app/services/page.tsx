'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const turnkeySteps = [
    'Concept development and research',
    'Design and permissions',
    'Equipment supply and installation',
    'Commissioning',
    'Biological services',
  ];

  const services = [
    {
      title: 'Design & Engineering',
      desc: 'Comprehensive design and engineering services for CBG plants, EV charging infrastructure, and water bottling facilities. Our expert team ensures optimal design for maximum efficiency and sustainability.',
      icon: '📐',
      features: ['Plant Layout Design', 'Process Engineering', 'Structural Design', 'Electrical Systems']
    },
    {
      title: 'Inspection',
      desc: 'Rigorous inspection services to ensure quality, safety, and compliance with industry standards. We conduct thorough inspections at every stage of project development.',
      icon: '🔍',
      features: ['Quality Assurance', 'Safety Compliance', 'Regulatory Standards', 'Performance Testing']
    },
    {
      title: 'Testing',
      desc: 'Advanced testing and validation services for all our energy solutions. We ensure optimal performance and reliability through comprehensive testing protocols.',
      icon: '🧪',
      features: ['Performance Testing', 'Efficiency Analysis', 'Quality Control', 'System Validation']
    },
    {
      title: 'Procurement',
      desc: 'Streamlined procurement services for equipment, materials, and components. We leverage our network to source high-quality materials at competitive prices.',
      icon: '📦',
      features: ['Equipment Sourcing', 'Vendor Management', 'Quality Materials', 'Cost Optimization']
    },
    {
      title: 'Commissioning',
      desc: 'Professional commissioning services to ensure smooth startup and optimal operation of all facilities. Our team ensures everything runs perfectly from day one.',
      icon: '⚙️',
      features: ['System Startup', 'Performance Optimization', 'Staff Training', 'Documentation']
    },
    {
      title: 'Distribution',
      desc: 'Efficient distribution network for CBG, green diesel, and other renewable energy products. We ensure reliable supply chains across India.',
      icon: '🚚',
      features: ['Supply Chain Management', 'Logistics Solutions', 'Retail Network', 'Distribution Centers']
    },
    {
      title: 'Marketing & Branding',
      desc: 'Comprehensive marketing and branding services to establish your presence in the renewable energy market. We help build strong brand identity and market reach.',
      icon: '📢',
      features: ['Brand Development', 'Digital Marketing', 'Market Research', 'Customer Engagement']
    },
    {
      title: 'Field Construction',
      desc: 'Expert field construction services with focus on quality, safety, and timely completion. Our experienced team handles all aspects of on-site construction.',
      icon: '🏗️',
      features: ['Site Preparation', 'Construction Management', 'Quality Control', 'Project Delivery']
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-green-100 border-2 border-gray-400 py-16 lg:py-24 text-center w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800">Our Services</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Comprehensive solutions for renewable energy projects from design to distribution
          </p>
        </div>
      </section>

      {/* Turn-key Approach */}
      <section className="relative border-2 border-gray-400 py-16 lg:py-20 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/CBG-Plant.jpg')" }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-emerald-900/90 via-emerald-700/70 to-white/20" />
        <div className="relative container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-10 items-stretch">
          <div className="text-white lg:w-1/2 space-y-6">
            <p className="uppercase tracking-[0.3em] text-sm text-emerald-200">Nexgen Energia Advantage</p>
            <h2 className="text-4xl font-bold">Turn-key Approach</h2>
            <p className="text-lg text-emerald-100">
              Customers receive every service from a single source. We simplify the CBG plant journey
              from ideation to operations with transparent processes and expert teams.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-emerald-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-emerald-50 transition-colors duration-300 w-fit"
            >
              More Details
            </Link>
          </div>
          <div className="bg-white/85 text-gray-900 rounded-3xl shadow-2xl p-8 lg:w-1/2 backdrop-blur">
            <ul className="space-y-5">
              {turnkeySteps.map((step, idx) => (
                <li key={step} className="flex gap-4 items-start">
                  <span className="text-3xl font-extrabold text-emerald-500">{idx + 1}.</span>
                  <span className="text-lg font-medium leading-snug">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredService(idx)}
                onMouseLeave={() => setHoveredService(null)}
                className={`border-2 border-gray-400 p-6 rounded-lg transition-all duration-300 cursor-pointer ${
                  hoveredService === idx
                    ? 'bg-green-50 border-green-500 transform scale-105 shadow-xl'
                    : 'bg-white hover:shadow-lg hover:border-green-300'
                }`}
              >
                <div className="text-5xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-lg font-bold mb-3 text-gray-800 text-center">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4 text-center">{service.desc}</p>
                <div className="border-t border-gray-300 pt-4">
                  <div className="text-xs font-semibold mb-2 text-gray-700">Key Features:</div>
                  <ul className="space-y-1">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-xs text-gray-600 flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-white border-2 border-gray-400 py-16 w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'CBG Plant Services',
                desc: 'Complete solutions for Compressed Biogas plants including design, construction, commissioning, and operations support.',
                services: ['Plant Design', 'Construction', 'Commissioning', 'Operations & Maintenance']
              },
              {
                title: 'EV Infrastructure',
                desc: 'Comprehensive services for electric vehicle charging infrastructure development and management.',
                services: ['Charging Station Design', 'Installation', 'Network Management', 'Maintenance']
              },
              {
                title: 'Water Management',
                desc: 'Expert services for water bottling facilities and water management solutions.',
                services: ['Facility Design', 'Quality Control', 'Distribution', 'Compliance']
              }
            ].map((category, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border-2 border-gray-300 p-6 rounded-lg hover:border-green-500 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">{category.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{category.desc}</p>
                <ul className="space-y-2">
                  {category.services.map((service, sIdx) => (
                    <li key={sIdx} className="text-sm text-gray-700 flex items-start">
                      <span className="text-green-600 mr-2">→</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Service Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Consultation', desc: 'Understanding your needs' },
              { step: '2', title: 'Planning', desc: 'Design & strategy development' },
              { step: '3', title: 'Execution', desc: 'Implementation & construction' },
              { step: '4', title: 'Testing', desc: 'Quality assurance & validation' },
              { step: '5', title: 'Support', desc: 'Ongoing maintenance & service' }
            ].map((process, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-400 p-4 rounded-lg text-center hover:border-green-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">
                  {process.step}
                </div>
                <h4 className="font-bold mb-2 text-gray-800">{process.title}</h4>
                <p className="text-xs text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-50 border-2 border-gray-400 py-16 text-center w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Get Started?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your renewable energy project requirements. 
            Our expert team is ready to provide comprehensive solutions tailored to your needs.
          </p>
          <a
            href="/contact"
            className="border-2 border-green-600 px-8 py-3 text-sm rounded bg-white hover:bg-green-600 hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-md hover:shadow-xl font-semibold inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

