import React from "react";
import {
  FaHeartbeat,
  FaUserMd,
  FaBaby,
  FaBrain,
  FaBone,
  FaStethoscope,
  FaSyringe,
  FaMicroscope,
  FaFlask,
  FaProcedures,
  FaChild,
  FaUserFriends,
  FaCut,
  FaHospitalUser,
  FaCapsules,
  FaXRay,
  FaLaptopMedical,
  FaNotesMedical,
  FaVial,
  FaRunning,
  FaClock,
  FaShieldAlt,
  FaDiagnoses,
  FaHandsHelping,
  FaAmbulance,
  FaMedkit,
  FaAward,
} from "react-icons/fa";
import { MdPregnantWoman, MdHealthAndSafety } from "react-icons/md";
import {
  GiMedicalDrip,
  GiKidneys,
  GiScalpel,
  GiHeartOrgan,
  GiHospitalCross,
} from "react-icons/gi";
import { BsSoundwave } from "react-icons/bs";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { TbVaccine } from "react-icons/tb";

const specialities = [
  { name: "Anesthesiology", icon: RiSurgicalMaskFill },
  { name: "Cardiology", icon: FaHeartbeat },
  { name: "Dermatology", icon: MdHealthAndSafety },
  { name: "ENT", icon: BsSoundwave },
  { name: "Emergency Medicine", icon: FaProcedures },
  { name: "Gastroenterology", icon: GiMedicalDrip },
  { name: "General Medicine", icon: FaStethoscope },
  { name: "General Surgery", icon: GiScalpel },
  { name: "Neonatology", icon: FaBaby },
  { name: "Neurology", icon: FaBrain },
  { name: "Nephrology", icon: GiKidneys },
  { name: "Infertility", icon: FaUserFriends },
  { name: "Orthopedics", icon: FaBone },
  { name: "Obstetrics & Gynaecology", icon: MdPregnantWoman },
  { name: "Plastic Surgery", icon: GiHeartOrgan },
  { name: "Pediatrics", icon: FaChild },
  { name: "Pediatric Surgery", icon: FaUserMd },
  { name: "Urology", icon: FaSyringe },
];

const facilities = [
  { name: "24 Hours Emergency and Casualty Service", icon: FaClock },
  { name: "C-Arm", icon: FaLaptopMedical },
  { name: "Double Marker Tests", icon: FaVial },
  { name: "ECG", icon: FaHeartbeat },
  { name: "Intensive Care Unit", icon: FaProcedures },
  { name: "Immunisation", icon: TbVaccine },
  { name: "Laboratory", icon: FaMicroscope },
  { name: "Master Health Checkup", icon: FaNotesMedical },
  { name: "Mammogram", icon: FaDiagnoses },
  { name: "NICU - Level 2", icon: FaBaby },
  { name: "New Born Screening", icon: FaChild },
  { name: "Pharmacy", icon: FaCapsules },
  { name: "Treadmill", icon: FaRunning },
  { name: "Ultrasound", icon: FaLaptopMedical },
  { name: "X-Ray", icon: FaXRay },
];

const whyChooseUs = [
  {
    name: "24/7 Emergency Care",
    desc: "Round-the-clock availability of doctors, nurses, and ambulance service.",
    icon: FaAmbulance,
  },
  {
    name: "Highly Qualified Doctors",
    desc: "Our experienced medical team ensures safe and effective treatments.",
    icon: FaUserMd,
  },
  {
    name: "Cutting-edge Technology",
    desc: "We use advanced diagnostic and surgical equipment for precision care.",
    icon: GiHospitalCross,
  },
  {
    name: "Patient-Centered Approach",
    desc: "We treat every patient with empathy, respect, and dedication.",
    icon: FaHandsHelping,
  },
  {
    name: "Affordable & Transparent Billing",
    desc: "Providing cost-effective healthcare without compromising quality.",
    icon: FaMedkit,
  },
  {
    name: "Award-Winning Excellence",
    desc: "Recognized for our commitment to quality care and community service.",
    icon: FaAward,
  },
];

const ServiceCard = ({ name, Icon, isFacility = false }) => (
  <div
    className={`relative p-6 rounded-xl shadow-lg transition-all duration-300 transform 
      ${
        isFacility
          ? "bg-white hover:shadow-2xl hover:scale-[1.03] border-t-4 border-emerald-300"
          : "bg-white hover:shadow-2xl hover:scale-[1.03] border-t-4 border-sky-300"
      } flex items-center text-left`}
  >
    <Icon
      className={`text-3xl mr-4 ${
        isFacility ? "text-emerald-500" : "text-sky-500"
      }`}
    />
    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
  </div>
);

