import React, { useState } from "react";

const Donate = () => {
return (
    <div className="bg-[rgb(22,39,50,0.9)] min-h-screen flex flex-col justify-between">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-emerald-500 text-white py-16 text-center px-4 mt-22">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Difference ❤️</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Your small contribution can bring a big change in someone's life.
          Together, let's build a better future for those in need.
        </p>
      </section>

      {/* Donation Form Section */}
      {/* <section className="flex justify-center items-center py-8 px-4 bg-white">
        <div className="w-full max-w-lg bg-gray-100 shadow-xl rounded-2xl p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Donate to SHREE BALAJI FOUNDATION
          </h2>

          
        </div>
      </section> */}

      {/* Account Details Section */}
      <section className="bg-[rgba(18,23,26,0.9)] py-12 px-6 text-center shadow-inner">
        <h2 className="text-3xl font-bold text-white mb-6">Bank Account Details </h2>
        <div className="max-w-2xl mx-auto bg-gray-100 rounded-2xl shadow-md p-6 text-left">
          <p className="text-gray-700 mb-2">
            <strong>Name of Customer:</strong> SHREE BALAJI FOUNDATION
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Bank Name:</strong> HDFC BANK
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Branch : </strong> Bhandarkar Road
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Account Number:</strong> 50200070450294
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Account Type:</strong> Current
          </p>
          <p className="text-gray-700 mb-2">
            <strong>IFSC Code:</strong> HDFC0000007
          </p>

          <p className="text-gray-700 mb-2">
            <strong>Branch Code : </strong> 0007
          </p>
          <p className="text-gray-700 mb-4">
            <strong>SWIFT Code:</strong> HDFCINBB
          </p>

          <p className="text-gray-600 italic text-sm">
             Please share your transaction screenshot and details at{" "}
            <a
              href="mailto:shreebalajifoundation74@gmail.com"
              className="text-cyan-600 underline"
            >
              shreebalajifoundation74@gmail.com
            </a>{" "}
            for receipt and acknowledgment.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-[rgba(18,23,26,0.9)] text-center py-16 px-4">
        <h2 className="text-3xl font-bold text-white mb-6">
          Your Support Creates Impact 🌍
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold text-cyan-600 mb-2">Education</h3>
            <p className="text-gray-600">
              Help underprivileged children access quality education and better
              opportunities.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold text-emerald-600 mb-2">Health</h3>
            <p className="text-gray-600">
              Support healthcare initiatives and ensure medical aid for those in
              need.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Livelihood</h3>
            <p className="text-gray-600">
              Empower families to become self-sufficient through skill training
              and support.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Donate;
