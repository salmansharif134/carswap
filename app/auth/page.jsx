"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

function EyeIcon({ show }) {
  return (
    <svg
      className="w-5 h-5 text-gray-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {show ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.12 12.132l.652.653M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
        />
      ) : (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </>
      )}
    </svg>
  );
}

function InfoIcon() {
  return (
    <span
      className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 text-white text-xs font-bold shrink-0"
      aria-hidden
    >
      !
    </span>
  );
}

export default function AuthPage() {
  const router = useRouter();
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegPassword, setShowRegPassword] = useState(false);

  // Login form state
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  // Registration form state
  const [regForm, setRegForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    isTrader: false,
    whatsapp: false,
    viber: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRegChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginForm),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Login successful! Redirecting...",
        });
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setMessage({
          type: "error",
          text: data.error || "Login failed. Please try again.",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage({
        type: "error",
        text: "An error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRegSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(regForm),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Registration successful! Redirecting...",
        });
        setRegForm({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          password: "",
          isTrader: false,
          whatsapp: false,
          viber: false,
        });
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setMessage({
          type: "error",
          text: data.error || "Registration failed. Please try again.",
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      setMessage({
        type: "error",
        text: "An error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header bgColor="dark-green" />
      <div className="min-h-screen py-12 px-4  mt-35  background-color-[#e8e8e8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
            {/* LEFT COLUMN: Login Section */}
            <div className="shadow-lg">
              {/* Login Header */}
              <div className="px-6 py-4">
                <h2 className="text-2xl font-bold text-[#1a1a1a]">
                  Bejelentkezés
                </h2>
              </div>

              {/* Login Form */}
              <div className="bg-[#0d4430] px-6 py-8">
                <form onSubmit={handleLoginSubmit} className="space-y-5">
                  {/* Email */}
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">
                      E-mail cím<span className="text-[#c9a66b]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={loginForm.email}
                      onChange={handleLoginChange}
                      required
                      className="w-full px-4 py-2.5 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a66b]"
                      placeholder="Adja meg az e-mail címet"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-white text-sm font-semibold mb-2">
                      Jelszó<span className="text-[#c9a66b]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showLoginPassword ? "text" : "password"}
                        name="password"
                        value={loginForm.password}
                        onChange={handleLoginChange}
                        required
                        className="w-full px-4 py-2.5 pr-12 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a66b]"
                        placeholder="Adja meg a jelszót"
                      />
                      <button
                        type="button"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        <EyeIcon show={showLoginPassword} />
                      </button>
                    </div>
                  </div>

                  {/* Remember & Forgot Password */}
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-white cursor-pointer">
                      <input
                        type="checkbox"
                        name="remember"
                        checked={loginForm.remember}
                        onChange={handleLoginChange}
                        className="w-4 h-4 accent-[#c9a66b]"
                      />
                      <span>Emlékezz rám</span>
                    </label>
                    <a href="#" className="text-[#5ba3a3] hover:underline">
                      Elfelejtett jelszó
                    </a>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#c9a66b] hover:bg-[#b8956a] text-white font-bold py-3 text-sm uppercase transition-all disabled:bg-gray-400"
                  >
                    {loading ? "BEJELENTKEZÉS..." : "BEJELENTKEZÉS"}
                  </button>
                </form>
              </div>
            </div>

            {/* RIGHT COLUMN: Registration Section */}
            <div className="bg-white shadow-lg">
              {/* Registration Header */}
              <div className="px-8 py-5 border-b-[3px] border-[#0d4430]">
                <h2 className="text-2xl font-bold text-[#1a1a1a]">
                  Regisztráció
                </h2>
              </div>

              {/* Registration Form */}
              <div className="px-8 py-8">
                <form onSubmit={handleRegSubmit}>
                  {/* Grid Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                    {/* First Name */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                        Keresztnév<span className="text-[#c9a66b]">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={regForm.firstName}
                        onChange={handleRegChange}
                        required
                        className="w-full px-4 py-2.5 bg-[#f3f3f3] text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a66b]"
                        placeholder="Adja meg a keresztnevét"
                      />
                      <p className="flex items-start gap-2 mt-2 text-xs text-[#666]">
                        <InfoIcon />
                        <span>A név hirdetés feltöltésnél elrejthető.</span>
                      </p>
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                        Vezetéknév<span className="text-[#c9a66b]">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={regForm.lastName}
                        onChange={handleRegChange}
                        required
                        className="w-full px-4 py-2.5 bg-[#f3f3f3] text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a66b]"
                        placeholder="Adja meg a vezetéknevét"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                        Telefonszám<span className="text-[#c9a66b]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={regForm.phone}
                        onChange={handleRegChange}
                        required
                        className="w-full px-4 py-2.5 bg-[#f3f3f3] text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a66b]"
                        placeholder="+36..."
                      />
                      <p className="flex items-start gap-2 mt-2 text-xs text-[#666]">
                        <InfoIcon />
                        <span>
                          A telefonszám megadására a profilod egyedi azonosítása
                          miatt van szükség.
                        </span>
                      </p>

                      <div className="mt-4 space-y-2">
                        <label className="flex items-center gap-2 text-sm text-[#555] cursor-pointer">
                          <input
                            type="checkbox"
                            name="whatsapp"
                            checked={regForm.whatsapp}
                            onChange={handleRegChange}
                            className="w-4 h-4 accent-[#c9a66b]"
                          />
                          Van WhatsApp fiókom ezzel a telefonszámmal
                          regisztrálva.
                        </label>

                        <label className="flex items-center gap-2 text-sm text-[#555] cursor-pointer">
                          <input
                            type="checkbox"
                            name="viber"
                            checked={regForm.viber}
                            onChange={handleRegChange}
                            className="w-4 h-4 accent-[#c9a66b]"
                          />
                          Van Viber fiókom ezzel a telefonszámmal regisztrálva.
                        </label>
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                        E-mail cím<span className="text-[#c9a66b]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={regForm.email}
                        onChange={handleRegChange}
                        required
                        className="w-full px-4 py-2.5 bg-[#f3f3f3] text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a66b]"
                        placeholder="Adja meg az e-mail címet"
                      />
                    </div>
                  </div>

                  {/* Password - Full Width */}
                  <div className="mt-6 max-w-md">
                    <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                      Jelszó<span className="text-[#c9a66b]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showRegPassword ? "text" : "password"}
                        name="password"
                        value={regForm.password}
                        onChange={handleRegChange}
                        required
                        className="w-full px-4 py-2.5 pr-12 bg-[#f3f3f3] text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a66b]"
                        placeholder="Írja be a jelszót"
                      />
                      <button
                        type="button"
                        onClick={() => setShowRegPassword(!showRegPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                      >
                        <EyeIcon show={showRegPassword} />
                      </button>
                    </div>
                  </div>

                  {/* Trader Checkbox */}
                  <div className="mt-5">
                    <label className="flex items-center gap-2 text-sm text-[#555] cursor-pointer">
                      <input
                        type="checkbox"
                        name="isTrader"
                        checked={regForm.isTrader}
                        onChange={handleRegChange}
                        className="w-4 h-4 accent-[#c9a66b]"
                      />
                      Ön kereskedő?
                    </label>
                  </div>

                  {/* Register Button */}
                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-[#c9a66b] hover:bg-[#b8956a] text-white font-bold py-3 px-12 text-sm uppercase transition-all disabled:bg-gray-400"
                    >
                      {loading ? "REGISZTRÁCIÓ..." : "REGISZTRÁCIÓ"}
                    </button>
                  </div>

                  {/* Message Display */}
                  {message.text && (
                    <div
                      className={`mt-4 p-3 rounded ${
                        message.type === "success"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {message.text}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
