'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-green-100 border-2 border-gray-400 py-16 lg:py-24 text-center w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800">About Nexgen Energia</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Pioneering sustainable energy solutions for a cleaner, greener future
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nexgen Energia Ltd. is India's fastest-growing energy company, dedicated to revolutionizing 
                the renewable energy sector. We specialize in offering Bio-CNG Pump/CBG Pump Franchise and 
                Dealership opportunities, along with Bio Gas/CNG retail outlets across India.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our diverse portfolio encompasses biofuels, electric vehicles, and water bottling manufacturing, 
                creating a holistic and sustainable approach to energy production, transportation, and water management.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With years of experience, we have developed deep knowledge and expertise in transforming organic 
                waste into clean energy, driving the transition towards a cleaner transportation ecosystem, and 
                delivering responsible water management solutions.
              </p>
            </div>
            <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg">
              <Image
                src="/hero-banner-new.jpg"
                alt="Nexgen Energia facilities"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white border-2 border-gray-400 py-16 w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="p-6 border-2 border-green-200 rounded-lg hover:border-green-500 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-green-700">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                We envision a sustainable future where renewable energy and responsible water management are 
                integral to global progress. Our vision is to be a driving force in the transition towards 
                a carbon-neutral economy, where clean energy solutions power communities and industries worldwide.
              </p>
            </div>
            <div className="p-6 border-2 border-green-200 rounded-lg hover:border-green-500 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-green-700">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a driving force in the transition towards a sustainable future, focusing on biofuels, 
                electric vehicles, and responsible water management. We are committed to delivering exceptional 
                solutions and experiences to our clients while contributing to environmental conservation and 
                reducing carbon emissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Sustainability',
                desc: 'Committed to environmental conservation and sustainable practices in all our operations.',
                icon: '🌱'
              },
              {
                title: 'Innovation',
                desc: 'Leveraging advanced technologies to transform waste into clean, renewable energy sources.',
                icon: '💡'
              },
              {
                title: 'Excellence',
                desc: 'Delivering exceptional quality and service in every project and partnership we undertake.',
                icon: '⭐'
              }
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-400 p-6 rounded-lg text-center hover:shadow-lg hover:border-green-500 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-green-50 border-2 border-gray-400 py-16 w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Why Choose Nexgen Energia?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Pan-India Network',
              'Proven Track Record',
              'Expert Team',
              'Sustainable Solutions',
              'Franchise Support',
              'Advanced Technology',
              'Environmental Impact',
              'Customer Focus'
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-300 p-4 rounded-lg text-center hover:bg-green-100 hover:border-green-500 transition-all duration-300 cursor-pointer"
              >
                <div className="font-semibold text-gray-800">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Join Us in Building a Sustainable Future</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Partner with Nexgen Energia and be part of India's renewable energy revolution. 
            Explore franchise opportunities and contribute to a cleaner, greener tomorrow.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="border-2 border-green-600 px-8 py-3 text-sm rounded bg-white hover:bg-green-600 hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-md hover:shadow-xl font-semibold"
            >
              Get in Touch
            </Link>
            <Link
              href="/products"
              className="border-2 border-green-600 px-8 py-3 text-sm rounded bg-green-600 text-white hover:bg-green-700 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-md hover:shadow-xl font-semibold"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

