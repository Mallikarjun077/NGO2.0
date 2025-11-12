import React from "react";
import ngoTeam from "../assets/ngo5.jpg"; // Replace with your team or NGO image
import Footer from "../Components/Footer";
import AnimationWrapper from "../Components/AnimationReveal";

const About = () => {
  return (
    <AnimationWrapper animation="zoom" delayStep={1}>  
    <div className="bg-[rgba(18,23,26,0.9)] min-h-screen flex flex-col justify-between">
      {/*  Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-emerald-500 text-white py-16 text-center px-6 mt-22">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Shree Balaji Foundation
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          We are a non-profit organization dedicated to improving lives through
          education, healthcare, and community development initiatives.
        </p>
      </section>

      {/*  Mission & Vision */}
      <section className="py-16 px-6 md:px-16 bg-[rgba(18,23,26,0.9)]">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Our Mission & Vision
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="bg-cyan-50 p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-cyan-600 mb-4">
              🌍 Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              Our mission is to uplift underprivileged communities by providing
              education, healthcare, and opportunities for self-sustained
              growth. We strive to empower individuals and families to lead a
              better life with dignity and hope.
            </p>
          </div>
          <div className="bg-emerald-50 p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-emerald-600 mb-4">
              💡 Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              Our vision is a society where everyone has equal access to basic
              necessities, education, and employment opportunities — a world
              where compassion, equality, and humanity thrive together.
            </p>
          </div>
        </div>
      </section>

      {/*  Our Story */}
      <section className="py-16 px-6 md:px-16 bg-[rgba(18,23,26,0.9)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src={ngoTeam}
            alt="Our Team"
            className="rounded-2xl shadow-lg object-cover w-full h-100"
          />
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Our Journey
            </h2>
            <p className="text-white leading-relaxed mb-2 text-justify">
              Shree Balaji Foundation, a registered non-profit organization
              since 2015, has been consistently working towards creating a
              positive impact in the areas of Health / Medical, Education and
              Skill Development, Woman Empowerment, Community Development and
              Social Development. We have successfully fulfilled our commitment
              to transparency and accountability through regular filing of
              Income Tax Returns and through audit reports for the past eight
              years.
            </p>
            <p className="text-white leading-relaxed text-justify">
              Shree Balaji Foundation, established on 15th April 2015, is a
              non-profit organization committed to making a meaningful impact in
              the areas of Health / Medical, Education and Skill Development,
              Woman Empowerment, Community Development and Social Development.
              Our foundation is registered under 12A and 80G of the Income Tax
              Act, ensuring transparency and accountability in our operations.
            </p>
          </div>
        </div>
      </section>

      {/*  Impact Section */}
      <section className="py-16 px-6 md:px-16 bg-[rgba(18,23,26,0.9)] text-center">
        <h2 className="text-3xl font-bold text-white mb-12 ">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto ">
          <div className="bg-cyan-500 text-white rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 hover:animate-bounce">
            <h3 className="text-4xl font-bold mb-2">5,000+</h3>
            <p className="text-lg font-medium">Children Educated</p>
          </div>
          <div className="bg-emerald-500 text-white rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 hover:animate-bounce">
            <h3 className="text-4xl font-bold mb-2">1,200+</h3>
            <p className="text-lg font-medium">Families Supported</p>
          </div>
          <div className="bg-indigo-500 text-white rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 hover:animate-bounce">
            <h3 className="text-4xl font-bold mb-2">350+</h3>
            <p className="text-lg font-medium">Medical Camps</p>
          </div>
          <div className="bg-pink-500 text-white rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 hover:animate-bounce">
            <h3 className="text-4xl font-bold mb-2">800+</h3>
            <p className="text-lg font-medium">Volunteers Joined</p>
          </div>
        </div>
      </section>

      {/*  Join Us */}
      <section className="py-12 bg-gradient-to-r from-emerald-500 to-cyan-500 text-center text-white px-6 ">
        <h2 className="text-4xl font-bold mb-4">Join Our Mission</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Together, we can create lasting change. Become a volunteer, partner,
          or donor and help us continue making a difference.
        </p>
        <Link
          to="/donate"
          className="bg-white text-cyan-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Donate Now 💖
        </Link>
      </section>

      {/* <Footer /> */}
    </div>
     </AnimationWrapper>
  );
};

export default About;