export default function Services() {
  return (
    <main className="min-h-screen pt-24 bg-gray-100 text-gray-800">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-700 to-indigo-800 text-white py-28 text-center shadow-2xl">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/hospital-bg.jpg')] bg-cover bg-center"></div>
        <div className="relative container mx-auto px-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Our Compassionate Care Network
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto opacity-90">
            Delivering world-class healthcare services with compassion and
            cutting-edge medical technology.
          </p>
        </div>
      </section>

      {/* CEO SECTION */}
      <section className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-10 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-blue-200 via-blue-300 to-blue-500 rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="lg:w-1/2 relative z-10 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-400/20 rounded-2xl blur-xl scale-105 group-hover:scale-110 transition-transform duration-500"></div>
            <img
              src="/chairman.png"
              alt="CEO"
              className="relative rounded-2xl w-[300px] h-[300px] shadow-2xl object-cover border-4 border-white hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="lg:w-1/2 text-left relative z-10">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-4">
            Message from Our CEO
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At{" "}
            <span className="font-semibold text-blue-700">
              RKP Multispeciality Hospital
            </span>
            , we believe healthcare is not just about treatment — it's about
            compassion, trust, and innovation. Our mission is to deliver quality
            care accessible to all.
          </p>
          <h3 className="text-2xl font-semibold text-blue-600">
            Dr.A.Saravanan MBBS, M.D, (PAED)
          </h3>
          <p className="text-gray-500">Founder & CEO</p>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-12">
            Why Choose{" "}
            <span className="text-blue-600">RKP Multispeciality Hospital?</span>
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {whyChooseUs.map(({ name, desc, icon: Icon }) => (
              <div
                key={name}
                className="p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.02] transition-transform duration-500 border-t-4 border-blue-500"
              >
                <Icon className="text-5xl text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {name}
                </h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALITIES SECTION */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-800">
          <span className="border-b-4 border-sky-500 pb-1">
            Our Specialities
          </span>
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {specialities.map(({ name, icon: Icon }) => (
            <ServiceCard key={name} name={name} Icon={Icon} />
          ))}
        </div>
      </section>

      {/* FACILITIES SECTION */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-emerald-800">
            <span className="border-b-4 border-emerald-500 pb-1">
              Our Advanced Facilities
            </span>
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {facilities.map(({ name, icon: Icon }) => (
              <ServiceCard key={name} name={name} Icon={Icon} isFacility />
            ))}
          </div>
        </div>
      </section>

      {/* MEET OUR TEAM SECTION */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-12">
          Meet Our <span className="text-blue-600">Medical Experts</span>
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Dr. A. Saravanan",
              role: "Orthopedic Surgeon",
              img: "/doctors/d7.png",
            },
            {
              name: "Dr. D. Aishwarya",
              role: "Pediatrics",
              img: "/doctors/d6.png",
            },
            {
              name: "Dr. R. Kavitha Karthikeyan",
              role: "Obstetrics & Gynaecology (OB/GYN)",
              img: "/doctors/d2.png",
            },
            {
              name: "Dr. S. Suresh Kanna",
              role: "General Medicine & Diabetologistt",
              img: "/doctors/d5.png",
            },
          ].map((doc) => (
            <div
              key={doc.name}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 p-6"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-32 h-32 mx-auto rounded-full object-cover object-[20%_20%] mb-4 border-4 border-blue-500"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {doc.name}
              </h3>
              <p className="text-blue-600">{doc.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-blue-50 py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-12">
            What Our <span className="text-blue-600">Patients Say</span>
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya M.",
                feedback:
                  "The doctors and nurses were so caring and professional. I felt truly safe and cared for.",
              },
              {
                name: "Ramesh K.",
                feedback:
                  "Excellent service and advanced facilities. They treat you with respect and compassion.",
              },
              {
                name: "Asha D.",
                feedback:
                  "From consultation to recovery, everything was smooth and supportive. Highly recommend!",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500"
              >
                <p className="text-gray-700 italic mb-4">“{review.feedback}”</p>
                <h4 className="font-semibold text-blue-700">{review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK APPOINTMENT CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Experience Quality Healthcare?
          </h2>
          <p className="text-blue-100 mb-6 text-lg">
            Book your appointment with our expert doctors today.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 transition duration-300"
          >
            Book Appointment
          </a>
        </div>
      </section>
    </main>
  );
}
