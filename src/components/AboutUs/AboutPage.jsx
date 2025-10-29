import React from "react";
import { FaAward, FaHandsHelping } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function AboutPage() {
  const stats = [
    { label: "Years of Service", value: "25+" },
    { label: "Qualified Doctors", value: "120+" },
    { label: "Happy Patients", value: "50k+" },
    { label: "Departments", value: "18" },
  ];

  const doctorsData = [
    {
      id: 1,
      name: "Dr.A.Saravanan MBBS, M.D, (PAED)",
      specialization:
        "Orthopedic Surgeon, Sports Injury Specialist, Joint Replacement Specialist.",
      role: "Chief Consultant and Head of Orthopedics",
      image: "/doctors/d7.png",
    },
    {
      id: 2,
      name: "Dr. R. Kavitha Karthikeyan M.D(OG), DNB(OG)",
      specialization: "Senior Obstetrician & Gynecologist",
      role: "Senior Obstetrician & Gynecologist / Consultant",
      image: "/doctors/d2.png",
    },
    {
      id: 3,
      name: "Dr. D. Aishwarya MBBS., M.D., (PAED)",
      specialization: "Senior Pediatrician",
      role: "Senior Pediatrician / Consultant",
      image: "/doctors/d6.png",
    },
    {
      id: 4,
      name: "Dr. S. Suresh Kanna M.D. Internal Medicine, FACP, FDM., CCIID.,",
      specialization:
        "Specialist Physician & Diabetologist (10 Years Experience)",
      role: "Specialist Physician & Diabetologist / Consultant",
      image: "/doctors/d5.png",
    },
    {
      id: 5,
      name: "Dr. Akshya Raj M.S. (Ortho), CIO New Delhi, F.ASSI (Spine Surgery)",
      specialization: "Spine, Joint Replacement and Trauma Specialist",
      role: "Spine, Joint Replacement and Trauma Specialist / Consultant",
      image: "/doctors/d4.png",
    },
    {
      id: 6,
      name: "Dr. R. Nivethidha MBBS., M.S. (OG)",
      specialization: "Obstetrician & Gynecologist",
      role: "Obstetrician & Gynecologist / Consultant",
      image: "/doctors/d3.png",
    },
    {
      id: 7,
      name: "Dr. E. Adhavan M.B.B.S., M.S(ENT)",
      specialization: "ENT Specialist (Ear, Nose, Throat)",
      role: "ENT Specialist / Consultant",
      image: "/doctors/d8.png",
    },
    {
      id: 8,
      name: "Dr. Sujatha Munian M.Sc",
      specialization: "Food nutrition and Dietetics",
      role: "Dietitian and Nutritionist / Consultant",
      image: "/doctors/d1.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280, // For large screens (e.g., small desktops, large tablets)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // For medium screens (e.g., tablets)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          //dots: true, // Tablets/Mobile-ல் Dots காட்டலாம்
        },
      },
      {
        breakpoint: 768, // For small screens (e.g., larger phones)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          //dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480, // For extra small screens (e.g., small phones)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          //dots: true,
          arrows: false,
        },
      },
    ],
  };

  // const team = [
  //   {
  //     name: "Dr. Aishwarya R.",
  //     role: "Chief Medical Officer",
  //     img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd",
  //   },
  //   {
  //     name: "Dr. Karthik S.",
  //     role: "Head - Cardiology",
  //     img: "https://images.unsplash.com/photo-1551601651-2f9b6b4b6b7a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=efgh",
  //   },
  //   {
  //     name: "Dr. Meera P.",
  //     role: "Head - Pediatrics",
  //     img: "https://images.unsplash.com/photo-1546539786-4b79c4e7e9f5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=ijkl",
  //   },
  // ];

  const facilities = [
    "24/7 Emergency",
    "Modern Operation Theatres",
    "In-house Diagnostics",
    "Pharmacy",
    "Intensive Care Unit (ICU)",
  ];

  const clipPathStyle = {
    clipPath: "polygon(0 0, 95% 0, 100% 10%, 100% 100%, 0 100%)",
  };

  return (
    <main className="min-h-screen pt-10  bg-gray-50 text-gray-800">
      {/* HERO */}
      {/* <section className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              About Our Hospital
            </h1>
            <p className="mt-4 text-sky-100/90 text-lg sm:text-xl">
              Caring hands, advanced treatments — your health is our priority.
              We combine modern technology with compassionate care to deliver
              the best outcomes for our patients.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-block rounded-md bg-white text-sky-700 px-6 py-3 font-semibold shadow hover:shadow-lg"
              >
                Contact Us
              </Link>
              <a
                href="#departments"
                className="inline-block rounded-md border border-white/30 px-6 py-3 text-white hover:bg-white/10"
              >
                Our Departments
              </a>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8 flex-shrink-0">
            <div className="w-full max-w-md rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/chairman.png"
                alt="Hospital caring staff"
                className="w-full h-56 object-cover sm:h-64 lg:h-72"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section> */}

      <section className="font-sans bg-gradient-to-b from-white via-blue-50/40 to-white py-16 relative overflow-hidden">
        {/* Decorative faint circles */}
        <div className="absolute top-10 left-20 w-40 h-40 bg-blue-100/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-40 w-56 h-56 bg-indigo-100/40 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row shadow-xl rounded-3xl overflow-hidden bg-white relative z-10 border border-gray-100">
          {/* LEFT SIDE - About Section inside shaped area */}
          <div className="relative md:w-1/2 p-10 flex flex-col justify-between overflow-hidden">
            {/* Decorative Shape */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-[#E6F0FF] via-[#F4F8FF] to-white"
              style={{
                clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)",
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
              {/* About Hospital */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#004C97] mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-3/4 after:h-[3px] after:bg-[#004C97]/60 after:rounded-full">
                  ABOUT OUR HOSPITAL
                </h2>
                <p className="text-base leading-relaxed text-gray-700">
                  Established with the vision to provide compassionate and
                  affordable medical care, our hospital stands as a center of
                  excellence in healthcare. We combine modern technology with a
                  patient-centric approach to ensure the best outcomes.
                </p>
              </div>

              {/* Divider */}
              <div className="h-[2px] bg-gradient-to-r from-[#004C97]/40 via-blue-300/30 to-transparent w-2/3 mb-8"></div>

              {/* Core Values */}
              <div>
                <h2 className="text-3xl font-bold text-[#004C97] mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-3/4 after:h-[3px] after:bg-[#004C97]/60 after:rounded-full">
                  OUR CORE VALUES
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-base leading-relaxed text-gray-700">
                  <li>
                    Compassion - treating every patient with care and dignity.
                  </li>
                  <li>
                    Integrity - maintaining transparency and trust in all
                    actions.
                  </li>
                  <li>
                    Excellence - delivering high-quality healthcare with
                    expertise.
                  </li>
                  <li>
                    Innovation - embracing technology to improve patient
                    outcomes.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section Number */}
            <p className="absolute bottom-6 left-10 text-5xl font-bold text-[#004C97]/10 tracking-wider select-none">
              01
            </p>
          </div>

          {/* RIGHT SIDE - Doctor Info */}
          <div className="md:w-1/2 p-10 bg-white flex flex-col justify-center items-center md:items-start relative">
            {/* Doctor Details */}
            <div className="mb-6 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-800 mb-1 tracking-wide">
                Dr. Saravanan Arunachalam
              </h1>
              <p className="text-lg text-gray-600">MD (Pediatrics)</p>
              <p className="text-lg font-semibold text-gray-700">
                Chairman & Managing Director
              </p>
            </div>

            {/* Doctor Image */}
            <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:scale-105 hover:shadow-2xl transition-transform duration-500 ease-out">
              <img
                src="/chairman.png"
                alt="Dr. Saravanan Arunachalam"
                className="w-full h-full object-cover object-[10%_65%]"
              />
              {/* Light overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      {/* <section className="container mx-auto px-6 py-12 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="mt-3 text-gray-600">
            To provide accessible, high-quality healthcare where every patient
            is treated with dignity, empathy and the latest evidence-based care.
          </p>

          <h2 className="mt-6 text-2xl font-bold">Our Vision</h2>
          <p className="mt-3 text-gray-600">
            To be the leading healthcare institution in the region known for
            clinical excellence, continuous innovation and a patient-first
            culture.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {facilities.slice(0, 4).map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-sky-600 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4"
                  ></path>
                </svg>
                <p className="text-gray-700">{f}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold">Why patients trust us</h3>
          <ul className="mt-4 space-y-3 text-gray-600">
            <li>Experienced multidisciplinary team</li>
            <li>Advanced diagnostics & imaging</li>
            <li>Transparent pricing & patient counselling</li>
            <li>Post-operative rehabilitation programs</li>
          </ul>
        </div>
      </section> */}

      <section className="bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-8">Our Mission & Vision</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-md hover:bg-white/20 transition duration-300">
              <FaHandsHelping className="text-5xl mx-auto mb-4 text-yellow-300" />
              <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                To provide affordable, compassionate, and comprehensive
                healthcare through innovation and dedication. We strive to heal
                with empathy and care for every patient like family.
              </p>
            </div>

            <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-md hover:bg-white/20 transition duration-300">
              <FaAward className="text-5xl mx-auto mb-4 text-green-300" />
              <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                To be a globally trusted healthcare institution recognized for
                excellence in clinical care, research, and patient well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-sky-50 rounded-lg p-6 text-center"
              >
                <div className="text-3xl font-extrabold">{s.value}</div>
                <div className="mt-2 text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="container mx-auto px-6 py-12" id="team">
        <h2 className="text-3xl font-extrabold text-[#004C97] text-center">
          Meet Our Team
        </h2>
        <p className="mt-2 text-gray-600 text-lg  text-center">
          A highly experienced clinical team committed to delivering
          personalised care.
        </p>

        <div className="relative max-w-6xl mx-auto mt-5">
          <Slider {...settings}>
            {doctorsData.map((doctor) => (
              <div key={doctor.id} className="px-2 py-5">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-blue-100 flex flex-col h-full transform hover:scale-105 transition duration-300">
                  <div className="h-60 bg-blue-50/20 flex items-end justify-center">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="object-contain object-bottom h-full w-full"
                    />
                  </div>
                  <div className="px-10 py-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-blue-800 mb-1 truncate">
                        {doctor.name}
                      </h3>
                      <p className="text-sm text-gray-700 mb-2 truncate">
                        {doctor.specialization}
                      </p>
                      {doctor.role && (
                        <p className="text-xs font-semibold text-gray-600 truncate italic">
                          {doctor.role}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* OUR TEAM PHOTO SECTION */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#EAF3FF] via-white to-[#DCEBFF]">
        {/* Background Pattern / Blur Light */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#004C97]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-300/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/3 left-1/4 w-[250px] h-[250px] bg-blue-200/30 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#004C97] mb-4 tracking-tight">
            Our Dedicated Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
            United by compassion, guided by excellence - our doctors, nurses,
            and staff work together to ensure every patient receives the best
            care possible.
          </p>

          {/* Team Image Card */}
          <div className="relative group mx-auto rounded-3xl overflow-hidden shadow-2xl border border-blue-100 max-w-5xl transform hover:scale-[1.02] transition-all duration-700 ease-out">
            {/* TEAM IMAGE */}
            <img
              src="/rkp/r3.jpg"
              alt="RKP Hospital Team"
              className="w-full h-[450px] md:h-[600px] object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
            />

            {/* Dual Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#004C97]/80 via-[#004C97]/30 to-transparent opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#004C97]/40 via-transparent to-[#004C97]/20 mix-blend-overlay"></div>

            {/* Decorative Lines */}
            <div className="absolute inset-x-0 bottom-0 h-[4px] bg-gradient-to-r from-yellow-400 via-white to-blue-400"></div>

            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 w-full text-white text-center pb-10 px-4 backdrop-blur-[2px]">
              <h3 className="text-2xl md:text-3xl font-bold drop-shadow-md">
                Team RKP - Strength in Unity
              </h3>
              <p className="text-sm md:text-base text-blue-100 mt-2 max-w-xl mx-auto leading-relaxed">
                Celebrating our incredible doctors, nurses, and staff who make
                healing possible every day.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Decorative Shapes */}
        <div className="absolute top-10 right-16 w-16 h-16 bg-[#004C97]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-12 h-12 bg-blue-400/20 rounded-full blur-md animate-bounce"></div>
      </section>

      {/* TESTIMONIALS / CTA */}
      <section className="bg-gradient-to-r from-slate-100 to-white py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">What our patients say</h3>
            <blockquote className="mt-4 italic text-gray-700">
              “The care I received was outstanding — the staff treated me like
              family and the doctors explained everything with patience.” — S.
              Kumar
            </blockquote>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h4 className="font-semibold">Book a consultation</h4>
            <p className="mt-2 text-gray-600">
              Call our appointment desk or use the online booking to choose your
              preferred doctor and time.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#book"
                className="inline-block rounded-md bg-sky-600 text-white px-5 py-2 font-semibold"
              >
                Book Now
              </a>
              <a
                href="#contact"
                className="inline-block rounded-md border border-sky-200 px-5 py-2"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER-LIKE CONTACT */}
      {/* <section className="container mx-auto px-6 py-10" id="contact">
        <div className="bg-slate-50 rounded-xl p-6 sm:flex sm:items-center sm:justify-between">
          <div>
            <h5 className="font-semibold">Contact</h5>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link to="/" className="inline-block rounded-md px-4 py-2 border">
              Home
            </Link>
          </div>
        </div>
      </section> */}
    </main>
  );
}
