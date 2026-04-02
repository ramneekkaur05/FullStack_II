# EXP 3 - React Router & Navigation

This folder contains three subparts demonstrating progressive React Router implementation and navigation patterns.

## Overview

| Subpart | Focus | Features |
|---------|-------|----------|
| **Subpart 1** | Basic React Router | Home, About, Contact pages with simple routing |
| **Subpart 2** | Complex Layouts & Styling | Profile page with intro section, projects grid, education timeline, skills display, and Dashboard page with skills portfolio |
| **Subpart 3** | Navigation Navbar + Routing using buttons | Sticky navbar with "Profile" and "Dashboard" buttons, profile photo icon branding, default landing on Profile page |

---

# Subpart 1: Basic React Router

A foundational setup of React Router demonstrating basic page routing.
<img width="1868" height="1040" alt="Screenshot 2026-02-04 194322" src="https://github.com/user-attachments/assets/0b9525ab-f28c-4ad3-b06f-ada364ea7259" />
<img width="1878" height="1045" alt="Screenshot 2026-02-04 194338" src="https://github.com/user-attachments/assets/0dec621e-b23a-4ad3-9859-faf8111e0e50" />
<img width="1871" height="1042" alt="Screenshot 2026-02-04 194356" src="https://github.com/user-attachments/assets/bf973cba-feba-4931-8ac7-9e18a8a7fa13" />


### Pages:
- **Home**: Landing page
- **About**: About page
- **Contact**: Contact page

### Tech Stack:
- React 19.2.0
- React Router DOM 7.13.0
- Vite (build tool)

### Running:
```bash
cd subpart1
npm install
npm run dev
```

Visit: `http://localhost:5173` (or next available port)

---

# Subpart 2: Profile & Dashboard

A sophisticated portfolio showcase with two main sections.
<img width="1876" height="1042" alt="Screenshot 2026-02-04 194442" src="https://github.com/user-attachments/assets/89e2d930-bfdb-4153-bdaa-438ac36e232c" />
<img width="1875" height="1038" alt="Screenshot 2026-02-04 194452" src="https://github.com/user-attachments/assets/3af10d95-e61c-473b-8632-26c7e32d407b" />
<img width="1878" height="1040" alt="Screenshot 2026-02-04 194501" src="https://github.com/user-attachments/assets/b06767ce-7e49-42b1-8b92-003953c18d4d" />



### Pages:

#### Profile Page
- **Hero Section**: Dark gradient background with name, title, and tags
- **Stats Cards**: 3rd Year status, CGPA, featured projects count, certifications
- **Professional Summary**: About text with border accent
- **Certifications Grid**: Microsoft Azure, NVIDIA, Google Cloud, and more
- **Featured Projects**: 5 projects with emoji icons, descriptions, and tech stacks
  - Smart Journaling App
  - Audio RAG App
  - AI Web Scraper
  - Conversational Chatbot
  - Volume Controller using Hand Gesture
- **Education Timeline**: Chandigarh University, Ryan International School, St. Xavier's High School

#### Dashboard Page
- **Hero Section**: Purple gradient with title and subtitle
- **Stats Cards**: 5 technical skills, 3 soft skills, total competencies
- **Technical Skills Grid**: Data Analysis, Generative AI, Python, Power BI, Machine Learning
- **Soft Skills Grid**: Communication, Leadership, Time Management

### Design Features:
- Modern glassmorphism cards
- Gradient backgrounds
- Smooth hover animations
- Responsive grid layouts
- Icon-based visual hierarchy

### Tech Stack:
- React 19.2.0
- React Router DOM 7.13.0
- CSS3 (custom styling with gradients, animations, flexbox/grid)
- Vite

### Running:
```bash
cd subpart2
npm install
npm run dev
```

Visit: `http://localhost:5173` (or next available port)

---

# Subpart 3: Portfolio with Navigation Navbar

A polished portfolio application with persistent navbar and seamless routing.
<img width="1877" height="1043" alt="Screenshot 2026-02-04 194531" src="https://github.com/user-attachments/assets/46dc831a-38e5-4743-ab1f-b516ad2ce9cf" />
<img width="1875" height="1035" alt="Screenshot 2026-02-04 194539" src="https://github.com/user-attachments/assets/f1d3055c-e118-4c57-b792-645f058943a4" />


