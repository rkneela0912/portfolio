import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const degrees = [
    {
      title: "Master of Science in Computer Science",
      institution: "Texas A&M University - Kingsville",
      date: "May 2014"
    },
    {
      title: "Bachelor of Science in Computer Science",
      institution: "Jawaharlal Nehru Technological University",
      date: "May 2012"
    }
  ];

  const certifications = [
    "Microsoft Power Platform Solutions Expert",
    "Microsoft Power Apps Developer",
    "Microsoft Certified Solution Developer (MCSD)",
    "Microsoft Certified Solution Associate (MCSA)",
    "Microsoft Certified Professional (MCP)",
    "Microsoft Specialist (MS)",
    "Microsoft Applied Skills - Creating Agents using Microsoft Copilot Studio"
  ];

  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GraduationCap size={14} /> Education
          </motion.span>
          <motion.h2
            id="education-title"
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Education & Certifications
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Continuous learning and professional development
          </motion.p>
        </div>

        <div className="education-grid">
          {degrees.map((degree, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="education-icon">
                <GraduationCap size={28} />
              </div>
              <h3>{degree.title}</h3>
              <h4>{degree.institution}</h4>
              <p>{degree.date}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="certifications"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>Professional Certifications</h3>
          <div className="cert-grid" role="list" aria-label="Professional certifications">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="cert-badge"
                role="listitem"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -2 }}
              >
                <div className="cert-badge-icon">
                  <Award size={16} />
                </div>
                <span>{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
