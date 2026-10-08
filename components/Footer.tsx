import React from "react";
import Link from "next/link";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="mt-28 border-t border-dark-borderSubtle bg-dark-bg text-warm-gray py-16 px-6 sm:px-8 transition-colors">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Identity */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-warm-white font-semibold">
              SHENEHASHIS DUTTA
            </span>
            <p className="text-sm text-warm-gray leading-relaxed max-w-sm font-light">
              Digital Marketing &amp; Social Media support with a software engineering foundation.
            </p>
            <div className="pt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-warm-muted">
                Based in Kolkata, India · Open to Opportunities
              </span>
            </div>
          </div>

          {/* Quick Index */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="tracking-[0.2em] uppercase text-warm-muted block">
              Navigation
            </span>
            <ul className="space-y-2">
              <li>
                <Link href="/work" className="hover:text-warm-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/creative" className="hover:text-warm-white transition-colors">
                  Creative Archive
                </Link>
              </li>
              <li>
                <Link href="/motion" className="hover:text-warm-white transition-colors">
                  Motion &amp; Video
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-warm-white transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-warm-white transition-colors">
                  Career Transition
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-warm-white transition-colors">
                  Resume (CV)
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Resume */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-warm-muted block">
              Connect
            </span>
            <div className="flex flex-wrap gap-4 text-xs font-mono">
              <a
                href="mailto:duttarayan3@gmail.com"
                className="inline-flex items-center gap-1.5 text-warm-white hover:underline transition-colors"
              >
                <span>duttarayan3@gmail.com</span>
                <FiArrowUpRight />
              </a>
              <a
                href="https://www.linkedin.com/in/im-rayn/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-warm-white transition-colors"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
                <FiArrowUpRight />
              </a>
              <a
                href="https://github.com/imrayn06"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-warm-white transition-colors"
              >
                <FaGithub />
                <span>GitHub</span>
                <FiArrowUpRight />
              </a>
            </div>

            <div className="pt-2">
              <a
                href="https://drive.google.com/file/d/1vhGt-nv2sl-yCfW5YDQWV9IJOC2qPUgw/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-surface border border-dark-borderSubtle hover:border-dark-border text-xs font-mono text-warm-white hover:bg-dark-surface2 transition-all"
              >
                <FiDownload size={13} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-borderSubtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-warm-muted">
          <p>© {new Date().getFullYear()} Shenehashis Dutta. Built with precision &amp; restraint.</p>
          <div className="flex items-center gap-6">
            <span>Kolkata, IN</span>
            <span>•</span>
            <Link href="/contact" className="hover:text-warm-white transition-colors">
              Direct Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
