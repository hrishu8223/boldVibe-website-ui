// import React from "react";
// import {
//   ArrowRight,
//   CheckCircle2,
//   Globe,
//   Smartphone,
//   Code2,
//   Zap,
//   Star,
//   MessageCircle,
// } from "lucide-react";

// const services = [
//   {
//     icon: <Globe className="w-8 h-8" />,
//     title: "Web Development",
//     desc: "Modern business websites, dashboards and SaaS products.",
//   },
//   {
//     icon: <Smartphone className="w-8 h-8" />,
//     title: "Mobile Apps",
//     desc: "Cross-platform apps with smooth performance.",
//   },
//   {
//     icon: <Code2 className="w-8 h-8" />,
//     title: "Custom Software",
//     desc: "Tailored systems built around your workflow.",
//   },
//   {
//     icon: <Zap className="w-8 h-8" />,
//     title: "Fast Delivery",
//     desc: "Agile process with fast iterations.",
//   },
// ];

// const process = ["Discovery", "Planning", "Development", "Launch"];

// const Selling = () => {
//   return (
//     <main className="pt-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
//       <section className="max-w-7xl mx-auto px-4 py-16">
//         {/* Hero */}
//         <div className="text-center mb-20">
//           <span className="px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm">
//             Grow With Technology
//           </span>

//           <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-gray-900">
//             We Build Digital
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               {" "}Products
//             </span>
//           </h1>

//           <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600">
//             From websites to mobile apps — we create software that helps
//             businesses scale faster.
//           </p>

//           <div className="mt-8 flex justify-center gap-4 flex-wrap">
//             <a
//               href="#contact"
//               className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:scale-105 transition"
//             >
//               Start Project
//             </a>

//             <a
//               href="https://wa.me/916265259661"
//               className="px-8 py-4 border border-gray-300 rounded-full font-semibold"
//             >
//               WhatsApp
//             </a>
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="grid md:grid-cols-3 gap-6 mb-20">
//           {[
//             ["50+", "Projects Delivered"],
//             ["20+", "Happy Clients"],
//             ["4+", "Years Experience"],
//           ].map(([num, label], i) => (
//             <div
//               key={i}
//               className="bg-white rounded-2xl p-8 shadow-lg text-center"
//             >
//               <h3 className="text-4xl font-bold text-blue-600">{num}</h3>
//               <p className="text-gray-600 mt-2">{label}</p>
//             </div>
//           ))}
//         </div>

//         {/* Services */}
//         <div className="mb-20">
//           <h2 className="text-4xl font-bold text-center mb-10">
//             Our Services
//           </h2>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {services.map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition"
//               >
//                 <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
//                   {item.icon}
//                 </div>
//                 <h3 className="font-bold text-lg mb-2">{item.title}</h3>
//                 <p className="text-gray-600">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Process */}
//         <div className="mb-20">
//           <h2 className="text-4xl font-bold text-center mb-10">
//             Our Process
//           </h2>

//           <div className="grid md:grid-cols-4 gap-6">
//             {process.map((step, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-2xl p-8 text-center shadow-lg"
//               >
//                 <h3 className="text-blue-600 font-bold text-3xl">
//                   0{i + 1}
//                 </h3>
//                 <p className="mt-2 font-semibold">{step}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Why Us */}
//         <div className="grid md:grid-cols-2 gap-10 mb-20">
//           <div>
//             <h2 className="text-4xl font-bold mb-8">Why Choose Us</h2>

//             <div className="space-y-4">
//               {[
//                 "Clean UI & UX",
//                 "Scalable Architecture",
//                 "Affordable Pricing",
//                 "Fast Support",
//               ].map((item, i) => (
//                 <div key={i} className="flex gap-3 items-center">
//                   <CheckCircle2 className="text-green-500" />
//                   <span>{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl p-8 shadow-xl">
//             <Star className="text-yellow-500 mb-4" />
//             <p className="text-gray-600">
//               “Professional delivery, clean code and excellent support.”
//             </p>
//             <h4 className="mt-4 font-bold">Client Feedback</h4>
//           </div>
//         </div>

