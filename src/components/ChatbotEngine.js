// Enhanced Chatbot Engine for Resume Website
export class ChatbotEngine {
  constructor() {
    this.resumeData = {
      personal: {
        name: "Ranjith Neela",
        title: "Microsoft Certified Solutions Architect | AI Enablement Engineer",
        email: "connect@ranjithneela.com",
        phone: "(443) 574-4254",
        website: "www.ranjithneela.com",
        experience_years: "12+",
        location: "Remote"
      },
      
      experience: {
        sharepoint: {
          years: "12+",
          description: "Over 12 years of SharePoint development experience including SharePoint 2013, 2016, 2019, and SharePoint Online. Expert in SPFx development using TypeScript and React, custom web parts, workflows, and enterprise migrations. Successfully migrated Fortune 500 company's legacy intranet to SharePoint Online with 50% improvement in employee engagement. Implemented custom SharePoint governance model for government agency improving data security by 70%.",
          technologies: ["SharePoint Framework (SPFx)", "SharePoint Online", "SharePoint 2013/2016/2019", "TypeScript", "React", "Custom Web Parts", "CSOM", "JSOM", "REST API", "PowerShell", "SharePoint Designer", "Nintex Workflows", "InfoPath Forms", "Microsoft Forms", "Provider-Hosted Apps", "SharePoint-Hosted Apps"],
          achievements: ["50% improvement in employee engagement", "70% improvement in data security", "Zero downtime migrations", "Enterprise governance implementation", "60% reduction in information retrieval time"]
        },
        
        powerplatform: {
          years: "8+",
          description: "Comprehensive Power Platform expertise including Power Apps (Canvas & Model-driven), Power Automate, Power BI, Power Pages, and AI Builder. Led end-to-end development of enterprise solutions with advanced automation and data integration. Expert in Dataverse customization, business process flows, and custom connector development. Architected responsive, data-driven websites using Microsoft Power Pages with advanced features and security measures.",
          technologies: ["Power Apps (Canvas & Model-driven)", "Power Automate", "Power BI", "Power Pages", "AI Builder", "Dataverse", "Common Data Service", "PowerFx", "Custom Connectors", "Business Process Flows", "Power BI Integration", "SSRS", "Power Portal Development"],
          achievements: ["Enterprise-scale automation solutions", "Advanced data modeling", "Custom connector development", "Multi-language support implementation", "Performance optimization"]
        },
        
        ai: {
          years: "5+",
          description: "AI Enablement Engineer with extensive experience in Microsoft Copilot development, prompt engineering achieving 40% improvement in accuracy, Azure Cognitive Services, and conversational AI solutions. Specialized in integrating AI capabilities into enterprise workflows and developing custom AI models using AI Builder for document processing and machine learning.",
          technologies: ["Microsoft Copilot", "Copilot Studio", "Azure Cognitive Services", "Prompt Engineering", "Machine Learning", "Natural Language Processing", "AI Builder", "Azure Functions", "Azure Logic Apps"],
          achievements: ["40% improvement in AI response accuracy", "Enterprise AI automation", "Custom AI model development", "Document processing automation"]
        },
        
        copilot: {
          years: "3+",
          description: "Designed and developed custom Microsoft Copilot agents for enterprise solutions, leveraging natural language processing and AI capabilities to automate complex business processes. Expert in Microsoft 365 Copilot extensibility, plugin development, and advanced prompt engineering techniques. Integrated Copilot agents with Microsoft 365 applications for seamless workflow automation.",
          technologies: ["Microsoft 365 Copilot", "Copilot Studio", "Custom Plugins", "Microsoft Graph API", "Teams Integration", "Outlook Integration", "SharePoint Integration", "Prompt Engineering", "Natural Language Processing"],
          achievements: ["Custom enterprise Copilot agents", "40% improvement in task completion accuracy", "Seamless Microsoft 365 integration", "Advanced prompt engineering implementation"]
        },
        
        bot: {
          years: "6+",
          description: "Expert in Azure Bot Framework, Bot Framework Composer, Microsoft Copilot (formerly Power Virtual Agents), and multi-channel bot deployment with natural language understanding capabilities. Created intelligent chatbots for customer service, IT helpdesk, and internal process automation. Implemented hybrid solutions combining low-code development with custom code extensions.",
          technologies: ["Azure Bot Framework", "Bot Framework Composer", "Microsoft Copilot (formerly Power Virtual Agents)", "Natural Language Understanding", "Multi-channel Deployment", "Conversational AI", "Teams Integration", "Web Chat", "Mobile Apps"],
          achievements: ["60% reduction in manual intervention", "30% development time reduction", "Multi-channel bot solutions", "Hybrid low-code/custom code solutions"]
        },
        
        dynamics: {
          years: "8+",
          description: "Extensive experience with Dynamics 365 CE core modules, Common Data Service (Dataverse), and Power Platform integration. Expert in developing plugins, workflows, and custom controls using XRM Framework and Dynamics 365 SDK. Skilled in creating and consuming RESTful APIs and integrating with Azure services.",
          technologies: ["Dynamics 365 CE", "Dataverse", "XRM Framework", "Dynamics 365 SDK", "Custom Plugins", "Workflows", "Custom Controls", "PCF Controls", "REST APIs", "Azure Integration"],
          achievements: ["Custom plugin development", "Workflow automation", "API integration", "Performance optimization"]
        }
      },
      
      skills: {
        programming: ["C#", "TypeScript", "JavaScript", "Python", "PowerShell", "HTML5", "CSS3", "SQL", "PowerFx", "DAX", "PHP", "AJAX", "jQuery", "JSON", "XML"],
        frameworks: [".NET Framework", "ASP.NET", "React", "Angular", "Node.js", "SharePoint Framework (SPFx)", "Bootstrap", "Angular JS"],
        microsoft: ["SharePoint Online", "Power Platform", "Microsoft 365", "Azure", "Dynamics 365", "Teams", "Copilot Studio", "Office 365", "Entra ID"],
        ai_technologies: ["Microsoft Copilot", "Azure Cognitive Services", "AI Builder", "Machine Learning", "Natural Language Processing", "Prompt Engineering"],
        databases: ["SQL Server", "Azure SQL Database", "Dataverse", "Oracle", "Common Data Service"],
        cloud: ["Microsoft Azure", "Azure Functions", "Logic Apps", "API Management", "Azure DevOps", "Azure Blob Storage", "Azure Web Apps"],
        development_tools: ["Visual Studio", "Visual Studio Code", "Git", "Azure DevOps", "PowerShell ISE", "SharePoint Designer", "Nintex", "XRM Toolkit"],
        automation: ["Power Automate", "SharePoint Designer Workflows", "Nintex Workflows", "Business Process Flows", "CI/CD Pipelines", "PowerShell Scripting"],
        web_technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Angular", "jQuery", "Bootstrap", "REST APIs", "SOAP Web Services"],
        security: ["Role-based Access Control (RBAC)", "Azure Active Directory", "Entra ID", "OAuth", "ADFS", "Security Implementation", "Compliance Standards"]
      },
      
      certifications: [
        "Microsoft Power Platform Solutions Expert",
        "Microsoft Power Apps Developer",
        "Microsoft Certified Solution Developer (MCSD)",
        "Microsoft Certified Solution Associate (MCSA)",
        "Microsoft Certified Professional (MCP)",
        "Microsoft Specialist (MS)"
      ],
      
      education: [
        {
          degree: "Master of Science in Computer Science",
          institution: "Texas A&M University - Kingsville",
          year: "2013",
          location: "Kingsville, TX"
        },
        {
          degree: "Bachelor of Science in Computer Science", 
          institution: "Jawaharlal Nehru Technological University",
          year: "2012",
          location: "Hyderabad, India"
        }
      ],
      
      companies: [
        {
          name: "Department of Defense - Washington Headquarters Services",
          role: "Power Platform & AI Solutions Architect",
          period: "2022 - Present",
          type: "Remote",
          responsibilities: [
            "Leading AI enablement initiatives and Copilot development",
            "Architected custom Microsoft Copilot agents achieving 40% improvement in task completion accuracy",
            "Implemented enterprise-grade conversational AI solutions using Azure Bot Framework",
            "Developed custom plugins for Microsoft Copilot for Microsoft 365",
            "Created SharePoint integrated Power Apps canvas applications",
            "Automated business processes using Power Automate flows"
          ]
        },
        {
          name: "Health Resources and Services Administration",
          role: "Senior Power Platform & SharePoint Consultant", 
          period: "2019 - 2022",
          location: "Rockville, MD",
          responsibilities: [
            "Managed complex SharePoint migrations and developed comprehensive Power Platform solutions",
            "Extended Dynamics 365 CE functionalities and implemented AI Builder for machine learning",
            "Developed responsive client-side web parts using SharePoint Framework (SPFx)",
            "Implemented custom solutions integrating with SharePoint Online, Microsoft Teams, and Viva Connections",
            "Built model-driven apps with custom tables and business process flows in Dataverse"
          ]
        },
        {
          name: "New Orleans Police Department",
          role: "Power Platform & SharePoint Solutions Developer",
          period: "2015 - 2019", 
          location: "New Orleans, LA",
          responsibilities: [
            "Led full-stack development lifecycle and SharePoint migration projects",
            "Developed custom SharePoint web parts using SPFx and implemented responsive user interfaces",
            "Created Power Apps forms using SQL data connectors and third-party integrations",
            "Implemented role-based security and authentication mechanisms",
            "Optimized app performance through efficient data modeling and Azure services integration"
          ]
        },
        {
          name: "Phonoscope Lightwave",
          role: "CRM & SharePoint Developer Consultant",
          period: "2014 - 2015",
          location: "Houston, TX",
          responsibilities: [
            "Developed default settings features using event receivers for different site/list templates",
            "Created External Content Types and Reusable Workflows using SharePoint Designer",
            "Built customized SharePoint visual web parts using Kendo UI components",
            "Integrated SQL server databases with SharePoint using BCS services",
            "Implemented department level and site level security with hierarchical permissions"
          ]
        }
      ],
      
      achievements: [
        "Successfully migrated Fortune 500 company's legacy intranet to SharePoint Online with 50% improvement in employee engagement",
        "Implemented custom SharePoint governance model for government agency improving data security by 70%",
        "Designed SharePoint-based knowledge management system reducing information retrieval time by 60%",
        "Achieved 40% improvement in AI response accuracy through advanced prompt engineering",
        "Reduced development time by 30% using Bot Framework Composer",
        "Created enterprise-grade conversational AI solutions with 60% reduction in manual intervention",
        "Developed custom Microsoft Copilot agents for enterprise automation",
        "Implemented advanced data modeling and visualization techniques with Power Pages",
        "Created comprehensive Power Platform automation solutions",
        "Led successful SharePoint migration projects with zero downtime"
      ],
      
      specializations: [
        "SharePoint Framework (SPFx) development with TypeScript and React",
        "Power Platform end-to-end solution development",
        "Microsoft Copilot agent development and customization",
        "Azure Bot Framework and conversational AI solutions",
        "Enterprise-scale digital transformation initiatives",
        "AI Builder and machine learning model development",
        "Custom connector development for Power Platform",
        "Dynamics 365 CE customization and plugin development",
        "Power Pages responsive website development",
        "Advanced prompt engineering and AI optimization"
      ]
    };
    
    this.conversationContext = [];
    this.greetings = [
      "Hello! I'm here to help you learn about Ranjith's professional experience and qualifications.",
      "Hi there! Feel free to ask me anything about Ranjith's skills, experience, or background.",
      "Welcome! I can answer questions about Ranjith's expertise in SharePoint, Power Platform, AI, and more."
    ];
  }
  
