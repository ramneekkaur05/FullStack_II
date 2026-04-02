# EXP 5: React Lazy Loading

This experiment demonstrates the implementation of lazy loading in React applications to improve performance and reduce initial bundle size.

## Overview

Lazy loading is a design pattern that defers the loading of components until they are actually needed. This experiment contains two sub-projects that showcase different approaches to implementing lazy loading in React:

1. **lazyloading** - Basic lazy loading with React components
2. **router_lazyloading** - Lazy loading combined with React Router

---

## 📁 Project 1: lazyloading

### Description
This project demonstrates basic lazy loading in React using `React.lazy()` and `Suspense`. It showcases how to dynamically import components and display a loading state while the component is being loaded.


<img width="1803" height="951" alt="Screenshot 2026-02-13 161357" src="https://github.com/user-attachments/assets/2e606a8e-5f14-47bb-97e1-3977de23d931" />

<img width="1805" height="947" alt="Screenshot 2026-02-13 161411" src="https://github.com/user-attachments/assets/4c0e9c7c-d20a-4d1d-9c68-b66d34962a9b" />

### Key Features
- ✨ Dynamic component import using `React.lazy()`
- ⏳ Suspense boundary with loading fallback
- 📊 Dashboard component loaded on demand
- 🎯 Improved initial load performance

### Technologies Used
- React 18
- Vite
- JavaScript (JSX)

### Project Structure
```
lazyloading/
├── src/
│   ├── Components/
│   │   └── dashboard.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### Implementation Highlights
```jsx
import { lazy, Suspense } from 'react'

// Lazy load the Dashboard component
const Dashboard = lazy(() => import('./Components/dashboard.jsx'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  )
}
```

### How to Run
```bash
cd lazyloading
npm install
npm run dev
```

---

## 📁 Project 2: router_lazyloading

### Description
This project demonstrates lazy loading combined with React Router. It shows how to implement code-splitting at the route level, where each page is loaded only when the user navigates to that specific route.

<img width="1199" height="672" alt="Screenshot 2026-02-13 161503" src="https://github.com/user-attachments/assets/3c47b575-ed05-40b7-aaff-3204bb8e13e3" />
<img width="1849" height="1037" alt="Screenshot 2026-02-13 160718" src="https://github.com/user-attachments/assets/4b12bffa-2e90-4931-b2d6-a3d2ced0064e" />
<img width="1878" height="1033" alt="Screenshot 2026-02-13 161208" src="https://github.com/user-attachments/assets/c97d5e13-94a2-499f-8463-41ce2c34f51a" />
<img width="1879" height="1042" alt="Screenshot 2026-02-13 161226" src="https://github.com/user-attachments/assets/5c389761-fe83-4d0a-ad2f-51b0a65b515e" />


### Key Features
- 🚀 Route-based code splitting
- 🔗 React Router integration
- 📄 Multiple pages (Home, About, Contact)
- ⏳ Suspense fallback during route transitions
- 🎯 Optimized bundle size per route

### Technologies Used
- React 18
- React Router DOM
- Vite
- JavaScript (JSX)

### Project Structure
```
router_lazyloading/
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### Implementation Highlights
```jsx
import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Lazy load page components
const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
```

### How to Run
```bash
cd router_lazyloading
npm install
npm run dev
```

---

## 🎯 Learning Objectives

1. **Understand Lazy Loading Concepts**
   - Learn how to implement code splitting in React
   - Understand the benefits of lazy loading for performance

2. **Master React.lazy() and Suspense**
   - Use `React.lazy()` for dynamic imports
   - Implement `Suspense` boundaries with fallback UI

3. **Route-Based Code Splitting**
   - Integrate lazy loading with React Router
   - Optimize application performance through route-based splitting

4. **Performance Optimization**
   - Reduce initial bundle size
   - Improve Time to Interactive (TTI)
   - Better user experience with loading states

## 📊 Benefits of Lazy Loading

- **Faster Initial Load**: Only load what's needed for the initial view
- **Reduced Bundle Size**: Split code into smaller chunks
- **Better Performance**: Improve overall application performance
- **Enhanced UX**: Show loading states during component loading
- **Optimal Resource Usage**: Load resources on demand

## 🔧 Common Use Cases

- Large applications with multiple routes
- Heavy components (charts, editors, etc.)
- Features that may not be used by all users
- Third-party libraries that are conditionally needed

## 📝 Best Practices

1. **Strategic Splitting**: Lazy load routes and large components
2. **Meaningful Fallbacks**: Provide informative loading indicators
3. **Error Boundaries**: Handle loading failures gracefully
4. **Preloading**: Preload critical routes for better UX
5. **Bundle Analysis**: Monitor bundle sizes and split points

## 🚀 Getting Started

1. Clone the repository
2. Navigate to either project folder
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and explore!


## 👨‍💻 Author
Ramneek Kaur


UID - 23BAI70043


LOCATION - CHANDIGARH UNIVERSITY :)
