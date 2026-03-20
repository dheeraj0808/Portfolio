import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeading from '../ui/SectionHeading';
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const experienceData = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovation Corp',
    location: 'San Francisco, CA',
    from: 'Jan 2023',
    to: 'Present',
    current: true,
    description:
      'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd',
    location: 'New York, NY',
    from: 'Jun 2021',
    to: 'Dec 2022',
    description:
      'Built and maintained multiple client-facing applications. Improved performance by 40% through code optimization and caching strategies.',
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Hub',
    location: 'Austin, TX',
    from: 'Jan 2020',
    to: 'May 2021',
    description:
      'Developed responsive web interfaces and RESTful APIs. Collaborated with designers to implement pixel-perfect UI components.',
  },
];

const educationData = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    location: 'California',
    from: '2016',
    to: '2020',
    description: 'Graduated with honors. Focused on software engineering and web technologies.',
  },
];

function TimelineItem({ item, index, type }) {
  const { isDark } = useTheme();
  const isExperience = type === 'experience';

  return (
    <ScrollReveal direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.1}>
      <div className="relative pl-8 pb-10 last:pb-0">
        {/* Timeline line */}
        <div
          className={`absolute left-[11px] top-6 bottom-0 w-[2px] ${
            isDark ? 'bg-dark-700' : 'bg-dark-200'
          }`}
        />
        {/* Timeline dot */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className={`absolute left-0 top-1.5 w-[24px] h-[24px] rounded-full flex items-center justify-center z-10 ${
            item.current
              ? 'bg-primary-500 shadow-lg shadow-primary-500/30'
              : isDark
              ? 'bg-dark-700 border-2 border-dark-500'
              : 'bg-white border-2 border-dark-300'
          }`}
        >
          {isExperience ? (
            <FaBriefcase size={10} className={item.current ? 'text-white' : isDark ? 'text-dark-400' : 'text-dark-500'} />
          ) : (
            <FaGraduationCap size={10} className={item.current ? 'text-white' : isDark ? 'text-dark-400' : 'text-dark-500'} />
          )}
        </motion.div>

        {/* Card */}
        <motion.div whileHover={{ x: 4 }} className="card p-5">
          {item.current && (
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-success/10 text-success mb-2">
              Current
            </span>
          )}
          <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-dark-800'}`}>
            {isExperience ? item.title : item.degree}
          </h3>
          <p className={`text-sm font-semibold mt-0.5 ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>
            {isExperience ? item.company : item.institution}
          </p>
          <div className={`flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs ${isDark ? 'text-dark-400' : 'text-dark-500'}`}>
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt size={10} />
              {item.location}
            </span>
            <span className="flex items-center gap-1">
              <FaCalendarAlt size={10} />
              {item.from} - {item.to || 'Present'}
            </span>
          </div>
          <p className={`text-sm mt-3 leading-relaxed ${isDark ? 'text-dark-300' : 'text-dark-600'}`}>
            {item.description}
          </p>
        </motion.div>
      </div>
    </ScrollReveal>
  );
}

export default function Experience() {
  const { isDark } = useTheme();

  return (
    <section
      id="experience"
      className={`section ${isDark ? 'bg-dark-900/50' : 'bg-white/50'}`}
    >
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading
            title="Experience & Education"
            subtitle="My professional journey and academic background"
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <ScrollReveal>
              <h3
                className={`flex items-center gap-2 text-lg font-bold font-[var(--font-display)] mb-8 ${
                  isDark ? 'text-white' : 'text-dark-800'
                }`}
              >
                <FaBriefcase className="text-primary-500" />
                Work Experience
              </h3>
            </ScrollReveal>
            <div>
              {experienceData.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} type="experience" />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <ScrollReveal>
              <h3
                className={`flex items-center gap-2 text-lg font-bold font-[var(--font-display)] mb-8 ${
                  isDark ? 'text-white' : 'text-dark-800'
                }`}
              >
                <FaGraduationCap className="text-primary-500" />
                Education
              </h3>
            </ScrollReveal>
            <div>
              {educationData.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} type="education" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
