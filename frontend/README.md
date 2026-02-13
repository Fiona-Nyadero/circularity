# Circular Communities UI (Frontend)

![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Build-Vite-purple)
![Tailwind](https://img.shields.io/badge/Style-TailwindCSS-cyan)

The interactive visualization layer for the **Nairobi River Circular Communities** platform. Built to resemble a high-end "Consultant Dashboard," it prioritizes map readability, data clarity, and a "Glassmorphism" aesthetic.

## 🛠 Tech Stack
* **Core:** React.js (via Vite)
* **Mapping:** React-Leaflet & Leaflet.js
* **Styling:** TailwindCSS (v4)
* **Icons:** CSS-based animations (Pulse Icons)

## 📂 Directory Structure
```text
frontend/
├── src/
│   ├── components/     # React Components (Map, Sidebar)
│   ├── data/           # Static GeoJSON Assets (River, Roads, Buildings)
│   ├── App.jsx         # Main Layout & Intro Logic
│   └── index.css       # Global Styles & Animations
├── public/             # Static Assets
└── vite.config.js      # Configuration
🚀 Setup & Development
Prerequisites
Node.js (v16+) and npm installed.

Step-by-Step
Navigate to the frontend directory:

Bash
cd frontend
Install Dependencies:

Bash
npm install
Start the Development Server:

Bash
npm run dev
The application will launch at http://localhost:5173.

🎨 Design System
The UI uses a custom "Consultant" color palette defined in Tailwind:

Brand Navy (#2F4156): Primary background, text.

Brand Teal (#567C8D): Accents, secondary borders.

Brand Beige (#F5EFEB): Panels, card backgrounds.

Brand Amber (#F59E0B): Active data points (CBOs).

🗺 Map Layers
The map combines multiple data sources:

Base Layer: CartoDB Dark Matter (via Leaflet).

Context Layers: Buildings & Roads (local GeoJSON, semi-transparent).

Analysis Layer: The Nairobi River (Cyan/Teal highlight).

Interaction Layer: CBO Pulse Nodes (Interactive markers).

⚠️ Common Issues
Map Tiles Not Loading: Ensure you have an internet connection (tiles are fetched from OpenStreetMap/CartoDB).

"Z-Index" Issues: If the sidebar isn't clickable, ensure z-[1000] and pointer-events-auto are applied in App.jsx.