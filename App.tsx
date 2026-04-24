

// // App.tsx
// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import Team from "./components/Team";
// import Values from "./components/Values";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Projects from "./components/Projects";
// import WhatsAppFloat from "./components/WhatsAppFloat";
// import Institute from "./components/Institute";
// import ViewDetailProject from "./components/ViewDetailProject";
// import Apply from "./components/Apply";

// const App: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-background text-white selection:bg-blue-500 selection:text-white overflow-x-hidden">
//       <Navbar />

//       <Routes>

//         <Route
//           path="/"
//           element={
//             <main>
//               <div id="home">
//                 <Hero />
//               </div>

//               <div id="values">
//                 <Values />
//               </div>


// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import ScrollToTop from "./components/ScrollToTop";

// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import Team from "./components/Team";
// import Values from "./components/Values";
// import Contact from "./components/Contact";
// import Projects from "./components/Projects";
// import Institute from "./components/Institute";
// import ViewDetailProject from "./components/ViewDetailProject";

// import Footer from "./components/Footer";
// import Apply from "./components/Apply";
// import WhatsAppFloat from "./components/WhatsAppFloat";

// const App: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-background text-white overflow-x-hidden">
//       <Navbar />
//       <ScrollToTop />

//       <Routes>
//         {/* Redirect old /home to / */}
//         <Route path="/home" element={<Navigate to="/" replace />} />

//         {/* MAIN ROUTES */}
//         <Route path="/" element={<Hero />} />
//         <Route path="/values" element={<Values />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/team" element={<Team />} />
//         <Route path="/contact" element={<Contact />} />

//         {/* OTHER PAGES */}
//         <Route path="/projects/:slug" element={<ViewDetailProject />} />
//         <Route path="/institute" element={<Institute />} />

//         {/* 404 fallback */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>

//       <Footer />
//       <Apply />
//       <WhatsAppFloat />
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import Team from "./components/Team";
// import Values from "./components/Values";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Projects from "./components/Projects";
// import WhatsAppFloat from "./components/WhatsAppFloat";
// import Institute from "./components/Institute";
// import ViewDetailProject from "./components/ViewDetailProject";
// import Apply from "./components/Apply";

// const App: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-background text-white selection:bg-blue-500 selection:text-white overflow-x-hidden">
//       <Navbar />

//     <Routes>
//   <Route path="/" element={<Hero />} />
//   <Route path="/services" element={<Services />} />
//   <Route path="/projects" element={<Projects />} />
//   <Route path="/team" element={<Team />} />
//   <Route path="/contact" element={<Contact />} />
//   <Route path="/institute" element={<Institute />} />
//   <Route path="/projects/:slug" element={<ViewDetailProject />} />
// </Routes>

//       <Footer />
//       <Apply />
//       <WhatsAppFloat />
//     </div>
//   );
// };

// export default App;


import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";
import Values from "./components/Values";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Institute from "./components/Institute";
import ViewDetailProject from "./components/ViewDetailProject";
import Apply from "./components/Apply";

/* ===== LANDING PAGE ===== */
const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    const map: Record<string, string> = {
      "/about": "team",
      "/services": "services",
      "/projects": "projects",
      "/contact": "contact",
    };

    const id = map[location.pathname];
    if (id) {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location.pathname]);

  return (
    <main>
      <div id="home"><Hero /></div>
      <div id="values"><Values /></div>
      <div id="services"><Services /></div>
      <div id="projects"><Projects /></div>
      <div id="team"><Team /></div>
      <div id="contact"><Contact /></div>
    </main>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<LandingPage />} />
        <Route path="/services" element={<LandingPage />} />
        <Route path="/projects" element={<LandingPage />} />
        <Route path="/contact" element={<LandingPage />} />

        <Route path="/institute" element={<Institute />} />
        <Route path="/projects/:slug" element={<ViewDetailProject />} />
      </Routes>

      <Footer />
      <Apply />
      <WhatsAppFloat />
    </div>
  );
};

export default App;
