'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useRef } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const formStartTracked = useRef(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track form submission with Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit', {
        'event_category': 'Contact Form',
        'event_label': 'Contact Form Submission',
        'value': 1
      });
      
      // Track conversion for Google Ads
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17724229093',
        'event_category': 'Contact Form',
        'event_label': 'Contact Form Submission'
      });
    }
    
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    // Track form start interaction
    if (!formStartTracked.current && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_start', {
        'event_category': 'Contact Form',
        'event_label': 'Contact Form Started'
      });
      formStartTracked.current = true;
    }
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      city: 'Noida, UP',
      address: 'Nexgen Energia Ltd., Noida Office',
      phone: '+91 8800599662',
      email: 'info@nexgenenergia.com'
    },
    {
      city: 'Mumbai',
      address: 'Nexgen Energia Ltd., Mumbai Office',
      phone: '+91 8527561018',
      email: 'business@nexgenenergia.com'
    },
    {
      city: 'Dubai, UAE',
      address: 'Nexgen Energia Ltd., Dubai Office',
      phone: '+971 XXX XXX XXX',
      email: 'info@nexgenenergia.com'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-green-100 border-2 border-gray-400 py-16 lg:py-24 text-center w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800">Contact Us</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Get in touch with us for inquiries, partnerships, or franchise opportunities
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white border-2 border-gray-400 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
              <form 
                id="contact-form"
                name="contact-form"
                onSubmit={handleSubmit} 
                className="space-y-4"
                data-gtm-form="contact-form"
                data-gtm-form-name="Contact Form"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-green-500 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-green-500 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-green-500 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-green-500 focus:outline-none transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="franchise">Franchise Opportunity</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="product">Product Information</option>
                    <option value="service">Service Inquiry</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-green-500 focus:outline-none transition-all"
                  />
                </div>
                <button
                  type="submit"
                  id="contact-form-submit"
                  className="w-full border-2 border-green-600 px-6 py-3 rounded bg-green-600 text-white hover:bg-green-700 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-md hover:shadow-xl font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-400 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-gray-700 mb-1">Email</div>
                    <a
                      href="mailto:info@nexgenenergia.com"
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      info@nexgenenergia.com
                    </a>
                    <br />
                    <a
                      href="mailto:business@nexgenenergia.com"
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      business@nexgenenergia.com
                    </a>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700 mb-1">Phone</div>
                    <a
                      href="tel:+918800599662"
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      +91 8800599662
                    </a>
                    <br />
                    <a
                      href="tel:+918527561018"
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      +91 8527561018
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-400 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Business Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-2 border-gray-400 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Links</h3>
                <div className="space-y-2">
                  <a href="/about" className="block text-green-700 hover:text-green-800 transition-colors">
                    About Us →
                  </a>
                  <a href="/services" className="block text-green-700 hover:text-green-800 transition-colors">
                    Our Services →
                  </a>
                  <a href="/products" className="block text-green-700 hover:text-green-800 transition-colors">
                    Products →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-white border-2 border-gray-400 py-16 w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {offices.map((office, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border-2 border-gray-300 p-6 rounded-lg hover:border-green-500 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">{office.city}</h3>
                <p className="text-gray-600 mb-3 text-sm">{office.address}</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">📞</span>
                    <a
                      href={`tel:${office.phone}`}
                      className="text-gray-700 hover:text-green-600 transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✉️</span>
                    <a
                      href={`mailto:${office.email}`}
                      className="text-gray-700 hover:text-green-600 transition-colors text-sm"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-3xl overflow-hidden border-2 border-gray-200 shadow-xl">
            <iframe
              title="Nexgen Energia Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.918966646125!2d77.38945177608064!3d28.54335037571917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5300846c9ff%3A0xa1f988d75c8d134!2sF-433%2C%20F%20Block%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1731601000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[450px] border-0"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

