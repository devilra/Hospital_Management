import React from "react";

const AboutPage = () => {
  return (
    <section className="py-16 md:pt-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* -------------------- 1. Image Section (Right Side) -------------------- */}
          {/* பெரிய திரைகளில் வலது பக்கம், சிறிய திரைகளில் மேலே */}
          <div className="w-full lg:w-1/2 order-first lg:order-last">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl h-80 md:h-96 lg:h-[500px]">
              <img
                // Screenshot 2025-10-27 173003.jpg-ல் உள்ள Image-ன் Placeholder-ஐ பயன்படுத்துகிறேன்
                src="https://i.imgur.com/your-hospital-image.jpg" // <<< உங்கள் படத்தின் URL-ஐ இங்கே மாற்றவும்
                alt="Hospital Interior showing Compassionate Care"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              {/* Optional: படத்துக்கு மேல் ஒரு நீல நிற Overlay தேவைப்பட்டால் */}
              <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
            </div>
          </div>

          {/* -------------------- 2. Text Section (Left Side) -------------------- */}
          <div className="w-full lg:w-1/2 order-last lg:order-first">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3">
              ABOUT OUR HOSPITAL
            </h3>

            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-6">
              Compassionate Care,{" "}
              <span className="text-blue-600">Innovative Treatment</span> &
              Faster Recovery
            </h2>

            <p className="text-gray-700 text-lg mb-6">
              R K P Multispeciality Hospital is dedicated to providing
              **High-Quality Medical Care** with a patient-first approach. We
              combine **Modern Techniques** and experienced medical
              professionals to ensure the **Faster Recovery** and well-being of
              every patient.
            </p>

            <p className="text-gray-600 text-base mb-8 border-l-4 border-blue-500 pl-4 italic">
              "Our mission is to be the most trusted healthcare partner in the
              community, offering comprehensive medical services in Cardiology,
              Paediatrics, Obstetrics, and Orthopedics."
            </p>

            {/* Call to Action Button */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
