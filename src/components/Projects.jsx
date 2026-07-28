import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, GraduationCap, Globe, UtensilsCrossed, ShoppingBag } from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const projects = [
    {
      title: 'Excel Analytics Hub',
      description: 'A full-stack data analytics web application that enables users to upload Excel files and receive automated charts, AI-powered insights, and structured data summaries. Features a natural language Q&A search powered by OpenAI API.',
      tags: ['MERN Stack', 'OpenAI API', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
      icon: <BarChart3 size={24} className="text-gradient" />,
      github: 'https://github.com/dharmender0007',
      image: '/excel_analytics.jpg',
      features: [
        'AI-powered natural language dataset query Q&A',
        'Dynamic data visualization with filtering, sorting, and charts',
        'RESTful backend APIs with MongoDB database storage'
      ]
    },
    {
      title: 'DevPortfolio AI',
      description: 'An automated developer portfolio generator that integrates with the GitHub API to dynamically pull repositories, contribution history, and project metadata to produce ready-to-deploy portfolio websites.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'GitHub API', 'REST APIs'],
      icon: <Globe size={24} className="text-gradient" />,
      github: 'https://github.com/dharmender0007',
      image: '/dev_portfolio.jpg',
      features: [
        'GitHub API integration for automatic repo pulling',
        'MERN stack with Express.js caching layer',
        'GitHub rate limit protection logic'
      ]
    },
    {
      title: 'Education Management Platform',
      description: 'Engineered a comprehensive full-stack education management system for a techfest hackathon, including robust features for attendance tracking, course dashboards, and academic schedules.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Hackathon Project'],
      icon: <GraduationCap size={24} className="text-gradient" />,
      github: 'https://github.com/dharmender0007',
      image: '/edu_management.jpg',
      features: [
        'Anantam Techfest Hackathon working prototype',
        'Interactive dashboards for student/course analytics',
        'Engineered under strict hackathon time constraints'
      ]
    },
    {
      title: "Hello's Foodies",
      description: 'A modern, highly interactive frontend food ordering and delivery web application. Built using React.js and CSS Modules, it features a clean category search, dynamic basket state management, and an elegant simulated checkout flow.',
      tags: ['React.js', 'State Management', 'CSS Modules', 'Responsive UI', 'Frontend'],
      icon: <UtensilsCrossed size={24} className="text-gradient" />,
      github: 'https://github.com/dharmender0007',
      image: '/food_order.jpg',
      features: [
        'Real-time shopping cart and billing calculations',
        'Food filter search by category and price tags',
        'Interactive interactive frontend checkout simulation'
      ]
    },
    {
      title: 'Amazon Clone',
      description: 'A high-fidelity frontend replica of the Amazon e-commerce platform. Implements complex layout components, dynamic product search filtering, product carousel sliders, interactive cart storage, and mock checkout gates.',
      tags: ['React.js', 'Context API', 'E-Commerce UI', 'Frontend', 'Responsive Web Design'],
      icon: <ShoppingBag size={24} className="text-gradient" />,
      github: 'https://github.com/dharmender0007',
      image: '/amazon_clone.jpg',
      features: [
        'Interactive shopping cart management and badges',
        'Dynamic product filters and search bar mechanics',
        'Sleek e-commerce layouts matching the original design'
      ]
    }
  ];

  return (
    <section id="projects">
      <div className="section-header">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A selection of projects that showcase my capability to build end-to-end full-stack applications with AI and API integrations.
        </motion.p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: '40px',
              borderRadius: '20px',
              transition: 'border-color 0.3s'
            }}
            className="glass-panel project-card-layout"
          >
            {/* Desktop Two-Column Layout (Info Left, Image Right) */}
            <div className="project-grid" style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: '40px',
              alignItems: 'center'
            }}>
              
              {/* Left: Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{
                      padding: '12px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--card-bg)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>{project.title}</h3>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{
                        color: 'var(--text-main)',
                        padding: '8px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--card-bg)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid var(--card-border)',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--card-border)'}
                    >
                      <GithubIcon size={18} />
                    </a>
                  </div>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>{project.description}</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>Key Features:</h4>
                  <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: 0 }}>
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', gap: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        <span style={{ color: 'var(--accent)' }}>•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      style={{
                        fontSize: '0.75rem',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        backgroundColor: 'var(--card-bg)',
                        border: '1px solid var(--card-border)',
                        color: 'var(--text-muted)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Mockup Image */}
              <div style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid var(--card-border)',
                boxShadow: 'var(--shadow)',
                height: '100%',
                maxHeight: '260px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#0a0a0f'
              }}>
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={`${import.meta.env.BASE_URL || '/'}${project.image.startsWith('/') ? project.image.substring(1) : project.image}`} 
                  alt={`${project.title} Preview`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    cursor: 'pointer'
                  }}
                />
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 968px) {
          .project-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .project-grid div[style*="maxHeight: '260px'"] {
            height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
}
