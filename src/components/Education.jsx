import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, MapPin } from 'lucide-react';

export default function Education() {
  const educations = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'B.K. Birla Institute of Engineering & Technology (BKBIET)',
      location: 'Pilani, Rajasthan',
      period: '2022 – 2026',
      status: 'Degree Awaited'
    },
    {
      degree: 'Senior Secondary (Class XII)',
      institution: 'Rakesh Academy SR SEC School',
      location: 'Pilani, Rajasthan',
      period: '2020',
      status: 'BSER Board'
    }
  ];

  return (
    <section id="education">
      <div className="section-header">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-gradient">Education</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My formal engineering education and foundations in Computer Science.
        </motion.p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '900px', margin: '0 auto' }}>
        {educations.map((edu, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            style={{
              padding: '30px',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px'
            }}
            className="glass-panel"
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{
                  padding: '10px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--card-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)'
                }}>
                  <GraduationCap size={22} />
                </div>
                <span style={{
                  fontSize: '0.8rem',
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--primary-glow)',
                  border: '1px solid var(--primary)',
                  color: 'var(--text-main)',
                  fontWeight: 600
                }}>
                  {edu.period}
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', marginBottom: '8px', color: 'var(--text-main)' }}>{edu.degree}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '16px' }}>{edu.institution}</p>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid var(--card-border)',
              paddingTop: '16px',
              fontSize: '0.85rem',
              color: 'var(--text-muted)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={14} />
                <span>{edu.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent)', fontWeight: 600 }}>
                <Award size={14} />
                <span>{edu.status}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
