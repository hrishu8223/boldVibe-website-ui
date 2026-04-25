// import React, { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";
// import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";

// /* ================= ANIMATED LOGO ================= */

// const AnimatedLogo: React.FC = () => {
//   return (
//     <div className="relative w-12 h-12 flex items-center justify-center">
//       <div className="tick-orbit absolute inset-0">
//         <span className="tick top orange-tick" />
//         <span className="tick right" />
//         <span className="tick bottom" />
//         <span className="tick left" />
//       </div>
//       <span className="relative z-10 font-extrabold text-black text-sm">
//         B
//       </span>
//     </div>
//   );
// };

// /* ================= NAVBAR ================= */
// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);



//  const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Services", href: "/services" },
//   { name: "Projects", href: "/projects" },
//   { name: "Contact", href: "/contact" },
//   { name: "Institute", href: "/institute" },
// ];



//   /* Lock body scroll when mobile menu open */
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "auto";
//   }, [isOpen]);

//   return (
//     <>
//       {/* ================= STYLES ================= */}
//     <style>{`
//         @keyframes rotateTicks {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         .tick-orbit {
//           position: absolute;
//           inset: 0;
//           animation: rotateTicks 6s linear infinite;
//         }

//         .tick {
//           position: absolute;
//           width: 14px;
//           height: 22px;
//           border-right: 5px solid #000;
//           border-bottom: 5px solid #000;
//           border-radius: 2px;
//         }

//         .orange-tick {
//           border-color: #f97316;
//         }

//         .tick.top {
//           top: 2px;
//           left: 50%;
//           transform: translateX(-50%) rotate(45deg);
//         }

//         .tick.right {
//           right: 2px;
//           top: 50%;
//           transform: translateY(-50%) rotate(135deg);
//         }

//         .tick.bottom {
//           bottom: 2px;
//           left: 50%;
//           transform: translateX(-50%) rotate(225deg);
//         }

//         .tick.left {
//           left: 2px;
//           top: 50%;
//           transform: translateY(-50%) rotate(315deg);
//         }
//       `}</style>
//       {/* ================= HEADER ================= */}
//       <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">

//         <div className="max-w-7xl mx-auto px-4">

//           {/* ===== DESKTOP NAV ===== */}
//           <nav className="hidden md:flex items-center justify-between h-20">
//             <Link to="/" className="flex items-center gap-3">
//               <AnimatedLogo />
//               <span className="font-bold text-lg">
//                 <span className="text-black">BOLD</span>
//                 <span className="text-orange-500">VIBE</span>
//               </span>
//             </Link>

//             <div className="flex space-x-8">
//               {navLinks.map((link) =>
//                 link.href.startsWith("/#") ? (
//                   <HashLink
//                     key={link.name}
//                     smooth
//                     to={link.href}
// className="text-black hover:text-blue-700 text-sm font-bold transition"
//                   >
//                     {link.name}
//                   </HashLink>
//                 ) : (
//                   <Link
//                     key={link.name}
//                     to={link.href}
// className="text-black hover:text-blue-700 text-sm font-bold transition"
//                   >
//                     {link.name}
//                   </Link>
//                 )
//               )}
//             </div>
//           </nav>

//           {/* ===== MOBILE NAV ===== */}
//           <nav className="flex md:hidden items-center justify-between h-16">
//             <Link to="/" className="flex items-center gap-2">
//               <AnimatedLogo />
//               <span className="font-bold text-sm">
//                 <span className="text-black">BOLD</span>
//                 <span className="text-orange-500">VIBE</span>
//               </span>
//             </Link>

//             <button onClick={() => setIsOpen(true)} className="text-black">
//               <Menu size={28} />
//             </button>
//           </nav>
//         </div>
//       </header>


//       <div
//         className={`fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden ${
//           isOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//         onClick={() => setIsOpen(false)}
//       />

//       {/* ===== MOBILE SLIDE MENU ===== */}

