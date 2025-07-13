# 🚀 Deployment Guide - Resume Website

This guide provides step-by-step instructions for deploying your resume website to GitHub Pages.

## 📋 Prerequisites

Before deploying, ensure you have:
- A GitHub account
- Git installed on your computer
- Node.js (version 16 or higher)
- The resume website files

## 🔧 Setup Instructions

### Step 1: Create GitHub Repository

1. **Log in to GitHub** and click "New repository"
2. **Repository name**: `resume-website` (or your preferred name)
3. **Description**: "Professional resume website with AI chatbot"
4. **Visibility**: Public (required for free GitHub Pages)
5. **Initialize**: Don't add README, .gitignore, or license (we have them)
6. Click **"Create repository"**

### Step 2: Prepare Local Repository

1. **Navigate to your project folder**:
   ```bash
   cd resume-website
   ```

2. **Initialize Git** (if not already done):
   ```bash
   git init
   ```

3. **Add all files**:
   ```bash
   git add .
   ```

4. **Commit files**:
   ```bash
   git commit -m "Initial commit: Professional resume website"
   ```

5. **Add remote origin** (replace `your-username` with your GitHub username):
   ```bash
   git remote add origin https://github.com/your-username/resume-website.git
   ```

6. **Push to GitHub**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

### Step 3: Configure GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab
3. **Scroll to "Pages"** in the left sidebar
4. **Source**: Select "GitHub Actions"
5. **Save** the configuration

### Step 4: Update Configuration

1. **Update package.json homepage**:
   ```json
   "homepage": "https://your-username.github.io/resume-website"
   ```

2. **Update README.md** with your actual GitHub username in the live demo link

3. **Commit and push changes**:
   ```bash
   git add .
   git commit -m "Update configuration for GitHub Pages"
   git push origin main
   ```

## 🤖 Automatic Deployment

The repository includes GitHub Actions workflow that automatically:
- Builds the project when you push to main branch
- Deploys to GitHub Pages
- Updates your live website

### Workflow Process:
1. **Push changes** to main branch
2. **GitHub Actions** automatically triggers
3. **Build process** runs (install dependencies, build project)
4. **Deploy** to GitHub Pages
5. **Live website** updates in 2-5 minutes

## 📱 Manual Deployment (Alternative)

If you prefer manual deployment:

1. **Install gh-pages** (if not already installed):
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Build and deploy**:
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: "gh-pages"
   - Folder: "/ (root)"

## 🔍 Verification

After deployment:

1. **Check Actions tab** in your GitHub repository
2. **Wait for green checkmark** (build successful)
3. **Visit your website**: `https://your-username.github.io/resume-website`
4. **Test all features**:
   - Navigation
   - Chatbot functionality
   - Responsive design
   - All sections load properly

## 🛠️ Troubleshooting

### Common Issues:

**1. 404 Error on GitHub Pages**
- Check if GitHub Pages is enabled in repository settings
- Verify the homepage URL in package.json
- Ensure the repository is public

**2. Build Fails in GitHub Actions**
- Check the Actions tab for error details
- Verify all dependencies are listed in package.json
- Check for syntax errors in code

**3. Assets Not Loading**
- Verify base path in vite.config.js
- Check if images are in the correct directory
- Ensure relative paths are used

**4. Chatbot Not Working**
- Check browser console for JavaScript errors
- Verify ChatbotEngine.js is properly imported
- Test locally first before deploying

### Debug Steps:

1. **Test locally**:
   ```bash
   npm run dev
   ```

2. **Build locally**:
   ```bash
   npm run build
   npm run preview
   ```

3. **Check GitHub Actions logs**:
   - Go to Actions tab in repository
   - Click on failed workflow
   - Review error messages

## 🔄 Updating Your Website

To update your live website:

1. **Make changes** to your local files
2. **Test locally**:
   ```bash
   npm run dev
   ```
3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Update: [describe your changes]"
   git push origin main
   ```
4. **GitHub Actions** will automatically deploy updates

## 🎨 Customization Tips

### Personal Information:
- Update contact details in `src/App.jsx`
- Replace profile image in `src/assets/`
- Modify experience details and achievements

### Styling:
- Customize colors in `src/App.css`
- Adjust layout and spacing
- Add new animations or effects

### Chatbot:
- Update responses in `src/components/ChatbotEngine.js`
- Add new question patterns
- Customize conversation flow

## 📞 Support

If you encounter issues:

1. **Check this guide** for common solutions
2. **Review GitHub Actions logs** for build errors
3. **Test locally** to isolate issues
4. **Check GitHub Pages status**: https://www.githubstatus.com/

## 🎉 Success!

Once deployed, your professional resume website will be live at:
`https://your-username.github.io/resume-website`

Share this URL on:
- LinkedIn profile
- Email signatures
- Business cards
- Job applications
- Professional networking

---

**🌟 Pro Tip**: Bookmark your live website and test it regularly to ensure everything works perfectly!

