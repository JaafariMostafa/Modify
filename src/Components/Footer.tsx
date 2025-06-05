import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {

  return (
    <>
      {/* Footer */}
      <footer className="bg-white dark:bg-neutral-800 border-t border-neutral-300 dark:border-neutral-600 transition-colors duration-300">
        <div className="container mx-auto px-4 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Modify.ma</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Building amazing digital experiences with modern design and cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer transition-colors" />
                <Github className="w-5 h-5 text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h4 
                className="text-lg font-semibold text-gray-900 
                  dark:text-white">Products</h4>
              <ul className="space-y-3">
                {['Web Design', 'Mobile Apps', 'E-commerce', 'Analytics', 'Marketing'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-600 dark:text-gray-400 
                        hover:text-violet-600 dark:hover:text-violet-400 text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Resources</h4>
              <ul className="space-y-3">
                {['Documentation', 'Help Center', 'Tutorials', 'API Reference', 'Community'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-600 dark:text-gray-400 
                      hover:text-violet-600 dark:hover:text-violet-400 
                      text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">hello@company.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    123 Business Ave<br />
                    Suite 100<br />
                    City, State 12345
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mb-8">
            <div className="max-w-md mx-auto text-center">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Stay Updated</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Subscribe to our newsletter for the latest updates and news.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 
                  dark:border-gray-600 rounded-lg bg-white dark:bg-black 
                  text-gray-900 dark:text-white placeholder-gray-500 
                  dark:placeholder-gray-400 outline-none focus:ring-1 ring-violet-500
                  focus:border-transparent transition-colors text-sm"
                />
                <button className="px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
                © 2024 Company Name. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}