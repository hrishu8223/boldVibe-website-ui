// import React, { useRef, useEffect } from "react";
// import { Sparkles, Award, Users } from "lucide-react";

// interface Member {
//   id: number;
//   name: string;
//   role: string;
//   category: string;
//   image: string;
//   description: string;
//   tags: string[];
//   // portfolio: string;
// }

// const Team: React.FC = () => {
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const animationRef = useRef<number | null>(null);

//   const owners: Member[] = [
//     {
//       id: 101,
//       name: "DINESH BIRLA",
//       role: "DIRECTOR",
//       category: "Owner",
//       image: "/assets/bb.JPG",
//       description:
//         "Visionary leader driving innovation and growth. Passionate about building impactful software solutions.",
//       tags: [],
//       // portfolio: "https://dinesh-rouge.vercel.app/",
//     },
//     {
//       id: 102,
//       name: "VISHAL SATSANGI",
//       role: "DIRECTOR",
//       category: "Owner",
//       image: "/assets/vishal.jpeg",
//       description:
//         "Tech enthusiast and problem solver, ensuring the team delivers cutting-edge solutions with excellence.",
//       tags: [],
//       // portfolio: "https://example.com/vishal",
//     },
//   ];

//   const members: Member[] = [
//     {
//       id: 1,
//       name: "Nisha Yadav",
//       role: "Senior React Native Developer",
//       category: "Engineering",
//       image: "/assets/Nisha.jpg",
//       description:
//         "Expert in mobile app development with strong experience in scalable architectures.",
//       tags: ["React Native", "Expo", "Android", "iOS"],
//       // portfolio: "https://nisha-portfolio-two-teal.vercel.app/",
//     },
//     {
//       id: 2,
//       name: "Dikshika Lohar",
//       role: "Fullstack Developer",
//       category: "Engineering",
//       image: "/assets/dikshikaa.jpeg",
//       description:
//         "MERN stack developer passionate about clean UI and performant backend systems.",
//       tags: ["MERN", "MongoDB", "React", "Node.js"],
//       // portfolio: "https://dikki-tapk.vercel.app/",
//     },
    
//     {
//       id: 3,
//       name: "Rajkumar",
//       role: "MERN Developer",
//       category: "Engineering",
//       image: "/assets/rajj.jpg",
//       description:
//         "Fullstack engineer focused on scalable APIs and robust frontend solutions.",
//       tags: ["MERN", "Express", "React"],
//       // portfolio: "https://raj-flame.vercel.app/",
//     },
//     {
//       id: 4,
//       name: "Umashankar",
//       role: "Fullstack Developer",
//       category: "Engineering",
//       image: "/assets/umashnkr.jpg",
//       description:
//         "Backend-heavy MERN developer with strong database optimization skills.",
//       tags: ["Reactjs", "Node.js", "MongoDB", "Express"],
//       // portfolio: "https://example.com/umashankar",
//     },
//     {
//       id: 6,
//       name: "Nilesh Parmar",
//       role: "Frontend Developer",
//       category: "Engineering",
//       image: "/assets/Nileshhh.jpg",
//       description:
//         "Frontend specialist focused on pixel-perfect UI and smooth interactions.",
//       tags: ["HTML", "CSS", "React"],
//       // portfolio: "https://nilesh-three.vercel.app/",
//     },
//     {
//       id: 7,
//       name: "Khemraj",
//       role: "Frontend Developer",
//       category: "Engineering",
//       image: "/assets/khemraj.jpeg",
//       description:
//         "Creative frontend developer building clean and responsive interfaces.",
//       tags: ["HTML", "CSS", "React"],
//       // portfolio: "https://khem.vercel.app/",
//     },
//     {
//       id: 8,
//       name: "Vishal",
//       role: "Figma, Graphic Designer",
//       category: "Engineering",
//       image: "/assets/Visha.jpg",
//       description:
//         "User-focused designs crafted in Figma. Turning ideas into clean, modern visual experiences.",
//       tags: ["Figma", "Graphic"],
//       // portfolio: "https://vishal-jsrw.vercel.app/",
//     },
//   ];

