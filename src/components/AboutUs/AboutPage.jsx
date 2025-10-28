import React from "react";
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
      image: "/doctors/d7.png",
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

  return (
    <main className="min-h-screen pt-20 md:pt-24 bg-gray-50 text-gray-800">
      {/* HERO */}
      <section className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white py-16">
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
                src="https://images.unsplash.com/photo-1580281657521-796a5b3dc3b4?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=mnop"
                alt="Hospital caring staff"
                className="w-full h-56 object-cover sm:h-64 lg:h-72"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="container mx-auto px-6 py-12 grid gap-8 md:grid-cols-2 items-center">
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
        <h2 className="text-2xl font-bold">Meet Our Team</h2>
        <p className="mt-2 text-gray-600">
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
      <section className="container mx-auto px-6 py-10" id="contact">
        <div className="bg-slate-50 rounded-xl p-6 sm:flex sm:items-center sm:justify-between">
          <div>
            <h5 className="font-semibold">Contact</h5>
            {/* <p className="text-gray-600">
              123 Health Ave, City, State — +91 98765 43210 —
              info@hospital.example
            </p> */}
          </div>
          <div className="mt-4 sm:mt-0">
            <a href="/" className="inline-block rounded-md px-4 py-2 border">
              Home
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
