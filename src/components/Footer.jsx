import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer style={{
      borderTop: '1px solid var(--card-border)',
      padding: '40px 24px',
      marginTop: '60px',
      backgroundColor: 'rgba(0, 0, 0, 0.05)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div style={{ textAlign: 'left' }}>
          <p style={{ fontWeight: 700, fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '4px' }}>
            DHARMENDER JANGIR
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} • MERN Stack & Full Stack Developer
          </p>
        </div>

        <button 
          onClick={scrollToTop}
          style={{
            background: 'none',
            border: '1px solid var(--card-border)',
            color: 'var(--text-main)',
            cursor: 'pointer',
            padding: '10px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--card-bg)',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--primary)';
            e.currentTarget.style.color = 'var(--primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--card-border)';
            e.currentTarget.style.color = 'var(--text-main)';
          }}
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
