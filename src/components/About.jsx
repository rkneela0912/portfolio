import { Star, Code, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const StatCard = ({ number, label, icon: Icon }) => (
  <motion.div
    className="stat-card"
    whileHover={{ y: -10 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon size={32} className="stat-icon" aria-hidden="true" />
    <div className="stat-number">{number}</div>
    <div className="stat-label">{label}</div>
  </motion.div>
);

const About = () => {
  const stats = [
    { number: "12+", label: "Years Experience", icon: Star },
    { number: "50+", label: "Projects Completed", icon: Code },
    { number: "6+", label: "Certifications", icon: Shield }
  ];

  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="container">
        <h2 id="about-title" className="section-title">About Me</h2>
        <p className="about-text">
          Seasoned Microsoft Certified Solutions Architect with over 12 years of specialized expertise in SharePoint development,
          Power Platform ecosystem, AI enablement engineering, and conversational AI solutions. Proven track record of architecting
          and implementing enterprise-scale digital transformation initiatives across Fortune 500 companies and government agencies.
        </p>

        <div className="stats-grid" role="list" aria-label="Professional statistics">
          {stats.map((stat, index) => (
            <div key={index} role="listitem">
              <StatCard {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