//   useEffect(() => {
//     const slider = sliderRef.current;
//     if (!slider) return;

//     let lastTime = 0;
//     const duration = 30000;

//     const animate = (time: number) => {
//       if (!lastTime) lastTime = time;
//       const delta = time - lastTime;
//       lastTime = time;

//       const speed = slider.scrollWidth / duration;
//       slider.scrollLeft += speed * delta;

//       if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
//         slider.scrollLeft = 0;
//       }

//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animationRef.current = requestAnimationFrame(animate);

//     return () => {
//       if (animationRef.current) cancelAnimationFrame(animationRef.current);
//     };
//   }, []);

//   return (
//     <main className="pt-20 md:pt-2">
//       <section className="relative py-16 md:py-24 min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">

//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-32 left-20 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
//           <div className="absolute top-48 right-20 w-80 h-80 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>
//           <div className="absolute bottom-32 left-1/2 w-80 h-80 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow"></div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 relative z-10">

//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200 shadow-sm mb-6">
//               <Users className="w-4 h-4 text-blue-600" />
//               <span className="text-sm font-semibold text-blue-700">Our Team</span>
//             </div>

//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
//               Meet The <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experts</span>
//             </h2>

//             <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//               The brilliant minds behind our success. Passionate professionals dedicated to delivering excellence.
//             </p>
//           </div>

//           {/* Owners Section */}
//           <div className="mb-20">
//             <div className="flex items-center justify-center gap-3 mb-10">
//               <Award className="w-6 h-6 text-orange-500" />
//               <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Our Leaders</h3>
//               <Award className="w-6 h-6 text-orange-500" />
//             </div>

//             <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//               {owners.map((owner) => (
//                 <a
//                   key={owner.id}
//                   // href={owner.portfolio}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//                 >
//                   {/* Gradient Border Effect */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                   <div className="relative bg-white m-[2px] rounded-2xl p-8">
//                     {/* Owner Image with Gradient Ring */}
//                     <div className="relative w-32 h-32 mx-auto mb-6">
//                       <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-spin-slow"></div>
//                       <img
//                         src={owner.image}
//                         alt={owner.name}
//                         className="relative w-full h-full rounded-full object-cover border-4 border-white"
//                       />
//                     </div>

//                     {/* Owner Info */}
//                     <div className="text-center">
//                       <h4 className="text-2xl font-bold text-gray-900 mb-2">{owner.name}</h4>
//                       <div className="inline-block px-4 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
//                         <p className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                           {owner.role}
//                         </p>
//                       </div>
//                       <p className="text-gray-600 mb-6">{owner.description}</p>

//                       {/* Tags */}
//                       <div className="flex flex-wrap gap-2 justify-center">
//                         {owner.tags.map((tag, i) => (
//                           <span
//                             key={i}
//                             className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Team Members Section */}
//           <div>
//             <div className="flex items-center justify-center gap-3 mb-10">
//               <Sparkles className="w-6 h-6 text-blue-500" />
//               <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Core Team</h3>
//               <Sparkles className="w-6 h-6 text-blue-500" />
//             </div>

//             {/* Mobile Slider */}
//             <div
//               ref={sliderRef}
//               className="flex sm:hidden gap-4 overflow-x-hidden px-3 mb-8"
//             >
//               {members.map((member) => (
//                 <a
//                   key={member.id}
//                   // href={member.portfolio}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-[85vw] max-w-[300px] shrink-0 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
//                 >
//                   <div className="relative w-24 h-24 mx-auto mb-4">
//                     <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="relative w-full h-full rounded-full object-cover border-4 border-white"
//                     />
//                   </div>

