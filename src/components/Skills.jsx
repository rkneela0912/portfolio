import { Code, Database, Cloud, Zap, Brain, Bot, Shield, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <motion.div
    className="skill-card"
    style={{ '--card-color': color }}
    whileHover={{ y: -10, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="skill-card-header">
      <Icon size={24} className="skill-icon" aria-hidden="true" />
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
      skills: ["SharePoint Framework (SPFx)", "React", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "jQuery", "Bootstrap", "Node.js"]
    },
    {
      icon: Database,
      title: "Backend & Database",
      color: "#8b5cf6",
      skills: ["C#", "ASP.NET", ".NET Framework", "SQL Server", "Oracle", "PowerShell", "PHP", "REST APIs", "SOAP Web Services", "JSON"]
    },
    {
      icon: Cloud,
      title: "Microsoft Cloud Platform",
      color: "#06b6d4",
      skills: ["SharePoint Online", "Microsoft 365", "Azure Functions", "Azure Logic Apps", "Azure DevOps", "Azure API Management", "Entra ID", "Azure Blob Storage"]
    },
    {
      icon: Zap,
      title: "Power Platform",
      color: "#10b981",
      skills: ["Power Apps (Canvas & Model-driven)", "Power Automate", "Power BI", "Power Pages", "AI Builder", "Dataverse", "Common Data Service", "PowerFx", "Custom Connectors"]
    },
    {
      icon: Brain,
      title: "AI & Copilot Development",
      color: "#f59e0b",
      skills: ["Microsoft Copilot", "Copilot Studio", "Prompt Engineering", "Azure Cognitive Services", "Machine Learning", "Natural Language Processing", "AI Builder", "Custom Plugins"]
    },
    {
      icon: Bot,
      title: "Conversational AI & Automation",
      color: "#ef4444",
      skills: ["Azure Bot Framework", "Bot Framework Composer", "Microsoft Copilot (formerly Power Virtual Agents)", "Multi-channel Deployment", "Workflow Automation", "Business Process Flows"]
    },
    {
      icon: Layers,
      title: "Enterprise Solutions",
      color: "#8b5cf6",
      skills: ["Dynamics 365 CE", "SharePoint Designer", "Nintex Workflows", "InfoPath Forms", "Microsoft Forms", "XRM Toolkit", "PCF Controls", "Custom Web Parts"]
    },
    {
      icon: Shield,
      title: "DevOps & Security",
      color: "#06b6d4",
      skills: ["CI/CD Pipelines", "Azure DevOps", "Git", "Version Control", "Role-based Access Control (RBAC)", "Security Implementation", "Application Lifecycle Management", "PowerShell Scripting"]
    }
  ];

  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-title">
      <div className="container">
        <h2 id="skills-title" className="section-title">Technical Expertise</h2>
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
