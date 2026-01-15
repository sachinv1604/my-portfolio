import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Sparkles, Rocket, MessageCircle } from 'lucide-react';
import profileImg from "./assets/ai.png";
import profilee from "./assets/sachin.jpeg";
import cert1 from './assets/cer00.jpeg';
import cert2 from './assets/cer0.jpeg';
import cert3 from './assets/cer1.jpeg';
import cert4 from './assets/cer2.jpeg';
import cert5 from './assets/cer3.jpeg';
import cert6 from './assets/cer4.jpeg';
import cert7 from './assets/cer5.jpeg';
import cert8 from './assets/cer6.jpeg';
import cert9 from './assets/cer7.jpeg';
import wedd from "./assets/weather.png";
import todd from "./assets/todo.png";
import budd from "./assets/bus.jpg";
import mady from "./assets/mani.jpg";
import podd from "./assets/portf.png";
import wfodd from "./assets/webfinder.png";




// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  const navItems = ['Home', 'About', 'Certificates', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
          >
            SACHIN | PORTFOLIO

          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gray-900 border-t border-gray-800"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};
// CLEAN CODING-THEMED Hero Section - Replace your Hero component
const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden 
      bg-linear-to-br from-black via-zinc-900 to-black"
    >
      {/* Clean Coding Animation Background */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Binary Code Rain Effect - FASTER & INSTANT START */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            className="absolute text-emerald-400/25 font-mono text-xs"
            style={{
              left: `${5 + i * 8}%`,
            }}
            initial={{ y: '-10%' }}
            animate={{
              y: ['0%', '110%'],
            }}
            transition={{
              duration: 3 + Math.random() * 1.5, // Faster - reduced from 5-8 to 3-4.5
              repeat: Infinity,
              ease: "linear",
              delay: 0, // Start immediately
            }}
          >
            {[...Array(15)].map((_, j) => (
              <div key={j} style={{ opacity: Math.random() }}>
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </motion.div>
        ))}

        {/* Pulsing Gradient Circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"
        />
      </div>

      {/* Main Content - SMOOTH SCROLL */}
      <motion.div 
        style={{ y, opacity }} 
        className="relative z-10 text-center px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="mb-6"
        >
          
        </motion.div>
        <br /> <br /> <br />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-12 mb-8"
        >
          {/* NAME */}
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center md:text-left">
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              SACHIN!
            </span>
          </h1>

          {/* IMAGE - UNCHANGED */}
          <img 
            src={profileImg}
            alt="Sachin"
            className="w-80 h-60 md:w-80 md:h-60"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          BCA Student with a Passion for Technology & Learning
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.a
            href="#certificates"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-linear-to-r from-purple-500 to-pink-600 rounded-full text-white font-semibold shadow-lg hover:shadow-purple-500/50 transition-shadow"
          >
            Certificates
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-linear-to-r from-purple-500 to-pink-600 rounded-full text-white font-semibold shadow-lg hover:shadow-purple-500/50 transition-shadow"
          >
            View Work
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex gap-6 justify-center mt-12"
        >
          {[
            { icon: Github, href: 'https://github.com/sachinv1604' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/sachin-vernekar-2b38ab289' },
            { icon: Mail, href: 'mailto:sachinvernekar29@gmail.com' },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: 'spring' }}
              className="text-gray-400 hover:text-white"
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-2xl font-bold text-center mb-12 bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            ABOUT ME
          </h1>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
             
                <div className="flex justify-center items-center w-full">
                  <div className="relative w-56 h-56 md:w-64 md:h-64 bg-linear-to-br from-purple-500 to-pink-600 rounded-full shadow-xl p-1">
                    <img
                      src={profilee}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
             
   
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gray-300 space-y-4"
            >
            <p className="text-lg leading-relaxed text-left md:text-justify">
  I am a dedicated BCA student with a current academic CGPA of 9.19, having a strong interest in the IT industry and a passion for learning diverse technologies.
</p>

<p className="text-lg leading-relaxed text-left md:text-justify">
  I enjoy building projects, learning new tools, and improving my technical and problem-solving skills. My goal is to grow as a versatile IT professional who can adapt, learn quickly, and contribute effectively in a dynamic work environment.
</p>

              <div className="flex flex-wrap gap-3 mt-6">
                {['React','Node.js', 'MongoDB', 'Tailwind CSS','AI tools and productivity ','Flutter', 'Power BI (Basics)','Python', 'Java','Linux (Basics)'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-purple-500/20 border border-purple-500 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

//  Skills component
// Add this component in your App.jsx (after Skills component)

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use your imported images here
  const images = [
    cert4,
    cert2,
    cert3,
    cert1,
    cert5,
    cert6,
    cert7,
    cert8,
    cert9,
    // Add more imported images
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="certificates" >
      <div className="max-w-4xl mx-auto px-4">
         <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        >
          CERTIFICATES
        </motion.h2>

        <div className="relative">
          {/* Image */}
          <img
            src={images[currentIndex]}
            alt={`Certificate ${currentIndex + 1}`}
            className="w-full h-96 object-contain bg-gray-900 rounded-lg"
          />

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-12 h-12 rounded-full"
          >
            ←
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-12 h-12 rounded-full"
          >
            →
          </button>

          
        </div>
      </div>
    </section>
  );
};

// Projects Section
const Projects = () => {
  const projects = [
    {
      title: 'weather App',
      description: 'A flutter based app to get live whether updates',
      image: wedd,
      tags: ['flutter', 'whether API'],
      link: 'https://github.com/sachinv1604/weather_app',
    },
    {
      title: 'todo list app',
      description: 'simple todo list app for daily routine tasks using flutter',
      image: todd,
      tags: ['flutter'],
      link: 'https://github.com/sachinv1604/flutter-todo-app',
    },
    {
      title: 'WebFinder',
      description: 'A website to discover the most relevant websites based on user needs and requirements.',
      image: wfodd,
      tags: [ 'react', 'nodejs', 'mongodb'],
      link: 'https://github.com/sachinv1604/WEB_FINDER',
    },
    {
      title: 'landing page website ',
      description: 'landing page for college bus transportation system using react',
      image: budd,
      tags: ['react','native','mongodb'],
      link: 'https://github.com/sachinv1604/edutrans_web',
    },
    {
      title: 'MANMIND - reviews and innovative idea sharing website',
      description: 'website where users can share their innovative ideas and reviews with organisations directly',
      image: mady,
      tags: ['javascript','react','mongodb'],
      link: 'https://github.com/sachinv1604/mankind',
    },
    {
      title: 'portfolio website',
      description: 'portfolio website for myself to showcase my skills and projects',
      image: podd,
      tags: ['react','tailwind css'],
      link: '#',
    },
    {
      title: ' college bus transportation app using react-native',
      description: 'coming soon...!',
      image: budd,
      tags: ['react-native','mongodb'],
      link: 'https://github.com/sachinv1604/native-bus-app',
    },
   
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        >
          MY PROJECTS   
        </motion.h2>
        <h2 className="text-center text-gray-400 mb-8">TAP TO VIEW</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (  <a href={project.link}>
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-purple-500/20 transition-shadow"
            > 

              <div className="relative overflow-hidden group">
                 <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                /> 
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <a
                    href={project.link}
                    className="px-4 py-2 bg-purple-500 rounded-full text-white flex items-center gap-2"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/20 border border-purple-500 rounded-full text-xs text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div></a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
// Replace your Contact component with this

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <p className="text-gray-300 text-center text-lg mb-12">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <motion.a
              href="mailto:sachinvernekar29@gmail.com"
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors"
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm text-center break-all">
                sachinvernekar29@gmail.com
              </p>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href= "https://www.linkedin.com/in/sachin-vernekar-2b38ab289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors"
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                <Linkedin className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Connect with me</p>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/sachinv1604"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors"
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                <Github className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">Check out my code</p>
            </motion.a>
          </div>

          {/* Optional: Add phone or location */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Or find me at:</p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-gray-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>+91 8762457716</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>Neharunagar, Mundgod </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
        <p className="mb-4">© 2026 Sachin. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

// Main App
export default function App() {
  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </div>
  ); 
}