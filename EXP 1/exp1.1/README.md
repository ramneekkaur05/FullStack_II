# Experiment 1.1: Simple Counter SPA

## Aim
To create a basic Single Page Application (SPA) using a modern frontend framework (React) that dynamically updates the UI without page reload.

## Description
A simple counter application built with React and Vite that demonstrates state management using the `useState` hook.

## Features
- ✅ Increment button to increase counter
- ✅ Decrement button to decrease counter
- ✅ Real-time counter display
- ✅ Dynamic UI updates without page reload
- ✅ Modern, responsive design
- ✅ Dark/Light mode support

## Technologies Used
- React 18
- Vite
- JavaScript (JSX)
- CSS3

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
exp1.1/
├── src/
│   ├── App.jsx          # Main component with counter logic
│   ├── App.css          # Styling for the app
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## How It Works
The application uses React's `useState` hook to manage the counter state. When users click increment or decrement buttons, the state updates and React automatically re-renders the component to display the new count value.
