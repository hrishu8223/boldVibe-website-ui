// import React from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Instagram,
//   Linkedin,
//   MessageCircle,
//   Send,
//   Heart,
// } from "lucide-react";
// import { HashLink } from "react-router-hash-link";
// import { FaFacebookF } from "react-icons/fa";

// interface QuickLink {
//   name: string;
//   path: string;
// }

// const quickLinks: QuickLink[] = [
//   { name: "Home", path: "/#home" },
//   { name: "About Us", path: "/#values" },
//   { name: "Services", path: "/#services" },
//   { name: "Projects", path: "/#projects" },
//   { name: "Our Team", path: "/#team" },
// ];


// const AnimatedLogo: React.FC = () => (
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



// const Footer: React.FC = () => {
//   return (
//     <>
//       <style>{`
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
//           width: 10px;
//           height: 16px;
//           border-right: 4px solid #000;
//           border-bottom: 4px solid #000;
//         }
//         .orange-tick { border-color: #f97316; }
//         .tick.top { top: -1px; left: 50%; transform: translateX(-50%) rotate(45deg); }
//         .tick.right { right: -1px; top: 50%; transform: translateY(-50%) rotate(135deg); }
//         .tick.bottom { bottom: -1px; left: 50%; transform: translateX(-50%) rotate(225deg); }
//         .tick.left { left: -1px; top: 50%; transform: translateY(-50%) rotate(315deg); }
//       `}</style>

//       <footer className="relative bg-gray-800 text-white overflow-hidden">
        
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
//             <div className="space-y-6 text-center sm:text-left lg:col-span-1">
//               <div className="flex justify-center sm:justify-start items-center gap-3">
//                 <AnimatedLogo />
//                 <span className="font-black text-2xl">
//                   <span className="text-black">BOLD</span>
//                   <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">VIBE</span>
//                 </span>
//               </div>

//               <p className="text-gray-400 text-m leading-relaxed">
//                 Empowering businesses with cutting-edge technology solutions. We turn your digital dreams into reality.
//               </p>
              

//               <div className="flex justify-center sm:justify-start gap-4">
//                 <a 
//                   href="https://www.instagram.com/boldvibetechnologiespvt" 
//                   target="_blank" 
//                   rel="noreferrer"
//                   className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
//                 >
//                   <Instagram className="w-5 h-5" />
//                 </a>
//                 <a 
//                   href="https://www.linkedin.com/in/bold-vibe-2479283a4?utm" 
//                   target="_blank" 
//                   rel="noreferrer"
//                   className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
//                 >
//                   <Linkedin className="w-5 h-5" />
//                 </a>
//                 <a 
//                   href="https://wa.me/916265259661" 
//                   target="_blank" 
//                   rel="noreferrer"
//                   className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
//                 >
//                   <MessageCircle className="w-5 h-5" />
//                 </a>
//                 <a 
//                   href="mailto:info@boldvibetech.com"
//                   className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
//                 >
//                   <Mail className="w-5 h-5" />
//                 </a>
//                 <a 
//                   href="https://www.facebook.com/profile.php?id=61586646795488" 
//                   target="_blank" 
//                   rel="noreferrer"
//                   className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
//                 >
//                   <FaFacebookF className="w-4 h-4" />
//                 </a>
//               </div>
//             </div>

//             <div className="text-center sm:text-left">
//               <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
//                 Quick Links
//               </h4>
//               <ul className="space-y-3">
//                 {quickLinks.map((link) => (
//                   <li key={link.name}>
//                     <HashLink
//                       smooth
//                       to={link.path}
//                       className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
//                     >
//                       {link.name}
//                     </HashLink>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="text-center sm:text-left">
//               <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
//                 Services
//               </h4>
//               <ul className="space-y-3 text-gray-400 text-sm">
//                 <li className="hover:text-white transition-colors">Web Development</li>
//                 <li className="hover:text-white transition-colors">Mobile App Development</li>
//                 <li className="hover:text-white transition-colors">AI Automation</li>
//                 <li className="hover:text-white transition-colors">AI Chatbots</li>
//                 <li className="hover:text-white transition-colors">Custom Software</li>
//               </ul>
//             </div>

