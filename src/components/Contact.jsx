import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const GithubIcon = ({ size = 22 }) => (
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

const LinkedinIcon = ({ size = 22 }) => (
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

export default function Contact() {
  const contactCards = [
    {
      title: 'Email Address',
      value: 'jangirdharmender333@gmail.com',
      href: 'mailto:jangirdharmender333@gmail.com',
      icon: <Mail size={22} />,
      color: 'var(--primary)'
    },
    {
      title: 'Phone / WhatsApp',
      value: '+91 8769895389',
      href: 'tel:+918769895389',
      icon: <Phone size={22} />,
      color: 'var(--accent)'
    }
  ];

  return (
    <section id="contact" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
      <div className="section-header">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In <span className="text-gradient">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Have a role, project, or opportunity? Let's connect directly via any channel below.
        </motion.p>
      </div>

      {/* Grid of contact details */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        maxWidth: '1000px',
        margin: '0 auto 48px auto'
      }}>
        {contactCards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            style={{
              padding: '32px 24px',
              borderRadius: '16px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              border: '1px solid var(--card-border)'
            }}
            className="glass-panel"
          >
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '12px',
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: card.color
            }}>
              {card.icon}
            </div>

            <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>{card.title}</h3>

            {card.href ? (
              <a 
                href={card.href} 
                style={{ 
                  color: 'var(--text-muted)', 
                  textDecoration: 'none', 
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  wordBreak: 'break-all'
                }}
                onMouseEnter={(e) => e.target.style.color = card.color}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
              >
                {card.value}
              </a>
            ) : (
              <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500 }}>
                {card.value}
              </span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Social networks shortcuts */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px'
        }}
      >
        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
          Connect with me on
        </span>
        <div style={{ display: 'flex', gap: '16px' }}>
          <a 
            href="https://github.com/dharmender0007" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              color: 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--card-border)'}
          >
            <GithubIcon size={22} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              color: 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--card-border)'}
          >
            <LinkedinIcon size={22} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
