import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  MessageCircle,
  Send,
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
          width: 10px;
          height: 16px;
          border-right: 4px solid #000;
          border-bottom: 4px solid #000;
        }
        .orange-tick { border-color: #f97316; }
        .tick.top { top: -1px; left: 50%; transform: translateX(-50%) rotate(45deg); }
        .tick.right { right: -1px; top: 50%; transform: translateY(-50%) rotate(135deg); }
        .tick.bottom { bottom: -1px; left: 50%; transform: translateX(-50%) rotate(225deg); }
        .tick.left { left: -1px; top: 50%; transform: translateY(-50%) rotate(315deg); }
      `}</style>

      <footer className="relative bg-gray-800 text-white overflow-hidden">
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
            <div className="space-y-6 text-center sm:text-left lg:col-span-1">
              <div className="flex justify-center sm:justify-start items-center gap-3">
                <AnimatedLogo />
                <span className="font-black text-2xl">
                  <span className="text-black">BOLD</span>
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">VIBE</span>
                </span>
              </div>

              <p className="text-gray-400 text-m leading-relaxed">
                Empowering businesses with cutting-edge technology solutions. We turn your digital dreams into reality.
              </p>
              

              <div className="flex justify-center sm:justify-start gap-4">
                <a 
                  href="https://www.instagram.com/boldvibetechnologiespvt" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/bold-vibe-2479283a4?utm" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/916265259661" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:info@boldvibetech.com"
                  className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61586646795488" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <HashLink
                      smooth
                      to={link.path}
                      className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
                    >
                      {link.name}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                Services
              </h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="hover:text-white transition-colors">Web Development</li>
                <li className="hover:text-white transition-colors">Mobile App Development</li>
                <li className="hover:text-white transition-colors">AI Automation</li>
                <li className="hover:text-white transition-colors">AI Chatbots</li>
                <li className="hover:text-white transition-colors">Custom Software</li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                Get In Touch
              </h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex justify-center sm:justify-start gap-3 items-start hover:text-white transition-colors">
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>info@boldvibetech.com</span>
                </li>
                <li className="flex justify-center sm:justify-start gap-3 items-center hover:text-white transition-colors">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+91 6265259661</span>
                </li>
                <li className="flex justify-center sm:justify-start gap-3 items-start hover:text-white transition-colors">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Indore, Madhya Pradesh<br />India</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
              <p className="flex items-center gap-2">
                © 2025 BoldVibe Technologies. Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> in India
              </p>
            
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
