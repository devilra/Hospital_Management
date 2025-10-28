import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";

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

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      // Arrow Position: right-0 (Default slick class), md:-right-4, lg:-right-8 (Custom offsets)
      className={`${className} custom-arrow right-0 md:-right-4 lg:-right-8 p-3 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg transition-all duration-300`}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
        // The default slick style already handles position: absolute
      }}
      onClick={onClick}
    >
      <FaChevronRight className="text-white text-lg" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      // Arrow Position: left-0 (Default slick class), md:-left-4, lg:-left-8 (Custom offsets)
      // Note: Removed the unnecessary 'pr-20' which was pushing the arrow inside too much.
      className={`${className} custom-arrow left-0 md:-left-4 lg:-left-8 p-3 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg transition-all duration-300`}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
        // The default slick style already handles position: absolute
      }}
      onClick={onClick}
    >
      <FaChevronLeft className="text-white text-lg" />
    </div>
  );
};

const Doctors = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />, // Custom Next Arrow
    prevArrow: <PrevArrow />, // Custom Previous Arrow
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
  return (
    <div>
      <section className="py-12">
        <div className=" max-w-6xl  mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-10">
            Connect with Our Doctors
          </h2>
          <div className="relative">
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
        </div>
        <div className="text-center mt-5 lg:mt-7">
          <Link
            to="/alldoctors"
            className="text-blue-800 font-semibold text-lg border-b-2 border-blue-500 hover:border-b-4 hover:text-blue-600 transition-all  duration-300 ease-in-out"
          >
            View More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
