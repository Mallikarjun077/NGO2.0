import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import ngo5 from "../assets/ngo5.jpg";
import ngo6 from "../assets/ngo6.jpg";
import ngo7 from "../assets/ngo7.jpg";
import ngo8 from "../assets/ngo8.jpg";
import ngo9 from "../assets/ngo9.png";
import ngo10 from "../assets/ngo10.png";
import ngo11 from "../assets/ngo11.png";

const Activity = () => {
  const { type } = useParams();
  const [activeModal, setActiveModal] = useState(null);

  const data = [
    {
      id: 1,
      image: ngo7,
      title: "Medical Diagnostics Support",
      shortText:
        "To Provide financial assistance for crucial medical diagnostics tests, including angiography, MRI, MRCP, PET scan and CT scans & other diagnostics tests.",
      longText:
        "To Ensure accessibility to expensive diagnostic procedures for individuals facing health challenges.",
    },
    {
      id: 2,
      image: ngo8,
      title: "Health Camps",
      shortText:
        "To Organize health camps in diverse locations, including rural, urban, and tribal areas and Slum Area of Cities in collaboration with Sassoon Hospital, Dr. DY Patil Medical College, Intrigrated Cancer Treatment & Resarch Center, Wagholi & other hospitals in Pune District & Rural. Tribal area of Maharashtra State.",
      longText:
        "To Focus on preventive healthcare measures and early dietection of diseases.",
    },
    {
      id: 3,
      image: ngo8,
      title: "Disease Awareness Programs",
      shortText:
        "To Develop and implement awareness programs specifically targeting women's health, induding breast cancer and cervical cancer.",
      longText:
        "To Conduct educational sessions to disseminate information on early detection and prevention strategies",
    },
    {
      id: 4,
      image: ngo8,
      title: "Cancer Screening Camps",
      shortText:
        "a) Oral Cancer Screening: To Conduct regular screenings for oral cancer, especially in communities with a high prevalence of tobacco use: Early detection can significantly Improve treatment outcomesb) Cervical Cancer Screening: To offer Pap smear tests and HPV vaccinations towomen & girls in urban, rural and Tribal areas, where access to regular healthcare services may be limited.",
      longText:
        "c) Breast Cancer Screening: To provide mammography and clinical breast examinations to detect early signs of breast cancer particularly for women aged 40 and aboved) Rural Outreach: To focus on organizing these camps in rural and underserved areas where access to diagnostic facilities is often scarce. This outreach can help bridge the gap in healthcare accessibility.",
    },
    {
      id: 5,
      image: ngo8,
      title: "Comprehensive Health Checks",
      shortText:
        "To expands the camp's services to include screenings for other major health conditions like heart disease, diabetes, and hypertension, which are often linked with cancer",
      longText: "",
    },
    {
      id: 6,
      image: ngo8,
      title: "Special Focus on Paediatric Patients",
      shortText:
        "While adult screenings are common, these camps will also have facilities for detecting Paediatric cancers. Early diagnosis in children can be life-saving.",
      longText: "",
    },
    {
      id: 7,
      image: ngo8,
      title: "Supporting Cancer Patients",
      shortText:
        "To connect diagnosed patients with support groups and resources for emotional and psychological support.",
      longText: "",
    },
    {
      id: 8,
      image: ngo8,
      title: "Financial Assistance in Hospitals",
      shortText:
        "To provide financial counselling and support to cancer patients for treatment at charitable and government hospitals.",
      longText: "",
    },
    {
      id: 9,
      image: ngo8,
      title: "Free Treatment in Charitable & Private Hospitals",
      shortText:
        "Partner with private hospitals to secure free or subsidized cancer treatments for underprivileged patients identified through the camps.",
      longText: "",
    },
    {
      id: 10,
      image: ngo8,
      title: "Awareness and Education",
      shortText:
        "To conduct awareness sessions on cancer prevention, symptoms, and the importance of regular screenings, encouraging a culture of early detection.",
      longText: "",
    },
    {
      id: 11,
      image: ngo8,
      title: "Multi-disciplinary Support",
      shortText:
        "To collaborate with oncologists, dieticians, and palliative care specialists to provide holistic care and guidance to the patients.",
      longText: "",
    },
    {
      id: 12,
      image: ngo8,
      title: "Pediatric Surgeries",
      shortText:
        "To help the poor and needy Pediatric Patients who needs different Surgery (ASD/VSD & other critical surgeries) through different NGO's and CSR Donations.",
      longText: "",
    },
  ];

  const data1 = [
    {
      id: 1,
      image: ngo9,
      title: "Scholarship Programs",
      shortText:
        "To Establish scholarship programs to support underprivileged students in pursuing their education.",
      longText:
        "To Provide financial aid for tuition fees, books, another educational expenses.",
    },
    {
      id: 2,
      image: ngo9,
      title: "Infrastructure Development",
      shortText:
        "To Contribute to the development of school infrastructure to create a conducive learning environment.",
      longText:
        "To Focus on building classrooms, libraries, and other essential facilities.",
    },
    {
      id: 3,
      image: ngo9,
      title: "Vocational Training Initiatives",
      shortText:
        "To Implement vocational training programs to enhance skill development among students.",
      longText:
        "To Collaborate with local industries to provide practical training opportunities.",
    },
    {
      id: 4,
      image: ngo9,
      title: "Educational Guidance Lectures",
      shortText:
        "To Organize proactive lectures for MPSC/UPSC & other competitive exam aspirants to guide them in their exam preparation.",
      longText:
        "To Facilitate mentor ship programs to provide personalized guidance.",
    },
    {
      id: 5,
      image: ngo9,
      title: "Health and Hygiene Education",
      shortText:
        "To Conduct health lectures focussing on hygiene and menstrual hygiene, especially for girls.",
      longText:
        "To Raise awareness about the importance of maintaining good health practices.",
    },
    {
      id: 6,
      image: ngo9,
      title: "Career Guidance",
      shortText:
        "To Offer career guidance programs to help students make informed decisions about their future.",
      longText:
        "To Connect students with industry professionals for insights into various career paths.",
    },
  ];

  const data2 = [
    {
      id: 1,
      image: ngo9,
      title: "Sanitation and Clean Water Access",
      shortText:
        "To undertake projects to improve sanitation facilities in communities.",
      longText:
        "To work towards ensuring access to clean water through the implementation of water purification systems.",
    },
    {
      id: 2,
      image: ngo9,
      title: "Women Empowerment",
      shortText:
        "To develop and support programs that empower women economically and socially.",
      longText:
        "To facilitate skill development workshops and entrepreneurship initiatives.",
    },
    {
      id: 3,
      image: ngo9,
      title: "Community Development Projects",
      shortText:
        "To engage in community development projects that address specific needs identified in collaboration with local communities.",
      longText: "To promote sustainability and inclusivity in all projects.",
    },
    {
      id: 4,
      image: ngo9,
      title: "Sustainable Growth Initiatives",
      shortText:
        "To collaborate with local authorities and organizations to promote sustainable development practices.",
      longText:
        "To advocate for environmentally friendly initiatives within the communities.By executing these activities, Shree Balaji Foundation aims to make a meaningful impact on the Health / Medical, Education and Skill Development, Woman Empowerment, Community Development and Social Development and overall well-being of the communities it serves. The foundation is committed to creating positive and sustainable change in the lives of individuals and fostering holistic development in society.",
    },
  ];

  return (
    <div className="p-2 text-center bg-[rgb(22,39,50)]">
      <h1 className="text-3xl font-bold text-cyan-600 mb-6 mt-20">
        Our Activities
      </h1>

      {type === "health" && (
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Health Related Activities
          </h2>
          <p className="text-white mb-4">
            We organize free health check-up camps, blood donation drives, and
            medical awareness programs for rural areas.
          </p>

          {/* Carousel Section */}
          <section className="w-full mb-10">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              interval={3500}
              transitionTime={900}
              emulateTouch
            >
              {[ngo5, ngo6, ngo7, ngo8, ngo9, ngo10, ngo11].map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    alt={`Slide ${i + 1}`}
                    className="h-[80vh] w-full object-cover rounded-2xl"
                  />
                </div>
              ))}
            </Carousel>
          </section>

          {/* Grid of Cards (3 per row) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-10">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-[rgba(18,23,26,0.9)] shadow-2xl rounded-3xl p-6 flex flex-col text-white items-center transition-transform hover:scale-105 duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-2xl shadow-lg w-full h-52 object-cover mb-4"
                />

                <h2 className="text-2xl font-bold mb-3 text-teal-400">
                  {item.title}
                </h2>

                <p className="text-white leading-relaxed text-justify mb-4">
                  {item.shortText.slice(0, 120)}...
                </p>

                <button
                  onClick={() => setActiveModal(item.id)}
                  className="mt-auto bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-5 rounded-full transition duration-300"
                >
                  Read More
                </button>
              </div>
            ))}
          </div>

          {/* Popup Modal */}
          {activeModal && (
            <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
              {data
                .filter((item) => item.id === activeModal)
                .map((item) => (
                  <div
                    key={item.id}
                    className="bg-[rgba(18,23,26,1)] rounded-2xl shadow-2xl max-w-3xl w-11/12 p-6 text-white relative overflow-y-auto max-h-[90vh] animate-fadeIn"
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setActiveModal(null)}
                      className="absolute top-3 right-4 text-gray-300 hover:text-white text-2xl font-bold"
                    >
                      ×
                    </button>

                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-xl mb-4 w-full h-60 object-cover"
                    />

                    {/* Content */}
                    <h2 className="text-3xl font-bold mb-4 text-teal-400 text-center">
                      {item.title}
                    </h2>
                    <p className="text-lg leading-relaxed text-justify">
                      {item.shortText}
                    </p>
                    <p className="text-lg leading-relaxed text-justify mt-2">
                      {item.longText}
                    </p>

                    {/* Close Button */}
                    <div className="text-center mt-6">
                      <button
                        onClick={() => setActiveModal(null)}
                        className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}

      {/* ==================== EDUCATION RELATED ==================== */}
      {type === "education" && (
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Education Related Activities
          </h2>
          <p className="text-white mb-4">
            We organize free health check-up camps, blood donation drives, and
            medical awareness programs for rural areas.
          </p>

          {/* Carousel Section */}
          <section className="w-full mb-10">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              interval={3500}
              transitionTime={900}
              emulateTouch
            >
              {[ngo5, ngo6, ngo7, ngo8, ngo9, ngo10, ngo11].map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    alt={`Slide ${i + 1}`}
                    className="h-[80vh] w-full object-cover rounded-2xl"
                  />
                </div>
              ))}
            </Carousel>
          </section>

          {/* Grid of Cards (3 per row) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-10">
            {data1.map((item) => (
              <div
                key={item.id}
                className="bg-[rgba(18,23,26,0.9)] shadow-2xl rounded-3xl p-6 flex flex-col text-white items-center transition-transform hover:scale-105 duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-2xl shadow-lg w-full h-52 object-cover mb-4"
                />

                <h2 className="text-2xl font-bold mb-3 text-teal-400">
                  {item.title}
                </h2>

                <p className="text-lg leading-relaxed text-justify mb-4">
                  {item.shortText.slice(0, 120)}...
                </p>

                <button
                  onClick={() => setActiveModal(item.id)}
                  className="mt-auto bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-5 rounded-full transition duration-300"
                >
                  Read More
                </button>
              </div>
            ))}
          </div>

          {/* Popup Modal */}
          {activeModal && (
            <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
              {data
                .filter((item) => item.id === activeModal)
                .map((item) => (
                  <div
                    key={item.id}
                    className="bg-[rgba(18,23,26,1)] rounded-2xl shadow-2xl max-w-3xl w-11/12 p-6 text-white relative overflow-y-auto max-h-[90vh] animate-fadeIn"
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setActiveModal(null)}
                      className="absolute top-3 right-4 text-gray-300 hover:text-white text-2xl font-bold"
                    >
                      ×
                    </button>

                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-xl mb-4 w-full h-60 object-cover"
                    />

                    {/* Content */}
                    <h2 className="text-3xl font-bold mb-4 text-teal-400 text-center">
                      {item.title}
                    </h2>
                    <p className="text-lg leading-relaxed text-justify">
                      {item.shortText}
                    </p>
                    <p className="text-lg leading-relaxed text-justify mt-2">
                      {item.longText}
                    </p>

                    {/* Close Button */}
                    <div className="text-center mt-6">
                      <button
                        onClick={() => setActiveModal(null)}
                        className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}

      {/* ==================== SOCIAL RELATED ==================== */}
      {type === "social" && (
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Social Related Activities
          </h2>
          <p className="text-white mb-4">
            We organize free health check-up camps, blood donation drives, and
            medical awareness programs for rural areas.
          </p>

          {/* Carousel Section */}
          <section className="w-full mb-10">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              interval={3500}
              transitionTime={900}
              emulateTouch
            >
              {[ngo5, ngo6, ngo7, ngo8, ngo9, ngo10, ngo11].map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    alt={`Slide ${i + 1}`}
                    className="h-[80vh] w-full object-cover rounded-2xl"
                  />
                </div>
              ))}
            </Carousel>
          </section>

          {/* Grid of Cards (3 per row) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-10">
            {data2.map((item) => (
              <div
                key={item.id}
                className="bg-[rgba(18,23,26,0.9)] shadow-2xl rounded-3xl p-6 flex flex-col text-white items-center transition-transform hover:scale-105 duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-2xl shadow-lg w-full h-52 object-cover mb-4"
                />

                <h2 className="text-2xl font-bold mb-3 text-teal-400">
                  {item.title}
                </h2>

                <p className="text-lg leading-relaxed text-justify mb-4">
                  {item.shortText.slice(0, 120)}...
                </p>

                <button
                  onClick={() => setActiveModal(item.id)}
                  className="mt-auto bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-5 rounded-full transition duration-300"
                >
                  Read More
                </button>
              </div>
            ))}
          </div>

          {/* Popup Modal */}
          {activeModal && (
            <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
              {data
                .filter((item) => item.id === activeModal)
                .map((item) => (
                  <div
                    key={item.id}
                    className="bg-[rgba(18,23,26,1)] rounded-2xl shadow-2xl max-w-3xl w-11/12 p-6 text-white relative overflow-y-auto max-h-[90vh] animate-fadeIn"
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setActiveModal(null)}
                      className="absolute top-3 right-4 text-gray-300 hover:text-white text-2xl font-bold"
                    >
                      ×
                    </button>

                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-xl mb-4 w-full h-60 object-cover"
                    />

                    {/* Content */}
                    <h2 className="text-3xl font-bold mb-4 text-teal-400 text-center">
                      {item.title}
                    </h2>
                    <p className="text-lg leading-relaxed text-justify">
                      {item.shortText}
                    </p>
                    <p className="text-lg leading-relaxed text-justify mt-2">
                      {item.longText}
                    </p>

                    {/* Close Button */}
                    <div className="text-center mt-6">
                      <button
                        onClick={() => setActiveModal(null)}
                        className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Activity;
