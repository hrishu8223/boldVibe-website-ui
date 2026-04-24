// export interface Project {
//   slug: string;
//   title: string;
//   category: string;
//   images: string[];
//   description: string;
//   tech: string[];
//   features: string[];
// }

// export const projectsData: Project[] = [
//   {
//     slug: "samriddhi-agritech",
//     title: "Samriddhi Agritech",
//     category: "Agritech",
//     images: [
//       "/assets/samriddi.JPG",
//       "/assets/sam.jpg",
//     ],
//     description:
//       "A comprehensive digital platform delivering reliable agricultural news, real-time crop insights, and expert farming updates for farmers and agribusinesses.",
//     tech: ["React JS", "Node.js", "MongoDB"],
//     features: [
//       "Real-time agriculture news updates",
//       "Crop advisory and insights",
//       "Admin panel for content management",
//       "Mobile responsive UI",
//       "SEO optimized pages",
//     ],
//   },

//   {
//     slug: "reporterhub",
//     title: "ReporterHub",
//     category: "Media Platform",
//     images: [
//       "/assets/REPORTER.jpg",
//       "/assets/report.jpg",
//     ],
//     description:
//       "An innovative journalism platform enabling reporters to publish verified news and authentic field updates with admin moderation.",
//     tech: ["React JS", "Node.js", "MongoDB"],
//     features: [
//       "Reporter authentication & verification",
//       "News publishing workflow",
//       "Admin approval & moderation panel",
//       "Category-based news filtering",
//       "Secure backend APIs",
//     ],
//   },

//   {
//     slug: "coupon-management",
//     title: "Coupon Management",
//     category: "Business Tool",
//     images: [
//       "/assets/Coupon.jpg",
//       "/assets/coupon2.jpg", // optional second image
//     ],
//     description:
//       "Enterprise-grade coupon management system offering analytics, fraud prevention, and secure coupon redemption.",
//     tech: ["React", "Node.js", "MongoDB"],
//     features: [
//       "Coupon creation & distribution",
//       "Usage tracking & analytics dashboard",
//       "QR code based coupon redemption",
//       "Fraud detection system",
//       "Admin & merchant panels",
//     ],
//   },

//   {
//     slug: "duesapp",
//     title: "DuesApp",
//     category: "Business Tool",
//     images: [
//       "/assets/DuesAppp.jpeg",
//       "/assets/dues1.jpeg",
//     ],
//     description:
//       "Advanced digital dues and coupon platform designed for businesses to manage payments, dues, and fraud prevention efficiently.",
//     tech: ["React Native", "Node.js", "MongoDB"],
//     features: [
//       "Customer dues management",
//       "Digital coupon issuance",
//       "Fraud prevention mechanisms",
//       "Analytics & reports",
//       "Mobile-first experience",
//     ],
//   },

//   {
//     slug: "factory-management",
//     title: "Factory Management",
//     category: "Business Tool",
//     images: [
//       "/assets/facAd.JPG",
//       "/assets/fac2.jpg", // optional second image
//     ],
//     description:
//       "Complete factory operations suite for managing production, inventory, workforce, and daily operational reporting.",
//     tech: ["React", "Node.js", "MongoDB"],
//     features: [
//       "Production planning & tracking",
//       "Inventory & raw material management",
//       "Employee & workforce management",
//       "Role-based admin access",
//       "Daily & monthly reports",
//     ],
//   },

//   {
//     slug: "electrofix-web",
//     title: "ElectroFix Web",
//     category: "E-commerce",
//     images: [
//       "/assets/ele1.jpg",
//       "/assets/ele2.jpg",
//       "/assets/ele3.jpg",
//     ],
//     description:
//       "Full-stack e-commerce platform for electronics services with online payments, admin control, and order tracking.",
//     tech: ["React", "Node.js", "MongoDB"],
//     features: [
//       "Product & service listings",
//       "Online payment integration",
//       "Order tracking system",
//       "Admin dashboard",
//       "Customer support & notifications",
//     ],
//   },
// ];


import React, { useState } from "react";
import {
  ArrowLeft,
  Check,
  ExternalLink,
  Code,
  Sparkles,
} from "lucide-react";

interface Project {
  slug: string;
  title: string;
  category: string;
  images: string[];
  description: string;
  tech: string[];
  features: string[];
}

