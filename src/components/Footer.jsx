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
    "www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5092202812884!2d80.17949057431835!3d12.939234115588526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f780d39186f%3A0x7dfd7e6f9001a229!2sRKP%20MULTI-SPECIALITY%20HOSPITALS!5e0!3m2!1sen!2sin!4v1761717261418!5m2!1sen!2sin";

  // Total services list-a rendu column-a split panna
  const halfLength = Math.ceil(allServices.length / 2);
  const col1 = allServices.slice(0, halfLength);
  const col2 = allServices.slice(halfLength);

  return (
    <footer className="bg-slate-50 text-gray-800 ">
      {/* Main Footer Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* 1. Brand Info & Social */}
          <div className="space-y-6">
            <img src="/logo2b.png" alt="RKP Hospital" className="h-16 filter" />
            <p className="text-sm leading-relaxed">
              <strong>RKP Multispeciality Hospital</strong> is a leading
              diagnostic and imaging center committed to providing affordable,
              world-class healthcare with compassion.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-9 h-9 flex items-center text-white justify-center bg-blue-700 rounded-full hover:bg-pink-600 transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center text-white justify-center bg-blue-700 rounded-full hover:bg-pink-600 transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center text-white justify-center bg-blue-700 rounded-full hover:bg-pink-600 transition duration-300"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* 2. Services List */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-neutral-800 border-b-2 border-pink-500/50 pb-1 inline-block">
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

          {/* 3. Contact Info (Both Branches) */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-neutral-800 border-b-2 border-pink-500/50 pb-1 inline-block">
              Contact & Location
            </h3>
            <ul className="space-y-5 text-sm">
              {/* Branch 1 */}
              <li>
                <p className="font-semibold text-[#004C97] mb-1">
                  Main Branch – Nanmangalam
                </p>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 text-pink-500 flex-shrink-0 text-lg" />
                  <span>
                    RKP Multispeciality Hospital and Diagnostics <br />
                    5, Medavakkam Main Rd, Nanmangalam, Chennai, TN 600129
                  </span>
                </div>
              </li>

              {/* Divider */}
              <li className="border-t border-gray-200 pt-4"></li>

              {/* Branch 2 */}
              <li>
                <p className="font-semibold text-[#004C97] mb-1">
                  Branch 2 – Guduvancheri
                </p>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 text-pink-500 flex-shrink-0 text-lg" />
                  <span>
                    GST Road, National Highway 4, Guduvancheri, Tamil Nadu
                    603202 <br />
                    Landmark: Near RKP Hospital Guduvanchery
                  </span>
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3 hover:text-pink-400 transition mt-4">
                <FaPhoneAlt className="text-pink-500" />
                <a href="tel:+919384676002">+91 93846 76002</a>
              </li>
            </ul>
          </div>

          {/* 4. Google Map */}
          {/* <div>
            <h3 className="text-xl font-bold mb-6 text-neutral-800 border-b-2 border-pink-500/50 pb-1 inline-block">
              Find Us
            </h3>
            <iframe
              title="location"
              src="www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5092202812884!2d80.17949057431835!3d12.939234115588526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f780d39186f%3A0x7dfd7e6f9001a229!2sRKP%20MULTI-SPECIALITY%20HOSPITALS!5e0!3m2!1sen!2sin!4v1761717261418!5m2!1sen!2sin"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl border-4 border-blue-700 shadow-xl"
            />
          </div> */}
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-blue-800 py-4 text-xs">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p className="mb-2 md:mb-0">
            Copyright © 2025 RKP Multispeciality Hospital. All Rights Reserved.
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
            <span className="text-gray-100">Developed by amigowebster</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