//             <div className="text-center sm:text-left">
//               <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
//                 Get In Touch
//               </h4>
//               <ul className="space-y-4 text-gray-400 text-sm">
//                 <li className="flex justify-center sm:justify-start gap-3 items-start hover:text-white transition-colors">
//                   <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
//                   <span>info@boldvibetech.com</span>
//                 </li>
//                 <li className="flex justify-center sm:justify-start gap-3 items-center hover:text-white transition-colors">
//                   <Phone className="w-5 h-5 flex-shrink-0" />
//                   <span>+91 6265259661</span>
//                 </li>
//                 <li className="flex justify-center sm:justify-start gap-3 items-start hover:text-white transition-colors">
//                   <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
//                   <span>Indore, Madhya Pradesh<br />India</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-700 py-6">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
//               <p className="flex items-center gap-2">
//                 © 2025 BoldVibe Technologies. Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> in India
//               </p>
            
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

// import React from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Instagram,
//   Linkedin,
//   MessageCircle,
//   Heart,
// } from "lucide-react";
// import { HashLink } from "react-router-hash-link";
// import { FaFacebookF } from "react-icons/fa";

// interface QuickLink {
//   name: string;
//   path: string;
// }

// const quickLinks: QuickLink[] = [
//   { name: "Home", path: "/#home" },
//   { name: "About Us", path: "/#values" },
//   { name: "Services", path: "/#services" },
//   { name: "Projects", path: "/#projects" },
//   { name: "Our Team", path: "/#team" },
// ];

// const AnimatedLogo: React.FC = () => (
//   <div className="relative w-12 h-12 flex items-center justify-center">
//     <div className="tick-orbit absolute inset-0">
//       <span className="tick top orange-tick" />
//       <span className="tick right" />
//       <span className="tick bottom" />
//       <span className="tick left" />
//     </div>
//     <span className="relative z-10 font-extrabold text-black text-sm">
//       B
//     </span>
//   </div>
// );

// const Footer: React.FC = () => {
//   return (
//     <>
//       <style>{`
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
//           width: 10px;
//           height: 16px;
//           border-right: 4px solid #000;
//           border-bottom: 4px solid #000;
//         }
//         .orange-tick { border-color: #f97316; }
//         .tick.top { top: -1px; left: 50%; transform: translateX(-50%) rotate(45deg); }
//         .tick.right { right: -1px; top: 50%; transform: translateY(-50%) rotate(135deg); }
//         .tick.bottom { bottom: -1px; left: 50%; transform: translateX(-50%) rotate(225deg); }
//         .tick.left { left: -1px; top: 50%; transform: translateY(-50%) rotate(315deg); }
//       `}</style>

//       <footer className="relative bg-gray-800 text-white overflow-hidden">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
            
//             {/* Logo + Social */}
//             <div className="space-y-6 text-center sm:text-left">
//               <div className="flex justify-center sm:justify-start items-center gap-3">
//                 <AnimatedLogo />
//                 <span className="font-black text-2xl">
//                   <span className="text-black">BOLD</span>
//                   <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
//                     VIBE
//                   </span>
//                 </span>
//               </div>

//               <p className="text-gray-400 text-sm leading-relaxed">
//                 Empowering businesses with cutting-edge technology solutions.
//                 We turn your digital dreams into reality.
//               </p>

//               <div className="flex justify-center sm:justify-start gap-4">
//                 <a
//                   href="https://www.instagram.com/boldvibetechnologiespvt"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
//                 >
//                   <Instagram className="w-5 h-5" />
//                 </a>

//                 <a
//                   href="https://www.linkedin.com"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
//                 >
//                   <Linkedin className="w-5 h-5" />
//                 </a>

//                 <a
//                   href="https://wa.me/916265259661"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
//                 >
//                   <MessageCircle className="w-5 h-5" />
//                 </a>

//                 <a
//                   href="mailto:info@boldvibetech.com"
//                   className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
//                 >
//                   <Mail className="w-5 h-5" />
//                 </a>

//                 <a
//                   href="https://www.facebook.com/profile.php?id=61586646795488"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
//                 >
//                   <FaFacebookF className="w-4 h-4" />
//                 </a>
//               </div>
//             </div>

//             {/* Quick Links (2 column grid) */}
//             <div className="text-center sm:text-left">
//               <h4 className="font-bold text-lg mb-6">Quick Links</h4>
//               <ul className="grid grid-cols-2 gap-3">
//                 {quickLinks.map((link) => (
//                   <li key={link.name}>
//                     <HashLink
//                       smooth
//                       to={link.path}
//                       className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
//                     >
//                       {link.name}
//                     </HashLink>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Services (2 column grid) */}
//             <div className="text-center sm:text-left">
//               <h4 className="font-bold text-lg mb-6">Services</h4>
//               <ul className="grid grid-cols-2 gap-3 text-gray-400 text-sm">
//                 <li className="hover:text-white">Web Development</li>
//                 <li className="hover:text-white">Mobile App Development</li>
//                 <li className="hover:text-white">AI Automation</li>
//                 <li className="hover:text-white">AI Chatbots</li>
//                 <li className="hover:text-white">Custom Software</li>
//               </ul>
//             </div>

