# Kisan Mitra Frontend

Welcome to the Kisan Mitra Frontend codebase! This repository contains the React-based user interface for the Kisan Mitra platform, built with modern web technologies to ensure a responsive, accessible, and fast user experience.

## 🚀 Tech Stack

This project is scaffolded with Create React App and configured with CRACO (Create React App Configuration Override) to support advanced configurations like Tailwind CSS without ejecting.

- **Framework**: React 19
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI Primitives (Accessible, unstyled components)
- **Forms & Validation**: React Hook Form + Zod
- **Data Fetching**: Axios
- **Charts**: Recharts
- **Carousels**: Embla Carousel React
- **Icons**: Lucide React

## 📁 Project Structure

```text
frontend/
├── public/               # Public static assets
└── src/
    ├── components/       # Reusable React components (UI elements, Layouts, etc.)
    ├── pages/            # Page-level components corresponding to routes
    ├── hooks/            # Custom React hooks
    ├── lib/              # Utility functions and shared helpers
    ├── data/             # Static data files and constants
    ├── App.js            # Main application component and routing setup
    ├── index.js          # Entry point for React
    └── index.css         # Global CSS and Tailwind directives
```

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed along with `yarn` or `npm`.
The project specifies `yarn@1.22.x` as the standard package manager.

```bash
# Install yarn globally if you don't have it
npm install -g yarn
```

### Installation

1. Clone this repository (if not already done).
2. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

## 💻 Available Scripts

In the project directory, you can run:

### `yarn start` (or `npm start`)
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

### `yarn build` (or `npm run build`)
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

### `yarn test` (or `npm test`)
Launches the test runner in the interactive watch mode.

## 🎨 Styling & UI Architecture

- **Tailwind CSS**: Utility-first CSS framework for rapid UI development. Configuration can be found in `tailwind.config.js` (if exposed) or managed via CRACO.
- **Radix UI**: Used for complex, accessible interactive components like Dialogs, Dropdowns, and Accordions. These are styled using Tailwind.
- **Theming**: The project utilizes `next-themes` to support light/dark modes (or custom themes).

## 🤝 Contributing

When contributing to this codebase, please follow these guidelines:
1. Ensure all new components are placed in `src/components/`.
2. Page-level components that act as route views should be placed in `src/pages/`.
3. Keep utility functions in `src/lib/` and reusable custom hooks in `src/hooks/`.
4. Run tests and ensure the build succeeds before pushing code.

## 📄 License
This project is proprietary and intended for the Kisan Mitra platform.