### Key Features:
- **Sticky Navbar**:
  - Profile icon (👤) branded badge with "PORTFOLIO" text
  - Two navigation buttons: "Profile" and "Dashboard"
  - Active button highlights with gradient background
  - Smooth hover effects
  - Responsive design

- **Default Route**: Landing on Profile page when site opens

- **Pages**:
  - **Profile** (same as Subpart 2)
  - **Dashboard** (same as Subpart 2)

### Navigation Flow:
```
/ (redirect to /profile)
├── /profile → Profile page with projects, certifications, education
└── /dashboard → Dashboard page with skills overview
```

### Design Highlights:
- Sticky positioned navbar with backdrop blur
- Active route indication
- Smooth transitions between pages
- Professional color scheme (purple/blue gradients)
- Mobile-responsive layout

### Tech Stack:
- React 19.2.0
- React Router DOM 7.13.0
- CSS3 (glassmorphism, gradients, responsive design)
- Vite

### Running:
```bash
cd subpart3
npm install
npm run dev
```

Visit: `http://localhost:5174` (or next available port)

---

## Installation & Setup (All Subparts)

### Prerequisites:
- Node.js (v16 or higher)
- npm or yarn

### Steps:
```bash
# Navigate to desired subpart
cd subpart1  # or subpart2 or subpart3

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
EXP 3/
├── subpart1/
│   ├── src/
│   │   ├── App.jsx          # Basic router setup
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── subpart2/
│   ├── src/
│   │   ├── App.jsx          # Profile & Dashboard components
│   │   ├── App.css          # Complex styling
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── assets/
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── subpart3/
│   ├── src/
│   │   ├── App.jsx          # Navbar + routing
│   │   ├── App.css          # Navbar + subpart2 styles
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
└── React_Router/            # Reference materials
```

---

## Learning Path

**Recommended progression:**

1. **Subpart 1** → Learn basic React Router concepts
   - Route definition
   - BrowserRouter wrapper
   - Navigation between pages

2. **Subpart 2** → Master layout and styling
   - Building complex component structures
   - CSS Grid and Flexbox
   - Glassmorphism and gradient effects
   - Component data management with arrays

3. **Subpart 3** → Implement navigation UX
   - Navbar component design
   - NavLink active state handling
   - Default routes with Navigate
   - Responsive navigation

---

## Technologies Used

- **Framework**: React 19.2.0
- **Routing**: React Router DOM 7.13.0
- **Build Tool**: Vite 7.2.4
- **Styling**: CSS3 (custom, no frameworks)
- **ESLint**: Code quality checks
- **Node**: npm package management

---

## Features Across Subparts

### Subpart 1:
- ✅ Basic routing
- ✅ Multiple pages
- ✅ Simple component structure

### Subpart 2:
- ✅ Complex layouts
- ✅ CSS Grid & Flexbox
- ✅ Glassmorphism UI
- ✅ Timeline components
- ✅ Data-driven grids
- ✅ Gradient backgrounds
- ✅ Hover animations

### Subpart 3:
- ✅ All of Subpart 2 features
- ✅ Persistent navbar
- ✅ Active route highlighting
- ✅ Navigation links
- ✅ Default route handling
- ✅ Responsive navbar
- ✅ Icon branding
- ✅ Smooth page transitions

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Performance Notes

- All three subparts use Vite for fast HMR (Hot Module Replacement)
- CSS is scoped per component
- No external CSS frameworks used (pure CSS3)
- Optimized for production builds

---

## Author

**Ramneek Kaur**
- Full Stack Developer
- AI/ML Enthusiast
- React Specialist

---

## License

This project is part of a learning curriculum for Full Stack II course.

---

## Getting Help

For issues or questions about the subparts:
1. Check the specific `README.md` in each subpart folder (if available)
2. Review the component structure in `App.jsx`
3. Inspect CSS in `App.css` for styling details
4. Check `package.json` for dependencies

---

**Last Updated**: February 2026