//             {/* Contact */}
//             <div className="text-center sm:text-left">
//               <h4 className="font-bold text-lg mb-6">Get In Touch</h4>
//               <ul className="space-y-4 text-gray-400 text-sm">
//                 <li className="flex justify-center sm:justify-start gap-3">
//                   <Mail className="w-5 h-5" />
//                   <span>info@boldvibetech.com</span>
//                 </li>
//                 <li className="flex justify-center sm:justify-start gap-3">
//                   <Phone className="w-5 h-5" />
//                   <span>+91 6265259661</span>
//                 </li>
//                 <li className="flex justify-center sm:justify-start gap-3">
//                   <MapPin className="w-5 h-5" />
//                   <span>
//                     Indore, Madhya Pradesh <br /> India
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Bottom */}
//           <div className="border-t border-gray-700 py-6 text-center text-gray-400 text-sm">
//             © 2025 BoldVibe Technologies. Made with{" "}
//             <Heart className="inline w-4 h-4 text-red-500 fill-current" /> in India
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;


// // 4 desktop 2 mobile
// import React from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Instagram,
//   Linkedin,
//   MessageCircle,
//   Heart,
// } from "lucide-react";
// import { HashLink } from "react-router-hash-link";
// import { FaFacebookF } from "react-icons/fa";

// interface QuickLink {
//   name: string;
//   path: string;
// }

// const quickLinks: QuickLink[] = [
//   { name: "Home", path: "/#home" },
//   { name: "About Us", path: "/#values" },
//   { name: "Services", path: "/#services" },
//   { name: "Projects", path: "/#projects" },
//   { name: "Our Team", path: "/#team" },
// ];

// const AnimatedLogo: React.FC = () => (
//   <div className="relative w-12 h-12 flex items-center justify-center">
//     <div className="tick-orbit absolute inset-0">
//       <span className="tick top orange-tick" />
//       <span className="tick right" />
//       <span className="tick bottom" />
//       <span className="tick left" />
//     </div>
//     <span className="relative z-10 font-extrabold text-black text-sm">
//       B
//     </span>
//   </div>
// );

// const Footer: React.FC = () => {
//   return (
//     <>
//       <style>{`
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
//           width: 10px;
//           height: 16px;
//           border-right: 4px solid #000;
//           border-bottom: 4px solid #000;
//         }
//         .orange-tick { border-color: #f97316; }
//         .tick.top { top: -1px; left: 50%; transform: translateX(-50%) rotate(45deg); }
//         .tick.right { right: -1px; top: 50%; transform: translateY(-50%) rotate(135deg); }
//         .tick.bottom { bottom: -1px; left: 50%; transform: translateX(-50%) rotate(225deg); }
//         .tick.left { left: -1px; top: 50%; transform: translateY(-50%) rotate(315deg); }
//       `}</style>

//       <footer className="relative bg-gray-800 text-white overflow-hidden">
        
//         {/* background blur */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           {/* MAIN GRID (2 col mobile, 4 col desktop) */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12">

//             {/* Logo Section (full width on mobile) */}
//             <div className="space-y-6 text-center sm:text-left col-span-2 lg:col-span-1">
//               <div className="flex justify-center sm:justify-start items-center gap-3">
//                 <AnimatedLogo />
//                 <span className="font-black text-2xl">
//                   <span className="text-black">BOLD</span>
//                   <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
//                     VIBE
//                   </span>
//                 </span>
//               </div>

//               <p className="text-gray-400 text-sm leading-relaxed">
//                 Empowering businesses with cutting-edge technology solutions.
//               </p>

