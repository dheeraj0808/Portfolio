import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>John Doe | Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Full Stack Developer specializing in React, Node.js, and modern web technologies. View my projects, skills, and experience."
        />
        <meta name="keywords" content="developer, portfolio, react, nodejs, full stack, web developer" />
        <meta property="og:title" content="John Doe | Full Stack Developer Portfolio" />
        <meta property="og:description" content="Passionate full-stack developer building elegant web applications." />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
