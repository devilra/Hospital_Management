import React, { useState } from "react";
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

// General Surgery-க்கான கஸ்டம் ஐகான்
const CutIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// CSS Class Styling Helper (தேவைப்பட்டால் பயன்படுத்தலாம்)
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HospitalServices = () => {
  // Tabs-ஐ நிர்வகிக்க useState பயன்படுத்தப்படுகிறது.
  const [selectedTab, setSelectedTab] = useState(0); // 0 = Specialities, 1 = Facilities

  // முதல் படத்தில் உள்ள "OUR SPECIALITIES" விவரங்கள்
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

  // Tab Button-களை ரெண்டர் செய்யும் செயல்பாடு
  const renderTabButton = (index, label) => (
    <button
      key={index}
      // Tab click செய்யும் போது selectedTab-ன் மதிப்பை மாற்றும்.
      onClick={() => setSelectedTab(index)}
      className={classNames(
        "w-full py-2.5 text-lg leading-5 font-medium rounded-lg transition-colors duration-200",
        // selected Tab-க்கான ஸ்டைல்கள்
        selectedTab === index
          ? "bg-white shadow text-blue-700"
          : // தேர்ந்தெடுக்கப்படாத Tab-க்கான ஸ்டைல்கள்
            "text-blue-900 hover:bg-white/[0.5]",
        "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
      )}
    >
      {label}
    </button>
  );

  // Tab Content-ஐ ரெண்டர் செய்யும் செயல்பாடு
  const renderTabContent = (data) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center p-4 bg-white rounded-lg shadow-md border border-blue-100 transition-transform transform hover:scale-105"
        >
          <item.icon className="h-8 w-8 text-blue-500 mr-4 flex-shrink-0" />
          <p className="text-lg font-medium text-gray-800">{item.name}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 lg:py-16">
      {/* Common Heading */}
      <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-blue-900 mb-10">
        <span className="text-gray-700">What</span> We Offer
      </h2>

      {/* Manual Tab Buttons (Tab.List-க்கு பதிலாக) */}
      <div className="flex p-1 space-x-1 bg-blue-100 rounded-xl max-w-md mx-auto mb-10">
        {renderTabButton(0, "Our Specialities")}
        {renderTabButton(1, "Our Facilities")}
      </div>

      {/* Tab Content Panels (Tab.Panels-க்கு பதிலாக) */}
      <div className="mt-8">
        {/* Specialities Tab Content */}
        {selectedTab === 0 && (
          <div
            className={classNames(
              "rounded-xl bg-white p-3 transition-opacity duration-300",
              "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
            )}
          >
            {renderTabContent(specialities)}
          </div>
        )}

        {/* Facilities Tab Content */}
        {selectedTab === 1 && (
          <div
            className={classNames(
              "rounded-xl bg-white p-3 transition-opacity duration-300",
              "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
            )}
          >
            {renderTabContent(facilities)}
          </div>
        )}
      </div>
    </div>
  );
};

export default HospitalServices;
