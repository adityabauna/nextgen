'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const callButtons = [
  { label: 'For Plant', href: 'tel:+918800599662' },
  { label: 'For Pump', href: 'tel:+918527561018' },
];

const actionButtons = [
  { label: 'Apply Now', href: '/contact' },
  { label: 'Contact Us', href: '/contact#contact-form' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-linear-to-r from-emerald-400 to-lime-300 text-white">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 py-3 text-sm font-semibold">
          <div className="flex flex-col md:flex-row md:flex-wrap items-stretch md:items-center gap-2 md:gap-3 w-full md:w-auto">
            {callButtons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                className="flex items-center justify-center gap-2 rounded-full bg-slate-900/80 px-4 py-2 shadow hover:bg-slate-900 transition-colors w-full md:w-auto"
              >
                <span aria-hidden="true">📞</span>
                {button.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col md:flex-row md:flex-wrap items-stretch md:items-center gap-2 md:gap-3 w-full md:w-auto">
            {actionButtons.map((button) => (
              <Link
                key={button.label}
                href={button.href}
                className="flex items-center justify-center gap-2 rounded-full bg-slate-900/80 px-4 py-2 shadow hover:bg-slate-900 transition-colors w-full md:w-auto"
              >
                {button.label}
                <span aria-hidden="true">»</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <header className="bg-white/90 backdrop-blur-md border-b-2 border-gray-200 shadow-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="flex items-center gap-3 border border-gray-200 px-3 py-2 rounded hover:bg-green-50 hover:border-green-500 transition-all duration-300 shadow-sm"
          >
            <Image
              src="/logo.png"
              alt="Nexgen Energia logo"
              width={140}
              height={40}
              priority
              className="h-8 w-auto object-contain"
            />
            <span className="sr-only">Nexgen Energia</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-3 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                aria-current={pathname === item.path ? 'page' : undefined}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 font-semibold tracking-wide transition-all duration-300 shadow-sm ${
                  pathname === item.path
                    ? 'bg-linear-to-r from-green-500 to-emerald-500 text-white border-green-500 shadow-lg scale-105'
                    : 'bg-white/80 text-gray-700 border-gray-200 hover:text-green-700 hover:border-green-400 hover:shadow-md hover:bg-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden border border-gray-200 px-3 py-1 rounded-full shadow-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                aria-current={pathname === item.path ? 'page' : undefined}
                className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition-all duration-300 shadow-sm ${
                  pathname === item.path
                    ? 'bg-linear-to-r from-green-500 to-emerald-500 text-white border-green-500 shadow-lg'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-green-400 hover:text-green-700 hover:shadow-md'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
    </div>
  );
}

