import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const roles = [
  "Social Media Strategist",
  "Digital Marketing Strategist",
  "Community Manager",
  "Client Servicing",
  "Brand Marketing",
  "Media Coordination",
];

function Footer() {
  return (
    <footer className="bg-slate-100/70 text-slate-700 dark:bg-black/20 dark:text-gray-300 py-12 font-sans">
      <div className="container mx-auto px-4 text-center">

        {/* Open to Opportunities */}
        <div className="mb-8">
          <span className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold border border-green-200 dark:border-green-800/50 mb-6">
            ✦ Open to Opportunities
          </span>

          {/* Role Tags */}
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {roles.map((role, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-white dark:bg-slate-800 text-slate-600 dark:text-gray-400 rounded-full border border-slate-200 dark:border-slate-700"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800 my-8 max-w-sm mx-auto" />

        {/* Copyright */}
        <p className="mb-4 text-sm">
          © {new Date().getFullYear()} Shenehashis Dutta. All rights reserved.
        </p>

        {/* Social Icons */}
        <div id="social-icons" className="flex justify-center gap-6">
          <a
            href="https://github.com/imrayn06"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-900 dark:text-gray-500 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/im-rayn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-[#0A66C2] dark:text-gray-500 dark:hover:text-[#0A66C2] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://x.com/imsneh06?s=09"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-900 dark:text-gray-500 dark:hover:text-white transition-colors"
            aria-label="Twitter / X"
          >
            <FaTwitter size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
