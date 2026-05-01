import React, { useEffect, useState, useRef } from "react";
import {
  Globe,
  Smartphone,
  Cpu,
  MessageSquare,
  Database,
  Sparkles,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description:
        "High-performance, responsive web applications built for scale and speed using modern frameworks.",
      tags: ["Next.js", "React", "Tailwind"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native-like experiences for iOS and Android using a single codebase for efficient delivery.",
      tags: ["React Native", "Expo", "iOS/Android"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Cpu,
      title: "AI Automation",
      description:
        "Streamline complex workflows and reduce manual tasks with intelligent process automation.",
      tags: ["Python", "Zapier", "n8n"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      description:
        "Intelligent conversational agents trained on your specific business data for 24/7 support.",
      tags: ["OpenAI", "LangChain", "Pinecone"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Database,
      title: "Custom Software",
      description:
        "Bespoke backend and frontend solutions architected for high scalability and security.",
      tags: ["Node.js", "PostgreSQL", "Docker"],
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const totalSlides = services.length + 1; // +1 for CTA card
  const [currentIndex, setCurrentIndex] = useState(0);

  // Touch / swipe state
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const isDragging = useRef(false);

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current = false;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    const diffX = Math.abs(e.touches[0].clientX - touchStartX.current);
    const diffY = Math.abs(e.touches[0].clientY - touchStartY.current);
    if (diffX > diffY && diffX > 5) {
      isDragging.current = true;
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || !isDragging.current) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff < -50) goNext();
    else if (diff > 50) goPrev();
    touchStartX.current = null;
    touchStartY.current = null;
    isDragging.current = false;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setCurrentIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
      </div>
      <div className="absolute inset-0 diagonal-lines-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">What We Offer</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software services tailored to scale your business and accelerate digital transformation.
          </p>
        </div>

        {/* ========== MOBILE SLIDER (swipe only, no buttons) ========== */}
        <div className="block sm:hidden relative">
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="min-w-full px-2">
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-xl">
                      <div
                        className={`bg-gradient-to-br ${service.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-700 font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* CTA Card */}
              <div className="min-w-full px-2">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white shadow-xl text-center min-h-[320px] flex flex-col justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Have a custom request?</h3>
                  <p className="text-gray-600 mb-6">Let's discuss your needs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-5">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-blue-600 w-5" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ========== DESKTOP GRID (unchanged) ========== */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`bg-gradient-to-br ${service.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-700 font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          {/* CTA Card */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white shadow-xl flex flex-col justify-center items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Have a custom request?</h3>
            <p className="text-gray-600 mb-6">We love solving unique challenges.</p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-30px, 30px) rotate(240deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-40px, 40px) rotate(90deg); }
          66% { transform: translate(40px, -40px) rotate(180deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, -40px) rotate(180deg); }
        }
        .animate-float { animation: float 20s infinite ease-in-out; }
        .animate-float-delayed { animation: float-delayed 25s infinite ease-in-out; }
        .animate-float-slow { animation: float-slow 30s infinite ease-in-out; }
        .diagonal-lines-pattern {
          background-image: repeating-linear-gradient(
            45deg, transparent, transparent 10px,
            rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 20px
          );
        }
      `}</style>
    </section>
  );
};

export default Services;