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
    <main>
      <Header alwaysShowGradient />
      <div className="min-h-screen  bg-[#efefef] py-6 md:py-12 px-4 mt-20 md:mt-35 ">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6">
            {/* LEFT COLUMN: Login Section */}
            <div>
              {/* Login Header */}
              <div className="px-6 py-4 bg-[#efefef]">
                <h2 className="text-[26px] font-bold  text-[#1a1a1a] font-montserrat">
                  Bejelentkezés
                </h2>
              </div>

              {/* Login Form */}
              <div className="bg-[#003E21] px-6 py-8">
                <form onSubmit={handleLoginSubmit} className="space-y-5">
                  {/* Email */}
                  <div>
                    <label className="block text-white text-sm font-opensans mb-2">
                      E-mail cím<span className="text-[#c9a66b]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={loginForm.email}
                      onChange={handleLoginChange}
                      required
                      className="w-full px-4 py-2.5 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a66b] border-0"
                      placeholder="Adja meg az e-mail címet"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-white text-sm font-opensans mb-2">
                      Jelszó<span className="text-[#c9a66b]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showLoginPassword ? "text" : "password"}
                        name="password"
                        value={loginForm.password}
                        onChange={handleLoginChange}
                        required
                        className="w-full px-4 py-2.5 pr-12 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a66b] border-0"
                        placeholder="Adja meg a jelszót"
                      />
                      <button
                        type="button"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
                      >
                        <EyeIcon show={showLoginPassword} />
                      </button>
                    </div>
                  </div>

                  {/* Remember & Forgot Password */}
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-white cursor-pointer font-opensans">
                      <input
                        type="checkbox"
                        name="remember"
                        checked={loginForm.remember}
                        onChange={handleLoginChange}
                        className="w-4 h-4 "
                      />
                      <span>Emlékezz rám</span>
                    </label>
                    <a
                      href="#"
                      className="text-[#5ba3a3] hover:underline font-opensans"
                    >
                      Elfelejtett jelszó
                    </a>
                  </div>

                  {/* Login Button */}
                  <div className="flex justify-start">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-40 bg-[#c9a66b] hover:bg-[#b8956a] text-white font-bold py-3 text-sm uppercase transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {loading ? "BEJELENTKEZÉS..." : "BEJELENTKEZÉS"}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* RIGHT COLUMN: Registration Section */}
            <div className="bg-[#efefef]">
              {/* Registration Header */}
              <div className="px-8 py-5 border-b-[3px] border-[#0d4430]">
                <h2 className="text-2xl font-bold text-[#1a1a1a]">
                  Regisztráció
                </h2>
              </div>

              {/* Registration Form */}
              {/* Registration Form */}
              {/* RIGHT COLUMN: Registration Section */}
              <div className=" shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
                {/* Top Green Border */}
                <div className="h-[1px] bg-[#0d4430]" />

                {/* Header */}



                {/* Registration Form */}
                <div className="px-8 pb-10">
                  <form onSubmit={handleRegSubmit} className="space-y-6 mt-8">
                    {/* Grid Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      {/* First Name */}
                      <div>
                        <label className="block text-[15px] font-semibold font-montserrat text-[#222] mb-2">
                          Keresztnév<span className="text-[#c9a66b]">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={regForm.firstName}
                          onChange={handleRegChange}
                          required
                          placeholder="Adja meg a keresztnevét"
                          className="w-full px-4 py-2.5 bg-[#dcdfe3] text-[#333] text-[12.5px]
            focus:outline-none focus:ring-1 focus:ring-[#c9a66b]"
                        />
                        <p className="flex items-start gap-2 mt-2 text-[11.5px] text-[#666]">
                          <InfoIcon />
                          <span>A név hirdetés feltöltésnél elrejthető.</span>
                        </p>
                      </div>

                      {/* Last Name */}
                      <div>
                        <label className="block text-[15px] font-semibold font-montserrat text-[#222] mb-2">
                          Vezetéknév<span className="text-[#c9a66b]">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={regForm.lastName}
                          onChange={handleRegChange}
                          required
                          placeholder="Adja meg a vezetéknevét"
                          className="w-full px-4 py-2.5 bg-[#dcdfe3] text-[#333] text-[12.5px]
            focus:outline-none focus:ring-1 focus:ring-[#c9a66b]"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-[15px] font-semibold text-[#222] font-montserrat mb-2">
                          Telefonszám<span className="text-[#c9a66b]">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={regForm.phone}
                          onChange={handleRegChange}
                          required
                          placeholder="+36..."
                          className="w-full px-4 py-2.5 bg-[#dcdfe3] text-[#333] text-[12.5px]
            focus:outline-none focus:ring-1 focus:ring-[#c9a66b]"
                        />

                        <p className="flex items-start gap-2 mt-2 text-[11.5px] text-[#666]">
                          <InfoIcon />
                          <span>
                            A telefonszám megadására a profilod egyedi
                            azonosítása miatt van szükség.
                          </span>
                        </p>

                        <div className="mt-4 space-y-2">
                          <label className="flex items-center gap-2 text-[12px] text-[#555] cursor-pointer">
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

                          <label className="flex items-center gap-2 text-[12px] text-[#555] cursor-pointer">
                            <input
                              type="checkbox"
                              name="viber"
                              checked={regForm.viber}
                              onChange={handleRegChange}
                              className="w-4 h-4 accent-[#c9a66b]"
                            />
                            Van Viber fiókom ezzel a telefonszámmal
                            regisztrálva.
                          </label>
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-[15px] font-montserrat font-semibold text-[#222] mb-2">
                          E-mail cím<span className="text-[#c9a66b]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={regForm.email}
                          onChange={handleRegChange}
                          required
                          placeholder="Adja meg az e-mail címet"
                          className="w-full px-4 py-2.5 bg-[#dcdfe3] text-[#333] text-[12.5px]
            focus:outline-none focus:ring-1 focus:ring-[#c9a66b]"
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div className="mt-8 max-w-md">
                      <label className="block text-[15px] font-montserrat font-semibold text-[#222] mb-2">
                        Jelszó<span className="text-[#c9a66b]">*</span>
                      </label>

                      <div className="relative">
                        <input
                          type={showRegPassword ? "text" : "password"}
                          name="password"
                          value={regForm.password}
                          onChange={handleRegChange}
                          required
                          placeholder="Írja be a jelszót"
                          className="w-full px-4 py-2.5 pr-12 bg-[#dcdfe3] text-[#333] text-[12.5px]
            focus:outline-none focus:ring-1 focus:ring-[#c9a66b]"
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

                    {/* Trader */}
                    <div className="mt-6">
                      <label className="flex items-center gap-2 text-[12px] text-[#555] cursor-pointer">
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

                    {/* Button */}
                    <div className="mt-8">
                      <button
                        type="submit"
                        disabled={loading}
                        className="bg-[#c9a66b] hover:bg-[#b8956a]
          text-white font-semibold py-2 px-8 text-[12px]
          uppercase tracking-wide transition-all
          disabled:bg-gray-400"
                      >
                        {loading ? "REGISZTRÁCIÓ..." : "REGISZTRÁCIÓ"}
                      </button>
                    </div>

                    {/* Message */}
                    {message.text && (
                      <div
                        className={`mt-5 p-3 rounded text-sm ${message.type === "success"
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
      </div>
      <Footer />
    </main>
  );
}
