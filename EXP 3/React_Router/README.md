# Experiment 1: Basic Client-Side Routing Using React Router

## Aim
To implement basic client-side routing in a Single Page Application using React Router.

## Description
This project demonstrates client-side routing in a React application using React Router DOM. It allows navigation between different views without reloading the page, creating a seamless Single Page Application (SPA) experience.

## Features
- ✅ Client-side routing with React Router DOM
- ✅ Multiple pages (Home, About, Services, Contact)
- ✅ Navigation without page reloads
- ✅ Responsive design
- ✅ Modern UI with gradient effects
- ✅ Smooth page transitions

## Technologies Used
- React 18
- React Router DOM v6
- Vite (Build tool)
- CSS3

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure
```
subpart1/
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Key Concepts Demonstrated

### 1. BrowserRouter
Wraps the entire application to enable routing functionality.

### 2. Routes and Route
Define the different paths and their corresponding components.

### 3. Link Component
Provides navigation between routes without page reloads.

### 4. Component-based Navigation
Each route renders a different component, maintaining SPA architecture.

## How It Works
1. The application is wrapped with `BrowserRouter` in main.jsx
2. Routes are defined in App.jsx using `Routes` and `Route` components
3. Navigation is handled by `Link` components in the navbar
4. When a link is clicked, React Router updates the URL and renders the corresponding component
5. No page reload occurs, maintaining application state

## Lab Manual Requirements Met
✅ Create a React application  
✅ Install react-router-dom package  
✅ Wrap the application with BrowserRouter  
✅ Define routes using Routes and Route components  
✅ Navigate between pages without page reload  

## Author
Full Stack Development Lab - Unit 3
