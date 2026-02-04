import { ChevronDown, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.png';

const Hero = ({ onNavigate }) => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-background" aria-hidden="true">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 id="hero-title" className="hero-title">
            <span className="gradient-text">Ranjith Neela</span>
          </h1>
          <h2 className="hero-subtitle">
            Microsoft Certified Solutions Architect | AI Enablement Engineer
          </h2>
          <p className="hero-description">
            Specializing in Power Platform, and Conversational AI Solutions (Microsoft Copilot, Azure Bot Framework), Azure and SharePoint Development.
          </p>
          <div className="hero-buttons">
            <button onClick={() => onNavigate('contact')} className="btn-primary">
              <Mail size={20} aria-hidden="true" />
              Get In Touch
            </button>
            <button className="btn-secondary">
              <Download size={20} aria-hidden="true" />
              Download Resume
            </button>
          </div>
        </motion.div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="profile-container">
            <img src={profileImage} alt="Ranjith Neela - Microsoft Solutions Architect" className="profile-image" />
            <div className="profile-glow" aria-hidden="true"></div>
          </div>
        </motion.div>
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