  processMessage(userInput) {
    const input = userInput.toLowerCase().trim();
    this.conversationContext.push({ type: 'user', message: input });
    
    // Handle greetings
    if (this.isGreeting(input)) {
      return this.getRandomGreeting();
    }
    
    // Handle specific questions
    const response = this.generateResponse(input);
    this.conversationContext.push({ type: 'bot', message: response });
    
    return response;
  }
  
  isGreeting(input) {
    const greetingWords = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'];
    return greetingWords.some(greeting => input.includes(greeting));
  }
  
  getRandomGreeting() {
    return this.greetings[Math.floor(Math.random() * this.greetings.length)];
  }
  
  generateResponse(input) {
    // Experience-related questions
    if (this.containsKeywords(input, ['sharepoint', 'spfx', 'framework'])) {
      return this.formatExperienceResponse('sharepoint');
    }
    
    if (this.containsKeywords(input, ['power platform', 'power apps', 'power automate', 'power bi', 'powerapps', 'power pages'])) {
      return this.formatExperienceResponse('powerplatform');
    }
    
    if (this.containsKeywords(input, ['ai', 'artificial intelligence', 'machine learning', 'cognitive'])) {
      return this.formatExperienceResponse('ai');
    }
    
    if (this.containsKeywords(input, ['copilot', 'microsoft copilot', 'copilot studio'])) {
      return this.formatExperienceResponse('copilot');
    }
    
    if (this.containsKeywords(input, ['bot', 'chatbot', 'azure bot', 'conversational'])) {
      return this.formatExperienceResponse('bot');
    }
    
    if (this.containsKeywords(input, ['dynamics', 'dynamics 365', 'crm', 'dataverse'])) {
      return this.formatExperienceResponse('dynamics');
    }
    
    // Skills questions
    if (this.containsKeywords(input, ['skill', 'technology', 'programming', 'language'])) {
      return this.formatSkillsResponse(input);
    }
    
    // Education questions
    if (this.containsKeywords(input, ['education', 'degree', 'university', 'college', 'study'])) {
      return this.formatEducationResponse();
    }
    
    // Certification questions
    if (this.containsKeywords(input, ['certification', 'certified', 'certificate'])) {
      return this.formatCertificationResponse();
    }
    
    // Experience/Work history questions
    if (this.containsKeywords(input, ['experience', 'work', 'job', 'company', 'employer'])) {
      return this.formatWorkHistoryResponse();
    }
    
    // Contact information
    if (this.containsKeywords(input, ['contact', 'email', 'phone', 'reach', 'get in touch'])) {
      return this.formatContactResponse();
    }
    
    // Achievements
    if (this.containsKeywords(input, ['achievement', 'accomplish', 'success', 'project'])) {
      return this.formatAchievementsResponse();
    }
    
    // Years of experience
    if (this.containsKeywords(input, ['years', 'experience', 'how long'])) {
      return `Ranjith has over ${this.resumeData.personal.experience_years} years of experience in Microsoft technologies, specializing in SharePoint development, Power Platform solutions, AI enablement, and conversational AI development.`;
    }
    
    // Location/Remote work
    if (this.containsKeywords(input, ['location', 'where', 'remote', 'work from'])) {
      return `Ranjith currently works remotely and is available for remote positions. He has extensive experience working with distributed teams and government agencies.`;
    }
    
    // Specializations
    if (this.containsKeywords(input, ['specialization', 'specialize', 'expertise', 'expert'])) {
      return this.formatSpecializationsResponse();
    }
    
    // Default response for unmatched queries
    return "I don't have specific information about that topic. You can ask me about Ranjith's experience with SharePoint, Power Platform, AI technologies, Copilot development, bot development, Dynamics 365, skills, education, certifications, or contact information. For detailed discussions, please contact Ranjith directly at connect@ranjithneela.com.";
  }
  