//         {/* CTA */}
//         <div
//           id="contact"
//           className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white"
//         >
//           <MessageCircle className="mx-auto mb-4" />
//           <h2 className="text-4xl font-bold mb-4">
//             Ready To Build Something Great?
//           </h2>
//           <p className="mb-8 text-white/90">
//             Share your idea and we’ll turn it into reality.
//           </p>

//           <a
//             href="https://wa.me/916265259661"
//             className="inline-flex gap-2 items-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold"
//           >
//             Chat Now <ArrowRight size={18} />
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Selling;

// import React, { useState } from "react";
// import {
//   ArrowRight,
//   CheckCircle2,
//   Globe,
//   Smartphone,
//   Code2,
//   Zap,
//   Star,
//   MessageCircle,
//   Phone,
//   X,
// } from "lucide-react";

// const services = [
//   {
//     icon: <Globe className="w-8 h-8" />,
//     title: "Web Development",
//     price: "₹15,000+",
//     desc: "Modern business websites, dashboards and SaaS products.",
//     features: ["Responsive UI", "SEO Ready", "Admin Panel", "Fast Delivery"],
//   },
//   {
//     icon: <Smartphone className="w-8 h-8" />,
//     title: "Mobile Apps",
//     price: "₹40,000+",
//     desc: "Cross-platform apps with smooth performance.",
//     features: ["Android + iOS", "API Integration", "Push Notification"],
//   },
//   {
//     icon: <Code2 className="w-8 h-8" />,
//     title: "Custom Software",
//     price: "₹60,000+",
//     desc: "Tailored systems built around your workflow.",
//     features: ["ERP/CRM", "Custom Workflow", "Secure Backend"],
//   },
//   {
//     icon: <Zap className="w-8 h-8" />,
//     title: "Fast Delivery",
//     price: "Custom",
//     desc: "Agile process with fast iterations.",
//     features: ["Quick Launch", "Agile Workflow", "Weekly Updates"],
//   },
// ];

// const pricing = [
//   {
//     title: "Starter",
//     price: "₹15k",
//     features: ["Landing Page", "Responsive Design", "Basic SEO"],
//   },
//   {
//     title: "Business",
//     price: "₹40k",
//     features: ["Website + Admin", "API Integration", "Support"],
//   },
//   {
//     title: "Enterprise",
//     price: "Custom",
//     features: ["Full Product", "Scalable Architecture", "Dedicated Support"],
//   },
// ];

// const process = ["Discovery", "Planning", "Development", "Launch"];

// const faq = [
//   "How long does a project take?",
//   "Do you provide maintenance?",
//   "Can I get custom pricing?",
//   "Do you build mobile apps?",
// ];

// const Selling = () => {
//   const [selectedService, setSelectedService] = useState<any>(null);

//   return (
//     <main className="pt-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
//       <section className="max-w-7xl mx-auto px-4 py-16">
//         {/* HERO */}
//         <div className="text-center mb-20">
//           <span className="px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm">
//             Grow With Technology
//           </span>

//           <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-gray-900">
//             We Build Digital
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               {" "}
//               Products
//             </span>
//           </h1>

//           <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600">
//             From websites to apps — we create software that helps businesses
//             scale faster.
//           </p>

//           <div className="mt-8 flex justify-center gap-4 flex-wrap">
//             <a
//               href="#pricing"
//               className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:scale-105 transition"
//             >
//               View Pricing
//             </a>

//             <a
//               href="https://wa.me/916265259661"
//               className="px-8 py-4 border border-gray-300 rounded-full font-semibold"
//             >
//               WhatsApp
//             </a>
//           </div>
//         </div>

//         {/* STATS */}
//         <div className="grid md:grid-cols-3 gap-6 mb-20">
//           {[
//             ["50+", "Projects Delivered"],
//             ["20+", "Happy Clients"],
//             ["4+", "Years Experience"],
//           ].map(([num, label], i) => (
//             <div key={i} className="bg-white rounded-2xl p-8 shadow-lg text-center">
//               <h3 className="text-4xl font-bold text-blue-600">{num}</h3>
//               <p className="text-gray-600 mt-2">{label}</p>
//             </div>
//           ))}
//         </div>

