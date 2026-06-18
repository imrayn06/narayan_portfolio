import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-slate-100/70 text-slate-700 dark:bg-black/20 dark:text-gray-300 py-8 font-sans">
      <div className="container mx-auto px-4 text-center">
        {/* Open to Opportunities */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold border border-green-200 dark:border-green-800/50">
            ✦ Open to Opportunities
          </span>
        </div>

        {/* Social Icons */}
        <div id="social-icons" className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/imrayn06"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-900 dark:text-gray-500 dark:hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/im-rayn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-[#0A66C2] dark:text-gray-500 dark:hover:text-[#0A66C2] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://x.com/imsneh06?s=09"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-900 dark:text-gray-500 dark:hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Twitter / X"
          >
            <FaTwitter size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-500 dark:text-gray-500">
          © {new Date().getFullYear()} Shenehashis Dutta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