export const projectsData: Project[] = [
  {
    slug: "samriddhi-agritech",
    title: "Samriddhi Agritech",
    category: "Agritech",
    images: ["/assets/samriddi.JPG", "/assets/sam.jpg"],
    description:
      "A comprehensive digital platform delivering reliable agricultural news, real-time crop insights, and expert farming updates for farmers and agribusinesses.",
    tech: ["React JS", "Node.js", "MongoDB"],
    features: [
      "Real-time agriculture news updates",
      "Crop advisory and insights",
      "Admin panel for content management",
      "Mobile responsive UI",
      "SEO optimized pages",
    ],
  },
  {
    slug: "reporterhub",
    title: "ReporterHub",
    category: "Media Platform",
    images: ["/assets/REPORTER.jpg", "/assets/report.jpg"],
    description:
      "An innovative journalism platform enabling reporters to publish verified news and authentic field updates with admin moderation.",
    tech: ["React JS", "Node.js", "MongoDB"],
    features: [
      "Reporter authentication & verification",
      "News publishing workflow",
      "Admin approval & moderation panel",
      "Category-based news filtering",
      "Secure backend APIs",
    ],
  },
  {
    slug: "coupon-management",
    title: "Coupon Management",
    category: "Business Tool",
    images: ["/assets/Coupon.jpg", "/assets/coupon2.jpg"],
    description:
      "Enterprise-grade coupon management system offering analytics, fraud prevention, and secure coupon redemption.",
    tech: ["React", "Node.js", "MongoDB"],
    features: [
      "Coupon creation & distribution",
      "Usage tracking & analytics dashboard",
      "QR-based coupon redemption",
      "Fraud detection system",
      "Admin & merchant panels",
    ],
  },
  {
    slug: "duesapp",
    title: "DuesApp",
    category: "Business Tool",
    images: ["/assets/DuesAppp.jpeg", "/assets/dues1.jpeg"],
    description:
      "Advanced digital dues and coupon platform designed for businesses to manage payments and fraud prevention efficiently.",
    tech: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Customer dues management",
      "Digital coupon issuance",
      "Fraud prevention mechanisms",
      "Analytics & reports",
      "Mobile-first experience",
    ],
  },
  {
    slug: "factory-management",
    title: "Factory Management",
    category: "Business Tool",
    images: ["/assets/facAd.JPG", "/assets/fac2.jpg"],
    description:
      "Complete factory operations suite for managing production, inventory, workforce, and daily reporting.",
    tech: ["React", "Node.js", "MongoDB"],
    features: [
      "Production planning & tracking",
      "Inventory & raw material management",
      "Employee & workforce management",
      "Role-based admin access",
      "Daily & monthly reports",
    ],
  },
  {
    slug: "electrofix-web",
    title: "ElectroFix Web",
    category: "E-commerce",
    images: ["/assets/ele1.jpg", "/assets/ele2.jpg", "/assets/ele3.jpg"],
    description:
      "Full-stack e-commerce platform for electronics services with payments, admin control, and order tracking.",
    tech: ["React", "Node.js", "MongoDB"],
    features: [
      "Product & service listings",
      "Online payment integration",
      "Order tracking system",
      "Admin dashboard",
      "Customer support & notifications",
    ],
  },
];

const ProjectDetail: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(
    projectsData[0]
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 relative">
      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950 via-black to-blue-900 opacity-50" />

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm sm:text-base">
            <ArrowLeft size={18} />
            Back to Projects
          </button>
        </div>
      </header>

      {/* PROJECT TABS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {projectsData.map((project) => (
            <button
              key={project.slug}
              onClick={() => setSelectedProject(project)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition ${
                selectedProject.slug === project.slug
                  ? "bg-blue-600 text-gray-900"
                  : "bg-gray-50 text-gray-500 hover:bg-slate-800"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-20">
        {/* HERO */}
        <div className="rounded-3xl overflow-hidden border border-blue-900/40 mb-10">
          <div className="p-6 sm:p-10 bg-gradient-to-r from-blue-600 to-blue-900">
            <span className="inline-flex items-center gap-2 bg-white/30 px-3 py-1 rounded-full text-xs sm:text-sm mb-4">
              <Sparkles size={14} />
              {selectedProject.category}
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3">
              {selectedProject.title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl">
              {selectedProject.description}
            </p>
          </div>
        </div>

        {/* IMAGES + DETAILS */}
        <div className="space-y-12">
          {selectedProject.images.map((img, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-6 md:gap-10 items-center`}
            >
              {/* IMAGE */}
              <div className="w-full md:w-1/2">
                <div className="rounded-2xl overflow-hidden border border-blue-900/30 bg-gray-50 aspect-video flex items-center justify-center">
                  <ExternalLink className="text-blue-400" size={36} />
                </div>
              </div>

              {/* DETAILS */}
              <div className="w-full md:w-1/2 space-y-6">
                {index === 0 && (
                  <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 border border-blue-900/30">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Code size={20} /> Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 bg-blue-600 rounded-lg text-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {index === 1 && (
                  <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 border border-blue-900/30">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Sparkles size={20} /> Key Features
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.features.map((f, i) => (
                        <li key={i} className="flex gap-3">
                          <Check className="text-blue-400" size={18} />
                          <span className="text-gray-600">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 bg-gradient-to-r from-blue-600 to-blue-900 rounded-3xl p-6 sm:p-10 text-center border border-blue-500/30">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Interested in this project?
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto text-sm sm:text-base">
            Let’s build something powerful together.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50">
            Contact Us
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
