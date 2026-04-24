import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Handle form submission here
    console.log('Contact form submitted:', formData);
    
    // Show success toast
    MySwal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Message Sent!',
      text: 'Thank you for reaching out. We will get back to you soon.',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background: '#1f2937',
      color: '#fff',
      iconColor: '#10b981',
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-white border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's build something together
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex space-x-4">
              <Mail className="w-6 h-6 text-blue-500" />
              <div>
                <h4 className="font-bold text-gray-900">Email</h4>
                <a
                  href="mailto:info@boldvibetech.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  info@boldvibetech.com
                </a>
              </div>
            </div>

            <div className="flex space-x-4">
              <Phone className="w-6 h-6 text-blue-500" />
              <div>
                <h4 className="font-bold text-gray-900">Phone</h4>
                <a 
                  href="tel:+916265259661" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  +91 6265259661
                </a>
              </div>
            </div>

            <div className="flex space-x-4">
              <MapPin className="w-6 h-6 text-blue-500" />
              <div>
                <h4 className="font-bold text-gray-900">Office</h4>
                <p className="text-gray-500">Indore</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7 bg-surface p-8 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-blue-700 py-4 rounded-lg font-bold flex justify-center items-center space-x-2 transition-all shadow-lg hover:shadow-blue-500/50"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
