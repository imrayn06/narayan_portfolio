import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white/10 text-gray-300 py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">© {new Date().getFullYear()} Narayan Shenehashis Dutta. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/imrayn06"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/im-rayn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="/"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
