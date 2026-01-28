# Experiment 1.4: Simple Form SPA

## Aim
To build a basic form SPA using React with form fields, state management, and data display functionality.

## Description
A comprehensive form application that captures user input (name, email, age, message), stores it in state, and displays all submitted entries. Demonstrates form handling, validation, and data persistence in React.

## Features
- ✅ Multiple form fields (Name, Email, Age, Message)
- ✅ Input validation (all fields required)
- ✅ Submit button to save form data
- ✅ Reset button to clear form
- ✅ Display **all** submitted entries (not just the latest)
- ✅ Each entry shows with unique ID and entry number
- ✅ Responsive design for all screen sizes
- ✅ Smooth animations on data submission
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
exp1.4/
├── src/
│   ├── App.jsx          # Main component with form logic
│   ├── App.css          # Styling for form and submissions
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## How It Works
The application uses two state variables:
1. `formData` - tracks current form input values
2. `submissions` - stores an array of all submitted form entries

When the form is submitted, the current form data is added to the submissions array with a unique timestamp ID. The form then resets to allow new entries. All submissions are displayed below the form in separate cards.

## Form Fields
- **Name**: Text input for full name
- **Email**: Email input with validation
- **Age**: Number input (1-120)
- **Message**: Textarea for longer messages
