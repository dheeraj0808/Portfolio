import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map((link) => link.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between h-[72px]">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="text-xl font-bold font-[var(--font-display)] tracking-tight"
            whileHover={{ scale: 1.05 }}
          >
            <span className="gradient-text">&lt;Portfolio /&gt;</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  activeSection === link.href.slice(1)
                    ? 'text-primary-600 dark:text-primary-400'
                    : isDark
                    ? 'text-dark-300 hover:text-white'
                    : 'text-dark-600 hover:text-dark-900'
                }`}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary-500/10 rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`ml-3 p-2.5 rounded-xl transition-colors ${
                isDark
                  ? 'bg-dark-700 text-yellow-400 hover:bg-dark-600'
                  : 'bg-dark-100 text-dark-600 hover:bg-dark-200'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
            </motion.button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className={`p-2.5 rounded-xl ${
                isDark ? 'bg-dark-700 text-yellow-400' : 'bg-dark-100 text-dark-600'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
            </motion.button>
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
              className={`p-2.5 rounded-xl ${
                isDark ? 'bg-dark-700 text-dark-200' : 'bg-dark-100 text-dark-600'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={`fixed top-0 right-0 h-full w-[280px] z-50 md:hidden shadow-2xl ${
                isDark ? 'bg-dark-900' : 'bg-white'
              }`}
            >
              <div className="flex justify-end p-5">
                <motion.button
                  onClick={() => setMobileOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-xl ${
                    isDark ? 'bg-dark-700 text-dark-200' : 'bg-dark-100 text-dark-600'
                  }`}
                >
                  <HiX size={20} />
                </motion.button>
              </div>
              <div className="flex flex-col gap-1 px-5">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      activeSection === link.href.slice(1)
                        ? 'bg-primary-500/10 text-primary-600'
                        : isDark
                        ? 'text-dark-300 hover:bg-dark-800'
                        : 'text-dark-600 hover:bg-dark-50'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
