import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeading from '../ui/SectionHeading';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';

const sampleProjects = [
  {
    _id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with cart, payments, and admin dashboard.',
    longDescription: 'Built a comprehensive e-commerce platform featuring user authentication, product catalog with search and filters, shopping cart, Stripe payment integration, order tracking, and an admin dashboard for inventory management.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'Full Stack',
    featured: true,
  },
  {
    _id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates and team features.',
    longDescription: 'Developed a real-time task management application with features like drag-and-drop boards, team collaboration, notifications, and analytics.',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io', 'Prisma'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'Full Stack',
    featured: true,
  },
  {
    _id: '3',
    title: 'AI Chat Assistant',
    description: 'An intelligent chatbot powered by OpenAI with conversation memory.',
    longDescription: 'Created an AI-powered chat assistant that uses OpenAI GPT API for natural language processing. Features include conversation history and code syntax highlighting.',
    techStack: ['React', 'Python', 'FastAPI', 'OpenAI', 'Redis'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'AI/ML',
    featured: true,
  },
  {
    _id: '4',
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with 7-day forecasts and interactive maps.',
    longDescription: 'Built a weather dashboard that displays current conditions, 7-day forecasts, and interactive weather maps with location-based auto-detection.',
    techStack: ['React', 'Tailwind CSS', 'OpenWeatherMap API', 'Chart.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'Frontend',
  },
  {
    _id: '5',
    title: 'REST API Boilerplate',
    description: 'A production-ready Node.js REST API boilerplate with authentication and testing.',
    longDescription: 'Created a comprehensive REST API boilerplate with JWT authentication, role-based access control, rate limiting, and test coverage.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'Jest', 'Docker'],
    liveUrl: '',
    githubUrl: 'https://github.com',
    category: 'Backend',
  },
  {
    _id: '6',
    title: 'Social Media Dashboard',
    description: 'A social media analytics dashboard with real-time metrics and insights.',
    longDescription: 'Built a social media analytics dashboard that aggregates data from multiple platforms with beautiful data visualizations.',
    techStack: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Chart.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'Full Stack',
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'AI/ML'];

const categoryColors = {
  'Full Stack': { bg: 'bg-indigo-500/10', text: 'text-indigo-500' },
  Frontend: { bg: 'bg-emerald-500/10', text: 'text-emerald-500' },
  Backend: { bg: 'bg-amber-500/10', text: 'text-amber-500' },
  'AI/ML': { bg: 'bg-rose-500/10', text: 'text-rose-500' },
  Mobile: { bg: 'bg-cyan-500/10', text: 'text-cyan-500' },
  Other: { bg: 'bg-gray-500/10', text: 'text-gray-500' },
};

export default function Projects() {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    activeFilter === 'All'
      ? sampleProjects
      : sampleProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading
            title="Featured Projects"
            subtitle="Some of the projects I've worked on recently"
          />
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : isDark
                    ? 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                    : 'bg-dark-100 text-dark-600 hover:bg-dark-200'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="card overflow-hidden cursor-pointer h-full flex flex-col"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image placeholder */}
                  <div
                    className={`h-44 relative overflow-hidden ${
                      isDark ? 'bg-dark-700' : 'bg-primary-50'
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold gradient-text opacity-30">
                        {project.title[0]}
                      </span>
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <span
                        className={`badge ${categoryColors[project.category]?.bg || ''} ${
                          categoryColors[project.category]?.text || ''
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>
                    {/* Hover overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-primary-500/80 flex items-center justify-center gap-4"
                    >
                      <span className="text-white font-semibold text-sm">
                        View Details →
                      </span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3
                      className={`text-lg font-bold mb-2 ${
                        isDark ? 'text-white' : 'text-dark-800'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed mb-4 flex-1 ${
                        isDark ? 'text-dark-400' : 'text-dark-500'
                      }`}
                    >
                      {project.description}
                    </p>
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className={`text-[11px] font-medium px-2.5 py-1 rounded-lg ${
                            isDark
                              ? 'bg-dark-700 text-dark-300'
                              : 'bg-dark-50 text-dark-600'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span
                          className={`text-[11px] font-medium px-2.5 py-1 rounded-lg ${
                            isDark
                              ? 'bg-dark-700 text-dark-400'
                              : 'bg-dark-50 text-dark-400'
                          }`}
                        >
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className={`card max-w-2xl w-full max-h-[85vh] overflow-y-auto p-0 ${
                  isDark ? 'bg-dark-800' : 'bg-white'
                }`}
              >
                {/* Modal Header */}
                <div
                  className={`h-48 relative flex items-center justify-center ${
                    isDark ? 'bg-dark-700' : 'bg-primary-50'
                  }`}
                >
                  <span className="text-7xl font-bold gradient-text opacity-20">
                    {selectedProject.title[0]}
                  </span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                      isDark
                        ? 'bg-dark-800/80 text-dark-200 hover:bg-dark-800'
                        : 'bg-white/80 text-dark-600 hover:bg-white'
                    }`}
                  >
                    <FaTimes size={16} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`badge ${categoryColors[selectedProject.category]?.bg || ''} ${
                        categoryColors[selectedProject.category]?.text || ''
                      }`}
                    >
                      {selectedProject.category}
                    </span>
                  </div>

                  <h2
                    className={`text-2xl font-bold font-[var(--font-display)] mb-4 ${
                      isDark ? 'text-white' : 'text-dark-900'
                    }`}
                  >
                    {selectedProject.title}
                  </h2>

                  <p className={`leading-relaxed mb-6 ${isDark ? 'text-dark-300' : 'text-dark-600'}`}>
                    {selectedProject.longDescription || selectedProject.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4
                      className={`text-sm font-bold uppercase tracking-wider mb-3 ${
                        isDark ? 'text-dark-400' : 'text-dark-500'
                      }`}
                    >
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`badge-primary badge`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm"
                      >
                        <FaExternalLinkAlt size={12} />
                        Live Demo
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline text-sm"
                      >
                        <FaGithub size={14} />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