//               <div className="flex justify-center sm:justify-start gap-3 flex-wrap">
//                 <a href="#" className="w-9 h-9 bg-gray-700 hover:bg-pink-500 rounded-full flex items-center justify-center">
//                   <Instagram size={18} />
//                 </a>
//                 <a href="#" className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center">
//                   <Linkedin size={18} />
//                 </a>
//                 <a href="#" className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center">
//                   <MessageCircle size={18} />
//                 </a>
//                 <a href="#" className="w-9 h-9 bg-red-500 rounded-full flex items-center justify-center">
//                   <Mail size={18} />
//                 </a>
//                 <a href="#" className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center">
//                   <FaFacebookF size={14} />
//                 </a>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div className="text-center sm:text-left">
//               <h4 className="font-bold text-lg mb-4">Quick Links</h4>
//               <ul className="grid grid-cols-2 gap-2 text-sm">
//                 {quickLinks.map((link) => (
//                   <li key={link.name}>
//                     <HashLink
//                       smooth
//                       to={link.path}
//                       className="text-gray-400 hover:text-white transition"
//                     >
//                       {link.name}
//                     </HashLink>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Services */}
//             <div className="text-center sm:text-left">
//               <h4 className="font-bold text-lg mb-4">Services</h4>
//               <ul className="grid grid-cols-2 gap-2 text-gray-400 text-sm">
//                 <li className="hover:text-white">Web Dev</li>
//                 <li className="hover:text-white">Mobile Apps</li>
//                 <li className="hover:text-white">AI Automation</li>
//                 <li className="hover:text-white">Chatbots</li>
//                 <li className="hover:text-white">Custom Software</li>
//               </ul>
//             </div>

//             {/* Contact */}
//             <div className="text-center sm:text-left">
//               <h4 className="font-bold text-lg mb-4">Contact</h4>
//               <ul className="space-y-3 text-gray-400 text-sm">
//                 <li className="flex justify-center sm:justify-start gap-2">
//                   <Mail size={16} />
//                   info@boldvibetech.com
//                 </li>
//                 <li className="flex justify-center sm:justify-start gap-2">
//                   <Phone size={16} />
//                   +91 6265259661
//                 </li>
//                 <li className="flex justify-center sm:justify-start gap-2">
//                   <MapPin size={16} />
//                   Indore, India
//                 </li>
//               </ul>
//             </div>

//           </div>

//           {/* bottom */}
//           <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-xs">
//             © 2025 BoldVibe Technologies. Made with{" "}
//             <Heart className="inline w-3 h-3 text-red-500 fill-current" /> in India
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

// import React from "react";
// import { Link } from "react-router-dom";
// import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

// const Footer: React.FC<{ themeColor?: string; themeBg?: string }> = ({ 
//   themeColor = "#ea580c", 
//   themeBg = "#fff7ed" 
// }) => {
  
//   const footerSections = [
//     {
//       title: "Company",
//       links: [
//         { name: "About Us", href: "/about" },
//         { name: "Our Services", href: "/services" },
//         { name: "Portfolio", href: "/projects" },
//         { name: "Contact", href: "/contact" },
//       ],
//     },
//     {
//       title: "Services",
//       links: [
//         { name: "Web Development", href: "#" },
//         { name: "App Development", href: "#" },
//         { name: "UI/UX Design", href: "#" },
//         { name: "Digital Marketing", href: "#" },
//       ],
//     },
//     {
//       title: "Support",
//       links: [
//         { name: "Help Center", href: "#" },
//         { name: "Privacy Policy", href: "#" },
//         { name: "Terms of Use", href: "#" },
//         { name: "FAQ", href: "#" },
//       ],
//     },
//   ];

//   return (
//     <footer className="w-full bg-white border-t border-gray-100 pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Main Grid: Mobile me 2, Desktop me 4 */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          
//           {/* 1. Brand Section */}
//           <div className="col-span-2 md:col-span-1">
//             <h2 className="text-2xl font-bold mb-4">
//               <span className="text-black">BOLD</span>
//               <span style={{ color: themeColor }}>VIBE</span>
//             </h2>
//             <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
//               Empowering businesses with cutting-edge digital solutions and creative excellence.
//             </p>
//             <div className="flex gap-4">
//               <Facebook size={18} className="text-gray-400 hover:text-black cursor-pointer transition" />
//               <Twitter size={18} className="text-gray-400 hover:text-black cursor-pointer transition" />
//               <Instagram size={18} className="text-gray-400 hover:text-black cursor-pointer transition" />
//               <Linkedin size={18} className="text-gray-400 hover:text-black cursor-pointer transition" />
//             </div>
//           </div>

