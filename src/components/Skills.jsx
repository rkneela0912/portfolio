import { Code, Database, Cloud, Zap, Brain, Bot, Shield, Layers, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <motion.div
    className="skill-card"
    style={{ '--card-color': color }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="skill-card-header">
      <div className="skill-icon">
        <Icon size={20} aria-hidden="true" />
      </div>
      <h3>{title}</h3>
    </div>
    <div className="skill-tags" role="list" aria-label={`${title} skills`}>
      {skills.map((skill, index) => (
        <span key={index} className="skill-tag" role="listitem">{skill}</span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      color: "#6366f1",
      skills: ["SharePoint Framework (SPFx)", "React", "TypeScript", "JavaScript", "HTML5/CSS3"]
    },
    {
      icon: Database,
      title: "Backend & Database",
      color: "#8b5cf6",
      skills: ["C#", "ASP.NET", "SQL Server", "REST APIs", "PowerShell"]
    },
    {
      icon: Cloud,
      title: "Microsoft Cloud",
      color: "#0ea5e9",
      skills: ["SharePoint Online", "Microsoft 365", "Azure Functions", "Azure DevOps", "Entra ID"]
    },
    {
      icon: Zap,
      title: "Power Platform",
      color: "#10b981",
      skills: ["Power Apps", "Power Automate", "Power BI", "Dataverse", "Custom Connectors"]
    },
    {
      icon: Brain,
      title: "AI & Copilot",
      color: "#f59e0b",
      skills: ["Microsoft Copilot", "Copilot Studio", "Azure Cognitive Services", "Prompt Engineering"]
    },
    {
      icon: Bot,
      title: "Conversational AI",
      color: "#ef4444",
      skills: ["Azure Bot Framework", "Bot Composer", "Multi-channel Deployment", "NLP"]
    },
    {
      icon: Layers,
      title: "Enterprise Solutions",
      color: "#8b5cf6",
      skills: ["Dynamics 365", "PCF Controls", "Custom Web Parts", "Nintex"]
    },
    {
      icon: Shield,
      title: "DevOps & Security",
      color: "#06b6d4",
      skills: ["CI/CD Pipelines", "Git", "RBAC", "ALM", "Security Implementation"]
    }
  ];

  return (
    <section id="skills" className="section section-alt" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Wrench size={14} /> Skills
          </motion.span>
          <motion.h2
            id="skills-title"
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Deep expertise across the Microsoft technology stack
          </motion.p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
