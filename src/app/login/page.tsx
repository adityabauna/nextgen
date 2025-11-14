'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '', remember: true });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Mock login submitted. Replace with real auth later.');
  };

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <Header />
      <section className="bg-emerald-100 border-b-2 border-gray-300 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Partner Portal Login</h1>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          Access Nexgen Energia partner resources, franchise dashboards, and lead trackers.
        </p>
      </section>
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-3xl shadow-xl p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-emerald-500 focus:outline-none"
                placeholder="partner@nexgenenergia.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-emerald-500 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={form.remember}
                  onChange={(e) => setForm({ ...form, remember: e.target.checked })}
                  className="rounded border-gray-300 text-emerald-600"
                />
                Remember me
              </label>
              <Link href="/contact" className="text-sm text-emerald-700 font-semibold">
                Need access?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

