"use client";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

export default function CallOrVisit() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Thank you ${formData.name}! Your message has been sent successfully.`,
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-[#fbf9f5] text-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.25em] text-xs text-[#c5a059] block mb-2 font-medium">
            We Are Here For You
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide">
            CALL OR VISIT
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Send Message Form */}
          <div className="bg-[#fcfaf7] border border-gray-200 p-8 sm:p-10 rounded shadow-sm">
            <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-[#1a1a1a]">
              SEND MESSAGE
            </h3>
            <p className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold mt-1 mb-8">
              Inquire about selling, buying, or market valuations
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded p-3 text-xs sm:text-sm bg-white focus:outline-none focus:border-[#c5a059] text-gray-800 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded p-3 text-xs sm:text-sm bg-white focus:outline-none focus:border-[#c5a059] text-gray-800 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we assist you with Pahrump real estate?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded p-3 text-xs sm:text-sm bg-white focus:outline-none focus:border-[#c5a059] text-gray-800 placeholder-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-[#d5cdc1] text-[#1a1a1a] px-8 py-3 rounded text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#c5bcad] transition-colors shadow-sm"
              >
                Send
              </button>

              <p className="text-[10px] text-gray-500 pt-2">
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Terms of Service
                </a>{" "}
                apply.
              </p>
            </form>
          </div>

          {/* Right: Brokerage Details & Hours */}
          <div className="space-y-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#c5a059] block mb-1">
                Brokerage &amp; Headquarters
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-[#1a1a1a] mb-4">
                MARCI METZGER - THE RIDGE REALTY GROUP
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-gray-700">
                <p className="flex items-start space-x-2">
                  <span className="text-base text-[#c5a059] mt-0.5">
                    <FaMapMarkerAlt />
                  </span>
                  <span>
                    3190 HW-160, Suite F<br />
                    Pahrump, Nevada 89048, United States
                  </span>
                </p>
                <p className="flex items-center space-x-2 pt-1">
                  <span className="text-base text-[#c5a059]">
                    <FaPhone />
                  </span>
                  <a
                    href="tel:2069196886"
                    className="font-semibold hover:text-[#c5a059] transition"
                  >
                    (206) 919-6886
                  </a>
                </p>
              </div>
            </div>

            {/* Office Hours Box */}
            <div className="bg-[#f3eee3] border-l-4 border-[#c5a059] p-6 rounded-r shadow-sm">
              <div className="flex items-center space-x-2 mb-4 border-b border-gray-300/60 pb-3">
                <span className="text-[#c5a059]">
                  <FaClock />
                </span>
                <h4 className="font-serif font-bold text-sm sm:text-base tracking-wider uppercase text-[#1a1a1a]">
                  Office Hours
                </h4>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Open today</span>
                  <span className="font-semibold text-gray-900">
                    08:00 am – 07:00 pm
                  </span>
                </div>
                <div className="flex justify-between items-center border-t border-gray-300/40 pt-2">
                  <span className="font-medium">Open daily</span>
                  <span className="font-semibold text-gray-900">
                    8:00 am – 7:00 pm
                  </span>
                </div>
              </div>

              <p className="text-[11px] italic text-gray-600 mt-4 pt-2 border-t border-gray-300/40">
                Appointments outside office hours available upon request. Just
                call!
              </p>
            </div>

            {/* Urgent Question Banner */}
            <div className="bg-[#0b1317] text-white p-6 rounded flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-md">
              <div>
                <h4 className="font-serif font-bold text-base sm:text-lg mb-1">
                  Have an urgent question?
                </h4>
                <p className="text-xs text-gray-300">
                  Marci is just a direct call or text away.
                </p>
              </div>
              <a
                href="tel:2069196886"
                className="bg-[#c5a059] text-[#0b1317] px-4 py-2.5 rounded text-xs font-bold tracking-wider uppercase hover:bg-[#b59049] transition whitespace-nowrap shadow"
              >
                Call 206-919-6886
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
