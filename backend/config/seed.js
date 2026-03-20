const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('../models/User');
const Project = require('../models/Project');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Project.deleteMany({});

    // Create admin user
    const admin = await User.create({
      name: 'John Doe',
      email: 'admin@portfolio.com',
      password: 'admin123',
      role: 'admin',
      title: 'Full Stack Developer',
      bio: 'Passionate full-stack developer with 3+ years of experience building web applications. I love creating elegant solutions to complex problems and am always eager to learn new technologies.',
      socialLinks: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
      skills: [
        { name: 'React.js', level: 90, category: 'Frontend' },
        { name: 'JavaScript', level: 92, category: 'Languages' },
        { name: 'TypeScript', level: 80, category: 'Languages' },
        { name: 'Node.js', level: 85, category: 'Backend' },
        { name: 'Express.js', level: 88, category: 'Backend' },
        { name: 'MongoDB', level: 82, category: 'Database' },
        { name: 'PostgreSQL', level: 75, category: 'Database' },
        { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
        { name: 'Next.js', level: 78, category: 'Frontend' },
        { name: 'Python', level: 70, category: 'Languages' },
        { name: 'Docker', level: 65, category: 'DevOps' },
        { name: 'Git', level: 88, category: 'Tools' },
      ],
      experience: [
        {
          title: 'Senior Full Stack Developer',
          company: 'Tech Innovation Corp',
          location: 'San Francisco, CA',
          from: new Date('2023-01-01'),
          current: true,
          description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
        },
        {
          title: 'Full Stack Developer',
          company: 'Digital Solutions Ltd',
          location: 'New York, NY',
          from: new Date('2021-06-01'),
          to: new Date('2022-12-31'),
          description: 'Built and maintained multiple client-facing applications. Improved performance by 40% through code optimization and caching strategies.',
        },
        {
          title: 'Junior Developer',
          company: 'StartUp Hub',
          location: 'Austin, TX',
          from: new Date('2020-01-01'),
          to: new Date('2021-05-31'),
          description: 'Developed responsive web interfaces and RESTful APIs. Collaborated with designers to implement pixel-perfect UI components.',
        },
      ],
      education: [
        {
          degree: 'Bachelor of Science in Computer Science',
          institution: 'University of Technology',
          location: 'California',
          from: new Date('2016-09-01'),
          to: new Date('2020-06-30'),
          description: 'Graduated with honors. Focused on software engineering and web technologies.',
        },
      ],
    });

    console.log('✅ Admin user created:', admin.email);

    // Create sample projects
    const projects = await Project.insertMany([
      {
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce platform with cart, payments, and admin dashboard.',
        longDescription: 'Built a comprehensive e-commerce platform featuring user authentication, product catalog with search and filters, shopping cart, Stripe payment integration, order tracking, and an admin dashboard for inventory management. The application uses React for the frontend with Redux for state management, Node.js/Express for the backend, and MongoDB for data storage.',
        techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Tailwind CSS'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        featured: true,
        category: 'Full Stack',
        order: 1,
      },
      {
        title: 'Task Management App',
        description: 'A collaborative task management tool with real-time updates and team features.',
        longDescription: 'Developed a real-time task management application with features like drag-and-drop boards, team collaboration, notifications, and analytics. Uses WebSocket for real-time updates and implements role-based access control.',
        techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io', 'Prisma'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        featured: true,
        category: 'Full Stack',
        order: 2,
      },
      {
        title: 'AI Chat Assistant',
        description: 'An intelligent chatbot powered by OpenAI with conversation memory.',
        longDescription: 'Created an AI-powered chat assistant that uses OpenAI GPT API for natural language processing. Features include conversation history, multiple chat sessions, markdown rendering, and code syntax highlighting.',
        techStack: ['React', 'Python', 'FastAPI', 'OpenAI', 'Redis'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        featured: true,
        category: 'AI/ML',
        order: 3,
      },
      {
        title: 'Weather Dashboard',
        description: 'A beautiful weather dashboard with 7-day forecasts and interactive maps.',
        longDescription: 'Built a weather dashboard that displays current conditions, 7-day forecasts, and interactive weather maps. Uses OpenWeatherMap API and features location-based auto-detection, search functionality, and beautiful weather animations.',
        techStack: ['React', 'Tailwind CSS', 'OpenWeatherMap API', 'Chart.js'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        featured: false,
        category: 'Frontend',
        order: 4,
      },
      {
        title: 'REST API Boilerplate',
        description: 'A production-ready Node.js REST API boilerplate with authentication and testing.',
        longDescription: 'Created a comprehensive REST API boilerplate with JWT authentication, role-based access control, rate limiting, input validation, error handling, logging, and comprehensive test coverage. Includes Docker configuration and CI/CD pipeline setup.',
        techStack: ['Node.js', 'Express', 'MongoDB', 'Jest', 'Docker'],
        liveUrl: '',
        githubUrl: 'https://github.com',
        featured: false,
        category: 'Backend',
        order: 5,
      },
      {
        title: 'Social Media Dashboard',
        description: 'A social media analytics dashboard with real-time metrics and insights.',
        longDescription: 'Built a social media analytics dashboard that aggregates data from multiple platforms. Features include real-time metrics, engagement analytics, content scheduling, and exportable reports with beautiful data visualizations.',
        techStack: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Chart.js'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        featured: false,
        category: 'Full Stack',
        order: 6,
      },
    ]);

    console.log(`✅ ${projects.length} projects created`);
    console.log('\n📌 Admin Credentials:');
    console.log('   Email: admin@portfolio.com');
    console.log('   Password: admin123');
    console.log('\n🎉 Seed data inserted successfully!');

    process.exit(0);
  } catch (error) {
    console.error('❌ Seed Error:', error);
    process.exit(1);
  }
};

seedData();
