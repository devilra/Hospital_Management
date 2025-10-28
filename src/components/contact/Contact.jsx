"use client";

import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 text-gray-800">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-4 text-lg text-sky-100/90">
            We're here to help — whether you want to book an appointment, ask a
            question, or learn more about our hospital.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="container mx-auto px-6 py-12 grid gap-10 md:grid-cols-2">
        {/* LEFT: CONTACT INFO */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Our dedicated team is available to assist you with appointments,
            medical queries, and healthcare services.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-sky-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-sky-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 8c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zM4 12s1.5-6 8-6 8 6 8 6-1.5 6-8 6-8-6-8-6z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Our Address</h4>
                <p className="text-gray-600">
                  RKP Multispeciality Hospital and Diagnostics
                  <br />
                  5, Medavakkam Main Rd,
                  <br />
                  Vaithiyalingam Nagar, Nanmangalam,
                  <br />
                  Chennai, Tamil Nadu 600129
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-sky-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-sky-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13h.01M12 3v10"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">info@rkpdiagnostics.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-sky-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-sky-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5h2l3.6 7.59-1.35 2.45A1 1 0 008 17h10v-2H9.42a.25.25 0 01-.22-.13l.03-.04L10 13h7a1 1 0 00.9-.55l3.58-6.49A1 1 0 0020.58 5H3z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+91 9384676002</p>
              </div>
            </div>

            <div className="mt-6">
              <iframe
                title="RKP Multispeciality Hospital Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0188894598485!2d80.19082277510453!3d12.906224487393794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f4ad08c1f69%3A0x89b5b193a3a7b2cc!2sRKP%20Multispeciality%20Hospital%20and%20Diagnostics!5e0!3m2!1sen!2sin!4v1730100000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg border"
              ></iframe>
            </div>
          </div>
        </div>

        {/* RIGHT: CONTACT FORM */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
          <form className="space-y-5">
            <div>
              <label className="block font-medium mb-1" htmlFor="name">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block font-medium mb-1" htmlFor="email">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block font-medium mb-1" htmlFor="phone">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="Enter your phone number"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block font-medium mb-1" htmlFor="message">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Write your message here"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-md transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-slate-100 to-white py-10">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h3 className="text-2xl font-bold">Need immediate assistance?</h3>
          <p className="mt-3 text-gray-600">
            Our emergency department operates 24/7. Call our helpline for urgent
            medical support.
          </p>
          <a
            href="tel:+919384676002"
            className="inline-block mt-6 px-6 py-3 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-700 transition"
          >
            Call Helpline: +91 9384676002
          </a>
        </div>
      </section>
    </main>
  );
}
