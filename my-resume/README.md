# Arsalan Ajaz - Interactive Resume & Portfolio

A modern, responsive, and ATS-optimized web resume built with **React** and **Vite**, configured for seamless deployment on **Vercel**.

## Features

- **ATS Optimization:** Semantic structure, clean linear layout, standard headings, and ethical action-driven descriptions.
- **One-Click 1-Page PDF Export:** Dedicated `@media print` styling that formats the entire resume into an immaculate, single-page A4 document when using browser print (`Ctrl + P`).
- **Copy ATS Plain Text:** Instant clipboard copy feature formatted for automated job portal application forms.
- **Theme Toggle:** Dark and Light mode support with automatic system preference detection and smooth transitions.
- **Responsive Design:** Optimized for mobile, tablet, and desktop viewports.
- **Verified Credentials:** Highlights verified summer internship from Innovation & Incubation Hub MNNIT Foundation (IIHMF), MNNIT Allahabad.

---

## Getting Started Locally

1. **Navigate to the project directory:**
   ```bash
   cd my-resume
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## How to Deploy to Vercel

### Method 1: Deploy via GitHub (Recommended & Automatic)

1. Push your latest changes to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete interactive ATS resume web app"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** &rarr; **"Project"**.
4. Import your repository: `arsalan0-a/Skill_based`.
5. Under **Root Directory**, click **Edit** and select: `my-resume`.
6. Click **Deploy**. Vercel will automatically build and assign you a free production URL (e.g., `https://arsalan-resume.vercel.app`).

### Method 2: Deploy via Vercel CLI

In your terminal, navigate to `my-resume` and run:
```bash
cd my-resume
npx vercel
```
- When prompted:
  - `Set up and deploy?` &rarr; **Y**
  - `Which scope?` &rarr; Select your account
  - `Link to existing project?` &rarr; **N**
  - `Project name?` &rarr; `arsalan-ajaz-resume`
  - `In which directory is your code located?` &rarr; `./`
- To deploy to production:
  ```bash
  npx vercel --prod
  ```

---

## Project Structure

```
my-resume/
├── index.html              # HTML entry with SEO meta tags & Inter typography
├── package.json            # React 19 + Vite dependencies and build scripts
├── vercel.json             # Vercel routing and framework configuration
├── src/
│   ├── main.jsx            # React root mount
│   ├── App.jsx             # Main application container and event handlers
│   ├── App.css             # Theme variables, responsive styles & @media print rules
│   ├── data/
│   │   └── resumeData.js   # Centralized resume data and ATS plain text
│   └── components/
│       ├── Navbar.jsx      # Navigation, Print PDF, Copy ATS & Theme Toggle
│       ├── Header.jsx      # Name, role, contact pills with direct links
│       ├── Summary.jsx     # Realistic professional summary
│       ├── Education.jsx   # College, degree, expected grad & coursework
│       ├── Skills.jsx      # Categorized skill badges
│       ├── Experience.jsx  # MNNIT Allahabad summer internship & verified ID
│       ├── Projects.jsx    # PayShield AI and Loan Prediction System
│       ├── Certifications.jsx # Certificate details
│       ├── Footer.jsx      # Footer with links & attribution
│       └── Toast.jsx       # Floating notification alert
```
