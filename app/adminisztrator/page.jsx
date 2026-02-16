"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage({
          type: "success",
          text: "Üzenet sikeresen elküldve!",
        });
        // Clear form
        setFormData({
          lastName: "",
          firstName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitMessage({
          type: "error",
          text: data.error || "Hiba történt. Kérjük, próbálja újra.",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitMessage({
        type: "error",
        text: "Hiba történt. Kérjük, próbálja újra később.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header alwaysShowGradient />
      <div className="min-h-screen bg-white py-10 md:py-20 px-4 mt-16 md:mt-25">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-[#1a1a1a] mb-6">
              Hamarosan...
            </h1>
            <p className="text-[#4a4a4a] text-base leading-relaxed mb-2">
              Hamarosan itt találod ügyintézőinket, akik segítenek mindenben,
              amire szükséged van.
            </p>
            <p className="text-[#4a4a4a] text-base">
              Ha csatlakoznál hozzánk, töltsd ki az alábbi jelentkezési űrlapot!
            </p>
          </div>

          {/* Form Card */}
          <div
            className="bg-white rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.18)]
                     p-12 border border-gray-100"
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 mb-12">
                {/* Left Side - 4 Input Fields in 2x2 Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* First Name (Sofor neve) */}
                  <div>
                    <label className="block text-[13px] font-normal text-[#1a1a1a] mb-2">
                      Sofor neve<span className="text-[#1a1a1a]">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-[#e7ebf1] text-[#3d3d3d] text-[14px] rounded-[3px] focus:outline-none focus:ring-1 focus:ring-[#d4b896] border-0 placeholder:text-[#7a7a7a]"
                      placeholder="Kiss"
                    />
                  </div>

                  {/* Last Name (Keresztnev) */}
                  <div>
                    <label className="block text-[13px] font-normal text-[#1a1a1a] mb-2">
                      Keresztnev<span className="text-[#1a1a1a]">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-[#e7ebf1] text-[#3d3d3d] text-[14px] rounded-[3px] focus:outline-none focus:ring-1 focus:ring-[#d4b896] border-0 placeholder:text-[#7a7a7a]"
                      placeholder="Csaba"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[13px] font-normal text-[#1a1a1a] mb-2">
                      E-mail cím<span className="text-[#1a1a1a]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-[#e7ebf1] text-[#3d3d3d] text-[14px] rounded-[3px] focus:outline-none focus:ring-1 focus:ring-[#d4b896] border-0 placeholder:text-[#7a7a7a]"
                      placeholder="felhasznalonev@domain.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[13px] font-normal text-[#1a1a1a] mb-2">
                      A Telefonszamom
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-[#e7ebf1] text-[#3d3d3d] text-[14px] rounded-[3px] focus:outline-none focus:ring-1 focus:ring-[#d4b896] border-0 placeholder:text-[#7a7a7a]"
                      placeholder="+36301234567"
                    />
                  </div>
                </div>

                {/* Right Side - Zone Field */}
                <div>
                  <label className="block text-[13px] font-normal text-[#1a1a1a] mb-2">
                    zone
                  </label>
                  <div className="w-full h-[134px] bg-[#d8dde5] rounded-[3px]"></div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#DBB27E] hover:bg-[#c5a885] text-white font-bold py-3.5 px-14 text-[15px] uppercase rounded-[4px] transition-all disabled:bg-gray-400 tracking-wider"
                >
                  {loading ? "KÜLDÉS..." : "ELKÜLD"}
                </button>
              </div>

              {/* Success/Error Message */}
              {submitMessage.text && (
                <div
                  className={`mt-6 p-4 rounded ${submitMessage.type === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                    }`}
                >
                  {submitMessage.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
