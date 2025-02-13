import React, { useState } from "react";
import { Upload, Search, MapPin, Clock } from "lucide-react";

const faqs = [
  { question: "What is Jana Aushadhi Kendra?", answer: "Jana Aushadhi Kendras are government-run stores that provide quality generic medicines at affordable prices." },
  { question: "How do I find the nearest store?", answer: "You can use our store locator tool on the website to find the nearest Jana Aushadhi Kendra." },
  { question: "Are generic medicines safe?", answer: "Yes, generic medicines are approved by regulatory authorities and are as safe and effective as branded medicines." },
  { question: "How much can I save on medicines?", answer: "By purchasing from Jana Aushadhi Kendras, you can save up to 50-90% on medicine costs." }
];

const steps = [
  { title: "Upload Prescription", description: "Simply upload your prescription or search for medicines", icon: Upload },
  { title: "Compare Prices", description: "Compare prices across different stores and find the best deals", icon: Search },
  { title: "Find Nearby Stores", description: "Locate the nearest Jana Aushadhi Kendra with real-time availability", icon: MapPin },
  { title: "Save Time & Money", description: "Get your medicines at the most affordable prices, hassle-free", icon: Clock },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50 px-4">
      <div className="w-full max-w-2xl bg-white p-10 rounded-2xl shadow-2xl border border-gray-200">
        <h2 className="text-center text-4xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mt-2 mb-6">Get answers to common questions about our services and generic medicines</p>
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 last:border-none">
              <button 
                className="w-full text-left font-semibold flex justify-between items-center py-5 px-6 text-lg text-gray-900 transition-all duration-300 hover:bg-green-100 rounded-xl focus:outline-none" 
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-green-600 text-2xl font-bold">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="text-gray-700 px-6 pb-5 text-md leading-relaxed bg-green-50 rounded-xl shadow-md transition-all duration-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md px-10">
      <div className="text-green-600 font-bold text-2xl flex items-center gap-2">
        <span className="text-xl">💊</span> Genmeds
      </div>
      <div className="flex gap-8 text-gray-700 font-medium">
        <a href="#" className="hover:text-green-600">Find Stores</a>
        <a href="#" className="hover:text-green-600">Compare Prices</a>
        <a href="#" className="hover:text-green-600">Search Medicines</a>
      </div>
      <button className="bg-green-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-700 transition">Upload Prescription</button>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <button className="bg-green-100 text-green-700 px-6 py-2 rounded-full font-medium shadow-md">
        Find Jana Aushadhi Kendras near you
      </button>
      <h1 className="text-5xl font-extrabold mt-6 text-gray-900">
        Making Healthcare <span className="text-green-500">Accessible</span> and <span className="text-green-500">Affordable</span>
      </h1>
      <p className="text-gray-600 mt-4 max-w-2xl">
        Locate nearby Jana Aushadhi Kendras, compare medicine prices, and get AI-powered prescription assistance all in one place.
      </p>
      <div className="mt-6 flex gap-4">
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium shadow-md">Find Nearby Stores</button>
        <button className="bg-white border border-gray-300 px-6 py-3 rounded-lg font-medium shadow-md">Compare Prices</button>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
      <p className="text-gray-500 mt-2">Get your medicines in four simple steps</p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-16">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full">
              {React.createElement(step.icon, { className: "w-8 h-8 text-green-500" })}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FAQ />
    </div>
  );
};

export default App;
