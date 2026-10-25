# 🎓 Md. Omar Faruk — Personal Academic & Professional Portfolio

A modern, high-contrast, responsive personal academic portfolio web application built with **React**, **Tailwind CSS**, and **Framer Motion**. Designed around a distinctive **Dark Glassmorphism** aesthetic (Obsidian Emerald background with Amber/Gold accents) tailored for academic researchers, administrators, and professors.

---

## ✨ Features & Aesthetic Highlights

* **Dark Glassmorphism Aesthetic:** Premium obsidian-emerald backdrop, translucent blurred cards (`backdrop-blur-xl`), glowing amber borders, and high-visibility gold typography.
* **Dynamic & Responsive Navigation:** Clean header navigation with native scrollbar suppression, active state badges, and an adaptive mobile slide-out menu.
* **Ambient Floating Animations:** Smooth background motion with floating academic icons powered by `framer-motion`.
* **Modular Data Architecture:** All CV information (education, publications, books, leadership metrics) is managed centrally in structured JSON/JS data modules for easy content updates.
* **Fully Responsive:** Optimized across desktop, tablet, and mobile breakpoints using Tailwind CSS container layouts (`max-w-7xl`).

---

## 🛠 Tech Stack

* **Framework:** [React 18+](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Routing:** [React Router v6](https://reactrouter.com/) (`createBrowserRouter`)
* **Styling:** [Tailwind CSS v3](https://tailwindcss.com/)
* **Iconography:** [Lucide React](https://lucide.dev/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)

---

## 📁 Project Structure

```text
├── public/
├── src/
│   ├── assets/
│   │   └── Home-Profile.png
│   ├── components/
│   │   ├── PortfolioPage.jsx     # Reusable dark glassmorphism page scaffolding
│   │   └── ...
│   ├── data/
│   │   └── profileData.js        # CV & academic data source
│   ├── Layout/
│   │   └── Main.jsx              # Main application shell with floating background icons
│   ├── pages/
│   │   ├── Home/
│   │   │   └── Home.jsx          # Profile hero, career objective, & metrics grid
│   │   ├── Academics/
│   │   │   └── Academics.jsx      # Degree cards dossier & subject expertise
│   │   ├── Shared/
│   │   │   └── Navbar.jsx        # Glassmorphic top navigation bar
│   │   ├── ScrollToTop/
│   │   │   └── ScrollToTop.jsx   # Route transition scroll restore
│   │   └── ...                   # Additional secondary profile pages
│   ├── router/
│   │   └── router.js             # Centralized route configuration matching Navbar
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js

```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.0.0 or higher) and **npm** installed on your machine.

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/omar-faruk-portfolio.git
cd omar-faruk-portfolio

```


2. **Install dependencies:**
```bash
npm install

```


3. **Start the development server:**
```bash
npm run dev

```


Open your browser and navigate to `http://localhost:5173` (or the URL output by Vite).

---

## ⚙️ Building for Production

To generate an optimized production build:

```bash
npm run build

```

To preview the local production build:

```bash
npm run preview

```

---

## 🎨 Design System Guide

| Utility Class / Color | Hex Code | Application |
| --- | --- | --- |
| **Obsidian Dark Background** | `#070d0a` / `#080c0a` | Global body background |
| **Glass Card Filling** | `#0d1410`/70 / `#0d1612`/90 | Translucent container cards |
| **Amber / Gold Accent Text** | `#f59e0b` / `#amber-300` | Headings, degree highlights, active states |
| **Emerald Accent** | `#10b981` / `#emerald-400` | Secondary badges, subtitled details |
| **High Contrast Body** | `#slate-100` / `#slate-300` | Paragraph prose & metric labels |

---

## 📄 License

This project is created for **Md. Omar Faruk**. All rights reserved.
