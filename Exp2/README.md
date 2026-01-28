# Exp2 Projects

This folder contains two Vite + React projects built with Bootstrap. Each project is standalone and can be run independently.

# 1) exp2_submitForm

### SCREENSHOT-:
<img width="1879" height="1038" alt="image" src="https://github.com/user-attachments/assets/ef421c88-a28a-4c6a-9c7e-2a46562a1e2d" />

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

# 2) exp2_navbar_cards

### SCREENSHOTS -:
<img width="1872" height="1006" alt="image" src="https://github.com/user-attachments/assets/98cbfff7-1867-4d43-bd08-ba583022d4f9" />
<img width="1863" height="942" alt="image" src="https://github.com/user-attachments/assets/d49a3b23-9f5f-41c3-8d3d-806ee33799b1" />



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
   

# 3) Case_Study - Inner Compass Journal
### A full-stack intelligent journaling application with AI-powered insights, mood tracking, and guided reflections. Features an antique book aesthetic with boho design elements.
## DEPLOYED WEBSITE -:  https://inner-compass-journal.vercel.app

### SCREENSHOTS-:
<img width="1879" height="1039" alt="image" src="https://github.com/user-attachments/assets/20c0c80e-8b4c-4732-b416-9b0d83830916" />
<img width="1875" height="1039" alt="image" src="https://github.com/user-attachments/assets/73cee9c3-1427-4754-ada2-4ab7d39a715e" />
<img width="1877" height="1009" alt="image" src="https://github.com/user-attachments/assets/75fdfd9b-b6f6-4085-bf75-fa51cf5689d5" />
<img width="1879" height="1003" alt="image" src="https://github.com/user-attachments/assets/4e7126c5-35fb-49a3-af0d-71342f3c669d" />
<img width="1877" height="1008" alt="image" src="https://github.com/user-attachments/assets/5f79fd4c-bc59-4f16-9043-dfd9680ee0b9" />
<img width="1872" height="990" alt="image" src="https://github.com/user-attachments/assets/3a978b28-8a90-4504-9cbc-5bb44bea2001" />
<img width="1877" height="1005" alt="image" src="https://github.com/user-attachments/assets/f650d64c-ba90-4512-86a7-6c982a6511c1" />
<img width="1874" height="960" alt="image" src="https://github.com/user-attachments/assets/ad9644a2-f6f1-4034-b20d-2bf2d4a018fe" />
<img width="1877" height="972" alt="image" src="https://github.com/user-attachments/assets/91c1586b-a8f4-4ce1-af4e-5f695ef73cd7" />
<img width="1881" height="1007" alt="image" src="https://github.com/user-attachments/assets/1d76c543-5ce6-49d0-99fc-0e5ef5a00f10" />
<img width="1618" height="989" alt="image" src="https://github.com/user-attachments/assets/90faf990-114b-4ecd-9053-8121df3e22cb" />
<img width="1878" height="990" alt="image" src="https://github.com/user-attachments/assets/01443449-d80c-4631-a012-4c86e0e17419" />


**Features**
- 📝 Daily Journaling with mood selection, gratitude tracking, and achievement logging
- 🌟 Thoughts for writing ideas and random thoughts which the brain constantly thinks
- 🎯 Vision Board with image uploads and progress tracking
- 📊 AI-Powered Insights with data visualization and mood trends
- 🎨 Guided Reflections with 15+ curated prompts
- 💭 Future Letters with delivery scheduling
- 🌻 Thought Letters with philosophy quotes
- 🎭 Antique Book Cover aesthetic for authentication pages
- 🔐 Secure authentication with Supabase

**Design Highlights**
- Antique leather gradient backgrounds (#8B7355, #A0826D, #6B5D52)
- Large boho SVG designs (250-280px) in corners with botanical motifs
- Vintage typography: Playfair Display (headings), Caveat (handwritten), Merriweather (body)
- Crumpled paper texture overlays for authentic feel
- Page folding animations (150ms) with Framer Motion
- Book spine effects with amber gradients
- Responsive design with cream-colored cards (#F5E6D3)

**Tech Stack**
- **Frontend**: Next.js 14.2.35, React 18, TypeScript, Tailwind CSS 3.4.1
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Animation**: Framer Motion 11.0.3 with 3D transforms
- **Charts**: Recharts for data visualization
- **Date Handling**: date-fns 3.2.0
- **Deployment**: Vercel with automatic CI/CD

**Database Schema**
- User profiles with preferences
- Journal entries with mood, gratitude, and achievements
- Identity statements
- Vision board items with image storage
- Guided reflections
- Future letters with scheduled delivery
- Thoughts collection

**Run**
```bash
cd Exp2/Case_Study
npm install
npm run dev
```

**Scripts**
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

**Environment Setup**
Create a `.env.local` file with:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Key Pages**
- `/` - Home page with daily journal entry form
- `/auth/login` - Antique book cover login page
- `/auth/register` - Antique book cover registration page
- `/vision-board` - Vision board with image uploads
- `/insights` - AI-powered insights dashboard
- `/guided-reflections` - Guided reflection prompts
- `/future-letters` - Write letters to your future self
- `/thoughts` - Thought collection with philosophy quotes
- `/goals` - Goal tracking and management
- `/settings` - User preferences

**Color Palette**
- Primary Brown: #8B7355
- Light Brown: #A0826D
- Dark Brown: #6B5D52
- Terracotta: #B85C38, #D97757
- Cream: #F5E6D3, #E8DCC4

**Security**
- Row Level Security (RLS) policies on all tables
- Supabase Auth with session management
- Protected routes with middleware
- Secure image uploads to Supabase Storage

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