//       <aside
//         className={`fixed top-0 right-0 50-vw 50vh bg-white z-50
//         transform transition-transform duration-300 md:hidden
//         ${isOpen ? "translate-x-0" : "translate-x-full"}`}
//       >
//         <div className="flex justify-between items-center p-4 border-b border-white/10">
//           <span className="font-bold text-black">
//             BOLD<span className="text-orange-500">VIBE</span>
//           </span>
//           <button onClick={() => setIsOpen(false)}>
//             <X size={26} className="text-black hover:text-black" />
//           </button>
//         </div>

//         <div className="flex flex-col p-6 space-y-5">
//           {navLinks.map((link) =>
//             link.href.startsWith("/#") ? (
//               <HashLink
//                 key={link.name}
//                 smooth
//                 to={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className="text-gray-900 hover:text-black text-lg font-medium"
//               >
//                 {link.name}
//               </HashLink>
//             ) : (
//               <Link
//                 key={link.name}
//                 to={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className="text-gray-900 hover:text-black text-lg font-medium"
//               >
//                 {link.name}
//               </Link>
//             )
//           )}
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Navbar;


// import React, { useEffect, useState, useRef } from "react";
// import { Menu, X, Globe, ChevronDown } from "lucide-react";
// import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";

// /* ================= COUNTRY & THEME DATA ================= */
// const countries = [
//   { name: "India",     flag: "🇮🇳", timezone: "Asia/Kolkata",     color: "#ea580c", bg: "#fff7ed", border: "#fed7aa" },
//   { name: "USA",       flag: "🇺🇸", timezone: "America/New_York",   color: "#2563eb", bg: "#eff6ff", border: "#bfdbfe" },
//   { name: "UK",        flag: "🇬🇧", timezone: "Europe/London",      color: "#dc2626", bg: "#fef2f2", border: "#fecaca" },
//   { name: "Germany",   flag: "🇩🇪", timezone: "Europe/Berlin",      color: "#ca8a04", bg: "#fefce8", border: "#fde68a" },
//   { name: "Australia", flag: "🇦🇺", timezone: "Australia/Sydney",   color: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0" },
//   { name: "UAE",       flag: "🇦🇪", timezone: "Asia/Dubai",         color: "#059669", bg: "#ecfdf5", border: "#a7f3d0" },
// ];

// /* ================= ANIMATED LOGO ================= */
// const AnimatedLogo: React.FC<{ themeColor: string }> = ({ themeColor }) => {
//   return (
//     <div className="relative w-12 h-12 flex items-center justify-center">
//       <div className="tick-orbit absolute inset-0">
//         <span className="tick top" style={{ borderColor: themeColor }} />
//         <span className="tick right" />
//         <span className="tick bottom" />
//         <span className="tick left" />
//       </div>
//       <span className="relative z-10 font-extrabold text-black text-sm">B</span>
//     </div>
//   );
// };

// /* ================= NAVBAR ================= */
// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState(countries[0]);
//   const [ticker, setTicker] = useState(new Date());
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Services", href: "/services" },
//     { name: "Projects", href: "/projects" },
//     { name: "Contact", href: "/contact" },
//     { name: "Institute", href: "/institute" },
//   ];

//   // Live time ticker
//   useEffect(() => {
//     const timer = setInterval(() => setTicker(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const getFormatTime = (timezone: string) => {
//     return new Date().toLocaleTimeString("en-US", {
//       timeZone: timezone,
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//     });
//   };

//   // Close dropdown on click outside
//   useEffect(() => {
//     const handler = (e: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @keyframes rotateTicks { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
//         .tick-orbit { position: absolute; inset: 0; animation: rotateTicks 6s linear infinite; }
//         .tick { position: absolute; width: 14px; height: 22px; border-right: 5px solid #000; border-bottom: 5px solid #000; border-radius: 2px; }
//         .tick.top { top: 2px; left: 50%; transform: translateX(-50%) rotate(45deg); }
//         .tick.right { right: 2px; top: 50%; transform: translateY(-50%) rotate(135deg); }
//         .tick.bottom { bottom: 2px; left: 50%; transform: translateX(-50%) rotate(225deg); }
//         .tick.left { left: 2px; top: 50%; transform: translateY(-50%) rotate(315deg); }
//       `}</style>