//           {/* 2, 3, 4. Dynamic Sections */}
//           {footerSections.map((section) => (
//             <div key={section.title}>
//               <h4 className="font-bold text-gray-900 mb-5 uppercase tracking-wider text-xs">
//                 {section.title}
//               </h4>
//               <ul className="space-y-3">
//                 {section.links.map((link) => (
//                   <li key={link.name}>
//                     <Link 
//                       to={link.href} 
//                       className="text-gray-500 hover:text-black text-sm transition-colors duration-300 flex items-center group"
//                     >
//                       <span 
//                         className="w-0 h-[2px] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"
//                         style={{ backgroundColor: themeColor }}
//                       />
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Contact Strip */}
//         <div 
//           className="rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 mb-12"
//           style={{ backgroundColor: themeBg }}
//         >
//           <div className="flex flex-col md:flex-row gap-6 md:gap-10">
//             <div className="flex items-center gap-3">
//               <div className="p-2 bg-white rounded-lg shadow-sm">
//                 <Mail size={18} style={{ color: themeColor }} />
//               </div>
//               <span className="text-sm font-medium">contact@boldvibe.com</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <div className="p-2 bg-white rounded-lg shadow-sm">
//                 <Phone size={18} style={{ color: themeColor }} />
//               </div>
//               <span className="text-sm font-medium">+91 98765 43210</span>
//             </div>
//           </div>
//           <button 
//             className="px-8 py-3 rounded-xl font-bold text-white shadow-lg hover:opacity-90 transition transform hover:-translate-y-1"
//             style={{ backgroundColor: themeColor }}
//           >
//             Get Started
//           </button>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-xs font-medium">
//           <p>© 2026 BoldVibe Digital Solutions. All rights reserved.</p>
//           <div className="flex gap-6 uppercase tracking-widest">
//             <span className="hover:text-black cursor-pointer">Privacy</span>
//             <span className="hover:text-black cursor-pointer">Terms</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  MessageCircle,
  Heart,
} from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { FaFacebookF } from "react-icons/fa";

interface QuickLink {
  name: string;
  path: string;
}

const quickLinks: QuickLink[] = [
  { name: "Home", path: "/#home" },
  { name: "About Us", path: "/#values" },
  { name: "Services", path: "/#services" },
  { name: "Projects", path: "/#projects" },
  { name: "Our Team", path: "/#team" },
];

const AnimatedLogo: React.FC = () => (
  <div className="relative w-10 h-10 flex items-center justify-center">
    <div className="tick-orbit absolute inset-0">
      <span className="tick top orange-tick" />
      <span className="tick right" />
      <span className="tick bottom" />
      <span className="tick left" />
    </div>
    <span className="relative z-10 font-extrabold text-black text-xs">
      B
    </span>
  </div>
);

const Footer: React.FC = () => {
  return (
    <>
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
          width: 8px;
          height: 12px;
          border-right: 3px solid #000;
          border-bottom: 3px solid #000;
        }
        .orange-tick { border-color: #f97316; }
        .tick.top { top: -1px; left: 50%; transform: translateX(-50%) rotate(45deg); }
        .tick.right { right: -1px; top: 50%; transform: translateY(-50%) rotate(135deg); }
        .tick.bottom { bottom: -1px; left: 50%; transform: translateX(-50%) rotate(225deg); }
        .tick.left { left: -1px; top: 50%; transform: translateY(-50%) rotate(315deg); }
      `}</style>

      <footer className="relative bg-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 py-12">
            
            {/* Brand Section */}
            <div className="col-span-2 lg:col-span-1 space-y-6">
              <div className="flex items-center gap-3">
                <AnimatedLogo />
                <span className="font-black text-xl">
                  <span className="text-white">BOLD</span>
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">VIBE</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Empowering businesses with cutting-edge technology solutions.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.instagram.com/boldvibetechnologiespvt" target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/bold-vibe-2479283a4" target="_blank" rel="noreferrer" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://wa.me/916265259661" target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-700 hover:bg-green-500 rounded-full flex items-center justify-center transition-all">
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61586646795488" target="_blank" rel="noreferrer" className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center transition-all">
                  <FaFacebookF className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="col-span-1">
              <h4 className="text-white font-bold text-base mb-4 border-b border-orange-500/30 pb-1 inline-block">
                Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <HashLink smooth to={link.path} className="text-gray-400 hover:text-white text-sm transition-all">
                      {link.name}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="col-span-1">
              <h4 className="text-white font-bold text-base mb-4 border-b border-orange-500/30 pb-1 inline-block">
                Services
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white">Web Dev</li>
                <li className="hover:text-white">App Dev</li>
                <li className="hover:text-white">AI Solutions</li>
                <li className="hover:text-white">Chatbots</li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-white font-bold text-base mb-4 border-b border-orange-500/30 pb-1 inline-block">
                Get In Touch
              </h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-3 group">
                  <Mail className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span className="break-all group-hover:text-white">info@boldvibetech.com</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                  <span className="group-hover:text-white">+91 6265259661</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span className="group-hover:text-white">Indore, MP, India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700/50 py-6">
            <div className="flex flex-col items-center gap-2 text-gray-500 text-xs text-center">
              <p>© 2025 BoldVibe Technologies.</p>
              <p className="flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-red-500 fill-current" /> in India
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
