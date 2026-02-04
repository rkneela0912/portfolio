import { Sparkles, Zap, Award, Target, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles size={14} /> About Me
          </motion.span>
          <motion.h2
            id="about-title"
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Transforming Ideas Into Enterprise Solutions
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Microsoft Certified Solutions Architect specializing in digital transformation
          </motion.p>
        </div>

        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main intro card */}
          <motion.div className="bento-card bento-large" variants={itemVariants}>
            <div className="bento-card-header">
              <div className="bento-icon">
                <Target size={24} />
              </div>
              <h3>My Mission</h3>
            </div>
            <p>
              With over 12 years of specialized expertise in SharePoint development, Power Platform ecosystem,
              AI enablement engineering, and conversational AI solutions, I architect and implement enterprise-scale
              digital transformation initiatives that drive measurable business outcomes across Fortune 500
              companies and government agencies.
            </p>
          </motion.div>

          {/* Years stat */}
          <motion.div className="bento-card" variants={itemVariants}>
            <div className="stat-value">12+</div>
            <div className="stat-label">Years of Experience</div>
          </motion.div>

          {/* Projects stat */}
          <motion.div className="bento-card" variants={itemVariants}>
            <div className="stat-value">50+</div>
            <div className="stat-label">Projects Delivered</div>
          </motion.div>

          {/* Expertise card */}
          <motion.div className="bento-card" variants={itemVariants}>
            <div className="bento-card-header">
              <div className="bento-icon">
                <Zap size={24} />
              </div>
              <h3>Core Expertise</h3>
            </div>
            <p>
              SharePoint, Power Platform, Azure, Microsoft 365, Dynamics 365, and AI-powered solutions
              including Microsoft Copilot and Azure Bot Framework.
            </p>
          </motion.div>

          {/* Certifications */}
          <motion.div className="bento-card" variants={itemVariants}>
            <div className="stat-value">6+</div>
            <div className="stat-label">Microsoft Certifications</div>
          </motion.div>

          {/* Impact card */}
          <motion.div className="bento-card bento-large" variants={itemVariants}>
            <div className="bento-card-header">
              <div className="bento-icon">
                <TrendingUp size={24} />
              </div>
              <h3>Driving Business Impact</h3>
            </div>
            <p>
              I focus on delivering solutions that not only meet technical requirements but also create
              tangible business value. From automating workflows to building intelligent chatbots,
              every project is designed with ROI and user adoption in mind.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