//       <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
//         {/* Top Dynamic Theme Bar */}
//         <div className="w-full h-[3px] transition-all duration-500" style={{ backgroundColor: selectedCountry.color }} />

//         <div className="max-w-7xl mx-auto px-4">
//           <nav className="flex items-center justify-between h-20">
//             {/* Logo Section */}
//             <Link to="/" className="flex items-center gap-3">
//               <AnimatedLogo themeColor={selectedCountry.color} />
//               <span className="font-bold text-lg transition-colors duration-500">
//                 <span className="text-black">BOLD</span>
//                 <span style={{ color: selectedCountry.color }}>VIBE</span>
//               </span>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-6">
//               {navLinks.map((link) => (
//                 <Link key={link.name} to={link.href} className="text-black hover:opacity-60 text-sm font-bold transition">
//                   {link.name}
//                 </Link>
//               ))}

//               {/* THEMED COUNTRY SELECTOR (Institute ke side mein) */}
//               <div ref={dropdownRef} className="relative ml-4">
//                 <button
//                   onClick={() => setDropdownOpen(!dropdownOpen)}
//                   className="flex items-center gap-3 px-4 py-2 rounded-xl border-2 transition-all duration-500"
//                   style={{ 
//                     borderColor: selectedCountry.border,
//                     backgroundColor: selectedCountry.bg,
//                     color: selectedCountry.color 
//                   }}
//                 >
//                   <Globe size={16} />
//                   <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide">
//                     <span>{selectedCountry.flag} {selectedCountry.name}</span>
//                     <span className="opacity-30">|</span>
//                     <span className="font-mono">{getFormatTime(selectedCountry.timezone)}</span>
//                   </div>
//                   <ChevronDown size={14} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
//                 </button>

//                 {/* DROPDOWN MENU */}
//                 {dropdownOpen && (
//                   <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[60] animate-in fade-in slide-in-from-top-2">
//                     <div className="p-2 flex flex-col gap-1">
//                       {countries.map((c) => (
//                         <button
//                           key={c.name}
//                           onClick={() => { setSelectedCountry(c); setDropdownOpen(false); }}
//                           className="flex items-center justify-between px-4 py-3 rounded-xl transition-all hover:bg-gray-50 group text-left"
//                         >
//                           <div className="flex items-center gap-3">
//                             <span className="text-xl">{c.flag}</span>
//                             <span className="text-sm font-bold text-gray-700 group-hover:text-black">{c.name}</span>
//                           </div>
//                           <span className="text-[10px] font-mono font-bold text-gray-400 group-hover:text-black">
//                             {getFormatTime(c.timezone)}
//                           </span>
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;

import React, { useEffect, useState, useRef } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

/* ================= COUNTRY & THEME DATA ================= */
const countries = [
  { name: "India",     flag: "🇮🇳", timezone: "Asia/Kolkata",     color: "#ea580c", bg: "#fff7ed", border: "#fed7aa" },
  { name: "USA",       flag: "🇺🇸", timezone: "America/New_York",   color: "#2563eb", bg: "#eff6ff", border: "#bfdbfe" },
  { name: "UK",        flag: "🇬🇧", timezone: "Europe/London",      color: "#dc2626", bg: "#fef2f2", border: "#fecaca" },
  { name: "Germany",   flag: "🇩🇪", timezone: "Europe/Berlin",      color: "#ca8a04", bg: "#fefce8", border: "#fde68a" },
  { name: "Australia", flag: "🇦🇺", timezone: "Australia/Sydney",   color: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0" },
  { name: "Japan",     flag: "🇯🇵", timezone: "Asia/Tokyo",         color: "#db2777", bg: "#fdf2f8", border: "#fbcfe8" },
  { name: "UAE",       flag: "🇦🇪", timezone: "Asia/Dubai",         color: "#059669", bg: "#ecfdf5", border: "#a7f3d0" },
];

/* ================= ANIMATED LOGO ================= */
const AnimatedLogo: React.FC<{ themeColor: string }> = ({ themeColor }) => {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <div className="tick-orbit absolute inset-0">
        <span className="tick top" style={{ borderColor: themeColor }} />
        <span className="tick right" />
        <span className="tick bottom" />
        <span className="tick left" />
      </div>
      <span className="relative z-10 font-extrabold text-black text-sm">B</span>
    </div>
  );
};