//         {/* SERVICES */}
//         <div className="mb-20">
//           <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {services.map((item, i) => (
//               <div
//                 key={i}
//                 onClick={() => setSelectedService(item)}
//                 className="cursor-pointer bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition"
//               >
//                 <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
//                   {item.icon}
//                 </div>
//                 <h3 className="font-bold text-lg mb-2">{item.title}</h3>
//                 <p className="text-gray-600 mb-3">{item.desc}</p>
//                 <span className="font-bold text-blue-600">{item.price}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* PRICING */}
//         <div id="pricing" className="mb-20">
//           <h2 className="text-4xl font-bold text-center mb-10">Pricing Plans</h2>

//           <div className="grid md:grid-cols-3 gap-6">
//             {pricing.map((plan, i) => (
//               <div key={i} className="bg-white rounded-2xl p-8 shadow-xl">
//                 <h3 className="font-bold text-2xl">{plan.title}</h3>
//                 <p className="text-3xl text-blue-600 font-bold mt-4">
//                   {plan.price}
//                 </p>

//                 <div className="mt-6 space-y-3">
//                   {plan.features.map((f, j) => (
//                     <div key={j} className="flex gap-2">
//                       <CheckCircle2 className="text-green-500 w-5" />
//                       <span>{f}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* PROCESS */}
//         <div className="mb-20">
//           <h2 className="text-4xl font-bold text-center mb-10">Our Process</h2>
//           <div className="grid md:grid-cols-4 gap-6">
//             {process.map((step, i) => (
//               <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-lg">
//                 <h3 className="text-blue-600 font-bold text-3xl">0{i + 1}</h3>
//                 <p className="mt-2 font-semibold">{step}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* FAQ */}
//         <div className="mb-20">
//           <h2 className="text-4xl font-bold text-center mb-10">FAQs</h2>
//           <div className="space-y-4">
//             {faq.map((q, i) => (
//               <div key={i} className="bg-white rounded-xl p-5 shadow">
//                 {q}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
//           <MessageCircle className="mx-auto mb-4" />
//           <h2 className="text-4xl font-bold mb-4">
//             Ready To Build Something Great?
//           </h2>
//           <p className="mb-8">Share your idea and let’s make it real.</p>

//           <div className="flex justify-center gap-4 flex-wrap">
//             <a
//               href="https://wa.me/916265259661"
//               className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold"
//             >
//               WhatsApp
//             </a>
//             <a
//               href="tel:+916265259661"
//               className="bg-black/20 px-8 py-4 rounded-full font-bold"
//             >
//               Call Now
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* SERVICE MODAL */}
//       {selectedService && (
//         <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
//           <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
//             <button
//               onClick={() => setSelectedService(null)}
//               className="absolute right-4 top-4"
//             >
//               <X />
//             </button>

//             <h2 className="text-2xl font-bold">{selectedService.title}</h2>
//             <p className="text-blue-600 text-xl font-bold mt-3">
//               {selectedService.price}
//             </p>

//             <div className="mt-5 space-y-3">
//               {selectedService.features.map((f: string, i: number) => (
//                 <div key={i} className="flex gap-2">
//                   <CheckCircle2 className="text-green-500 w-5" />
//                   <span>{f}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="flex gap-3 mt-8">
//               <a
//                 href="https://wa.me/916265259661"
//                 className="bg-green-500 text-white px-5 py-3 rounded-full flex-1 text-center"
//               >
//                 WhatsApp
//               </a>
//               <a
//                 href="tel:+916265259661"
//                 className="bg-blue-600 text-white px-5 py-3 rounded-full flex-1 text-center"
//               >
//                 <Phone className="inline mr-2 w-4" />
//                 Call
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// };

// export default Selling;
import React, { useState, useEffect } from "react"; // 1. useEffect import kiya
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Smartphone,
  Code2,
  Zap,
  Star,
  MessageCircle,
  Phone,
  X,
  ChevronDown,
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Calculator,
  Sparkles,
  Users,
  Briefcase,
  Rocket,
  Box,
} from "lucide-react";

