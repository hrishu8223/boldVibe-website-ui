// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import {
//   TrendingUp,
//   Share2,
//   Target,
//   BarChart,
//   ShieldCheck,
//   Rocket,
//   Award,
//   MessageCircle,
//   X,
//   Phone,
//   Code as CodeIcon,
//   Users,
//   Layers,
//   Navigation,
//   Plug,
//   Bell,
//   Cloud,
//   Upload,
//   Server,
//   Lock,
//   Database,
//   DivideCircle,
// } from "lucide-react";

// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaAws,
//   FaFigma,
// } from "react-icons/fa";

// import {
//   SiExpress,
//   SiMongodb,
//   SiNetlify,
//   SiRender,
//   SiAngular,
//   SiTypescript,
//   SiDart,
//   SiFlutter,
//   SiFirebase,
// } from "react-icons/si";
// import axios from "axios";

// /* ---------- TYPES ---------- */
// type Topic = {
//   label: string;
//   icon: JSX.Element;
//   detail: string;
// };

// type Course = {
//   title: string;
//   desc: string;
//   duration: string;
//   level: string;
//   topics: Topic[];
// };

// /* ---------- GRADIENT PALETTE ---------- */
// const TOPIC_GRADIENTS = [
//   "from-orange-400 to-rose-500",
//   "from-sky-400 to-indigo-500",
//   "from-emerald-400 to-teal-600",
//   "from-violet-500 to-purple-700",
//   "from-amber-400 to-orange-500",
//   "from-pink-400 to-fuchsia-600",
//   "from-cyan-400 to-blue-500",
//   "from-lime-400 to-green-600",
// ];

// /* ---------- GLOBAL CSS ---------- */
// const GLOBAL_CSS = `
//   @keyframes applyModalIn {
//     0%   { opacity: 0; transform: scale(0.88) translateY(24px); }
//     100% { opacity: 1; transform: scale(1) translateY(0); }
//   }
//   @keyframes floatOrb {
//     0%,100% { transform: translate(0,0) scale(1); }
//     50%      { transform: translate(18px,-14px) scale(1.08); }
//   }
//   @keyframes floatOrb2 {
//     0%,100% { transform: translate(0,0) scale(1); }
//     50%      { transform: translate(-14px,18px) scale(0.93); }
//   }
//   @keyframes inputFocusGlow {
//     0%   { box-shadow: 0 0 0 0 rgba(99,102,241,0.25); }
//     100% { box-shadow: 0 0 0 4px rgba(99,102,241,0.12); }
//   }

//   .apply-modal-box {
//     animation: applyModalIn 0.38s cubic-bezier(.34,1.56,.64,1) both;
//   }

//   .glass-input {
//     width: 100%;
//     padding: 13px 18px;
//     border-radius: 14px;
//     border: 1.5px solid rgba(200, 210, 240, 0.6);
//     background: rgba(255, 255, 255, 0.55);
//     backdrop-filter: blur(10px);
//     color: #1e293b;
//     font-size: 0.9rem;
//     outline: none;
//     transition: border-color 0.22s ease, background 0.22s ease, box-shadow 0.22s ease;
//     box-sizing: border-box;
//   }
//   .glass-input::placeholder {
//     color: #94a3b8;
//   }
//   .glass-input:focus {
//     border-color: rgba(99,102,241,0.55);
//     background: rgba(255,255,255,0.78);
//     box-shadow: 0 0 0 4px rgba(99,102,241,0.1);
//   }

//   .glass-select {
//     width: 100%;
//     padding: 13px 18px;
//     border-radius: 14px;
//     border: 1.5px solid rgba(200, 210, 240, 0.6);
//     background: rgba(255, 255, 255, 0.55);
//     backdrop-filter: blur(10px);
//     color: #1e293b;
//     font-size: 0.9rem;
//     outline: none;
//     transition: border-color 0.22s ease, background 0.22s ease, box-shadow 0.22s ease;
//     box-sizing: border-box;
//     appearance: none;
//     cursor: pointer;
//   }
//   .glass-select:focus {
//     border-color: rgba(99,102,241,0.55);
//     background: rgba(255,255,255,0.78);
//     box-shadow: 0 0 0 4px rgba(99,102,241,0.1);
//   }
//   .glass-select option {
//     background: #fff;
//     color: #1e293b;
//   }