//                   <h4 className="font-bold text-gray-900 text-center mb-1">{member.name}</h4>
//                   <p className="text-blue-600 text-sm text-center font-semibold mb-3">{member.role}</p>
//                   <p className="text-gray-600 text-xs text-center line-clamp-3 mb-4">
//                     {member.description}
//                   </p>

//                   <div className="flex flex-wrap gap-1 justify-center">
//                     {member.tags.slice(0, 2).map((tag, i) => (
//                       <span
//                         key={i}
//                         className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </a>
//               ))}
//             </div>

//             {/* Desktop Grid */}
//             <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {members.map((member, index) => {
//                 const gradients = [
//                   'from-blue-500 to-cyan-500',
//                   'from-purple-500 to-pink-500',
//                   'from-orange-500 to-red-500',
//                   'from-green-500 to-emerald-500',
//                   'from-indigo-500 to-purple-500',
//                   'from-pink-500 to-rose-500',
//                   'from-cyan-500 to-blue-500',
//                   'from-violet-500 to-purple-500',
//                 ];
//                 const gradient = gradients[index % gradients.length];

//                 return (
//                   <a
//                     key={member.id}
//                     // href={member.portfolio}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
//                   >
//                     {/* Member Image with Gradient Ring */}
//                     <div className="relative w-24 h-24 mx-auto mb-4">
//                       <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-full group-hover:scale-110 transition-transform`}></div>
//                       <img
//                         src={member.image}
//                         alt={member.name}
//                         className="relative w-full h-full rounded-full object-cover border-4 border-white"
//                       />
//                     </div>

//                     {/* Member Info */}
//                     <h4 className="font-bold text-gray-900 text-center mb-1">{member.name}</h4>
//                     <p className="text-sm text-center font-semibold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                       {member.role}
//                     </p>
//                     <p className="text-gray-600 text-sm text-center mb-4 line-clamp-3">
//                       {member.description}
//                     </p>

//                     {/* Tags */}
//                     <div className="flex flex-wrap gap-2 justify-center">
//                       {member.tags.slice(0, 3).map((tag, i) => (
//                         <span
//                           key={i}
//                           className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </a>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Custom Animations */}
//         <style>{`
//           @keyframes float {
//             0%, 100% { transform: translate(0, 0) scale(1); }
//             33% { transform: translate(30px, -30px) scale(1.1); }
//             66% { transform: translate(-30px, 30px) scale(0.9); }
//           }
          
//           @keyframes float-delayed {
//             0%, 100% { transform: translate(0, 0) scale(1); }
//             33% { transform: translate(-40px, 40px) scale(1.1); }
//             66% { transform: translate(40px, -40px) scale(0.9); }
//           }
          
//           @keyframes float-slow {
//             0%, 100% { transform: translate(0, 0) scale(1); }
//             50% { transform: translate(20px, -40px) scale(1.05); }
//           }
          
//           @keyframes spin-slow {
//             from { transform: rotate(0deg); }
//             to { transform: rotate(360deg); }
//           }
          
//           .animate-float {
//             animation: float 15s infinite ease-in-out;
//           }
          
//           .animate-float-delayed {
//             animation: float-delayed 20s infinite ease-in-out;
//           }
          
//           .animate-float-slow {
//             animation: float-slow 25s infinite ease-in-out;
//           }
          
//           .animate-spin-slow {
//             animation: spin-slow 8s linear infinite;
//           }
          
//           .line-clamp-3 {
//             display: -webkit-box;
//             -webkit-line-clamp: 3;
//             -webkit-box-orient: vertical;
//             overflow: hidden;
//           }
//         `}</style>
//       </section>
//     </main>
//   );
// };

// export default Team;
import React, { useRef, useEffect } from "react";
import { Sparkles, Award, Users, Code2, Smartphone, Palette, Database, Globe, Layers, Cpu, BrainCircuit } from "lucide-react";

interface Member {
  id: number;
  name: string;
  role: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  // portfolio: string;
}

interface ExpertiseCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  gradient: string;
  iconBg: string;
}

