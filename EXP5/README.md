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

## 📚 Additional Resources

- [React.lazy() Documentation](https://react.dev/reference/react/lazy)
- [Code Splitting - React Docs](https://react.dev/learn/code-splitting)
- [React Router - Lazy Loading](https://reactrouter.com/en/main/route/lazy)
- [Vite - Code Splitting](https://vitejs.dev/guide/features.html#code-splitting)

---

## 👨‍💻 Author
Ramneek Kaur

## 📄 License
This project is part of Full Stack II coursework.
