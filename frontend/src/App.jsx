import { useState } from 'react';
import NairobiMap from './components/Map';

function App() {
  const [selectedCbo, setSelectedCbo] = useState(null);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar (Left) */}
      <div className="w-1/3 p-4 bg-white overflow-y-auto shadow-xl z-10">
        <h1 className="text-2xl font-bold mb-4 text-green-700">Nairobi River Collective</h1>
        
        <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <h3 className="font-bold">Instructions</h3>
            <p className="text-sm text-gray-600">Click on the blue markers on the map to view CBO details.</p>
        </div>

        {/* Selected CBO Details */}
        {selectedCbo ? (
            <div className="border p-4 rounded shadow-lg bg-white">
                <h2 className="text-xl font-bold text-gray-800">
                    {selectedCbo.name || "Unknown CBO"}
                </h2>
                
                {/* Dynamically render whatever properties are in your GeoJSON */}
                <div className="mt-4 space-y-2">
                    {Object.entries(selectedCbo).map(([key, value]) => (
                        <div key={key} className="text-sm border-b pb-1">
                            <span className="font-semibold text-gray-600 capitalize">{key}: </span>
                            <span>{value}</span>
                        </div>
                    ))}
                </div>

                <button 
                    onClick={() => setSelectedCbo(null)}
                    className="mt-4 w-full py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm"
                >
                    Clear Selection
                </button>
            </div>
        ) : (
            <p className="text-gray-500 italic text-center mt-10">Select a CBO to see impact metrics.</p>
        )}
      </div>

      {/* Map Area (Right) */}
      <div className="w-2/3 relative">
        <NairobiMap onSelectCBO={setSelectedCbo} />
      </div>
    </div>
  );
}

export default App;