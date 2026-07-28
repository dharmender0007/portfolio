import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Wrench, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={24} className="text-gradient" />,
      skills: ['JavaScript (ES6+)', 'Java', 'Python', 'HTML5', 'CSS3']
    },
    {
      title: 'Frontend Development',
      icon: <Layout size={24} className="text-gradient" />,
      skills: ['React.js', 'Next.js', 'Responsive Web Design', 'Component Architecture', 'Modern CSS']
    },
    {
      title: 'Backend & Databases',
      icon: <Server size={24} className="text-gradient" />,
      skills: ['Node.js', 'Express.js', 'REST API Development', 'MongoDB', 'MySQL (SQL)', 'Database Design']
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench size={24} className="text-gradient" />,
      skills: ['Git & GitHub', 'VS Code', 'Netlify', 'Vercel', 'npm']
    },
    {
      title: 'APIs & Integrations',
      icon: <Cpu size={24} className="text-gradient" />,
      skills: ['OpenAI API', 'GitHub API', 'API Integration', 'JSON Parsing', 'Rate Limiting & Caching']
    },
    {
      title: 'Core CS Concepts',
      icon: <Cpu size={24} className="text-gradient" />,
      skills: ['Data Structures & Algorithms', 'OOP (Object Oriented)', 'Agile Workflows', 'Code Quality & Review']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="skills">
      <div className="section-header">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical <span className="text-gradient">Skills</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My engineering toolkit, from front-end layout engines to highly scalable back-end API integrations.
        </motion.p>
      </div>

      <motion.div 
        className="grid-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            style={{
              padding: '28px',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              transition: 'border-color 0.3s'
            }}
            className="glass-panel"
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--card-border)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                padding: '10px',
                borderRadius: '10px',
                backgroundColor: 'var(--card-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {category.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)' }}>{category.title}</h3>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {category.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  style={{
                    fontSize: '0.85rem',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--card-border)',
                    color: 'var(--text-muted)',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--text-main)';
                    e.target.style.borderColor = 'var(--primary)';
                    e.target.style.backgroundColor = 'var(--primary-glow)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'var(--text-muted)';
                    e.target.style.borderColor = 'var(--card-border)';
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