//   .submit-btn {
//     width: 100%;
//     padding: 14px;
//     border-radius: 100px;
//     border: none;
//     cursor: pointer;
//     font-size: 0.95rem;
//     font-weight: 700;
//     letter-spacing: 0.04em;
//     background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
//     color: #fff;
//     box-shadow: 0 8px 28px rgba(99,102,241,0.38), 0 2px 8px rgba(0,0,0,0.08);
//     transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
//   }
//   .submit-btn:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 14px 36px rgba(99,102,241,0.45), 0 4px 12px rgba(0,0,0,0.1);
//   }
//   .submit-btn:active {
//     transform: translateY(0);
//     opacity: 0.9;
//   }

//   .label-text {
//     display: block;
//     font-size: 0.75rem;
//     font-weight: 600;
//     color: #64748b;
//     letter-spacing: 0.07em;
//     text-transform: uppercase;
//     margin-bottom: 6px;
//   }
// `;

// const Institute: React.FC = () => {
//   const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
//   const [showApplyModal, setShowApplyModal] = useState(false);
//   const [showLearnMore, setShowLearnMore] = useState(false);

//   const PHONE_NUMBER = "916265259661";

//   const handleLearnMore = (course: Course) => {
//     setSelectedCourse(course);
//     setShowLearnMore(true);
//   };

//   const handleApplyClick = (course: Course) => {
//     setSelectedCourse(course);
//     setShowApplyModal(true);
//   };

