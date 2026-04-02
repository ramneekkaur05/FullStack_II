# Experiment 1.3: Theme Toggle SPA

## Aim
To create a SPA that switches between light and dark mode dynamically.

## Description
A React application that demonstrates theme toggling functionality, allowing users to switch between light and dark modes with smooth transitions and dynamic styling updates.

## Features
- ✅ Toggle between light and dark themes
- ✅ Dynamic CSS styling based on theme
- ✅ Smooth color transitions
- ✅ Theme indicator with icons (🌙 for dark, ☀️ for light)
- ✅ Beautiful gradient backgrounds
- ✅ Animated theme icon
- ✅ Responsive design
- ✅ Feature list showcase

## Technologies Used
- React 18
- Vite
- JavaScript (JSX)
- CSS3 with animations

## Installation

```bash
npm install
```

## Run the Application

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## Project Structure
```
exp1.3/
├── src/
│   ├── App.jsx          # Main component with theme toggle logic
│   ├── App.css          # Dynamic theme styling
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## How It Works
The application uses `useState` to track the current theme (dark/light). When the toggle button is clicked, the state updates and CSS classes are applied conditionally to change the entire color scheme of the application. All transitions are smooth thanks to CSS transition properties.
