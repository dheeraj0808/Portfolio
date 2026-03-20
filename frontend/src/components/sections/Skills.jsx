import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeading from '../ui/SectionHeading';

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 78 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 88 },
      { name: 'MongoDB', level: 82 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 65 },
    ],
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Docker', level: 65 },
      { name: 'AWS', level: 60 },
      { name: 'Figma', level: 70 },
      { name: 'Python', level: 70 },
      { name: 'CI/CD', level: 68 },
    ],
  },
];

function SkillBar({ name, level, delay }) {
  const { isDark } = useTheme();

  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className={`text-sm font-semibold ${isDark ? 'text-dark-200' : 'text-dark-700'}`}>
          {name}
        </span>
        <span className={`text-xs font-bold ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>
          {level}%
        </span>
      </div>
      <div
        className={`h-2.5 rounded-full overflow-hidden ${
          isDark ? 'bg-dark-700' : 'bg-dark-100'
        }`}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay * 0.1, ease: 'easeOut' }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, var(--color-primary-500), var(--color-accent-500))`,
          }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
              animation: 'shimmer 2s linear infinite',
              backgroundSize: '200% 100%',
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const { isDark } = useTheme();

  return (
    <section
      id="skills"
      className={`section ${isDark ? 'bg-dark-900/50' : 'bg-white/50'}`}
    >
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading
            title="Skills & Expertise"
            subtitle="Technologies and tools I use to bring ideas to life"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.name} delay={catIndex * 0.15}>
              <div className="card p-6 h-full">
                <h3
                  className={`text-lg font-bold font-[var(--font-display)] mb-6 pb-3 border-b ${
                    isDark
                      ? 'text-white border-dark-700'
                      : 'text-dark-800 border-dark-100'
                  }`}
                >
                  <span className="gradient-text">{category.name}</span>
                </h3>
                {category.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={index + catIndex * 3}
                  />
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
