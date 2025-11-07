import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white pt-14 pb-8 relative overflow-hidden">
      
      {/* Decorative blur circles */}
      <div className="absolute top-10 left-10 w-36 h-36 bg-purple-700 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-36 h-36 bg-blue-700 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center sm:text-left">

          {/* Brand Info */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-3xl font-bold flex items-center justify-center sm:justify-start gap-2">
              <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                AlorPoth
              </span>
            </h2>
            <p className="mt-3 text-white/80 leading-relaxed max-w-xs">
              Learn with ease, grow with knowledge. AlorPoth brings quality courses right to your screen.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold mb-3 text-white/90">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-yellow-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Courses</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Enroll</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">About</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Follow + Newsletter */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold mb-3 text-white/90">Follow Us</h3>
            <p className="text-white/80 mb-4">Stay connected through social media</p>
            <div className="flex justify-center sm:justify-start gap-4 text-xl mb-4">
              <a href="#" className="hover:text-yellow-400 hover:scale-110 transition transform"><FaFacebookF /></a>
              <a href="#" className="hover:text-yellow-400 hover:scale-110 transition transform"><FaInstagram /></a>
              <a href="#" className="hover:text-yellow-400 hover:scale-110 transition transform"><FaTwitter /></a>
              <a href="#" className="hover:text-yellow-400 hover:scale-110 transition transform"><FaYoutube /></a>
            </div>

            <h3 className="text-xl font-semibold mb-2 text-white/90">Newsletter</h3>
            <p className="text-white/80 mb-3 text-sm text-center sm:text-left">
              Subscribe to get updates about new courses & learning tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 w-full max-w-xs">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 rounded-md px-3 py-2 text-gray-900 focus:outline-none w-full"
              />
              <button 
                type="submit" 
                className="bg-pink-600 hover:bg-pink-500 px-4 rounded-md text-white font-medium transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom line */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/70">
          © {new Date().getFullYear()} <span className="font-semibold text-white">AlorPoth</span>. All rights reserved.
          <p className="text-xs mt-1 text-white/50">Designed with ❤️ using React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
