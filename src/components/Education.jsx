import { motion } from 'framer-motion';

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
    <section id="education" className="section education-section" aria-labelledby="education-title">
      <div className="container">
        <h2 id="education-title" className="section-title">Education & Certifications</h2>
        <div className="education-grid">
          {degrees.map((degree, index) => (
            <motion.div
              key={index}
              className="education-card"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>{degree.title}</h3>
              <h4>{degree.institution}</h4>
              <p>{degree.date}</p>
            </motion.div>
          ))}
        </div>

        <div className="certifications">
          <h3>Professional Certifications</h3>
          <div className="cert-grid" role="list" aria-label="Professional certifications">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="cert-badge"
                role="listitem"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