/* ================= DATA ================= */
const products = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Solutions",
    basePrice: 15000,
    price: "₹15,000+",
    desc: "Modern websites, admin dashboards & SaaS products.",
    features: ["Responsive UI", "SEO Ready", "Admin Panel", "Fast Delivery"],
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Applications",
    basePrice: 40000,
    price: "₹40,000+",
    desc: "Android & iOS mobile apps with APIs.",
    features: ["Android + iOS", "Push Notifications", "API Integration", "Play Store Support"],
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Enterprise Software",
    basePrice: 60000,
    price: "₹60,000+",
    desc: "ERP, CRM and workflow software.",
    features: ["Custom Workflow", "Secure Backend", "Cloud Hosting", "Scalable System"],
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: "Digital Assets",
    basePrice: 10000,
    price: "Custom",
    desc: "Ready-to-use digital tools for business.",
    features: ["Source Code Access", "Setup Guide", "Lifetime Support"],
  },
];

const pricingPlans = [
  {
    title: "Starter Product",
    price: "₹15k",
    popular: false,
    features: ["Landing Page", "Responsive Design", "Basic SEO"],
  },
  {
    title: "Business Suite",
    price: "₹40k",
    popular: true,
    features: ["Website + Admin", "API", "Support"],
  },
  {
    title: "Custom Enterprise",
    price: "Custom",
    popular: false,
    features: ["Full Product", "Scalable", "Dedicated Support"],
  },
];

const faq = [
  { q: "How long is the product delivery?", a: "Usually 1-8 weeks depending on complexity." },
  { q: "Do you provide after-sales support?", a: "Yes, 24/7 maintenance and support available." },
  { q: "Can product features be customized?", a: "Absolutely, we tailor our products to your needs." },
];

const testimonials = [
  { name: "Rahul Sharma", text: "The product quality is top-notch and delivery was super fast." },
  { name: "Ankit Jain", text: "Their software products transformed our business workflow." },
];

const extraFeatures = [
  { name: "Admin Dashboard", price: 8000 },
  { name: "Payment Integration", price: 12000 },
  { name: "Push Notification", price: 7000 },
  { name: "SEO Optimization", price: 5000 },
];

