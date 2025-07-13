import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Globe, MapPin, Download, MessageCircle, X, Send, Star, Code, Database, Cloud, Zap, Brain, Bot, Shield, Layers } from 'lucide-react';
import profileImage from './assets/profile.png';
import ChatbotEngine from './components/ChatbotEngine';
import './App.css';

const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! I can answer questions about Ranjith\'s experience and qualifications. What would you like to know?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [chatbotEngine] = useState(new ChatbotEngine());

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setInputValue('');

    // Use enhanced chatbot engine for responses
    setTimeout(() => {
      const botResponse = chatbotEngine.processMessage(userMessage);
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="chatbot-overlay">
      <div className="chatbot-container">
        <div className="chatbot-header">
          <h3>Ask about Ranjith's Experience</h3>
          <button onClick={onClose} className="close-btn">
            <X size={20} />
          </button>
        </div>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask about skills, experience, or qualifications..."
          />
          <button onClick={handleSendMessage}>
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <div className="skill-card" style={{ '--card-color': color }}>
    <div className="skill-card-header">
      <Icon size={24} className="skill-icon" />
      <h3>{title}</h3>
    </div>
    <div className="skill-tags">
      {skills.map((skill, index) => (
        <span key={index} className="skill-tag">{skill}</span>
      ))}
    </div>
  </div>
);

const ExperienceCard = ({ period, title, company, description, achievements }) => (
  <div className="experience-card">
    <div className="timeline-element">
      <div className="timeline-dot"></div>
      <div className="timeline-period">{period}</div>
    </div>
    <div className="experience-content">
      <h3 className="experience-title">{title}</h3>
      <h4 className="experience-company">{company}</h4>
      <p className="experience-description">{description}</p>
      {achievements && (
        <ul className="experience-achievements">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const StatCard = ({ number, label, icon: Icon }) => (
  <div className="stat-card">
    <Icon size={32} className="stat-icon" />
    <div className="stat-number">{number}</div>
    <div className="stat-label">{label}</div>
  </div>
);

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide Made with Manus footer (less aggressive approach)
  useEffect(() => {
    const hideManusFooter = () => {
      // Only target specific elements that contain Manus branding
      const allElements = document.querySelectorAll('a, div, span, footer');
      allElements.forEach(element => {
        const text = element.textContent || '';
        const href = element.href || '';
        if ((text.includes('Made with Manus') || 
             text.includes('Create my website') || 
             href.includes('manus.space')) &&
            !element.closest('#root')) { // Don't remove elements inside our React app
          element.style.display = 'none';
          element.style.visibility = 'hidden';
          element.style.opacity = '0';
          element.style.height = '0';
          element.style.overflow = 'hidden';
        }
      });
    };
    
    // Run on a delay to allow page to load
    setTimeout(hideManusFooter, 1000);
    const interval = setInterval(hideManusFooter, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

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
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-brand">Ranjith Neela</div>
        <div className="nav-links">
          {['About', 'Experience', 'Skills', 'Education', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">Ranjith Neela</span>
            </h1>
            <h2 className="hero-subtitle">
              Microsoft Certified Solutions Architect | AI Enablement Engineer
            </h2>
            <p className="hero-description">
              Specializing in Power Platform, and Conversational AI Solutions (Microsoft Copilot, Azure Bot Framework) , Azure and SharePoint Development.
            </p>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('contact')} className="btn-primary">
                <Mail size={20} />
                Get In Touch
              </button>
              <button className="btn-secondary">
                <Download size={20} />
                Download Resume
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-container">
              <img src={profileImage} alt="Ranjith Neela" className="profile-image" />
              <div className="profile-glow"></div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            Seasoned Microsoft Certified Solutions Architect with over 12 years of specialized expertise in SharePoint development, 
            Power Platform ecosystem, AI enablement engineering, and conversational AI solutions. Proven track record of architecting 
            and implementing enterprise-scale digital transformation initiatives across Fortune 500 companies and government agencies.
          </p>
          
          <div className="stats-grid">
            <StatCard number="12+" label="Years Experience" icon={Star} />
            <StatCard number="50+" label="Projects Completed" icon={Code} />
            <StatCard number="6+" label="Certifications" icon={Shield} />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="experience-timeline">
            <ExperienceCard
              period="2022 - Present"
              title="Power Platform & AI Solutions Architect"
              company="Department of Defense - Washington Headquarters Services"
              description="Leading AI enablement initiatives and Copilot development. Architected custom Microsoft Copilot agents achieving 40% improvement in task completion accuracy. Implemented enterprise-grade conversational AI solutions using Azure Bot Framework."
              achievements={[
                "🎯 Power Apps Development: Built 30+ Canvas Apps with complex business logic, created 15+ Model-driven Apps with custom entities and business process flows",
                "🔗 SharePoint Integration: Developed SPFx web parts with React/TypeScript, integrated Power Apps with SharePoint lists and document libraries",
                "💾 Dataverse Solutions: Designed custom tables, relationships, and security roles; implemented complex business rules and calculated fields",
                "🔌 Custom Connectors: Built 12+ custom connectors for legacy systems integration, API management with authentication and error handling",
                "📊 Power BI Mastery: Created executive dashboards with Power Query, DAX calculations, custom visuals, and real-time data streaming",
                "🗄️ SQL Integration: Optimized SQL queries for Power Apps data sources, implemented stored procedures for complex business logic",
                "🤖 AI & Copilot: Developed custom Microsoft Copilot agents, prompt engineering, and AI Builder models for document processing",
                "⚡ Power Automate: Built 50+ automated workflows with approvals, notifications, and complex conditional logic"
              ]}
            />
            <ExperienceCard
              period="2019 - 2022"
              title="Senior Power Platform & SharePoint Consultant"
              company="Health Resources and Services Administration"
              description="Managed complex SharePoint migrations and developed comprehensive Power Platform solutions. Extended Dynamics 365 CE functionalities and implemented AI Builder for machine learning model development."
              achievements={[
                "📱 Power Apps Portfolio: Delivered 20+ Canvas Apps for field operations, 10+ Model-driven Apps for case management with custom PCF controls",
                "🌐 SharePoint Excellence: Led SharePoint Online migrations, developed modern sites with SPFx extensions and custom web parts",
                "🏗️ Dataverse Architecture: Designed enterprise data models with 100+ custom tables, implemented security roles and field-level permissions",
                "🔗 Integration Solutions: Created 18+ custom connectors for ERP/CRM systems, implemented OAuth 2.0 and certificate-based authentication",
                "📈 Power BI Analytics: Built comprehensive reporting suite with paginated reports, embedded analytics, and automated data refresh",
                "💽 Database Management: Optimized SQL Server performance, created views and indexes for Power Platform data sources",
                "🔄 Automation Excellence: Developed approval workflows, document generation processes, and scheduled data synchronization flows",
                "🎨 UI/UX Innovation: Designed responsive interfaces with custom themes, branding, and accessibility compliance"
              ]}
            />
            <ExperienceCard
              period="2015 - 2019"
              title="Power Platform & SharePoint Solutions Developer"
              company="New Orleans Police Department"
              description="Led full-stack development lifecycle and SharePoint migration projects. Developed custom SharePoint web parts using SPFx and implemented responsive user interfaces with canvas applications."
              achievements={[
                "🚀 Power Apps Foundation: Built first-generation Canvas Apps for incident reporting, Model-driven Apps for case tracking with custom forms",
                "📚 SharePoint Modernization: Migrated SharePoint 2013 to 2016/Online, developed custom master pages and page layouts",
                "🗃️ Data Platform Setup: Established Dataverse environment, created foundational tables and relationships for police operations",
                "🔧 Custom Development: Built custom connectors for legacy mainframe systems, implemented SOAP/REST API integrations",
                "📊 Reporting Solutions: Created Power BI dashboards for crime analytics, implemented row-level security and data governance",
                "🗄️ SQL Optimization: Designed database schemas, optimized queries for large datasets, implemented data archiving strategies",
                "⚙️ Process Automation: Developed evidence tracking workflows, automated report generation, and notification systems",
                "🔐 Security Implementation: Configured role-based access control, implemented audit trails and compliance reporting"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={index}
                icon={category.icon}
                title={category.title}
                skills={category.skills}
                color={category.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education-section">
        <div className="container">
          <h2 className="section-title">Education & Certifications</h2>
          <div className="education-grid">
            <div className="education-card">
              <h3>Master of Science in Computer Science</h3>
              <h4>Texas A&M University - Kingsville</h4>
              <p>December 2013</p>
            </div>
            <div className="education-card">
              <h3>Bachelor of Science in Computer Science</h3>
              <h4>Jawaharlal Nehru Technological University</h4>
              <p>May 2012</p>
            </div>
          </div>
          
          <div className="certifications">
            <h3>Professional Certifications</h3>
            <div className="cert-grid">
              {[
                "Microsoft Power Platform Solutions Expert",
                "Microsoft Power Apps Developer",
                "Microsoft Certified Solution Developer (MCSD)",
                "Microsoft Certified Solution Associate (MCSA)",
                "Microsoft Certified Professional (MCP)",
                "Microsoft Specialist (MS)"
              ].map((cert, index) => (
                <div key={index} className="cert-badge">{cert}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <Mail size={24} />
              <span>connect@ranjithneela.com</span>
            </div>
            <div className="contact-item">
              <Phone size={24} />
              <span>(443) 574-4254</span>
            </div>
            <div className="contact-item">
              <Globe size={24} />
              <span>www.ranjithneela.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot */}
      <button 
        className="chatbot-trigger"
        onClick={() => setIsChatbotOpen(true)}
      >
        <MessageCircle size={24} />
      </button>

      <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </div>
  );
}

export default App;