/* ================= NAVBAR ================= */
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [ticker, setTicker] = useState(new Date());
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Home",      href: "/" },
    { name: "About",     href: "/about" },
    { name: "Services",  href: "/services" },
    { name: "Projects",  href: "/projects" },
    { name: "Contact",   href: "/contact" },
    { name: "Institute", href: "/institute" },
  ];

  // 1-second ticker for all clocks
  useEffect(() => {
    const timer = setInterval(() => setTicker(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getFormatTime = (timezone: string) => {
    return new Date().toLocaleTimeString("en-US", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <style>{`
        @keyframes rotateTicks { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .tick-orbit { position: absolute; inset: 0; animation: rotateTicks 6s linear infinite; }
        .tick { position: absolute; width: 14px; height: 22px; border-right: 5px solid #000; border-bottom: 5px solid #000; border-radius: 2px; transition: border-color 0.5s; }
        .tick.top { top: 2px; left: 50%; transform: translateX(-50%) rotate(45deg); }
        .tick.right { right: 2px; top: 50%; transform: translateY(-50%) rotate(135deg); }
        .tick.bottom { bottom: 2px; left: 50%; transform: translateX(-50%) rotate(225deg); }
        .tick.left { left: 2px; top: 50%; transform: translateY(-50%) rotate(315deg); }
      `}</style>

      <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
        {/* Dynamic Top Theme Line */}
        <div 
          className="w-full h-[3px] transition-all duration-500" 
          style={{ backgroundColor: selectedCountry.color }} 
        />

        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            
            {/* LOGO Section */}
            <Link to="/" className="flex items-center gap-3">
              <AnimatedLogo themeColor={selectedCountry.color} />
              <span className="font-bold text-lg">
                <span className="text-black">BOLD</span>
                <span style={{ color: selectedCountry.color }} className="transition-colors duration-500">
                  VIBE
                </span>
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-black hover:opacity-60 text-sm font-bold transition"
                >
                  {link.name}
                </Link>
              ))}

              {/* THEMED COUNTRY SELECTOR */}
              <div ref={dropdownRef} className="relative ml-4">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-3 px-4 py-2 rounded-xl border-2 transition-all duration-500 hover:shadow-md"
                  style={{ 
                    borderColor: selectedCountry.border,
                    backgroundColor: selectedCountry.bg,
                    color: selectedCountry.color 
                  }}
                >
                  <Globe size={16} />
                  <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide">
                    <span>{selectedCountry.flag} {selectedCountry.name}</span>
                    <span className="opacity-30">|</span>
                    <span className="font-mono">{getFormatTime(selectedCountry.timezone)}</span>
                  </div>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* DROPDOWN MENU */}
                {dropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[60] animate-in fade-in slide-in-from-top-2">
                    <div className="p-2 flex flex-col gap-1">
                      {countries.map((c) => {
                        const isSelected = selectedCountry.name === c.name;
                        return (
                          <button
                            key={c.name}
                            onClick={() => { setSelectedCountry(c); setDropdownOpen(false); }}
                            className="flex items-center justify-between px-4 py-3 rounded-xl transition-all hover:bg-gray-50 group text-left"
                            style={{ backgroundColor: isSelected ? c.bg : '' }}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-xl">{c.flag}</span>
                              <span 
                                className="text-sm font-bold transition-colors"
                                style={{ color: isSelected ? c.color : '#374151' }}
                              >
                                {c.name}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono font-bold text-gray-400 group-hover:text-black">
                              {getFormatTime(c.timezone)}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(true)} className="md:hidden text-black p-2">
              <Menu size={28} />
            </button>
          </nav>
        </div>
      </header>

      {/* MOBILE OVERLAY & ASIDE (Same logic as desktop can be applied here) */}
      {/* ... Rest of your mobile menu code ... */}
    </>
  );
};

export default Navbar;