import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Software Developer Intern',
      company: 'Code Caffeine',
      duration: 'Jun 2025 – Aug 2025',
      bullets: [
        'Collaborated with cross-functional engineering team to develop and ship production-ready software features using JavaScript and modern web technologies.',
        'Identified and resolved multiple bugs in production codebase, improving application stability and reducing error rates through systematic debugging and root-cause analysis.',
        'Implemented new frontend features by translating business requirements into clean, maintainable JavaScript and web application code.',
        'Participated in code reviews, adopted best practices for code quality, readability, and maintainability in a real-world software development environment.'
      ]
    },
    {
      role: 'Web Development Intern',
      company: 'MotionCut Pvt. Ltd',
      duration: 'Jun 2024 – Aug 2024',
      bullets: [
        'Developed and delivered 5+ responsive web pages using HTML5, CSS3, and JavaScript, ensuring cross-browser compatibility and mobile-first design.',
        'Built reusable, modular UI components to maintain design consistency and reduce development time across the web application.',
        'Improved UI/UX quality by refining page layouts and interactive elements, resulting in a more intuitive and visually polished user experience.'
      ]
    }
  ];

  return (
    <section id="experience">
      <div className="section-header">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work <span className="text-gradient">Experience</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My professional internships and hands-on contributions to production software environments.
        </motion.p>
      </div>

      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        {/* Vertical Line */}
        <div style={{
          position: 'absolute',
          left: '20px',
          top: 0,
          bottom: 0,
          width: '2px',
          backgroundColor: 'var(--card-border)',
        }} className="timeline-line" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                position: 'relative',
                paddingLeft: '60px',
              }}
            >
              {/* Icon marker */}
              <div style={{
                position: 'absolute',
                left: '2px',
                top: '0',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-color)',
                border: '2px solid var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
              }}>
                <Briefcase size={16} className="text-gradient" />
              </div>

              {/* Content Panel */}
              <div 
                style={{
                  padding: '30px',
                  borderRadius: '16px',
                }}
                className="glass-panel"
              >
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginBottom: '20px'
                }}>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>{exp.role}</h3>
                    <h4 className="text-gradient" style={{ fontSize: '1.1rem', fontWeight: 600 }}>{exp.company}</h4>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    backgroundColor: 'var(--card-bg)',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    border: '1px solid var(--card-border)'
                  }}>
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '3px' }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-line {
            left: 15px !important;
          }
          #experience div[style*="paddingLeft: '60px'"] {
            padding-left: 45px !important;
          }
          #experience div[style*="width: '38px'"] {
            width: 28px !important;
            height: 28px !important;
            left: 1px !important;
          }
        }
      `}</style>
    </section>
  );
}