  containsKeywords(input, keywords) {
    return keywords.some(keyword => input.includes(keyword.toLowerCase()));
  }
  
  formatExperienceResponse(area) {
    const exp = this.resumeData.experience[area];
    return `Ranjith has ${exp.years} years of experience in ${area}. ${exp.description} Key technologies include: ${exp.technologies.slice(0, 6).join(', ')}, and more. Notable achievements: ${exp.achievements.slice(0, 3).join(', ')}.`;
  }
  
  formatSkillsResponse(input) {
    if (this.containsKeywords(input, ['programming', 'language', 'code'])) {
      return `Ranjith's programming skills include: ${this.resumeData.skills.programming.slice(0, 8).join(', ')}, and more. He's particularly strong in C#, TypeScript, JavaScript, and Python for enterprise development.`;
    }
    
    if (this.containsKeywords(input, ['framework', 'library'])) {
      return `Ranjith works with these frameworks: ${this.resumeData.skills.frameworks.join(', ')}. He specializes in modern web development with React, Angular, and SharePoint Framework (SPFx).`;
    }
    
    if (this.containsKeywords(input, ['microsoft', 'office', '365'])) {
      return `Ranjith's Microsoft technology expertise includes: ${this.resumeData.skills.microsoft.join(', ')}. He's certified in multiple Microsoft technologies and specializes in enterprise solutions.`;
    }
    
    if (this.containsKeywords(input, ['cloud', 'azure'])) {
      return `Ranjith's cloud technology skills include: ${this.resumeData.skills.cloud.join(', ')}. He has extensive experience with Azure services and cloud-native development.`;
    }
    
    if (this.containsKeywords(input, ['database', 'sql'])) {
      return `Ranjith's database expertise includes: ${this.resumeData.skills.databases.join(', ')}. He specializes in SQL Server optimization and Dataverse customization.`;
    }
    
    // General skills overview
    const allSkills = [
      ...this.resumeData.skills.programming.slice(0, 3),
      ...this.resumeData.skills.microsoft.slice(0, 3),
      ...this.resumeData.skills.ai_technologies.slice(0, 2)
    ];
    
    return `Ranjith's key technical skills include: ${allSkills.join(', ')}, and many more across programming, Microsoft technologies, AI development, and modern web frameworks.`;
  }
  
