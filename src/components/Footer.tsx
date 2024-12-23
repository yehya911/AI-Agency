import { Brain } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold">Nexus Mindscape</span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              Empowering businesses with cutting-edge AI solutions. Transform your
              operations and unlock new possibilities with our expertise.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#chatbots" className="text-gray-400 hover:text-white transition-colors">
                  AI Chatbots
                </a>
              </li>
              <li>
                <a href="#automation" className="text-gray-400 hover:text-white transition-colors">
                  Process Automation
                </a>
              </li>
              <li>
                <a href="#analytics" className="text-gray-400 hover:text-white transition-colors">
                  Data Analytics
                </a>
              </li>
              <li>
                <a href="#nlp" className="text-gray-400 hover:text-white transition-colors">
                  NLP Solutions
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-gray-400 hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} Nexus Mindscape. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}