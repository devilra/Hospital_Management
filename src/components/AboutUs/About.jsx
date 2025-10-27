import React from "react";

const About = () => {
  return (
    <div className="mt-5 md:mt-20">
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#025277] text-white rounded-xl overflow-hidden shadow-md p-2 md:p-5">
              <img
                src="/about/about1.png"
                alt="Home Collection"
                className="w-full h-40 object-cover  rounded-xl"
              />
              <div className="p-4 text-center ">
                <p className="font-semibold">HOME COLLECTION</p>
                <p className="text-sm text-neutral-300">
                  Sampling At Your Address
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-[#025277] text-white rounded-xl overflow-hidden shadow-md p-2 md:p-5">
              <img
                src="/rkp/r19.jpg"
                alt="ECG Test"
                className="w-full h-40 object-cover object-[50%_5%] rounded-xl"
              />
              <div className="p-4 text-center">
                <p className="font-semibold">X-RAY TEST</p>
                <p className="text-sm text-neutral-300">Accurate Results</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-[#025277] text-white rounded-xl overflow-hidden shadow-md p-2 md:p-5">
              <img
                src="/about/a5.png"
                alt="100+ Tests"
                className="w-full h-40 object-cover rounded-xl"
              />
              <div className="p-4 text-center">
                <p className="font-semibold">C-arm Machine</p>
                <p className="text-sm text-neutral-300">
                  Comprehensive Checkups
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-[#025277] text-white rounded-xl overflow-hidden shadow-md p-2 md:p-2">
              <img
                src="/chairman.png"
                alt="Doctor"
                className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-xl"
              />
              <div className="p-3 sm:p-4 text-center">
                <p className="font-semibold text-sm sm:text-base">
                  Dr.Saravanan Arunachalam
                </p>
                <span className="text-neutral-300 ">MD (Pediatrics)</span>
                <p className="text-xs sm:text-sm font-bold text-white">
                  Chairman & Managing Director
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="text-cyan-700 font-semibold md:-mt-20 pb-5 mb-2 text-2xl md:text-3xl">
              About Us
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4">
              RKPhospitals in <br /> Nanmangalam, Chennai
            </h2>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              <span className="font-semibold">OUTPATIENT DEPARTMENT </span>
              Your one stop solution in Precise
            </p>
            <p className="text-gray-700 mb-6 text-sm sm:text-base">
              Want to consult a doctor? Want to take a scan to see what your
              baby is doing inside? Has doctor asked you to take X-Ray? Do you
              want to take a routine blood test? Searching for a pharmacy?
            </p>
            <p className="text-gray-700 mb-6 text-sm sm:text-base">
              <strong>Relax!!! </strong>All your medical needs is just a feet
              away. Fully air conditioned waiting area,
            </p>
            <p>
              Consultation rooms with examination area, all types of{" "}
              <strong>Ultrasound scans</strong> accurately taken in an imported{" "}
              <strong>scan machine</strong>, World's best{" "}
              <strong>X ray machine</strong> that captures every cells in your
              body and <strong>24*7 Pharmacy services</strong> with trained{" "}
              <strong>Pharmacists.</strong>
            </p>

            {/* <ul className="space-y-3 mb-6 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✔️</span> Led by Passionate
                Experts
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✔️</span> Safe Diagnoses and
                Effective Therapies
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✔️</span> Advanced Technology
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✔️</span> Affordable Health
                Packages
              </li>
            </ul> */}

            <button className="px-6 py-2 mt-5 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition text-sm sm:text-base">
              Explore More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
