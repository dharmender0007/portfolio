import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Sparkles, Mail, FileText } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
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

const LinkedinIcon = ({ size = 20 }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const baseUrl = import.meta.env.BASE_URL || '/';

  return (
    <section id="home" style={{ 
      minHeight: 'calc(100vh - 70px)', 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '100px', // Increased padding to clear sticky navbar and prevent overlap
      paddingBottom: '80px',
      boxSizing: 'border-box'
    }}>
      {/* Background blobs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          width: '100%',
          zIndex: 1
        }}
      >
        {/* Two column Grid on Desktop */}
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* Left Column: Details */}
          <div style={{ textAlign: 'left' }}>
            {/* Intro tag with soft glow */}
            <motion.div 
              variants={itemVariants}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                border: '1px solid rgba(139, 92, 246, 0.4)',
                backgroundColor: 'var(--primary-glow)',
                color: 'var(--text-main)',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: '0 0 15px rgba(139, 92, 246, 0.15)'
              }}
            >
              <Sparkles size={14} className="text-gradient" />
              <span>Available for Roles</span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              variants={itemVariants}
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                lineHeight: 1.05,
                marginBottom: '16px',
                fontWeight: 800,
                letterSpacing: '-2.5px',
                color: 'var(--text-main)'
              }}
            >
              Hi, I'm <br />
              <span className="text-gradient" style={{ display: 'inline-block', marginTop: '4px' }}>Dharmender Jangir</span>
            </motion.h1>

            {/* Professional Subtitle */}
            <motion.h2 
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)',
                color: 'var(--text-muted)',
                fontWeight: 500,
                marginBottom: '20px',
                lineHeight: 1.3
              }}
            >
              Full Stack Developer <span style={{ color: 'var(--card-border)' }}>|</span> MERN Stack <span style={{ color: 'var(--card-border)' }}>|</span> <span className="text-gradient-alt" style={{ fontWeight: 600 }}>AI Integration</span>
            </motion.h2>

            {/* Short Paragraph */}
            <motion.p 
              variants={itemVariants}
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                maxWidth: '620px',
                marginBottom: '24px',
                fontWeight: 400
              }}
            >
              Results-driven B.Tech (IT) graduate passionate about building scalable MERN stack applications, REST APIs, responsive UIs, and AI-powered solutions.
            </motion.p>

            {/* Tech Stack Chips */}
            <motion.div 
              variants={itemVariants}
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                marginBottom: '32px'
              }}
            >
              {['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'OpenAI API'].map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.8rem',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                    transition: 'all 0.2s'
                  }}
                  className="tech-chip"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                alignItems: 'center',
                marginBottom: '28px'
              }}
            >
              <a href="#projects" className="btn btn-primary" style={{ 
                textDecoration: 'none',
                minWidth: '150px',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(139, 92, 246, 0.25)'
              }}>
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn btn-secondary" style={{ 
                textDecoration: 'none',
                minWidth: '150px',
                justifyContent: 'center'
              }}>
                <Code size={16} />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'center'
              }}
            >
              {[
                { icon: <GithubIcon size={20} />, href: 'https://github.com/dharmender0007', label: 'GitHub' },
                { icon: <LinkedinIcon size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: <FileText size={20} />, href: 'https://drive.google.com/file/d/10vhYe6WXRssxN4bQaoNiVTrTqDEumqLe/view?usp=sharing', label: 'Resume' },
                { icon: <Mail size={20} />, href: 'mailto:jangirdharmender333@gmail.com', label: 'Email' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  title={social.label}
                  style={{
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  className="social-icon-link"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Profile Image + Trust Section Cards */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <motion.div 
              variants={itemVariants}
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              {/* Soft purple glow behind profile photo */}
              <div style={{
                position: 'absolute',
                width: 'clamp(220px, 60vw, 320px)',
                height: 'clamp(220px, 60vw, 320px)',
                borderRadius: '50%',
                background: 'radial-gradient(circle, var(--primary) 0%, rgba(217, 70, 239, 0.3) 60%, transparent 100%)',
                filter: 'blur(30px)',
                opacity: 0.25,
                zIndex: 1
              }} />

              {/* Profile Image with premium circular gradient border */}
              <motion.div 
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.02 }}
                style={{
                  width: 'clamp(200px, 55vw, 290px)',
                  height: 'clamp(200px, 55vw, 290px)',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  padding: '4px',
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 50%, var(--accent) 100%)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                  zIndex: 2,
                  position: 'relative'
                }}
              >
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-color)'
                }}>
                  <img 
                    src={`${baseUrl}profile.png?v=1.1`} // Added cache buster to bypass browser 404 cache
                    alt="Dharmender Jangir Profile" 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Trust Section Glass Cards */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
                marginTop: '32px',
                width: '100%',
                flexWrap: 'wrap'
              }}
            >
              {[
                { label: '✔ 5+ Projects' },
                { label: '✔ Open to Work' },
                { label: '✔ B.Tech (IT)' }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, borderColor: 'var(--primary)', boxShadow: '0 4px 15px var(--primary-glow)' }}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '12px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    border: '1px solid var(--card-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s'
                  }}
                  className="glass-panel"
                >
                  <span>{card.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      <style>{`
        .social-icon-link:hover {
          color: var(--primary) !important;
          border-color: var(--primary) !important;
          transform: translateY(-3px);
          box-shadow: 0 4px 12px var(--primary-glow);
        }
        
        .tech-chip:hover {
          color: var(--text-main) !important;
          border-color: var(--primary) !important;
          background-color: var(--primary-glow) !important;
        }

        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center !important;
          }
          .hero-grid div {
            text-align: center !important;
          }
          .hero-grid div[style*="marginBottom: '28px'"] {
            justify-content: center !important;
          }
          .hero-grid div[style*="gap: '16px'"] {
            justify-content: center !important;
          }
          .hero-grid div[style*="marginBottom: '32px'"] {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
