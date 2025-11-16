'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '',
    consent: false,
  });

  const handleApplicationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Submit to API route
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationForm),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Application submitted successfully! Our team will contact you soon.',
        });
        // Reset form on success
        setApplicationForm({
          name: '',
          mobile: '',
          email: '',
          city: '',
          consent: false,
        });
        // Close modal after 2 seconds
        setTimeout(() => {
          setIsApplicationModalOpen(false);
          setSubmitStatus({ type: null, message: '' });
        }, 2000);
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to submit application. Please try again.',
        });
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleApplicationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setApplicationForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const serviceIcons = ['/file.svg', '/globe.svg', '/vercel.svg', '/window.svg'];
  const aboutHighlights = [
    {
      title: 'Our Story',
      description:
        'From a single CBG initiative to a diversified clean-energy group, we have spent the last decade helping communities convert waste into wealth.',
      image: '/communities.jpeg',
    },
    {
      title: 'About Nexgen Energia',
      description:
        'Today Nexgen Energia powers CBG manufacturing, EV infrastructure, water management, and retail outlets across India with a franchise-first model.',
      image: '/industries.jpeg',
    },
  ];
  const featuredProducts = [
    {
      title: 'CBG Manufacturing Plant',
      desc: 'Clean renewable Compressed Biogas from organic waste',
      image: '/CBG-Plant.jpg',
    },
    {
      title: 'CBG Retail Outlet (Pump)',
      desc: 'Fuel up with clean renewable Compressed Biogas',
      image: '/CBG-Retail.jpg',
    },
    {
      title: 'Green Diesel Retail Outlet',
      desc: 'Eco-friendly renewable diesel for sustainable journey',
      image: '/Green-Diesel.jpg',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <Header />

      {/* Hero Section */}
      <section
        className="relative border-2 border-gray-400 py-28 w-full text-white overflow-hidden"
        style={{
          backgroundImage: "url('/hero-banner-new.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1.5px]" />
        <div className="relative container mx-auto px-6 lg:px-12 max-w-6xl text-center space-y-6">
          <p className="uppercase tracking-[0.5em] text-xs lg:text-sm text-emerald-200">Renewable Energy • EV • Water</p>
          <h1 className="text-4xl lg:text-6xl font-black leading-tight text-transparent bg-clip-text bg-linear-to-r from-emerald-200 via-white to-emerald-100 drop-shadow-[0_5px_25px_rgba(0,0,0,0.35)]">
            India&apos;s Fastest Growing Energy Company
          </h1>
          <p className="text-lg lg:text-2xl text-white/90 font-semibold drop-shadow">
            Pioneering sustainable energy ecosystems — CBG Plants, Electric Vehicles, Water Management, and Clean Distribution.
          </p>
          <p className="text-base lg:text-lg text-white/75">
            Bio-CNG Pump/CBG Pump Franchise • Bio Gas/CNG Retail Outlets • Pan-India Network • Turn-key Execution
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/products"
              className="border-2 border-white/80 px-8 py-3 text-base rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-xl font-semibold"
            >
              Explore CBG Solutions
            </Link>
            <Link
              href="/contact"
              className="border-2 border-emerald-300 px-8 py-3 text-base rounded-full bg-emerald-500/90 text-white hover:bg-emerald-500 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-xl font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Three Main Services Cards */}
      <section id="products" className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProducts.map((card, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative border-2 rounded-3xl overflow-hidden min-h-[320px] transition-all duration-300 cursor-pointer ${
                hoveredCard === idx
                  ? 'transform scale-105 shadow-2xl border-green-500'
                  : 'bg-white hover:shadow-xl hover:border-green-300'
              }`}
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative h-full flex flex-col justify-end p-6 text-left text-white space-y-3">
                <div>
                  <h3 className="text-lg font-semibold drop-shadow">{card.title}</h3>
                  <p className="text-sm text-white/90">{card.desc}</p>
                </div>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center border border-white/70 px-4 py-2 text-sm rounded-full bg-white/10 text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  Explore More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white border-2 border-gray-400 py-12 w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">About Nexgen Energia</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {aboutHighlights.map((highlight, idx) => (
              <div
                key={highlight.title}
                className="flex flex-col lg:flex-row gap-6 bg-gray-50 border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  width={320}
                  height={200}
                  className="w-full lg:w-1/2 h-48 object-cover rounded-2xl"
                />
                <div className="flex-1 text-sm text-gray-800 space-y-3">
                  <p className="text-base font-semibold text-gray-900">{highlight.title}</p>
                  <p>{highlight.description}</p>
                  {idx === 1 && (
                    <Link
                      href="/about"
                      className="inline-block mt-2 border-2 border-green-600 px-6 py-2 text-sm rounded text-gray-900 hover:bg-green-600 hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      Learn More
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="bg-white border-2 border-gray-400 py-12 w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">Our Services</h2>
          <p className="text-center text-gray-800 mb-8 max-w-2xl mx-auto">
            Comprehensive solutions for renewable energy projects from design to distribution
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-8">
            {['Design & Engineering', 'Inspection', 'Testing', 'Procurement', 
              'Commissioning', 'Distribution', 'Marketing & Branding', 'Field Construction'].map((service, idx) => (
              <Link
                key={idx}
                href="/services"
                onMouseEnter={() => setHoveredService(idx)}
                onMouseLeave={() => setHoveredService(null)}
                className={`border border-gray-300 p-4 text-center text-sm rounded-lg transition-all duration-300 cursor-pointer ${
                  hoveredService === idx
                    ? 'bg-green-50 border-green-500 transform scale-105 shadow-md'
                    : 'hover:bg-gray-50 hover:border-green-300'
                }`}
              >
                <div className={`w-12 h-12 bg-gray-100 mx-auto mb-3 rounded-full flex items-center justify-center transition-all duration-300 ${
                  hoveredService === idx ? 'bg-green-100' : ''
                }`}>
                  <span className="sr-only">{service}</span>
                  <Image
                    src={serviceIcons[idx % serviceIcons.length]}
                    alt={service}
                    width={28}
                    height={28}
                    className="w-7 h-7 text-green-700"
                  />
                </div>
                <div className="text-xs font-medium text-gray-900">{service}</div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/services"
              className="border-2 border-green-600 px-6 py-2 text-sm rounded text-gray-900 hover:bg-green-600 hover:text-white transition-all duration-300 cursor-pointer font-semibold inline-block"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Business Sectors */}
      <section className="bg-white border-2 border-gray-400 py-12 w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">Business Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: 'Biofuels', desc: 'Transform organic waste to clean energy' },
              { title: 'Electric Vehicles', desc: 'EV technology & charging infrastructure' },
              { title: 'Water Bottling', desc: 'Responsible water management solutions' }
            ].map((sector, idx) => (
              <Link
                key={idx}
                href="/products"
                className="border border-gray-300 p-6 text-center rounded-lg hover:bg-green-50 hover:border-green-500 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 block"
              >
                <div className="text-sm font-semibold text-gray-900 mb-2">{sector.title}</div>
                <p className="text-xs text-gray-800">{sector.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Opportunities */}
      <section id="franchise" className="bg-green-50 border-2 border-gray-400 py-12 text-center w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Franchise Opportunities</h2>
          <p className="text-base text-gray-800 mb-6 max-w-2xl mx-auto">
            Join the renewable energy revolution. Become a part of India's fastest-growing energy network 
            and contribute to a sustainable future.
          </p>
          <a
            href="#franchise"
            className="border-2 border-green-600 px-8 py-3 text-base rounded bg-white text-gray-900 hover:bg-green-600 hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-md hover:shadow-xl font-semibold inline-block"
          >
            Explore Franchise Opportunities
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
