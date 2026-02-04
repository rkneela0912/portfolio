# A Template for a Professional Resume Website

A modern, interactive resume website built with React, featuring an AI-powered chatbot and comprehensive skill showcases. This website demonstrates expertise in SharePoint development, Power Platform, AI enablement engineering, and conversational AI solutions. (Updated 02042026)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/rkneela0912/portfolio.svg)](https://github.com/rkneela0912/portfolio/stargazers)
<a href="https://doi.org/10.5281/zenodo.17342683"> <img alt="Download on Zenodo" src="https://img.shields.io/badge/Download%20on-Zenodo-1f77b4?style=flat&logo=zenodo&logoColor=white&labelColor=555555" height="20"> </a>

## 🌟 Features

- **Modern Design**: Professional, responsive design with smooth animations and hover effects
- **AI Chatbot**: Interactive chatbot that answers questions about experience and qualifications
- **Comprehensive Experience**: Detailed skill showcases for each client engagement
- **Technical Expertise**: Complete coverage of Microsoft technologies and development skills
- **Mobile Responsive**: Optimized for all devices and screen sizes
- **Professional Presentation**: Timeline-based experience section with modern card layouts

## 🚀 Live Demo

Visit the live website: [https://rkneela0912.github.io/portfolio/](https://rkneela0912.github.io/portfolio/)

## 🛠️ Technologies Used

- **Frontend**: React 18, Vite, CSS3, HTML5
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm or pnpm
- Git

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/rkneela0912/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This repository includes GitHub Actions workflow for automatic deployment:

1. **Fork or clone this repository**
2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"
3. **Push changes to main branch**:
   ```bash
   git add .
   git commit -m "Deploy resume website"
   git push origin main
   ```
4. **GitHub Actions will automatically build and deploy**

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   # or
   pnpm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   # or
   pnpm run deploy
   ```

## 📁 Project Structure

```
resume-website/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── components/        # React components
│   │   └── ChatbotEngine.js
│   ├── App.jsx           # Main application component
│   ├── App.css           # Styles
│   └── main.jsx          # Application entry point
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions workflow
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## 🎨 Customization

### Personal Information
Update personal details in `src/App.jsx`:
- Name and title
- Contact information
- Professional summary
- Experience details
- Skills and certifications

### Profile Image
Replace `src/assets/profile.png` with your professional photo.

### Chatbot Responses
Modify chatbot knowledge base in `src/components/ChatbotEngine.js`:
- Update experience data
- Add new response patterns
- Customize conversation flow

### Styling
Customize appearance in `src/App.css`:
- Color schemes
- Typography
- Layout and spacing
- Animations and effects

## 🤖 Chatbot Features

The integrated AI chatbot can answer questions about:
- Professional experience and roles
- Technical skills and expertise
- Education and certifications
- Project accomplishments
- Contact information

### Example Questions:
- "What is your experience with SharePoint?"
- "Tell me about your Power Platform skills"
- "What AI technologies do you work with?"
- "How can I contact you?"

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (320px - 767px)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Ranjith Neela**
- Email: iamranjithkneela@gmail.com
- Phone: (330) 687-2781
- Website: www.ranjithneela.com

## 🙏 Acknowledgments

- Built with React and Vite
- Icons by Lucide React
- Deployed on GitHub Pages
- Inspired by modern web design principles

---

⭐ **Star this repository if you found it helpful!**

