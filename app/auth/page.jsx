'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

function EyeIcon({ show }) {
  return (
    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {show ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.12 12.132l.652.653M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
      ) : (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </>
      )}
    </svg>
  );
}

function InfoIcon() {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 text-white text-xs font-bold shrink-0" aria-hidden>
      !
    </span>
  );
}

export default function AuthPage() {
  const router = useRouter();
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegPassword, setShowRegPassword] = useState(false);
  
  // Registration form state
  const [regForm, setRegForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    isTrader: false,
    whatsapp: false,
    viber: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleRegChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleRegSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(regForm),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ 
          type: 'success', 
          text: 'Registration successful! Redirecting...' 
        });
        // Clear form
        setRegForm({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          password: '',
          isTrader: false,
          whatsapp: false,
          viber: false,
        });
        // Redirect after 2 seconds
        setTimeout(() => {
          router.push('/');
        }, 2000);
      } else {
        setMessage({ 
          type: 'error', 
          text: data.error || 'Registration failed. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Registration error:', error);
      setMessage({ 
        type: 'error', 
        text: 'An error occurred. Please try again later.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header bgColor="dark-green" />
      <div className="min-h-screen flex justify-center items-start py-12 bg-[#f7f7f7]">
        <div className="w-full max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-[3fr_5fr] gap-0 shadow-xl rounded-lg overflow-hidden items-start bg-white">
          {/* LEFT COLUMN: login card — content height only (shorter) */}
          <div className="flex flex-col w-full">
            <div className="pt-6 pb-3 px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-[#333333]">Bejelentkezés</h2>
            </div>
            <div className="bg-[#1e4d3a] p-6 lg:p-8 text-white flex flex-col">
              <div className="space-y-3 max-w-sm">
                <div>
                  <label className="block text-sm font-bold mb-1.5 text-white">E-mail cím*</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2.5 bg-[#f5f5f5] text-gray-900 border border-[#e0e0e0] rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a1793d]"
                    placeholder="Adja meg az e-mail címet"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-1.5 text-white">Jelszó*</label>
                  <div className="relative">
                    <input
                      type={showLoginPassword ? 'text' : 'password'}
                      className="w-full px-4 py-2.5 pr-10 bg-[#f5f5f5] text-gray-900 border border-[#e0e0e0] rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a1793d]"
                      placeholder="Adja meg a jelszót"
                    />
                    <button
                      type="button"
                      onClick={() => setShowLoginPassword(!showLoginPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      aria-label="Jelszó megjelenítése"
                    >
                      <EyeIcon show={showLoginPassword} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm mt-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-2 border-gray-400 bg-transparent text-[#a1793d] focus:ring-[#a1793d] accent-[#a1793d]" />
                  <span className="text-white">Emlékezz rám</span>
                </label>
                <a href="#" className="text-[#5ba3a3] hover:underline font-medium">Elfelejtett jelszó</a>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  type="button"
                  className="bg-[#a37a40] text-white py-2.5 px-10 rounded-md font-bold text-sm uppercase tracking-wide  hover:bg-[#8a6a34]  transition-all"
                >
                  BEJELENTKEZÉS
                </button>
              </div>
            </div>
            </div>
          {/* RIGHT COLUMN: registration panel */}
          <div className="flex flex-col w-full min-h-0">
            <div className="pt-6 pb-3 px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-[#333333]">Regisztráció</h2>
              <div className="mt-1 h-0.5 w-full max-w-[120px] bg-[#1e4d3a] rounded" aria-hidden />
            </div>
            <div className="bg-white p-8 lg:p-10 flex-1 flex flex-col min-h-0">
            <form onSubmit={handleRegSubmit} className="flex flex-col h-full">
              {message.text && (
                <div className={`mb-4 p-3 rounded text-sm font-medium ${
                  message.type === 'success' 
                    ? 'bg-green-100 text-green-800 border border-green-300' 
                    : 'bg-red-100 text-red-800 border border-red-300'
                }`}>
                  {message.text}
                </div>
              )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-[#333333] mb-1.5">Keresztnév*</label>
                <input
                  type="text"
                  name="firstName"
                  value={regForm.firstName}
                  onChange={handleRegChange}
                  required
                  className="w-full px-4 py-2.5 bg-[#eeeeee] text-gray-900 border border-[#e0e0e0] rounded text-sm placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#a1793d]"
                  placeholder="Adja meg a keresztnevét"
                />
                <p className="flex items-start gap-1.5 mt-1.5 text-xs text-[#555555]">
                  <InfoIcon />
                  <span>A név hirdetés feltöltésnél elrejthető.</span>
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#333333] mb-1.5">Vezetéknév*</label>
                <input
                  type="text"
                  name="lastName"
                  value={regForm.lastName}
                  onChange={handleRegChange}
                  required
                  className="w-full px-4 py-2.5 bg-[#eeeeee] text-gray-900 border border-[#e0e0e0] rounded text-sm placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#a1793d]"
                  placeholder="Adja meg a vezetéknevét"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#333333] mb-1.5">Telefonszám*</label>
                <input
                  type="tel"
                  name="phone"
                  value={regForm.phone}
                  onChange={handleRegChange}
                  required
                  className="w-full px-4 py-2.5 bg-[#eeeeee] text-gray-900 border border-[#e0e0e0] rounded text-sm placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#a1793d]"
                  placeholder="+36...."
                />
                <p className="flex items-start gap-1.5 mt-1.5 text-xs text-[#555555]">
                  <InfoIcon />
                  <span>A telefonszám megadására a profilod egyedi azonosítása miatt van szükség.</span>
                </p>
                <div className="mt-3 space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-[#555555]">
                    <input 
                      type="checkbox" 
                      name="whatsapp"
                      checked={regForm.whatsapp}
                      onChange={handleRegChange}
                      className="w-4 h-4 rounded border-gray-300 text-[#a1793d] focus:ring-[#a1793d]" 
                    />
                    <span>Van WhatsApp fiókom ezzel a telefonszámmal regisztrálva.</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-sm text-[#555555]">
                    <input 
                      type="checkbox" 
                      name="viber"
                      checked={regForm.viber}
                      onChange={handleRegChange}
                      className="w-4 h-4 rounded border-gray-300 text-[#a1793d] focus:ring-[#a1793d]" 
                    />
                    <span>Van Viber fiókom ezzel a telefonszámmal regisztrálva.</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#333333] mb-1.5">E-mail cím*</label>
                <input
                  type="email"
                  name="email"
                  value={regForm.email}
                  onChange={handleRegChange}
                  required
                  className="w-full px-4 py-2.5 bg-[#eeeeee] text-gray-900 border border-[#e0e0e0] rounded text-sm placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#a1793d]"
                  placeholder="Adja meg az e-mail címet"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-bold text-[#333333] mb-1.5">Jelszó*</label>
              <div className="relative">
                <input
                  type={showRegPassword ? 'text' : 'password'}
                  name="password"
                  value={regForm.password}
                  onChange={handleRegChange}
                  required
                  className="w-full px-4 py-2.5 pr-10 bg-[#eeeeee] text-gray-900 border border-[#e0e0e0] rounded text-sm placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#a1793d]"
                  placeholder="Írja be a jelszót"
                />
                <button
                  type="button"
                  onClick={() => setShowRegPassword(!showRegPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label="Jelszó megjelenítése"
                >
                  <EyeIcon show={showRegPassword} />
                </button>
              </div>
            </div>

            <div className="mt-6">
              <label className="flex items-center gap-2 cursor-pointer text-sm text-[#555555]">
                <input 
                  type="checkbox" 
                  name="isTrader"
                  checked={regForm.isTrader}
                  onChange={handleRegChange}
                  className="w-4 h-4 rounded border-gray-300 text-[#a1793d] focus:ring-[#a1793d]" 
                />
                <span>Ön kereskedő?</span>
              </label>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#a1793d] text-white py-3 px-10 rounded font-bold text-sm uppercase tracking-wide hover:bg-[#8a6a34] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? 'REGISZTRÁCIÓ...' : 'REGISZTRÁCIÓ'}
              </button>
            </div>
            </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
