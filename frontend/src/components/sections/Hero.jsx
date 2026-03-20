import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaGithub, FaLinkedinIn, FaTwitter, FaArrowDown, FaDownload } from 'react-icons/fa';

const titles = [
  'Full Stack Developer',
  'React Specialist',
  'Node.js Engineer',
  'UI/UX Enthusiast',
  'Problem Solver',
];

export default function Hero() {
  const { isDark } = useTheme();
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout;

    if (!isDeleting && displayText === currentTitle) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentTitle.substring(0, displayText.length - 1)
              : currentTitle.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const socials = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.4), transparent 70%)',
          }}
        />
        <motion.div
          animate={{
            x: [0, -40, 50, 0],
            y: [0, 50, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(236,72,153,0.4), transparent 70%)',
          }}
        />
        <div className="absolute inset-0 dot-grid opacity-40" />
      </div>

      <div className="container-custom py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 ${
                isDark
                  ? 'bg-primary-500/10 text-primary-300 border border-primary-500/20'
                  : 'bg-primary-50 text-primary-600 border border-primary-200'
              }`}
            >
              👋 Welcome to my portfolio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] leading-[1.1] mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text">John Doe</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl mb-6 h-[36px]"
            >
              <span className={isDark ? 'text-dark-300' : 'text-dark-500'}>
                I'm a{' '}
              </span>
              <span className="text-primary-500 font-semibold">
                {displayText}
              </span>
              <span
                className="inline-block w-[3px] h-[24px] ml-1 align-middle"
                style={{
                  backgroundColor: 'var(--color-primary-500)',
                  animation: 'typewriter-blink 1s step-end infinite',
                }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`text-base sm:text-lg leading-relaxed max-w-lg mb-8 ${
                isDark ? 'text-dark-400' : 'text-dark-500'
              }`}
            >
              Passionate about building elegant, performant, and user-friendly web
              applications. I love turning complex problems into simple, beautiful
              solutions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a href="#projects" className="btn-primary">
                View My Work
                <FaArrowDown size={14} />
              </a>
              <a href="#contact" className="btn-outline">
                <FaDownload size={14} />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <span className={`text-sm font-medium ${isDark ? 'text-dark-500' : 'text-dark-400'}`}>
                Find me on
              </span>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl transition-colors ${
                      isDark
                        ? 'bg-dark-800 text-dark-300 hover:bg-primary-500 hover:text-white'
                        : 'bg-dark-100 text-dark-500 hover:bg-primary-500 hover:text-white'
                    }`}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent, rgba(99,102,241,0.3), transparent, rgba(236,72,153,0.3), transparent)',
                  padding: '3px',
                }}
              />
              {/* Image container */}
              <div
                className={`relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full overflow-hidden border-4 ${
                  isDark ? 'border-dark-700' : 'border-white'
                } shadow-2xl`}
              >
                <div
                  className={`w-full h-full flex items-center justify-center text-6xl ${
                    isDark ? 'bg-dark-800' : 'bg-primary-50'
                  }`}
                >
                  <span className="gradient-text font-bold font-[var(--font-display)]">
                    JD
                  </span>
                </div>
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`absolute top-8 -right-4 px-4 py-2 rounded-xl shadow-lg text-sm font-semibold ${
                  isDark ? 'bg-dark-800 text-dark-200' : 'bg-white text-dark-700'
                }`}
              >
                💻 3+ Years Exp
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className={`absolute bottom-8 -left-4 px-4 py-2 rounded-xl shadow-lg text-sm font-semibold ${
                  isDark ? 'bg-dark-800 text-dark-200' : 'bg-white text-dark-700'
                }`}
              >
                🚀 20+ Projects
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className={`text-xs font-medium ${isDark ? 'text-dark-500' : 'text-dark-400'}`}>
          Scroll Down
        </span>
        <div
          className={`w-6 h-10 rounded-full border-2 flex justify-center pt-2 ${
            isDark ? 'border-dark-600' : 'border-dark-300'
          }`}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
