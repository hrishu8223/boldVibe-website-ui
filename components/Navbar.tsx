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


import React, { useEffect, useState, useRef } from "react";
import { Menu, X, Globe, ChevronDown, Clock } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

/* ================= COUNTRY DATA ================= */
const countries = [
  { name: "India",     flag: "🇮🇳", timezone: "Asia/Kolkata",       color: "#ea580c", bg: "#fff7ed", border: "#fed7aa", city: "Kolkata"   },
  { name: "USA",       flag: "🇺🇸", timezone: "America/New_York",   color: "#2563eb", bg: "#eff6ff", border: "#bfdbfe", city: "New York"  },
  { name: "UK",        flag: "🇬🇧", timezone: "Europe/London",      color: "#dc2626", bg: "#fef2f2", border: "#fecaca", city: "London"    },
  { name: "Germany",   flag: "🇩🇪", timezone: "Europe/Berlin",      color: "#ca8a04", bg: "#fefce8", border: "#fde68a", city: "Berlin"    },
  { name: "Japan",     flag: "🇯🇵", timezone: "Asia/Tokyo",         color: "#db2777", bg: "#fdf2f8", border: "#fbcfe8", city: "Tokyo"     },
  { name: "Australia", flag: "🇦🇺", timezone: "Australia/Sydney",   color: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0", city: "Sydney"    },
  { name: "UAE",       flag: "🇦🇪", timezone: "Asia/Dubai",         color: "#059669", bg: "#ecfdf5", border: "#a7f3d0", city: "Dubai"     },
  { name: "Canada",    flag: "🇨🇦", timezone: "America/Toronto",    color: "#e11d48", bg: "#fff1f2", border: "#fecdd3", city: "Toronto"   },
];

type Country = typeof countries[0];

/* ================= ANIMATED LOGO ================= */
const AnimatedLogo: React.FC = () => {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <div className="tick-orbit absolute inset-0">
        <span className="tick top orange-tick" />
        <span className="tick right" />
        <span className="tick bottom" />
        <span className="tick left" />
      </div>
      <span className="relative z-10 font-extrabold text-black text-sm">
        B
      </span>
    </div>
  );
};

