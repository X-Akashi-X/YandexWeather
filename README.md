# 🌤️ YandexWeather Web App

A modern, responsive web application for weather tracking built with **React 19**, **TypeScript**, and **Vite**. The project features interactive maps, detailed charts, and custom UI components with smooth animations.

## 🌐 Netlify

Dropped application: `https://yandexweather.netlify.app`

## 🚀 Tech Stack

*   **Frontend:** React 19, TypeScript, Vite (Bundler)
*   **State Management:** Redux Toolkit, React-Redux
*   **Routing:** React Router v6
*   **Data Fetching:** Axios
*   **UI & Charts:** Recharts (Graphs), Swiper (Forecast slider), MapLibre GL (Interactive weather map)
*   **Forms & Validation:** React Hook Form, Yup, Hook Form Resolvers
*   **Styling:** Sass (SCSS) + Responsive Design (Mobile First)
*   **Code Quality:** ESLint, Prettier, Husky (Pre-commit git hooks)

## ✨ Key Features & Interface

*   **📱 Fully Responsive:** The UI is completely optimized for all devices (mobiles, tablets, and desktops).
*   **🔽 Custom Dropdowns:** Intuitive dropdown menus for city selection, units, and filters without relying on default browser select elements.
*   **✨ Micro-interactions:** All interactive elements (buttons, cards, list items) feature smooth **hover effects** and focus states.
*   **📊 Weather Analytics:** Visual temperature and precipitation charts powered by Recharts.
*   **🗺️ Weather Maps:** Integrated interactive map overlay via MapLibre GL.

## 📦 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com
cd yandexweather
```

### 2. Install dependencies
```bash
npm install
```
*(Husky will be automatically initialized to control code quality before commits).*

### 3. Run development server
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

## 📂 Project Structure

```text
src/
├── assets/          # Static assets (weather icons, images)
├── components/      # Shared UI components (Dropdown, buttons, inputs)
├── hooks/           # Custom React hooks
├── mocks/           # Mock data for local testing and development
├── pages/           # Page components (Home, Search, Settings)
├── services/        # API clients and data fetching services (Axios instances)
├── styles/          # Global styles, mixins, and SCSS variables
├── types/           # TypeScript interfaces, types, and definitions
└── utils/           # Helper functions and utility constants
```
