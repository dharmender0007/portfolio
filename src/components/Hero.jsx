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
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
    }
  };

  const baseUrl = import.meta.env.BASE_URL || '/';

  return (
    <section id="home" style={{ 
      minHeight: 'auto', // Reduced height for more compact feel
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '80px', // Balanced spacing to clear sticky navbar
      paddingBottom: '30px', // Reduced padding
      boxSizing: 'border-box'
    }}>
      {/* Subtle blurred gradient blobs */}
      <div style={{
        position: 'absolute',
        top: '12%',
        right: '10%',
        width: '380px',
        height: '380px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, rgba(6, 182, 212, 0.03) 55%, transparent 70%)',
        filter: 'blur(75px)',
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
          gridTemplateColumns: '1.25fr 0.75fr',
          gap: '24px', // Tighter spacing between details and image
          alignItems: 'center'
        }}>
          {/* Left Column: Details */}
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Intro tag with subtle pulse glow */}
            <motion.div 
              variants={itemVariants}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 12px',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 600,
                border: '1px solid rgba(139, 92, 246, 0.3)',
                backgroundColor: 'var(--primary-glow)',
                color: 'var(--text-main)',
                width: 'fit-content',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                animation: 'pulseGlow 3s infinite ease-in-out'
              }}
            >
              <Sparkles size={13} className="text-gradient" />
              <span>Available for Roles</span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              variants={itemVariants}
              style={{
                fontSize: 'clamp(2.3rem, 5.2vw, 3.8rem)', // Responsive clamp to ensure 1 or 2 lines maximum
                lineHeight: 1.08,
                fontWeight: 800,
                letterSpacing: '-2px',
                color: 'var(--text-main)',
                margin: 0,
                wordBreak: 'keep-all'
              }}
            >
              Hi, I'm <br />
              <span className="text-gradient" style={{ display: 'inline-block', marginTop: '2px' }}>Dharmender Jangir</span>
            </motion.h1>

            {/* Professional Subtitle */}
            <motion.h2 
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1.1rem, 2.3vw, 1.4rem)',
                color: 'var(--text-muted)',
                fontWeight: 500,
                lineHeight: 1.2,
                letterSpacing: '-0.1px',
                margin: 0
              }}
            >
              Full Stack Developer <span style={{ color: 'var(--card-border)' }}>|</span> MERN Stack <span style={{ color: 'var(--card-border)' }}>|</span> <span className="text-gradient-alt" style={{ fontWeight: 600 }}>AI Integration</span>
            </motion.h2>

            {/* Short Paragraph (Left aligned, comfortable max-width, improved line-height) */}
            <motion.p 
              variants={itemVariants}
              style={{
                fontSize: '1rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                maxWidth: '540px',
                margin: 0,
                textAlign: 'left'
              }}
            >
              Results-driven B.Tech (IT) graduate passionate about building scalable MERN stack applications, REST APIs, responsive UIs, and AI-powered solutions.
            </motion.p>

            {/* Tech Stack Chips (Glass effect, better spacing/padding, consistent height) */}
            <motion.div 
              variants={itemVariants}
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                margin: '2px 0'
              }}
            >
              {['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'REST APIs'].map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.78rem',
                    padding: '0 12px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid var(--card-border)',
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                    height: '28px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.25s ease'
                  }}
                  className="tech-chip-premium"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons (Balanced width and identical height) */}
            <motion.div 
              variants={itemVariants}
              style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                alignItems: 'center',
                margin: '2px 0'
              }}
            >
              <a href="#projects" className="btn btn-primary" style={{ 
                textDecoration: 'none',
                width: '150px',
                height: '44px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 16px',
                boxShadow: '0 4px 15px rgba(139, 92, 246, 0.25)',
                transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)'
              }}>
                <span>View Projects</span>
                <ArrowRight size={15} style={{ marginLeft: '6px' }} />
              </a>
              <a href="#contact" className="btn btn-secondary" style={{ 
                textDecoration: 'none',
                width: '150px',
                height: '44px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 16px',
                transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)'
              }}>
                <Code size={15} style={{ marginRight: '6px' }} />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Social Links Row (Glassmorphism, larger touch targets, hover glow & scale) */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                margin: 0
              }}
            >
              {[
                { icon: <GithubIcon size={19} />, href: 'https://github.com/dharmender0007', label: 'GitHub' },
                { icon: <LinkedinIcon size={19} />, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: <FileText size={19} />, href: 'https://drive.google.com/file/d/10vhYe6WXRssxN4bQaoNiVTrTqDEumqLe/view?usp=sharing', label: 'Resume' },
                { icon: <Mail size={19} />, href: 'mailto:jangirdharmender333@gmail.com', label: 'Email' }
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
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid var(--card-border)',
                    boxShadow: 'var(--shadow)',
                    transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)'
                  }}
                  className="social-icon-premium"
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
            justifyContent: 'center',
            marginTop: '0' // Closer vertical grid rhythm
          }}>
            <motion.div 
              variants={itemVariants}
              style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              {/* Premium purple and blue glow highlights behind profile photo */}
              <div style={{
                position: 'absolute',
                width: 'clamp(180px, 50vw, 270px)',
                height: 'clamp(180px, 50vw, 270px)',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.22) 0%, rgba(6, 182, 212, 0.16) 50%, transparent 100%)',
                filter: 'blur(30px)',
                opacity: 0.3,
                zIndex: 1
              }} />

              {/* Profile Image with premium circular gradient border */}
              <motion.div 
                animate={{
                  y: [0, -8, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.02 }}
                style={{
                  width: 'clamp(180px, 50vw, 260px)', // Compact sizing
                  height: 'clamp(180px, 50vw, 260px)',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  padding: '3px',
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 50%, var(--accent) 100%)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(139, 92, 246, 0.15)',
                  zIndex: 2,
                  position: 'relative'
                }}
              >
                {/* Image background wrapper replacing flat grey look */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  background: 'radial-gradient(circle at center, rgba(30, 27, 45, 0.9) 0%, #0a0815 100%)',
                  boxShadow: 'inset 0 0 15px rgba(6, 182, 212, 0.25)'
                }}>
                  <img 
                    src={`${baseUrl}profile.png?v=1.1`}
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

            {/* Trust Section Glass Cards (Reduced margin to match layout spacing) */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                gap: '8px',
                justifyContent: 'center',
                marginTop: '20px',
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
                  whileHover={{ y: -3, borderColor: 'var(--primary)', boxShadow: '0 4px 15px var(--primary-glow)' }}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    border: '1px solid var(--card-border)',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <span>{card.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.3);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 12px 3px rgba(139, 92, 246, 0.15);
            transform: scale(1.01);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.3);
            transform: scale(1);
          }
        }

        .social-icon-premium:hover {
          color: var(--primary) !important;
          border-color: var(--primary) !important;
          transform: translateY(-3px) scale(1.08);
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.25);
          background-color: rgba(139, 92, 246, 0.05) !important;
        }
        
        .tech-chip-premium:hover {
          color: var(--text-main) !important;
          border-color: var(--primary) !important;
          background-color: var(--primary-glow) !important;
          transform: translateY(-2px);
        }

        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            text-align: left !important;
          }
          .hero-grid div {
            text-align: left !important;
          }
          .hero-grid div[style*="marginBottom: '28px'"] {
            justify-content: flex-start !important;
          }
          .hero-grid div[style*="gap: '12px'"] {
            justify-content: flex-start !important;
          }
          .hero-grid div[style*="marginBottom: '32px'"] {
            justify-content: flex-start !important;
          }
          
          /* Center profile picture and trust cards explicitly on mobile */
          .hero-grid div[style*="display: 'flex'"][style*="flexDirection: 'column'"] {
            align-items: center !important;
            text-align: center !important;
            margin-top: 16px !important;
          }
          .hero-grid div[style*="display: 'flex'"][style*="flexDirection: 'column'"] div {
            text-align: center !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