/* ================= NAVBAR ================= */
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [liveTime, setLiveTime] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Home",      href: "/" },
    { name: "About",     href: "/about" },
    { name: "Services",  href: "/services" },
    { name: "Projects",  href: "/projects" },
    { name: "Contact",   href: "/contact" },
    { name: "Institute", href: "/institute" },
  ];

  /* Live clock */
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const t = now.toLocaleTimeString("en-US", {
        timeZone: selectedCountry.timezone,
        hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true,
      });
      const d = now.toLocaleDateString("en-US", {
        timeZone: selectedCountry.timezone,
        weekday: "short", month: "short", day: "numeric",
      });
      setLiveTime(`${t} · ${d}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [selectedCountry]);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* ================= STYLES ================= */}
      <style>{`
        @keyframes rotateTicks {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .tick-orbit {
          position: absolute;
          inset: 0;
          animation: rotateTicks 6s linear infinite;
        }

        .tick {
          position: absolute;
          width: 14px;
          height: 22px;
          border-right: 5px solid #000;
          border-bottom: 5px solid #000;
          border-radius: 2px;
        }

        .orange-tick {
          border-color: #f97316;
        }

        .tick.top {
          top: 2px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
        }

        .tick.right {
          right: 2px;
          top: 50%;
          transform: translateY(-50%) rotate(135deg);
        }

        .tick.bottom {
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%) rotate(225deg);
        }

        .tick.left {
          left: 2px;
          top: 50%;
          transform: translateY(-50%) rotate(315deg);
        }

        .country-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          width: 340px;
          z-index: 999;
          overflow: hidden;
          animation: fadeIn 0.15s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">

        {/* Theme color bar — changes per country */}
        <div
          className="w-full h-[3px] transition-colors duration-500"
          style={{ backgroundColor: selectedCountry.color }}
        />

        <div className="max-w-7xl mx-auto px-4">

          {/* ===== DESKTOP NAV ===== */}
          <nav className="hidden md:flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3">
              <AnimatedLogo />
              <span className="font-bold text-lg">
                <span className="text-black">BOLD</span>
                <span className="text-orange-500">VIBE</span>
              </span>
            </Link>

            <div className="flex items-center space-x-8">
              {navLinks.map((link) =>
                link.href.startsWith("/#") ? (
                  <HashLink
                    key={link.name}
                    smooth
                    to={link.href}
                    className="text-black hover:text-blue-700 text-sm font-bold transition"
                  >
                    {link.name}
                  </HashLink>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-black hover:text-blue-700 text-sm font-bold transition"
                  >
                    {link.name}
                  </Link>
                )
              )}

              {/* ── Countries Dropdown ── */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setDropdownOpen((v) => !v)}
                  className="flex items-center gap-1.5 text-sm font-bold transition hover:opacity-80"
                  style={{ color: dropdownOpen ? selectedCountry.color : "#111" }}
                >
                  <Globe size={15} />
                  <span>{selectedCountry.flag} {selectedCountry.name}</span>
                  <ChevronDown
                    size={13}
                    style={{
                      transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  />
                </button>

                {dropdownOpen && (
                  <div
                    className="country-dropdown"
                    style={{ border: `1px solid ${selectedCountry.border}` }}
                  >
                    {/* Live time header */}
                    <div
                      className="flex items-center gap-2 px-4 py-3 border-b text-xs font-mono font-bold"
                      style={{
                        backgroundColor: selectedCountry.bg,
                        borderColor: selectedCountry.border,
                        color: selectedCountry.color,
                      }}
                    >
                      <Clock size={13} />
                      <span>{selectedCountry.flag} {selectedCountry.name}: {liveTime}</span>
                    </div>

                    {/* Country grid */}
                    <div className="grid grid-cols-2 gap-2 p-3">
                      {countries.map((c) => (
                        <button
                          key={c.name}
                          onClick={() => { setSelectedCountry(c); setDropdownOpen(false); }}
                          className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border text-sm font-semibold text-left transition-all duration-200 hover:scale-[1.02]"
                          style={{
                            borderColor: selectedCountry.name === c.name ? c.color : "#e5e7eb",
                            backgroundColor: selectedCountry.name === c.name ? c.bg : "white",
                            color: selectedCountry.name === c.name ? c.color : "#374151",
                          }}
                        >
                          <span style={{ fontSize: 18 }}>{c.flag}</span>
                          <span className="flex flex-col leading-tight">
                            <span>{c.name}</span>
                            <span className="text-xs font-normal opacity-50">{c.city}</span>
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {/* ── End Countries Dropdown ── */}
            </div>
          </nav>

          {/* ===== MOBILE NAV ===== */}
          <nav className="flex md:hidden items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <AnimatedLogo />
              <span className="font-bold text-sm">
                <span className="text-black">BOLD</span>
                <span className="text-orange-500">VIBE</span>
              </span>
            </Link>

            <button onClick={() => setIsOpen(true)} className="text-black">
              <Menu size={28} />
            </button>
          </nav>
        </div>
      </header>


      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* ===== MOBILE SLIDE MENU ===== */}
      <aside
        className={`fixed top-0 right-0 50-vw 50vh bg-white z-50
        transform transition-transform duration-300 md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Mobile theme bar */}
        <div
          className="w-full h-[3px] transition-colors duration-500"
          style={{ backgroundColor: selectedCountry.color }}
        />

        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <span className="font-bold text-black">
            BOLD<span className="text-orange-500">VIBE</span>
          </span>
          <button onClick={() => setIsOpen(false)}>
            <X size={26} className="text-black hover:text-black" />
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-5">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <HashLink
                key={link.name}
                smooth
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-900 hover:text-black text-lg font-medium"
              >
                {link.name}
              </HashLink>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-900 hover:text-black text-lg font-medium"
              >
                {link.name}
              </Link>
            )
          )}

          {/* Mobile Countries Section */}
          <div className="border-t border-gray-100 pt-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Global Time Zones
            </p>
            <div className="grid grid-cols-2 gap-2">
              {countries.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedCountry(c)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-medium transition-all duration-200"
                  style={{
                    borderColor: selectedCountry.name === c.name ? c.color : "#e5e7eb",
                    backgroundColor: selectedCountry.name === c.name ? c.bg : "white",
                    color: selectedCountry.name === c.name ? c.color : "#374151",
                  }}
                >
                  <span style={{ fontSize: 16 }}>{c.flag}</span>
                  <span>{c.name}</span>
                </button>
              ))}
            </div>
            {/* Mobile live time */}
            <div
              className="flex items-center gap-2 mt-3 px-4 py-2.5 rounded-xl border text-xs font-mono font-bold"
              style={{
                backgroundColor: selectedCountry.bg,
                borderColor: selectedCountry.border,
                color: selectedCountry.color,
              }}
            >
              <Clock size={12} />
              <span>{selectedCountry.flag} {selectedCountry.name}: {liveTime}</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;