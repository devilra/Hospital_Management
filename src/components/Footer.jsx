import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHeartbeat,
  FaStethoscope,
  FaBaby,
  FaBrain,
  FaBone,
  FaProcedures,
  FaChild,
  FaUserMd,
  FaClock,
  FaLaptopMedical,
  FaVial,
  FaMicroscope,
  FaNotesMedical,
  FaDiagnoses,
  FaCapsules,
  FaRunning,
} from "react-icons/fa";
import { MdPregnantWoman, MdHealthAndSafety } from "react-icons/md";
import {
  GiMedicalDrip,
  GiKidneys,
  GiScalpel,
  GiHeartOrgan,
} from "react-icons/gi";
import { BsSoundwave } from "react-icons/bs";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { TbVaccine } from "react-icons/tb";

// Neenga kudutha data-va footer-kku use panna konjam shorten pannirukken
const specialities = [
  { name: "Cardiology", icon: FaHeartbeat },
  { name: "General Medicine", icon: FaStethoscope },
  { name: "Obstetrics & Gynaecology", icon: MdPregnantWoman },
  { name: "Pediatrics", icon: FaChild },
  { name: "Orthopedics", icon: FaBone },
  { name: "Neurology", icon: FaBrain },
  { name: "General Surgery", icon: GiScalpel },
  { name: "Emergency Medicine", icon: FaProcedures },
]; // Top 8 specialties

const facilities = [
  { name: "24 Hours Emergency", icon: FaClock },
  { name: "Laboratory & Diagnostics", icon: FaMicroscope },
  { name: "Intensive Care Unit", icon: FaProcedures },
  { name: "Master Health Checkup", icon: FaNotesMedical },
  { name: "Ultrasound & X-Ray", icon: FaLaptopMedical },
  { name: "NICU - Level 2", icon: FaBaby },
  { name: "Pharmacy", icon: FaCapsules },
  { name: "Treadmill & ECG", icon: FaRunning },
]; // Top 8 facilities

// Services list-a combine panni oru single array-a use pannuvom.
const allServices = [...specialities.slice(0, 8), ...facilities.slice(0, 8)];

const Footer = () => {
  // Map link-kku sariyana URL use panni irukken
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.899723555291!2d80.20785191482226!3d12.977465390848834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f0e9f3b589f%3A0x6d8f8d6d8f8d6d8f!2sRKP%20Multispeciality%20Hospital%20and%20Diagnostics!5e0!3m2!1sen!2sin!4v1633512345678!5m2!1sen!2sin";

  // Total services list-a rendu column-a split panna
  const halfLength = Math.ceil(allServices.length / 2);
  const col1 = allServices.slice(0, halfLength);
  const col2 = allServices.slice(halfLength);

  return (
    <footer className="bg-blue-900 text-gray-200">
      {/* Main Footer Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* 1. Brand Info & Social */}
          <div className="space-y-6">
            <img
              src="/logo1.png"
              alt="RKP Hospital"
              className="h-16 filter brightness-0 invert"
            />
            <p className="text-sm leading-relaxed">
              **RKP Multispeciality Hospital** is a leading diagnostic and
              imaging center committed to providing affordable, world-class
              healthcare with compassion.
            </p>
            {/* Social Icons (Stylish Update) */}
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-blue-700 rounded-full hover:bg-pink-600 transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-blue-700 rounded-full hover:bg-pink-600 transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-blue-700 rounded-full hover:bg-pink-600 transition duration-300"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* 2. Services List (Split into 2 Columns) */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-pink-500/50 pb-1 inline-block">
              Our Services
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {allServices.map((service, index) => (
                <a
                  key={index}
                  href={`/services#${service.name.replace(/\s/g, "-")}`}
                  className="flex items-center hover:text-pink-400 transition"
                >
                  <service.icon className="mr-2 text-pink-500 flex-shrink-0" />
                  {service.name.split(" ")[0]}...
                </a>
              ))}
            </div>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-pink-500/50 pb-1 inline-block">
              Contact & Location
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-pink-500 flex-shrink-0 text-lg" />
                <span>
                  RKP Multispeciality Hospital and Diagnostics
                  <br />
                  5, Medavakkam Main Rd, Nanmangalam, Chennai, TN 600129
                </span>
              </li>
              <li className="flex items-center gap-3 hover:text-pink-400 transition">
                <FaPhoneAlt className="text-pink-500" />
                <a href="tel:+919384676002">+91 93846 76002</a>
              </li>
            </ul>
          </div>

          {/* 4. Embedded Google Map */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-pink-500/50 pb-1 inline-block">
              Find Us
            </h3>
            <iframe
              title="location"
              src={mapUrl}
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl border-4 border-blue-700 shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-blue-800 py-4 text-xs">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p className="mb-2 md:mb-0">
            Copyright © 2025 **RKP Multispeciality Hospital**. All Rights
            Reserved.
          </p>
          <div className="space-x-4">
            <a href="#" className="hover:text-pink-400 transition">
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-pink-400 transition">
              Terms of Use
            </a>
            <span className="text-gray-600">|</span>
            <span className="text-gray-500">Developed by AmogoWebster</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
