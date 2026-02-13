# Circular Communities API (Backend)

![Python](https://img.shields.io/badge/Python-3.10+-yellow)
![Flask](https://img.shields.io/badge/Framework-Flask-black)

The server-side application for the **Nairobi River Circular Communities** platform. This API handles data aggregation, serves GeoJSON assets, and (in future versions) manages the AI-generation pipeline for impact reports.

## 🛠 Tech Stack
* **Framework:** Flask (Python)
* **Data Processing:** Pandas
* **AI Integration:** OpenAI API / Google Gemini (Planned)
* **Data Source:** JSON / GeoJSON (Local flat-file database for MVP)

## 📂 Directory Structure
```text
backend/
├── data/               # Raw spatial data (Shapefiles/GeoJSON)
├── venv/               # Virtual Environment
├── app.py              # Application Entry Point
├── cbo_data.json       # Primary CBO Database
└── requirements.txt    # Python Dependencies
🚀 Setup & InstallationPrerequisitesPython 3.10 or higher installed.Step-by-StepNavigate to the backend directory:Bashcd backend
Create a Virtual Environment:Bashpython -m venv venv
Activate the Environment:Windows: .\venv\Scripts\activateMac/Linux: source venv/bin/activateInstall Dependencies:Bashpip install -r requirements.txt
Run the Server:Bashpython app.py
The API will be available at http://127.0.0.1:5000.📡 API EndpointsMethodEndpointDescriptionGET/api/cbosReturns the list of all CBOs and their metadata.GET/api/impactReturns aggregated metrics (Total Waste, Total Biomass).GET/api/generate-report(Planned) Triggers AI analysis of current data.📦 Data ManagementCurrently, data is stored in cbo_data.json for the MVP. To add a new CBO:Open cbo_data.json.Add a new object to the array following the existing schema.Restart the server to reflect changes.