const Team: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const owners: Member[] = [
    {
      id: 101,
      name: "DINESH BIRLA",
      role: "DIRECTOR",
      category: "Owner",
      image: "/assets/bb.JPG",
      description:
        "Visionary leader driving innovation and growth. Passionate about building impactful software solutions.",
      tags: [],
      // portfolio: "https://dinesh-rouge.vercel.app/",
    },
    {
      id: 102,
      name: "VISHAL SATSANGI",
      role: "DIRECTOR",
      category: "Owner",
      image: "/assets/vishal.jpeg",
      description:
        "Tech enthusiast and problem solver, ensuring the team delivers cutting-edge solutions with excellence.",
      tags: [],
      // portfolio: "https://example.com/vishal",
    },
  ];

  // ── Expertise cards replacing individual team member cards ──────────────
  const expertiseCards: ExpertiseCard[] = [
    {
      id: 1,
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      subtitle: "React Native · Expo",
      description:
        "Cross-platform mobile apps for Android & iOS with smooth, native-like performance and scalable architecture.",
      tags: ["React Native", "Expo", "Android", "iOS"],
      gradient: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      icon: <Layers className="w-8 h-8" />,
      title: "Fullstack Engineering",
      subtitle: "MERN Stack",
      description:
        "End-to-end web applications with clean UI, performant APIs, and robust backend systems using modern stacks.",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      gradient: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-100 text-purple-600",
    },
    {
      id: 3,
      icon: <Globe className="w-8 h-8" />,
      title: "Frontend Development",
      subtitle: "React · Tailwind",
      description:
        "Pixel-perfect, responsive interfaces with smooth interactions and modern design systems that delight users.",
      tags: ["React", "Tailwind CSS", "HTML", "CSS"],
      gradient: "from-orange-500 to-red-500",
      iconBg: "bg-orange-100 text-orange-600",
    },
    {
      id: 4,
      icon: <Database className="w-8 h-8" />,
      title: "Backend & APIs",
      subtitle: "Node.js · Express",
      description:
        "Scalable REST APIs, microservices, and database optimization for high-performance server-side applications.",
      tags: ["Node.js", "Express", "MongoDB", "REST API"],
      gradient: "from-green-500 to-emerald-500",
      iconBg: "bg-green-100 text-green-600",
    },
    {
      id: 5,
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX & Design",
      subtitle: "Figma · Graphic Design",
      description:
        "User-focused designs crafted in Figma. Turning ideas into clean, modern visual experiences that convert.",
      tags: ["Figma", "UI/UX", "Graphic Design", "Prototyping"],
      gradient: "from-pink-500 to-rose-500",
      iconBg: "bg-pink-100 text-pink-600",
    },
    {
      id: 6,
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Applications",
      subtitle: "SaaS · Portals",
      description:
        "Feature-rich web platforms, dashboards, and SaaS products built with maintainability and scalability in mind.",
      tags: ["SaaS", "Dashboards", "Portals", "React"],
      gradient: "from-indigo-500 to-purple-500",
      iconBg: "bg-indigo-100 text-indigo-600",
    },
    {
      id: 7,
      icon: <Cpu className="w-8 h-8" />,
      title: "System Architecture",
      subtitle: "Scalable · Reliable",
      description:
        "Designing robust system architectures that handle real-world load with reliability, security, and speed.",
      tags: ["Architecture", "DevOps", "Cloud", "Security"],
      gradient: "from-cyan-500 to-blue-500",
      iconBg: "bg-cyan-100 text-cyan-600",
    },
    {
      id: 8,
      icon: <BrainCircuit className="w-8 h-8" />,
      title: "Innovation & R&D",
      subtitle: "Emerging Tech",
      description:
        "Continuously exploring new technologies to bring innovative, future-ready solutions to every client project.",
      tags: ["AI Integration", "Automation", "R&D", "Innovation"],
      gradient: "from-violet-500 to-purple-500",
      iconBg: "bg-violet-100 text-violet-600",
    },
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let lastTime = 0;
    const duration = 30000;

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      const speed = slider.scrollWidth / duration;
      slider.scrollLeft += speed * delta;

      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <main className="pt-20 md:pt-2">
      <section className="relative py-16 md:py-24 min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-20 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute top-48 right-20 w-80 h-80 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>
          <div className="absolute bottom-32 left-1/2 w-80 h-80 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">

          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200 shadow-sm mb-6">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Our Team</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              Meet The <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experts</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              The brilliant minds behind our success. Passionate professionals dedicated to delivering excellence.
            </p>
          </div>

          {/* Owners Section — unchanged */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-10">
              <Award className="w-6 h-6 text-orange-500" />
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Our Leaders</h3>
              <Award className="w-6 h-6 text-orange-500" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {owners.map((owner) => (
                <a
                  key={owner.id}
                  // href={owner.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative bg-white m-[2px] rounded-2xl p-8">
                    {/* Owner Image with Gradient Ring */}
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-spin-slow"></div>
                      <img
                        src={owner.image}
                        alt={owner.name}
                        className="relative w-full h-full rounded-full object-cover border-4 border-white"
                      />
                    </div>

                    {/* Owner Info */}
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">{owner.name}</h4>
                      <div className="inline-block px-4 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
                        <p className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {owner.role}
                        </p>
                      </div>
                      <p className="text-gray-600 mb-6">{owner.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 justify-center">
                        {owner.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Core Team — Expertise Cards (no photos/names) */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-10">
              <Sparkles className="w-6 h-6 text-blue-500" />
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Core Work</h3>
              <Sparkles className="w-6 h-6 text-blue-500" />
            </div>

            <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10">
              A powerhouse team of specialists — each bringing deep expertise across the full technology spectrum.
            </p>

            {/* Mobile Slider */}
            <div
              ref={sliderRef}
              className="flex sm:hidden gap-4 overflow-x-hidden px-3 mb-8"
            >
              {expertiseCards.map((card) => (
                <div
                  key={card.id}
                  className="w-[85vw] max-w-[300px] shrink-0 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 mx-auto ${card.iconBg}`}>
                    {card.icon}
                  </div>

                  <h4 className="font-bold text-gray-900 text-center text-base mb-1">{card.title}</h4>
                  <p className="text-blue-600 text-xs text-center font-semibold mb-3">{card.subtitle}</p>
                  <p className="text-gray-600 text-xs text-center line-clamp-3 mb-4">
                    {card.description}
                  </p>

                  <div className="flex flex-wrap gap-1 justify-center">
                    {card.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Grid */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertiseCards.map((card) => (
                <div
                  key={card.id}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
                >
                  {/* Gradient top bar */}
                  <div className={`h-1 w-full rounded-full bg-gradient-to-r ${card.gradient} mb-5 group-hover:h-1.5 transition-all duration-300`}></div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 mx-auto ${card.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h4 className="font-bold text-gray-900 text-center text-base mb-1">{card.title}</h4>
                  <p className={`text-sm text-center font-semibold mb-3 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                    {card.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm text-center mb-4 line-clamp-3">
                    {card.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {card.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -30px) scale(1.1); }
            66% { transform: translate(-30px, 30px) scale(0.9); }
          }
          
          @keyframes float-delayed {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-40px, 40px) scale(1.1); }
            66% { transform: translate(40px, -40px) scale(0.9); }
          }
          
          @keyframes float-slow {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(20px, -40px) scale(1.05); }
          }
          
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .animate-float {
            animation: float 15s infinite ease-in-out;
          }
          
          .animate-float-delayed {
            animation: float-delayed 20s infinite ease-in-out;
          }
          
          .animate-float-slow {
            animation: float-slow 25s infinite ease-in-out;
          }
          
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
          
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </section>
    </main>
  );
};

export default Team;