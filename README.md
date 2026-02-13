# Nairobi River Circular Communities

![Status](https://img.shields.io/badge/Status-MVP%20Phase-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Focus](https://img.shields.io/badge/Focus-Circular%20Economy-teal)

**A Spatial Decision-Support System (SDSS) for the Nairobi River Basin.**

## 🌊 Overview
The **Nairobi River Circular Communities** is a collective intelligence platform designed to transform fragmented community efforts into visible, quantifiable ecological data. By mapping **Community-Based Organizations** along the riparian reserve, this system quantifies circular economy metrics—specifically waste diversion and biomass regeneration—to identify service gaps and guide systemic regeneration.

This project serves as a bridge between grassroots environmental stewardship and high-level urban planning policy.

## 🚀 Key Features
* **Interactive Spatial Interface:** High-fidelity "Blueprint" style map using CartoDB Dark Matter tiles and custom GeoJSON layers.
* **Ecological Node Profiling:** Pulse-animated markers representing active restoration units.
* **Circular Value Framework (CVF):** "Mini-scorecard" hovers visualizing waste and biomass performance metrics.
* **Systemic Data Aggregation:** Real-time summary of collective impact (Waste Diverted, Trees Planted).
* **Consultant-Grade UI:** A "Glassmorphism" interface designed for clarity, authority, and ease of use.

## 🏗 System Architecture
The platform follows a decoupled architecture:

* **Frontend (The Lens):** A React-based Single Page Application (SPA) using Leaflet for GIS rendering and TailwindCSS for styling.
* **Backend (The Brain):** A lightweight Python Flask API that aggregates metrics and serves GeoJSON data (transitioning to AI-driven reporting).

```text
nairobi-river-platform/
├── backend/          # Python Flask API & Data Logic
├── frontend/         # React + Vite + Leaflet UI
└── README.md         # You are here

⚡ Quick Start Guide
To run the full stack locally, you will need two terminal windows.

1. Clone the Repository
Bash
git clone [https://github.com/yourusername/nairobi-river-platform.git](https://github.com/yourusername/nairobi-river-platform.git)
cd nairobi-river-platform
2. Start the Backend
Bash
cd backend
python -m venv venv
# Windows:
.\venv\Scripts\activate
# Mac/Linux: source venv/bin/activate
pip install -r requirements.txt
python app.py
3. Start the Frontend
Bash
cd frontend
npm install
npm run dev
🗺 Roadmap
[x] Phase 1: Spatial Mapping & Basic Metrics (Complete)

[ ] Phase 2: AI-Generated Impact Reports (In Progress)

[ ] Phase 3: PostGIS Database Integration

[ ] Phase 4: Public Data Submission Portal

🤝 Contribution
Contributions are welcome from urban planners, data scientists, and developers. Please open an issue to discuss proposed changes.

Built for the Nairobi River Regeneration Initiative.