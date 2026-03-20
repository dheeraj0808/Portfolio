import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeading from '../ui/SectionHeading';
import { FaCode, FaServer, FaPalette, FaRocket } from 'react-icons/fa';

export default function About() {
  const { isDark } = useTheme();

  const highlights = [
    {
      icon: FaCode,
      title: 'Frontend',
      desc: 'Building responsive, animated interfaces with React & modern CSS',
    },
    {
      icon: FaServer,
      title: 'Backend',
      desc: 'Designing robust APIs and microservices with Node.js & databases',
    },
    {
      icon: FaPalette,
      title: 'Design',
      desc: 'Creating intuitive, user-centered experiences with clean aesthetics',
    },
    {
      icon: FaRocket,
      title: 'Performance',
      desc: 'Optimizing for speed, SEO, and exceptional user experience',
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading
            title="About Me"
            subtitle="Get to know me, my journey, and what drives me as a developer"
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - About Text */}
          <ScrollReveal direction="left">
            <div className={`card p-8`}>
              <h3
                className={`text-xl font-bold font-[var(--font-display)] mb-4 ${
                  isDark ? 'text-white' : 'text-dark-900'
                }`}
              >
                A Passionate Developer Who Loves Building Things
              </h3>
              <div className={`space-y-4 text-[0.95rem] leading-relaxed ${isDark ? 'text-dark-300' : 'text-dark-600'}`}>
                <p>
                  I'm a Full Stack Developer with over 3 years of experience in building
                  web applications. My journey started with curiosity about how websites work,
                  and it evolved into a deep passion for creating digital experiences that make
                  a real impact.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing
                  to open-source projects, or writing technical articles. I believe in continuous
                  learning and staying up-to-date with the latest industry trends.
                </p>
                <p>
                  I'm currently open to freelance projects and full-time opportunities where I
                  can contribute, learn, and grow alongside a talented team.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { number: '3+', label: 'Years Exp' },
                  { number: '20+', label: 'Projects' },
                  { number: '10+', label: 'Technologies' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="text-2xl font-bold gradient-text"
                    >
                      {stat.number}
                    </motion.div>
                    <span className={`text-xs font-medium ${isDark ? 'text-dark-400' : 'text-dark-500'}`}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Highlights */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <ScrollReveal key={item.title} direction="right" delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={`card p-6 h-full`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      isDark
                        ? 'bg-primary-500/10 text-primary-400'
                        : 'bg-primary-50 text-primary-600'
                    }`}
                  >
                    <item.icon size={22} />
                  </div>
                  <h4
                    className={`text-base font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-dark-800'
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-dark-400' : 'text-dark-500'}`}>
                    {item.desc}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
