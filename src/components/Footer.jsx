import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white  px-4 md:px-20 py-10 border-t">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div className="space-y-4">
          <img src="/logo1.png" alt="R" className="h-20 w-[190px]" />
          <p className="text-sm">
            <strong>
              RKP Multispeciality Hospital and Diagnostics | Best Diagnostic
              Center in Chennai.
            </strong>{" "}
            A Leading Diagnostic and Imaging Center providing the Best
            Affordable Services for ECHO, CT Scan, Ultrasound, X-Ray & Lab
            Tests.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 text-white">
            <a
              href="#"
              className="bg-blue-900 p-2 rounded-full hover:bg-blue-700"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-pink-600 p-2 rounded-full hover:bg-pink-500"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-red-600 p-2 rounded-full hover:bg-red-500"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            {/* <li>CT-SCAN</li>
            <li>X-RAY</li>
            <li>ULTRASOUND SCAN</li>
            <li>LAB TEST’S</li> */}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Our Contacts</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                RKP Multispeciality Hospital and Diagnostics
                <br />
                5, Medavakkam Main Rd, Vaithiyalingam Nagar, Nanmangalam,
                Chennai, Tamil Nadu 600129
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +91 9384676002
            </li>
          </ul>
        </div>

        {/* Embedded Google Map */}
        <div>
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.509301802758!2d80.17949057393054!3d12.939228887373131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f780d39186f%3A0x7dfd7e6f9001a229!2sRKP%20MULTI-SPECIALITY%20HOSPITALS!5e0!3m2!1sen!2sin!4v1754458291985!5m2!1sen!2sin"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border"
          />
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-sm text-center border-t pt-6">
        <p>
          Copyright © 2025{" "}
          <strong> RKP Multispeciality Hospital and Diagnostics</strong>{" "}
          Developed by
          <a href="#" className="text-blue-600 hover:underline px-3">
            AmogoWebster
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Terms and Conditions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
