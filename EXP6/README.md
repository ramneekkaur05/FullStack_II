# EXP6 - React Form Validation Projects

This folder contains two React applications demonstrating different form validation techniques and implementations.

## 📁 Projects Overview

### 1. Client-Side Form (`clientsideform/`)

A React application demonstrating **client-side form validation** with real-time feedback and password strength indicators.

#### Features:
- **Email Validation**
  - Must be a valid email format
  - Must end with `.com` domain
  - Real-time validation feedback
  
- **Password Validation**
  - Must start with a capital letter
  - Must contain at least one lowercase letter
  - Must contain at least one number
  - Must contain at least one special character
  - Minimum length of 8 characters
  
- **Password Strength Indicator**
  - Weak (Red): 0-2 requirements met
  - Moderate (Yellow): 3-4 requirements met
  - Strong (Green): All 5 requirements met
  
- **Visual Feedback**
  - Real-time validation checking
  - Color-coded indicators for each requirement
  - Error messages for invalid inputs
  - Success alert on valid submission

#### Technologies Used:
- React 18
- Vite
- CSS3
- JavaScript (ES6+)

---

### 2. Submission Form (`submissionform/`)

A comprehensive **profile submission form** with multiple input types and form controls.

#### Features:
- **Personal Information**
  - First Name and Last Name fields
  - Date of Birth picker (restricted to past dates)
  - Gender selection (Male/Female/Other)
  
- **Skills Selection**
  - Multiple checkbox selection
  - Extensive skill list including:
    - Programming Languages (C, C++, Java, Python, JavaScript, MATLAB)
    - Web Technologies (HTML, CSS, React, Angular, Express.js)
    - Frameworks (Django, Flask)
    - Databases (SQL, MySQL, PostgreSQL, MongoDB, Oracle, SQLite, NoSQL)
    - Data Science & AI (Machine Learning, Deep Learning, NLP, Computer Vision, TensorFlow, PyTorch, Scikit-learn)
  
- **Address Information**
  - Multi-line text area for address
  - Dropdown for Indian States and Union Territories
  
- **Form Controls**
  - Submit button (displays all entered data in an alert)
  - Cancel button (resets all form fields)
  
- **Built-in HTML5 Validation**
  - Required fields validation
  - Date range validation

#### Technologies Used:
- React 18
- Vite
- CSS3
- useMemo hook for performance optimization
- JavaScript (ES6+)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation & Running

#### For Client-Side Form:
```bash
cd clientsideform
npm install
npm run dev
```

#### For Submission Form:
```bash
cd submissionform
npm install
npm run dev
```

Both applications will start on `http://localhost:5173` (or the next available port).

---

## 📝 Project Structure

```
EXP6/
├── clientsideform/
│   ├── src/
│   │   ├── App.jsx          # Main component with validation logic
│   │   ├── App.css          # Styling
│   │   └── main.jsx         # Entry point
│   ├── public/              # Static assets
│   ├── index.html           # HTML template
│   ├── package.json         # Dependencies
│   └── vite.config.js       # Vite configuration
│
├── submissionform/
│   ├── src/
│   │   ├── App.jsx          # Main component with form logic
│   │   ├── App.css          # Styling
│   │   └── main.jsx         # Entry point
│   ├── public/              # Static assets
│   ├── index.html           # HTML template
│   ├── package.json         # Dependencies
│   └── vite.config.js       # Vite configuration
│
└── README.md                # This file
```

---

## 🎯 Learning Objectives

### Client-Side Form:
- Understanding client-side validation techniques
- Implementing custom validation logic
- Providing real-time user feedback
- Working with regex patterns for validation
- Creating dynamic UI indicators

### Submission Form:
- Handling multiple input types (text, date, radio, checkbox, select, textarea)
- Managing complex form state in React
- Using React hooks (useState, useMemo)
- Form submission and reset functionality
- Building accessible and user-friendly forms

---

## 🔧 Key Concepts Demonstrated

1. **React State Management**
   - useState for form data
   - Controlled components
   - State updates and validation

2. **Form Handling**
   - Form submission prevention
   - Input change handlers
   - Form reset functionality

3. **Validation Techniques**
   - Client-side validation
   - Regex patterns
   - Conditional validation logic
   - Real-time feedback

4. **UI/UX Best Practices**
   - Clear error messages
   - Visual indicators
   - Accessible form labels
   - Placeholder text
   - Disabled states

5. **Performance Optimization**
   - useMemo for computed values
   - Efficient state updates

---

## 📚 Additional Notes

- Both projects use **Vite** for fast development and optimized builds
- Forms are fully responsive and work on mobile devices
- Code follows React best practices and naming conventions
- ESLint configuration included for code quality

---

## 👤 Author

**Ramneek Kaur**
- GitHub: [@ramneekkaur05](https://github.com/ramneekkaur05)

---

## 📄 License

This project is part of the Full Stack II course assignments.

---

## 🤝 Contributing

This is an educational project. Feel free to fork and experiment with your own variations!

---

## 📞 Support

For issues or questions, please reach out through the course communication channels.
