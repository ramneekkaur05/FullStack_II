# Exp2 Projects

This folder contains two Vite + React projects built with Bootstrap. Each project is standalone and can be run independently.

## 1) exp2_submitForm
A centered Bootstrap form with labels and a submit button.

**Features**
- Fully centered card (horizontal + vertical)
- Bootstrap-only utilities
- Clean, responsive layout
- Accessible labels with `htmlFor` + `id`
- Card layout with consistent spacing

**Tech Stack**
- React + Vite
- Bootstrap 5

**Run**
```bash
cd Exp2/exp2_submitForm
npm install
npm run dev
```

**Scripts**
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run preview` - Preview production build

## 2) exp2_navbar_cards
A travel-themed page with a Bootstrap navbar and a grid of destination cards.

**Features**
- Responsive Bootstrap navbar
- Destination cards with images and badges
- Grid layout with reduced side gaps
- Scales across breakpoints (mobile → desktop)
- Image cards with consistent aspect ratio

**Tech Stack**
- React + Vite
- Bootstrap 5

**Run**
```bash
cd Exp2/exp2_navbar_cards
npm install
npm run dev
```

**Scripts**
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run preview` - Preview production build

## Prerequisites
- Node.js 18+ recommended
- npm 9+ recommended

## Project Structure
```
Exp2/
	exp2_submitForm/
		src/
			App.jsx
			App.css
			main.jsx
	exp2_navbar_cards/
		src/
			App.jsx
			App.css
			main.jsx
```

## How to Use
1. Choose a project folder.
2. Install dependencies with `npm install`.
3. Run `npm run dev` and open the local Vite URL shown in the terminal.

## Notes
- Both projects use Bootstrap styles only (no custom positioning hacks).
- Each project ships with its own `package.json` and `vite.config.js`.

## Troubleshooting
- If the port is busy, Vite will automatically select the next available port.
- Delete `node_modules` and re-run `npm install` if dependencies get out of sync.