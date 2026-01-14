# Experiment 1.2: Simple To-Do List SPA

## Aim
To develop a basic To-Do List SPA using React with add and delete functionality.

## Description
A fully functional to-do list application that allows users to add tasks, view all tasks, and delete individual tasks. Built with React using state management.

## Features
- ✅ Add new tasks to the list
- ✅ Delete tasks from the list
- ✅ Display total task count
- ✅ Empty state message when no tasks exist
- ✅ Enter key support for quick task addition
- ✅ Responsive design for mobile and desktop
- ✅ Smooth animations and transitions
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
exp1.2/
├── src/
│   ├── App.jsx          # Main component with to-do logic
│   ├── App.css          # Styling for the app
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## How It Works
The application maintains an array of tasks in state using `useState`. Each task has a unique ID (timestamp) and text. Users can add new tasks through an input field, and delete tasks by clicking the delete button next to each task.
