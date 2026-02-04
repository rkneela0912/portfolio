import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      period: "2022 - Present",
      title: "Power Platform & AI Solutions Architect",
      company: "Enterprise Solutions",
      description: "Leading AI enablement initiatives and Microsoft Copilot development. Architecting enterprise-grade conversational AI solutions using Azure Bot Framework and Power Platform.",
      achievements: [
        "Developed 30+ Canvas Apps with complex business logic and 15+ Model-driven Apps with custom entities",
        "Built custom Microsoft Copilot agents achieving 40% improvement in task completion accuracy",
        "Created 50+ automated workflows reducing operational time by 60%",
        "Partnered with Microsoft to train 320+ users across organizations",
        "Led architecture of low-code applications saving $150,000 annually"
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-section" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Briefcase size={14} /> Experience
          </motion.span>
          <motion.h2
            id="experience-title"
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Professional Journey
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Building enterprise solutions that transform organizations
          </motion.p>
        </div>

        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-period">
                  <Calendar size={14} />
                  {exp.period}
                </span>
              </div>
              <p className="experience-description">{exp.description}</p>
              <ul className="experience-achievements" aria-label="Key achievements">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
