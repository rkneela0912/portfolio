import { motion } from 'framer-motion';

const ExperienceCard = ({ period, title, company, description, achievements }) => (
  <motion.div
    className="experience-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
  >
    <div className="timeline-element">
      <div className="timeline-dot" aria-hidden="true"></div>
      <div className="timeline-period">{period}</div>
    </div>
    <div className="experience-content">
      <h3 className="experience-title">{title}</h3>
      {company && <h4 className="experience-company">{company}</h4>}
      <p className="experience-description">{description}</p>
      {achievements && (
        <ul className="experience-achievements" aria-label="Key achievements">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      )}
    </div>
  </motion.div>
);

const Experience = () => {
  const experienceData = {
    period: "2022 - Present",
    title: "Power Platform & AI Solutions Architect",
    description: `Led full-stack development lifecycle and SharePoint migration projects. Developed custom SharePoint web parts using SPFx and implemented responsive user interfaces with canvas applications. Leading AI enablement initiatives and Copilot development. Architected custom Microsoft Copilot agents achieving 40% improvement in task completion accuracy. Implemented enterprise-grade conversational AI solutions using Azure Bot Framework.

Developed custom Power Apps solutions that automated manual processes, reducing operational time by 60% and empowering over 1,000 users with streamlined workflows.

Implemented Power Automate integrations with SharePoint, Dataverse, enhancing data governance and achieving 40% faster processing while minimizing errors in business systems.

Led the architecture of low-code applications using Power Platform, resulting in annual cost savings of $150,000 through process optimization and waste elimination.

Designed AI-enabled Power Apps with AI Builder, improving decision-making insights and increasing workforce productivity by 25% in cross-functional teams.

Partnered with Microsoft through EPMPOINT to design and conduct comprehensive training for over 320+ users from diverse organizations.`,
    achievements: [
      "Power Apps Development: Built 30+ Canvas Apps with complex business logic, created 15+ Model-driven Apps with custom entities and business process flows",
      "SharePoint Integration: Developed SPFx web parts with React/TypeScript, integrated Power Apps with SharePoint lists and document libraries",
      "Dataverse Solutions: Designed custom tables, relationships, and security roles; implemented complex business rules and calculated fields",
      "Custom Connectors: Built 12+ custom connectors for legacy systems integration, API management with authentication and error handling",
      "Power BI Mastery: Created executive dashboards with Power Query, DAX calculations, custom visuals, and real-time data streaming",
      "SQL Integration: Optimized SQL queries for Power Apps data sources, implemented stored procedures for complex business logic",
      "AI & Copilot: Developed custom Microsoft Copilot agents, prompt engineering, and AI Builder models for document processing",
      "Power Automate: Built 50+ automated workflows with approvals, notifications, and complex conditional logic"
    ]
  };

  return (
    <section id="experience" className="section experience-section" aria-labelledby="experience-title">
      <div className="container">
        <h2 id="experience-title" className="section-title">Professional Experience</h2>
        <div className="experience-timeline">
          <ExperienceCard {...experienceData} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
