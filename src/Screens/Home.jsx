import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AnimationWrapper from "../Components/AnimationReveal";
import { Carousel } from "react-responsive-carousel";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Hero from  "../assets/Hero/Hero1.jpg"
import Hero2 from  "../assets/Hero/Hero2.jpg"
import Hero3 from  "../assets/Hero/Hero3.jpg"
import Hero4 from  "../assets/Hero/Hero4.jpg"
import Hero5 from  "../assets/Hero/Hero5.jpg"
import Hero6 from  "../assets/Hero/Hero6.jpg"
import Hero7 from  "../assets/Hero/Hero7.jpg"
import Hero8 from  "../assets/Hero/Hero8.jpg"
import Hero9 from  "../assets/Hero/Hero9.jpg"
import Hero10 from  "../assets/Hero/Hero10.jpg"


const Home = () => {
  //  Sample Data
  const donationData = [
    { year: "2015", donations: 10000, volunteers: 200 },
    { year: "2018", donations: 20000, volunteers: 350 },
    { year: "2021", donations: 35000, volunteers: 600 },
    { year: "2024", donations: 50000, volunteers: 1100 },
  ];

  //  Summary Values
  const totalDonations = donationData.reduce((sum, d) => sum + d.donations, 0);
  const totalVolunteers = donationData.reduce(
    (sum, d) => sum + d.volunteers,
    0
  );
  const totalEvents = 42;
  const totalProjects = 18;

  return (
        <AnimationWrapper animation="zoom" delayStep={1}>

    <div className="w-full bg-gray-500 ">
      {/*  Hero Carousel Section */}
      <section className="relative w-full overflow-hidden  ">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3500}
          transitionTime={900}
          emulateTouch
        >
          {[Hero, Hero2, Hero3, Hero4, Hero5, Hero6, Hero7, Hero8, Hero9, Hero10].map((img, i) => (
            <div key={i} className="relative mt-12">
              <img
                src={img}
                alt={`Slide ${i + 1}`}
                className="h-[100vh] w-full object-cover"
              />
              {/* Overlay text */}
              {/* <div className="absolute  inset-0 flex flex-col justify-center items-center bg-black/40 text-green-400 text-center px-6">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  Together We Can Make a Difference 🌍
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-2xl">
                  Join hands with us to help the needy and make the world a
                  better place.
                </p>
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold transition">
                  Get Involved
                </button>
              </div> */}
            </div>
          ))}
        </Carousel>
      </section>

      <section className="py-8 px-6 bg-[rgba(18,23,26,0.9)] shadow-2xl rounded-3xl  m-2 ">
  <p className=" text-white text-lg leading-relaxed text-justify">
    <strong>Shree Balaji Foundation</strong>, established in <strong>2015</strong>, 
    has been dedicated to creating a positive and lasting impact on society. 
    As a registered organization under various acts, including <strong>12A</strong>, 
    <strong>80G</strong>, <strong>CSR-1</strong>, and <strong>NITI Aayog</strong>, 
    we uphold the highest standards of transparency and accountability. 

    For the past eight years, we have consistently filed our <strong>ITRs</strong> 
    and completed annual <strong>audit reports</strong>, reinforcing our 
    commitment to ethical practices and good governance. 

    Our multifaceted initiatives focus on 
    <strong> Health & Medical Care</strong>, <strong>Education & Skill Development</strong>, 
    <strong>Women Empowerment</strong>, <strong>Community Development</strong>, 
    and <strong>Social Welfare</strong>. Through these programs, we address 
    critical needs across different sectors to bring meaningful change to lives and communities. 

    By supporting <strong>Shree Balaji Foundation</strong>, your 
    <strong> CSR funds</strong> and <strong>donations</strong> directly contribute 
    to transformative projects that uplift underprivileged sections of society 
    and create a sustainable future for all.
  </p>
</section>


      {/*  Graph Section */}
      <section className="py-16 px-6 md:px-16 bg-[rgba(18,23,26,0.9)]  text-center">
        <h2 className="text-3xl font-bold text-white mb-12">
          Yearly Growth Overview
        </h2>

        {/* Two charts side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Donations Chart */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:animate-bounce  ">
            <h3 className="text-2xl font-semibold text-cyan-600 mb-6">
              Donations Over the Years (₹)
            </h3>
            <div className="w-full h-80 ">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={donationData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
                >
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <XAxis dataKey="year" />
                  <YAxis dataKey="donations" />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="donations"
                    fill="#06b6d4"
                    name="Donations (₹)"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Volunteers Chart */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:animate-bounce">
            <h3 className="text-2xl font-semibold text-emerald-600 mb-6">
              Volunteers Over the Years
            </h3>
            <div className="w-full h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={donationData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
                >
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="volunteers" fill="#10b981" name="Volunteers" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/*  Summary Cards Section */}
        <div className="mt-16  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Donations Card */}
          <div className="bg-cyan-500 text-white rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300 hover:animate-bounce">
            <h3 className="text-2xl font-semibold mb-2">Total Donations</h3>
            <p className="text-4xl font-bold">
              ₹{totalDonations.toLocaleString()}
            </p>
          </div>

          {/* Volunteers Card */}
          <div className="bg-emerald-500 text-white rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300 hover:animate-bounce">
            <h3 className="text-2xl font-semibold mb-2">Total Volunteers</h3>
            <p className="text-4xl font-bold">
              {totalVolunteers.toLocaleString()}
            </p>
          </div>

          {/* Events Card */}
          <div className="bg-indigo-500 text-white rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300 hover:animate-bounce">
            <h3 className="text-2xl font-semibold mb-2">Total Events</h3>
            <p className="text-4xl font-bold">{totalEvents}</p>
          </div>

          {/* Projects Card */}
          <div className="bg-pink-500 text-white rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300 hover:animate-bounce">
            <h3 className="text-2xl font-semibold mb-2">Total Projects</h3>
            <p className="text-4xl font-bold">{totalProjects}</p>
          </div>
        </div>
      </section>
    </div>
        </AnimationWrapper>
  );
};

export default Home;