//   const handleWhatsApp = () => {
//     if (!selectedCourse) return;
//     const message = `Hi! I'm interested in applying for the ${selectedCourse.title} course.`;
//     window.open(
//       `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`,
//       "_blank"
//     );
//   };

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.phone || !formData.subject) {
//       alert("Please fill all fields");
//       return;
//     }
//     try {
//       const res = await axios.post(
//         `${import.meta.env.VITE_BASE_URL}/api/application/apply`,
//         formData,
//         { headers: { "Content-Type": "application/json" } }
//       );
//       if (res.data.success) {
//         alert("Application submitted successfully!");
//         setShowApplyModal(false);
//         setFormData({ name: "", email: "", phone: "", subject: "" });
//       }
//     } catch (error) {
//       console.error("Error submitting application:", error);
//       alert("Failed to submit application");
//     }
//   };

//   const courses: Course[] = [
//     {
//       title: "Full Stack Development (MERN)",
//       desc: "Become a job-ready full stack developer using MongoDB, Express, React and Node.",
//       duration: "12 Months + 6 Months Practice",
//       level: "Beginner to Advanced",
//       topics: [
//         { label: "HTML", icon: <FaHtml5 />, detail: "Semantic HTML, forms, SEO structure." },
//         { label: "CSS", icon: <FaCss3Alt />, detail: "Flexbox, Grid, responsive layouts." },
//         { label: "JavaScript", icon: <FaJs />, detail: "ES6+, async JS, DOM, logic building." },
//         { label: "React", icon: <FaReact />, detail: "Hooks, state, real-world projects." },
//         { label: "Node.js", icon: <FaNodeJs />, detail: "Backend APIs, auth, performance." },
//         { label: "MongoDB", icon: <SiMongodb />, detail: "Schemas, aggregation, real data." },
//       ],
//     },
//     {
//       title: "Full Stack Development (MEAN)",
//       desc: "Build enterprise-level applications using Angular, Node, Express and MongoDB.",
//       duration: "12 Months + 6 Months Practice",
//       level: "Beginner to Advanced",
//       topics: [
//         { label: "Angular", icon: <SiAngular />, detail: "Components, services, routing." },
//         { label: "TypeScript", icon: <SiTypescript />, detail: "Strong typing, OOP concepts." },
//         { label: "Node.js", icon: <FaNodeJs />, detail: "Server-side development." },
//         { label: "Express", icon: <SiExpress />, detail: "REST APIs & middleware." },
//         { label: "MongoDB", icon: <SiMongodb />, detail: "Database design & queries." },
//       ],
//     },
//     {
//       title: "React Native",
//       desc: "Build Android & iOS mobile apps using React Native.",
//       duration: "12 Months + 6 Months Practice",
//       level: "Beginner to Advanced",
//       topics: [
//         { label: "React Native", icon: <Layers />, detail: "Cross-platform mobile apps." },
//         { label: "Navigation", icon: <Navigation />, detail: "Stack & tab navigation." },
//         { label: "APIs", icon: <Plug />, detail: "REST API integration." },
//         { label: "Firebase", icon: <Cloud />, detail: "Auth, database, notifications." },
//       ],
//     },
//     {
//       title: "Flutter Development",
//       desc: "Create fast, beautiful cross-platform apps with Flutter & Dart.",
//       duration: "12 Months + 6 Months Practice",
//       level: "Beginner to Advanced",
//       topics: [
//         { label: "Dart", icon: <SiDart />, detail: "Dart fundamentals & OOP." },
//         { label: "Flutter", icon: <SiFlutter />, detail: "Widgets, layouts, UI." },
//         { label: "Firebase", icon: <SiFirebase />, detail: "Auth & backend services." },
//         { label: "Deployment", icon: <Upload />, detail: "Play Store publishing." },
//       ],
//     },
//     {
//       title: "Digital Marketing",
//       desc: "Master SEO, ads, content and conversion-driven marketing.",
//       duration: "6 Months",
//       level: "All Levels",
//       topics: [
//         { label: "SEO", icon: <TrendingUp />, detail: "On-page & off-page SEO." },
//         { label: "Google Ads", icon: <Target />, detail: "PPC campaigns." },
//         { label: "Social Media", icon: <Share2 />, detail: "Instagram & Facebook ads." },
//         { label: "Analytics", icon: <BarChart />, detail: "Data-driven marketing." },
//       ],
//     },
//     {
//       title: "UI / UX Design",
//       desc: "Design modern, user-friendly interfaces & experiences.",
//       duration: "6 Months",
//       level: "All Levels",
//       topics: [
//         { label: "Design Basics", icon: <CodeIcon />, detail: "Color, typography, spacing." },
//         { label: "User Research", icon: <Users />, detail: "Personas & usability testing." },
//         { label: "Wireframing", icon: <Layers />, detail: "Low & high fidelity wireframes." },
//         { label: "Figma", icon: <FaFigma />, detail: "UI design & prototyping." },
//       ],
//     },
//   ];

//   return (
//     <div className="bg-white text-blue-100 min-h-screen">
//       <style>{GLOBAL_CSS}</style>
//       <Navbar />

//       <main className="pt-20 md:pt-1">
//         {/* COURSES */}
//         <section className="px-4 py-12 md:px-6 md:py-20 max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-blue-400">
//             Our Courses
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {courses.map((course, i) => (
//               <div
//                 key={i}
//                 className="bg-white border border-gray-200 p-6 rounded-2xl flex flex-col hover:scale-105 transition shadow-lg"
//               >
//                 <h3 className="text-xl md:text-2xl font-bold mb-3 text-black">
//                   {course.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm md:text-base mb-4 flex-grow">
//                   {course.desc}
//                 </p>
//                 <div className="flex gap-2 mb-6 flex-wrap">
//                   <span className="bg-gray-100 text-black px-3 py-1 rounded-full text-xs font-medium">
//                     {course.duration}
//                   </span>
//                   <span className="bg-gray-100 text-black px-3 py-1 rounded-full text-xs font-medium">
//                     {course.level}
//                   </span>
//                 </div>
//                 <div className="mt-auto flex gap-3">
//                   <button
//                     onClick={() => handleApplyClick(course)}
//                     className="flex-1 bg-blue-500 text-white px-4 py-3 rounded-full text-sm font-semibold hover:bg-blue-600 transition"
//                   >
//                     Apply Now
//                   </button>
//                   <button
//                     onClick={() => handleLearnMore(course)}
//                     className="flex-1 border border-blue-400 text-black px-4 py-3 rounded-full text-sm hover:bg-blue-500 hover:text-white transition"
//                   >
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       {/* LEARN MORE MODAL */}
//       {showLearnMore && selectedCourse && (
//         <div className="fixed inset-0 bg-white/80 flex items-center justify-center z-50 px-4">
//           <div className="bg-white border border-blue-600 rounded-2xl w-full max-w-3xl p-6 md:p-8 relative max-h-[90vh] overflow-y-auto">
//             <button
//               onClick={() => setShowLearnMore(false)}
//               className="absolute top-4 right-4 text-gray-900 hover:text-red-500"
//             >
//               <X size={24} />
//             </button>
//             <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 pr-8">
//               {selectedCourse.title}
//             </h2>
//             <p className="text-gray-500 mb-6">{selectedCourse.desc}</p>
//             <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-600">
//               Subjects & Detailed Curriculum
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
//               {selectedCourse.topics.map((topic, index) => {
//                 const gradient = TOPIC_GRADIENTS[index % TOPIC_GRADIENTS.length];
//                 return (
//                   <div
//                     key={index}
//                     className={`bg-gradient-to-br ${gradient} rounded-2xl p-5 shadow-md hover:scale-105 transition-transform duration-200`}
//                   >
//                     <div className="flex items-center gap-3 mb-2">
//                       <span className="text-2xl text-white drop-shadow">{topic.icon}</span>
//                       <h4 className="text-base md:text-lg font-bold text-white">{topic.label}</h4>
//                     </div>
//                     <p className="text-white/85 text-sm leading-relaxed">{topic.detail}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ════════════════════════════════════════════
//           APPLY MODAL — GLASSMORPHISM WHITE/CLEAN
//       ════════════════════════════════════════════ */}
//       {showApplyModal && selectedCourse && (
//         <div
//           style={{
//             position: "fixed", inset: 0, zIndex: 50,
//             display: "flex", alignItems: "center", justifyContent: "center",
//             padding: "16px",
//             background: "rgba(226, 232, 255, 0.55)",
//             backdropFilter: "blur(18px)",
//           }}
//         >
//           {/* Decorative background orbs */}
//           <div style={{
//             position: "fixed", top: "10%", left: "15%",
//             width: "320px", height: "320px", borderRadius: "50%",
//             background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
//             animation: "floatOrb 8s ease-in-out infinite",
//             pointerEvents: "none",
//           }} />
//           <div style={{
//             position: "fixed", bottom: "10%", right: "12%",
//             width: "260px", height: "260px", borderRadius: "50%",
//             background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
//             animation: "floatOrb2 10s ease-in-out infinite",
//             pointerEvents: "none",
//           }} />
//           <div style={{
//             position: "fixed", top: "40%", right: "20%",
//             width: "180px", height: "180px", borderRadius: "50%",
//             background: "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)",
//             animation: "floatOrb 12s ease-in-out infinite",
//             pointerEvents: "none",
//           }} />

//           {/* Glass modal box */}
//           <div
//             className="apply-modal-box"
//             style={{
//               position: "relative", zIndex: 1,
//               width: "100%", maxWidth: "460px",
//               borderRadius: "28px",
//               background: "rgba(255, 255, 255, 0.72)",
//               backdropFilter: "blur(28px) saturate(1.8)",
//               WebkitBackdropFilter: "blur(28px) saturate(1.8)",
//               border: "1.5px solid rgba(255, 255, 255, 0.85)",
//               boxShadow: "0 32px 80px rgba(99,102,241,0.14), 0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
//               padding: "40px 36px 44px",
//             }}
//           >
//             {/* Top gradient accent bar */}
//             <div style={{
//               position: "absolute", top: 0, left: "10%", right: "10%", height: "3px",
//               borderRadius: "0 0 6px 6px",
//               background: "linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)",
//               boxShadow: "0 2px 12px rgba(99,102,241,0.4)",
//             }} />

//             {/* Close button */}
//             <button
//               onClick={() => setShowApplyModal(false)}
//               onMouseEnter={e => {
//                 e.currentTarget.style.background = "rgba(239,68,68,0.1)";
//                 e.currentTarget.style.borderColor = "rgba(239,68,68,0.4)";
//               }}
//               onMouseLeave={e => {
//                 e.currentTarget.style.background = "rgba(241,245,249,0.8)";
//                 e.currentTarget.style.borderColor = "rgba(203,213,225,0.6)";
//               }}
//               style={{
//                 position: "absolute", top: "18px", right: "18px",
//                 background: "rgba(241,245,249,0.8)",
//                 border: "1.5px solid rgba(203,213,225,0.6)",
//                 borderRadius: "50%", width: "36px", height: "36px",
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 cursor: "pointer", color: "#64748b",
//                 transition: "all 0.2s ease",
//               }}
//             >
//               <X size={16} />
//             </button>

//             {/* Header */}
//             <div style={{ marginBottom: "28px", textAlign: "center" }}>
//               {/* Icon circle */}
//               <div style={{
//                 width: "56px", height: "56px", borderRadius: "18px", margin: "0 auto 16px",
//                 background: "linear-gradient(135deg, #6366f1, #ec4899)",
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 boxShadow: "0 8px 24px rgba(99,102,241,0.35)",
//                 fontSize: "22px", color: "#fff",
//               }}>
//                 🎓
//               </div>

//               <h3 style={{
//                 fontSize: "1.35rem", fontWeight: 800,
//                 color: "#0f172a", marginBottom: "6px", lineHeight: 1.3,
//               }}>
//                 Apply for Course
//               </h3>
//               <p style={{
//                 fontSize: "0.82rem", color: "#6366f1", fontWeight: 600,
//                 background: "linear-gradient(90deg,#6366f1,#ec4899)",
//                 WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//               }}>
//                 {selectedCourse.title}
//               </p>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
//               <div>
//                 <label className="label-text">Your Name</label>
//                 <input
//                   className="glass-input"
//                   name="name"
//                   placeholder="e.g. Rahul Sharma"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div>
//                 <label className="label-text">Email Address</label>
//                 <input
//                   className="glass-input"
//                   name="email"
//                   type="email"
//                   placeholder="e.g. rahul@email.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div>
//                 <label className="label-text">Phone Number</label>
//                 <input
//                   className="glass-input"
//                   name="phone"
//                   placeholder="e.g. 9876543210"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div>
//                 <label className="label-text">Select Course</label>
//                 <select
//                   className="glass-select"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                 >
//                   <option value="">Choose a course…</option>
//                   {courses.map((course, index) => (
//                     <option key={index} value={course.title}>
//                       {course.title}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div style={{ marginTop: "8px" }}>
//                 <button type="submit" className="submit-btn">
//                   Submit Application ✦
//                 </button>
//               </div>

//               <p style={{
//                 textAlign: "center", fontSize: "0.72rem",
//                 color: "#94a3b8", marginTop: "4px",
//               }}>
//                 We'll reach out within 24 hours 🚀
//               </p>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Institute;

import React, { useState, useEffect } from "react"; // 1. useEffect import kiya
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  TrendingUp,
  Share2,
  Target,
  BarChart,
  ShieldCheck,
  Rocket,
  Award,
  MessageCircle,
  X,
  Phone,
  Code as CodeIcon,
  Users,
  Layers,
  Navigation,
  Plug,
  Bell,
  Cloud,
  Upload,
  Server,
  Lock,
  Database,
  DivideCircle,
} from "lucide-react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
  FaFigma,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiNetlify,
  SiRender,
  SiAngular,
  SiTypescript,
  SiDart,
  SiFlutter,
  SiFirebase,
} from "react-icons/si";
import axios from "axios";

/* ---------- TYPES ---------- */
type Topic = {
  label: string;
  icon: JSX.Element;
  detail: string;
};

type Course = {
  title: string;
  desc: string;
  duration: string;
  level: string;
  topics: Topic[];
};

/* ---------- GRADIENT PALETTE ---------- */
const TOPIC_GRADIENTS = [
  "from-orange-400 to-rose-500",
  "from-sky-400 to-indigo-500",
  "from-emerald-400 to-teal-600",
  "from-violet-500 to-purple-700",
  "from-amber-400 to-orange-500",
  "from-pink-400 to-fuchsia-600",
  "from-cyan-400 to-blue-500",
  "from-lime-400 to-green-600",
];

/* ---------- GLOBAL CSS ---------- */
const GLOBAL_CSS = `
  @keyframes applyModalIn {
    0%   { opacity: 0; transform: scale(0.88) translateY(24px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }
  @keyframes floatOrb {
    0%,100% { transform: translate(0,0) scale(1); }
    50%      { transform: translate(18px,-14px) scale(1.08); }
  }
  @keyframes floatOrb2 {
    0%,100% { transform: translate(0,0) scale(1); }
    50%      { transform: translate(-14px,18px) scale(0.93); }
  }
  @keyframes inputFocusGlow {
    0%   { box-shadow: 0 0 0 0 rgba(99,102,241,0.25); }
    100% { box-shadow: 0 0 0 4px rgba(99,102,241,0.12); }
  }

  .apply-modal-box {
    animation: applyModalIn 0.38s cubic-bezier(.34,1.56,.64,1) both;
  }

  .glass-input {
    width: 100%;
    padding: 13px 18px;
    border-radius: 14px;
    border: 1.5px solid rgba(200, 210, 240, 0.6);
    background: rgba(255, 255, 255, 0.55);
    backdrop-filter: blur(10px);
    color: #1e293b;
    font-size: 0.9rem;
    outline: none;
    transition: border-color 0.22s ease, background 0.22s ease, box-shadow 0.22s ease;
    box-sizing: border-box;
  }
  .glass-input::placeholder {
    color: #94a3b8;
  }
  .glass-input:focus {
    border-color: rgba(99,102,241,0.55);
    background: rgba(255,255,255,0.78);
    box-shadow: 0 0 0 4px rgba(99,102,241,0.1);
  }

  .glass-select {
    width: 100%;
    padding: 13px 18px;
    border-radius: 14px;
    border: 1.5px solid rgba(200, 210, 240, 0.6);
    background: rgba(255, 255, 255, 0.55);
    backdrop-filter: blur(10px);
    color: #1e293b;
    font-size: 0.9rem;
    outline: none;
    transition: border-color 0.22s ease, background 0.22s ease, box-shadow 0.22s ease;
    box-sizing: border-box;
    appearance: none;
    cursor: pointer;
  }
  .glass-select:focus {
    border-color: rgba(99,102,241,0.55);
    background: rgba(255,255,255,0.78);
    box-shadow: 0 0 0 4px rgba(99,102,241,0.1);
  }
  .glass-select option {
    background: #fff;
    color: #1e293b;
  }

  .submit-btn {
    width: 100%;
    padding: 14px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
    color: #fff;
    box-shadow: 0 8px 28px rgba(99,102,241,0.38), 0 2px 8px rgba(0,0,0,0.08);
    transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  }
  .submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 36px rgba(99,102,241,0.45), 0 4px 12px rgba(0,0,0,0.1);
  }
  .submit-btn:active {
    transform: translateY(0);
    opacity: 0.9;
  }

  .label-text {
    display: block;
    font-size: 0.75rem;
    font-weight: 600;
    color: #64748b;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    margin-bottom: 6px;
  }
`;

const Institute: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState(false);

  // 2. Yeh useEffect scroll reset handle karega
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const PHONE_NUMBER = "916265259661";

  const handleLearnMore = (course: Course) => {
    setSelectedCourse(course);
    setShowLearnMore(true);
  };

  const handleApplyClick = (course: Course) => {
    setSelectedCourse(course);
    setShowApplyModal(true);
  };

  const handleWhatsApp = () => {
    if (!selectedCourse) return;
    const message = `Hi! I'm interested in applying for the ${selectedCourse.title} course.`;
    window.open(
      `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.subject) {
      alert("Please fill all fields");
      return;
    }
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/application/apply`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      if (res.data.success) {
        alert("Application submitted successfully!");
        setShowApplyModal(false);
        setFormData({ name: "", email: "", phone: "", subject: "" });
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application");
    }
  };

  const courses: Course[] = [
    {
      title: "Full Stack Development (MERN)",
      desc: "Become a job-ready full stack developer using MongoDB, Express, React and Node.",
      duration: "12 Months + 6 Months Practice",
      level: "Beginner to Advanced",
      topics: [
        { label: "HTML", icon: <FaHtml5 />, detail: "Semantic HTML, forms, SEO structure." },
        { label: "CSS", icon: <FaCss3Alt />, detail: "Flexbox, Grid, responsive layouts." },
        { label: "JavaScript", icon: <FaJs />, detail: "ES6+, async JS, DOM, logic building." },
        { label: "React", icon: <FaReact />, detail: "Hooks, state, real-world projects." },
        { label: "Node.js", icon: <FaNodeJs />, detail: "Backend APIs, auth, performance." },
        { label: "MongoDB", icon: <SiMongodb />, detail: "Schemas, aggregation, real data." },
      ],
    },
    {
      title: "Full Stack Development (MEAN)",
      desc: "Build enterprise-level applications using Angular, Node, Express and MongoDB.",
      duration: "12 Months + 6 Months Practice",
      level: "Beginner to Advanced",
      topics: [
        { label: "Angular", icon: <SiAngular />, detail: "Components, services, routing." },
        { label: "TypeScript", icon: <SiTypescript />, detail: "Strong typing, OOP concepts." },
        { label: "Node.js", icon: <FaNodeJs />, detail: "Server-side development." },
        { label: "Express", icon: <SiExpress />, detail: "REST APIs & middleware." },
        { label: "MongoDB", icon: <SiMongodb />, detail: "Database design & queries." },
      ],
    },
    {
      title: "React Native",
      desc: "Build Android & iOS mobile apps using React Native.",
      duration: "12 Months + 6 Months Practice",
      level: "Beginner to Advanced",
      topics: [
        { label: "React Native", icon: <Layers />, detail: "Cross-platform mobile apps." },
        { label: "Navigation", icon: <Navigation />, detail: "Stack & tab navigation." },
        { label: "APIs", icon: <Plug />, detail: "REST API integration." },
        { label: "Firebase", icon: <Cloud />, detail: "Auth, database, notifications." },
      ],
    },
    {
      title: "Flutter Development",
      desc: "Create fast, beautiful cross-platform apps with Flutter & Dart.",
      duration: "12 Months + 6 Months Practice",
      level: "Beginner to Advanced",
      topics: [
        { label: "Dart", icon: <SiDart />, detail: "Dart fundamentals & OOP." },
        { label: "Flutter", icon: <SiFlutter />, detail: "Widgets, layouts, UI." },
        { label: "Firebase", icon: <SiFirebase />, detail: "Auth & backend services." },
        { label: "Deployment", icon: <Upload />, detail: "Play Store publishing." },
      ],
    },
    {
      title: "Digital Marketing",
      desc: "Master SEO, ads, content and conversion-driven marketing.",
      duration: "6 Months",
      level: "All Levels",
      topics: [
        { label: "SEO", icon: <TrendingUp />, detail: "On-page & off-page SEO." },
        { label: "Google Ads", icon: <Target />, detail: "PPC campaigns." },
        { label: "Social Media", icon: <Share2 />, detail: "Instagram & Facebook ads." },
        { label: "Analytics", icon: <BarChart />, detail: "Data-driven marketing." },
      ],
    },
    {
      title: "UI / UX Design",
      desc: "Design modern, user-friendly interfaces & experiences.",
      duration: "6 Months",
      level: "All Levels",
      topics: [
        { label: "Design Basics", icon: <CodeIcon />, detail: "Color, typography, spacing." },
        { label: "User Research", icon: <Users />, detail: "Personas & usability testing." },
        { label: "Wireframing", icon: <Layers />, detail: "Low & high fidelity wireframes." },
        { label: "Figma", icon: <FaFigma />, detail: "UI design & prototyping." },
      ],
    },
  ];

  return (
    <div className="bg-white text-blue-100 min-h-screen">
      <style>{GLOBAL_CSS}</style>
      <Navbar />

      <main className="pt-20 md:pt-1">
        {/* COURSES */}
        <section className="px-4 py-12 md:px-6 md:py-20 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-blue-400">
            Our Courses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 p-6 rounded-2xl flex flex-col hover:scale-105 transition shadow-lg"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-black">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-4 flex-grow">
                  {course.desc}
                </p>
                <div className="flex gap-2 mb-6 flex-wrap">
                  <span className="bg-gray-100 text-black px-3 py-1 rounded-full text-xs font-medium">
                    {course.duration}
                  </span>
                  <span className="bg-gray-100 text-black px-3 py-1 rounded-full text-xs font-medium">
                    {course.level}
                  </span>
                </div>
                <div className="mt-auto flex gap-3">
                  <button
                    onClick={() => handleApplyClick(course)}
                    className="flex-1 bg-blue-500 text-white px-4 py-3 rounded-full text-sm font-semibold hover:bg-blue-600 transition"
                  >
                    Apply Now
                  </button>
                  <button
                    onClick={() => handleLearnMore(course)}
                    className="flex-1 border border-blue-400 text-black px-4 py-3 rounded-full text-sm hover:bg-blue-500 hover:text-white transition"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* LEARN MORE MODAL */}
      {showLearnMore && selectedCourse && (
        <div className="fixed inset-0 bg-white/80 flex items-center justify-center z-50 px-4">
          <div className="bg-white border border-blue-600 rounded-2xl w-full max-w-3xl p-6 md:p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowLearnMore(false)}
              className="absolute top-4 right-4 text-gray-900 hover:text-red-500"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 pr-8">
              {selectedCourse.title}
            </h2>
            <p className="text-gray-500 mb-6">{selectedCourse.desc}</p>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-600">
              Subjects & Detailed Curriculum
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {selectedCourse.topics.map((topic, index) => {
                const gradient = TOPIC_GRADIENTS[index % TOPIC_GRADIENTS.length];
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${gradient} rounded-2xl p-5 shadow-md hover:scale-105 transition-transform duration-200`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl text-white drop-shadow">{topic.icon}</span>
                      <h4 className="text-base md:text-lg font-bold text-white">{topic.label}</h4>
                    </div>
                    <p className="text-white/85 text-sm leading-relaxed">{topic.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {showApplyModal && selectedCourse && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 50,
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "16px",
            background: "rgba(226, 232, 255, 0.55)",
            backdropFilter: "blur(18px)",
          }}
        >
          {/* Decorative background orbs */}
          <div style={{
            position: "fixed", top: "10%", left: "15%",
            width: "320px", height: "320px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
            animation: "floatOrb 8s ease-in-out infinite",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "fixed", bottom: "10%", right: "12%",
            width: "260px", height: "260px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
            animation: "floatOrb2 10s ease-in-out infinite",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "fixed", top: "40%", right: "20%",
            width: "180px", height: "180px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)",
            animation: "floatOrb 12s ease-in-out infinite",
            pointerEvents: "none",
          }} />

          {/* Glass modal box */}
          <div
            className="apply-modal-box"
            style={{
              position: "relative", zIndex: 1,
              width: "100%", maxWidth: "460px",
              borderRadius: "28px",
              background: "rgba(255, 255, 255, 0.72)",
              backdropFilter: "blur(28px) saturate(1.8)",
              WebkitBackdropFilter: "blur(28px) saturate(1.8)",
              border: "1.5px solid rgba(255, 255, 255, 0.85)",
              boxShadow: "0 32px 80px rgba(99,102,241,0.14), 0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
              padding: "40px 36px 44px",
            }}
          >
            {/* Top gradient accent bar */}
            <div style={{
              position: "absolute", top: 0, left: "10%", right: "10%", height: "3px",
              borderRadius: "0 0 6px 6px",
              background: "linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)",
              boxShadow: "0 2px 12px rgba(99,102,241,0.4)",
            }} />

            {/* Close button */}
            <button
              onClick={() => setShowApplyModal(false)}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(239,68,68,0.1)";
                e.currentTarget.style.borderColor = "rgba(239,68,68,0.4)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(241,245,249,0.8)";
                e.currentTarget.style.borderColor = "rgba(203,213,225,0.6)";
              }}
              style={{
                position: "absolute", top: "18px", right: "18px",
                background: "rgba(241,245,249,0.8)",
                border: "1.5px solid rgba(203,213,225,0.6)",
                borderRadius: "50%", width: "36px", height: "36px",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: "#64748b",
                transition: "all 0.2s ease",
              }}
            >
              <X size={16} />
            </button>

            {/* Header */}
            <div style={{ marginBottom: "28px", textAlign: "center" }}>
              <div style={{
                width: "56px", height: "56px", borderRadius: "18px", margin: "0 auto 16px",
                background: "linear-gradient(135deg, #6366f1, #ec4899)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 8px 24px rgba(99,102,241,0.35)",
                fontSize: "22px", color: "#fff",
              }}>
                🎓
              </div>

              <h3 style={{
                fontSize: "1.35rem", fontWeight: 800,
                color: "#0f172a", marginBottom: "6px", lineHeight: 1.3,
              }}>
                Apply for Course
              </h3>
              <p style={{
                fontSize: "0.82rem", color: "#6366f1", fontWeight: 600,
                background: "linear-gradient(90deg,#6366f1,#ec4899)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                {selectedCourse.title}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label className="label-text">Your Name</label>
                <input
                  className="glass-input"
                  name="name"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="label-text">Email Address</label>
                <input
                  className="glass-input"
                  name="email"
                  type="email"
                  placeholder="e.g. rahul@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="label-text">Phone Number</label>
                <input
                  className="glass-input"
                  name="phone"
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="label-text">Select Course</label>
                <select
                  className="glass-select"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">Choose a course…</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ marginTop: "8px" }}>
                <button type="submit" className="submit-btn">
                  Submit Application ✦
                </button>
              </div>

              <p style={{
                textAlign: "center", fontSize: "0.72rem",
                color: "#94a3b8", marginTop: "4px",
              }}>
                We'll reach out within 24 hours 🚀
              </p>
            </form>
          </div>
        </div>
      )}
     
    </div>
  );
};

export default Institute;