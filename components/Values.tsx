import React, { useEffect, useState } from "react";
import {
  Lightbulb,
  ShieldCheck,
  Users,
  Zap,
  Globe,
} from "lucide-react";

type ColorKey = "blue" | "green" | "purple" | "yellow" | "pink" | "cyan";

const getColorClasses = (color: ColorKey) => {
  const map = {
    blue: {
      bg: "bg-blue-500/10 hover:bg-blue-500/20",
      text: "text-blue-500 group-hover:text-blue-400",
      border: "hover:border-blue-500/50",
      shadow: "hover:shadow-blue-500/30",
    },
    green: {
      bg: "bg-green-500/10 hover:bg-green-500/20",
      text: "text-green-500 group-hover:text-green-400",
      border: "hover:border-green-500/50",
      shadow: "hover:shadow-green-500/30",
    },
    purple: {
      bg: "bg-purple-500/10 hover:bg-purple-500/20",
      text: "text-purple-500 group-hover:text-purple-400",
      border: "hover:border-purple-500/50",
      shadow: "hover:shadow-purple-500/30",
    },
    yellow: {
      bg: "bg-yellow-500/10 hover:bg-yellow-500/20",
      text: "text-yellow-500 group-hover:text-yellow-400",
      border: "hover:border-yellow-500/50",
      shadow: "hover:shadow-yellow-500/30",
    },
    pink: {
      bg: "bg-pink-500/10 hover:bg-pink-500/20",
      text: "text-pink-500 group-hover:text-pink-400",
      border: "hover:border-pink-500/50",
      shadow: "hover:shadow-pink-500/30",
    },
    cyan: {
      bg: "bg-cyan-500/10 hover:bg-cyan-500/20",
      text: "text-cyan-500 group-hover:text-cyan-400",
      border: "hover:border-cyan-500/50",
      shadow: "hover:shadow-cyan-500/30",
    },
  };

  return map[color];
};

const Values: React.FC = () => {
  const [visible, setVisible] = useState<Record<number, boolean>>({});

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      desc: "We don’t just follow trends — we challenge assumptions, explore emerging technologies, and build smarter solutions that move businesses forward.",
      color: "blue",
    },
    {
      icon: ShieldCheck,
      title: "Radical Integrity",
      desc: "Transparency in our code, pricing, and communication builds long-term trust and strong partnerships.",
      color: "green",
    },
    {
      icon: Users,
      title: "User-Centricity",
      desc: "We design with empathy, focusing on real human needs to create intuitive, inclusive, and impactful experiences.",
      color: "purple",
    },
    {
      icon: Zap,
      title: "Agile Delivery",
      desc: "Speed matters — but quality matters more. We iterate fast, learn continuously, and deliver real value early.",
      color: "yellow",
    },
    {
      icon: Users,
      title: "Inclusive Growth",
      desc: "Diverse teams build better software. We foster collaboration where every voice is heard and valued.",
      color: "pink",
    },
    {
      icon: Globe,
      title: "Global Mindset",
      desc: "Our solutions are designed to scale globally while respecting local needs, cultures, and security standards.",
      color: "cyan",
    },
  ] as const;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisible((v) => ({ ...v, [index]: true }));
          }
        });
      },
      { threshold: 0.15 }
    );

    document
      .querySelectorAll("[data-observe='value']")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Core Values
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            The principles that guide every decision, every design, and every line of code.
          </p>
        </div>

        {/* BIG CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, idx) => {
            const Icon = item.icon;
            const colors = getColorClasses(item.color);

            return (
              <div
                key={idx}
                data-index={idx}
                data-observe="value"
                className={`group bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 
                transition-all duration-500 transform
                ${colors.border} ${colors.shadow}
                hover:-translate-y-4 hover:scale-[1.03]
                ${
                  visible[idx]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {/* BIG ICON */}
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${colors.bg}`}
                >
                  <Icon className={`w-9 h-9 sm:w-10 sm:h-10 ${colors.text}`} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        {/* <div className="mt-24 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-200 rounded-2xl p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Ready to build something great?
            </h3>
            <p className="text-gray-500 text-base">
              Let’s create something impactful together.
            </p>
          </div>
          <a
            href="#contact"
            className="px-10 py-4 bg-blue-500 hover:bg-blue-600 text-gray-900 rounded-full font-semibold transition transform hover:scale-105"
          >
            Contact Us
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Values;