  formatEducationResponse() {
    const education = this.resumeData.education;
    return `Ranjith holds a ${education[0].degree} from ${education[0].institution} (${education[0].year}) and a ${education[1].degree} from ${education[1].institution} (${education[1].year}). His strong educational foundation in computer science supports his expertise in enterprise software development.`;
  }
  
  formatCertificationResponse() {
    return `Ranjith holds ${this.resumeData.certifications.length} professional certifications including: ${this.resumeData.certifications.join(', ')}. These certifications demonstrate his expertise in Microsoft technologies and commitment to continuous learning.`;
  }
  
  formatWorkHistoryResponse() {
    const companies = this.resumeData.companies;
    return `Ranjith has worked at ${companies.length} organizations: ${companies.map(c => `${c.name} as ${c.role} (${c.period})`).slice(0, 2).join(', ')}, and more. His experience spans government agencies, healthcare organizations, and private companies, demonstrating versatility across different sectors.`;
  }
  
  formatContactResponse() {
    const contact = this.resumeData.personal;
    return `You can contact Ranjith at:\n📧 Email: ${contact.email}\n📱 Phone: ${contact.phone}\n🌐 Website: ${contact.website}\n\nHe's available for consulting, full-time positions, and project-based work.`;
  }
  
  formatAchievementsResponse() {
    const achievements = this.resumeData.achievements.slice(0, 4);
    return `Some of Ranjith's key achievements include: ${achievements.join('; ')}. These demonstrate his ability to deliver measurable business value through technology solutions.`;
  }
  
  formatSpecializationsResponse() {
    const specializations = this.resumeData.specializations.slice(0, 5);
    return `Ranjith's key specializations include: ${specializations.join(', ')}, and more. He focuses on enterprise-scale solutions and cutting-edge Microsoft technologies.`;
  }
}

export default ChatbotEngine;

