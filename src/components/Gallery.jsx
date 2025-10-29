"use client";

import React from "react";
import {
  FaHospital,
  FaMicroscope,
  FaUsers,
  FaHeart,
  FaCalendarAlt,
  FaCamera,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const galleryData = [
  {
    id: 1,
    title: "Hospital Building Exterior",
    category: "Hospital Photos",
    icon: FaHospital,
    src: "/gallery/g8.jpg",
  },
  {
    id: 2,
    title: "Intensive Care Unit (ICU)",
    category: "Facilities & Equipment",
    icon: FaHeart,
    src: "/gallery/g4.jpg",
  },
  {
    id: 3,
    title: "Modern Operation Theatre",
    category: "Facilities & Equipment",
    icon: FaMicroscope,
    src: "/gallery/g6.jpg",
  },
  {
    id: 4,
    title: "Patient Waiting Lounge",
    category: "Hospital Photos",
    icon: FaHospital,
    src: "/gallery/g3.jpg",
  },
  {
    id: 5,
    title: "Pediatrics Checkup Day",
    category: "Events & Community",
    icon: FaUsers,
    src: "/gallery/g2.jpg",
  },
  {
    id: 6,
    title: "Advanced Lab Equipment",
    category: "Facilities & Equipment",
    icon: FaMicroscope,
    src: "/gallery/g7.jpg",
  },
  {
    id: 7,
    title: "Health Camp",
    category: "Events & Community",
    icon: FaCalendarAlt,
    src: "/gallery/g1.jpg",
  },
  {
    id: 8,
    title: "Doctor's Consultation Room",
    category: "Hospital Photos",
    src: "/gallery/g3.jpg",
    icon: FaHospital,
  },
];

const GalleryItem = ({ title, category, icon: Icon, src, size }) => (
  <div
    className={`relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
      size === "large" ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
    }`}
  >
    <img
      src={src}
      alt={title}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
    />

    {/* Glass Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex flex-col justify-end">
      <div className="p-4 text-gray-900">
        <p className="text-xs uppercase tracking-wide flex items-center gap-2 text-[#004C97]/90">
          <Icon className="text-[#004C97]" /> {category}
        </p>
        <h3 className="text-lg font-semibold mt-1">{title}</h3>
      </div>
    </div>
  </div>
);

export default function Gallery() {
  const categories = [
    "All",
    ...new Set(galleryData.map((item) => item.category)),
  ];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredGallery = galleryData.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <main className="min-h-screen pt-24 bg-gradient-to-b from-white via-blue-50 to-white text-gray-800">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#004C97] to-blue-500 text-white py-20 text-center shadow-md">
        <div className="container mx-auto px-6">
          <FaCamera className="text-6xl mx-auto mb-4 text-white/80" />
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-2">
            Our Hospital Gallery
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto opacity-90">
            Explore our facilities, compassionate care, and modern
            infrastructure.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold border-2 transition-all duration-300
                ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-[#004C97] to-blue-500 text-white border-transparent shadow-lg"
                    : "border-[#004C97]/30 text-[#004C97] hover:bg-[#004C97]/10"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY GRID (with col-span/row-span for variety) */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] gap-6">
          {filteredGallery.map((item, index) => (
            <GalleryItem
              key={item.id}
              {...item}
              size={
                index % 7 === 0 ? "large" : index % 4 === 0 ? "wide" : "small"
              }
            />
          ))}
        </div>

        {filteredGallery.length === 0 && (
          <div className="text-center py-10 text-gray-600 text-xl italic">
            No images found in the "{activeCategory}" category.
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-[#004C97] py-16 text-center text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h3 className="text-3xl font-bold leading-tight">
            Want to explore our facilities in person?
          </h3>
          <p className="mt-4 text-lg text-blue-100">
            Visit us and experience our excellence in healthcare and compassion.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-8 px-10 py-4 text-lg bg-white text-[#004C97] font-extrabold rounded-full shadow-xl hover:bg-gray-100 transition transform hover:scale-105"
          >
            Book a Visit
          </Link>
        </div>
      </section>
    </main>
  );
}
