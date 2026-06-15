import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-slate-100/70 text-slate-700 dark:bg-black/20 dark:text-gray-300 py-6 font-sans">
      <div className="container mx-auto text-center">
        <p className="mb-4">© {new Date().getFullYear()} Shenehashis Dutta. All rights reserved.</p>
        <div id="social-icons" className="flex justify-center gap-6">
          <a
            href="https://github.com/imrayn06"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/im-rayn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://x.com/imsneh06?s=09"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
