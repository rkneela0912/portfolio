import { motion } from 'framer-motion';
import { ArrowRight, Briefcase } from 'lucide-react';
import profileImage from '../assets/profile.png';

const Hero = ({ onNavigate }) => {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-background" aria-hidden="true">
        <div className="grid-pattern" />
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Available for opportunities
          </motion.div>

          <motion.h1
            id="hero-title"
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Building <span className="highlight">Digital Solutions</span> That Drive Results
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Senior SharePoint & Power Platform Architect with 12+ years of experience
            delivering enterprise solutions that transform how organizations work.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <button className="btn btn-primary" onClick={() => onNavigate('contact')}>
              Get in Touch
              <ArrowRight size={18} aria-hidden="true" />
            </button>
            <button className="btn btn-secondary" onClick={() => onNavigate('experience')}>
              View Experience
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="profile-container">
            <div className="profile-ring" aria-hidden="true" />
            <div className="profile-image-wrapper">
              <img src={profileImage} alt="Ranjith Neela" className="profile-image" />
            </div>
            <motion.div
              className="profile-badge"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="profile-badge-icon">
                <Briefcase size={16} aria-hidden="true" />
              </div>
              <div>
                <div className="profile-badge-text">Experience</div>
                <div className="profile-badge-value">12+ Years</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        aria-hidden="true"
      >
        Scroll
      </motion.div>
    </section>
  );
};

export default Hero;