/* ================= COMPONENT ================= */
const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [selectedBase, setSelectedBase] = useState(15000);

  // ================= SCROLL FIX =================
  // 2. Yeh useEffect page load hote hi scroll ko top par le jayega
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // "smooth" bhi kar sakte hain, par "instant" better hai
    });
  }, []); 

  const totalPrice =
    selectedBase +
    selectedExtras.reduce((sum, item) => {
      const feature = extraFeatures.find((f) => f.name === item);
      return sum + (feature?.price || 0);
    }, 0);

  const toggleExtra = (name: string) => {
    setSelectedExtras((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  };

  return (
    <main className="pt-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* HERO */}
        <div className="text-center mb-20">
          <span className="px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm">
            <Sparkles className="inline w-4 mr-2" />
            Premium Digital Products
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold">
            Explore Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Best-In-Class Products
            </span>
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600">
            Scalable, secure, and high-performance digital products for modern brands.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <a href="#calculator" className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold">
              Estimate Product Cost
            </a>
            <a href="https://wa.me/916265259661" className="px-8 py-4 border rounded-full font-semibold hover:bg-gray-50">
              WhatsApp Support
            </a>
          </div>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {[
            ["100+", "Product Launches", <Briefcase />],
            ["80+", "Happy Clients", <Users />],
            ["5+", "Years Experience", <Rocket />],
            ["24/7", "Technical Support", <ShieldCheck />],
          ].map(([n, t, icon], i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100">
              <div className="flex justify-center text-blue-600 mb-3">{icon}</div>
              <h3 className="text-4xl font-bold text-blue-600">{n}</h3>
              <p className="text-gray-500 font-medium">{t}</p>
            </div>
          ))}
        </div>

        {/* PRODUCTS LIST */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-10">Our Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((item, i) => (
              <div
                key={i}
                onClick={() => setSelectedProduct(item)}
                className="cursor-pointer bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl border border-gray-50"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-600 my-3 text-sm">{item.desc}</p>
                <p className="text-blue-600 font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CALCULATOR */}
        <div id="calculator" className="bg-white rounded-3xl p-10 shadow-xl mb-20 border border-gray-100">
          <h2 className="text-4xl font-bold text-center mb-8">Product Customizer</h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-4 font-semibold text-gray-700">Select Base Product Type:</p>
            <select
              className="w-full p-4 border border-gray-200 rounded-xl mb-8 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setSelectedBase(Number(e.target.value))}
            >
              <option value={15000}>Basic Web Product</option>
              <option value={40000}>Mobile App Product</option>
              <option value={60000}>Custom Software Suite</option>
            </select>
            <p className="mb-4 font-semibold text-gray-700">Add Extra Features:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {extraFeatures.map((feature, i) => (
                <label key={i} className="flex justify-between items-center bg-gray-50 p-4 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                  <span className="font-medium">{feature.name}</span>
                  <div className="flex items-center">
                    <span className="mr-3 text-gray-500 text-sm">+₹{feature.price}</span>
                    <input type="checkbox" className="w-5 h-5 accent-blue-600" onChange={() => toggleExtra(feature.name)} />
                  </div>
                </label>
              ))}
            </div>
            <div className="text-center mt-12 pt-8 border-t border-gray-100">
              <p className="text-gray-500 uppercase tracking-widest text-sm mb-2 font-bold">Estimated Product Cost</p>
              <h3 className="text-5xl font-extrabold text-blue-600">₹{totalPrice.toLocaleString()}</h3>
              <a
                href={`https://wa.me/916265259661?text=Hi, I am interested in a product with an estimated budget of ₹${totalPrice}`}
                className="inline-flex items-center gap-2 mt-8 bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-green-200 font-bold"
              >
                <Calculator size={18} /> Get Final Quote on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* PRICING */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-10">Standard Product Plans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, i) => (
              <div key={i} className={`bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow ${plan.popular ? "ring-2 ring-blue-600 relative" : "border border-gray-100"}`}>
                {plan.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold">MOST POPULAR</span>}
                <h3 className="text-2xl font-bold mt-3">{plan.title}</h3>
                <p className="text-3xl font-bold text-blue-600 mt-4">{plan.price}</p>
                <div className="space-y-3 mt-8">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex gap-2 items-center text-gray-600">
                      <CheckCircle2 className="text-green-500 w-5 h-5 shrink-0" />
                      <span className="text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">What Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4 text-yellow-500">
                  {[...Array(5)].map((_, starI) => <Star key={starI} fill="currentColor" size={16} />)}
                </div>
                <p className="text-gray-600 italic">"{t.text}"</p>
                <h4 className="font-bold mt-4 text-blue-600">— {t.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-center mb-10">Product FAQ</h2>
          {faq.map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-4">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center text-left font-bold text-gray-700">
                {item.q}
                <ChevronDown className={`transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              {openFaq === i && <div className="mt-4 text-gray-600 pt-4 border-t border-gray-50">{item.a}</div>}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <MessageCircle className="mx-auto mb-4 w-12 h-12" />
          <h2 className="text-4xl font-bold">Ready to Launch Your Product?</h2>
          <p className="my-6 text-blue-50">Discuss your custom requirements with our product experts today.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/916265259661" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold transition-all">Order on WhatsApp</a>
            <a href="tel:+916265259661" className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full border border-white/30 backdrop-blur-sm transition-all">Talk to Specialist</a>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button onClick={() => setSelectedProduct(null)} className="absolute right-5 top-5 text-gray-400 hover:text-black transition-colors"><X /></button>
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">{selectedProduct.icon}</div>
            <h2 className="text-2xl font-bold text-gray-800">{selectedProduct.title}</h2>
            <p className="text-blue-600 text-xl font-bold mt-3">Starting {selectedProduct.price}</p>
            <p className="text-gray-500 mt-3 text-sm">{selectedProduct.desc}</p>
            <div className="space-y-3 mt-8">
              <p className="font-bold text-xs uppercase tracking-widest text-gray-400">Included Features</p>
              {selectedProduct.features.map((f: string, i: number) => (
                <div key={i} className="flex gap-3 items-center">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center"><CheckCircle2 className="text-green-600 w-3 h-3" /></div>
                  <span className="text-gray-700 text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-10">
              <a href="https://wa.me/916265259661" className="bg-green-500 hover:bg-green-600 text-white flex-1 py-4 rounded-2xl text-center font-bold transition-all shadow-lg shadow-green-100">WhatsApp</a>
              <a href="tel:+916265259661" className="bg-blue-600 hover:bg-blue-700 text-white flex-1 py-4 rounded-2xl text-center font-bold transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2"><Phone size={18} />Call</a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Product;