import { useTheme } from '../../context/ThemeContext';
import { FaGithub, FaLinkedinIn, FaTwitter, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-10 border-t ${
        isDark ? 'bg-dark-900 border-dark-800' : 'bg-white border-dark-100'
      }`}
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-lg font-bold font-[var(--font-display)]">
              <span className="gradient-text">&lt;Portfolio /&gt;</span>
            </a>
            <p className={`text-sm mt-1 ${isDark ? 'text-dark-400' : 'text-dark-500'}`}>
              Built with <FaHeart className="inline text-accent-500 mx-1 text-xs" /> using
              React & Node.js
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
              { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`p-2.5 rounded-xl transition-all duration-200 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-dark-800 text-dark-300 hover:bg-primary-500 hover:text-white'
                    : 'bg-dark-100 text-dark-500 hover:bg-primary-500 hover:text-white'
                }`}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className={`text-sm ${isDark ? 'text-dark-500' : 'text-dark-400'}`}>
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
