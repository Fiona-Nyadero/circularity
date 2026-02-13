// frontend/src/App.jsx
import { useState } from 'react';
import NairobiMap from './components/Map';

function App() {
  const [selectedCbo, setSelectedCbo] = useState(null);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-brand-navy">
      
      {/* Map Layer */}
      <div className="absolute inset-0 z-0">
        <NairobiMap onSelectCBO={setSelectedCbo} />
      </div>

      {/* Floating Sidebar - THEME UPDATE */}
      <div className="absolute top-4 left-4 w-96 max-h-[90vh] overflow-y-auto 
                      bg-brand-beige shadow-2xl rounded-sm z-10 p-6 
                      border-l-4 border-brand-teal">
        
        {/* Header */}
        <div className="mb-6 border-b border-brand-teal/20 pb-4">
            <h1 className="text-2xl font-serif font-bold text-brand-navy">Nairobi River</h1>
            <p className="text-xs text-brand-teal tracking-widest uppercase font-semibold mt-1">
                Collective Intelligence Platform
            </p>
        </div>
        
        {/* Content */}
        {selectedCbo ? (
            <div className="animate-fade-in">
                <button 
                    onClick={() => setSelectedCbo(null)}
                    className="mb-4 text-xs font-bold text-brand-teal hover:text-brand-navy flex items-center uppercase tracking-wide"
                >
                    ← Back to Overview
                </button>

                <h2 className="text-xl font-serif font-bold text-brand-navy mb-1">
                    {selectedCbo.name || "Unknown CBO"}
                </h2>
                <div className="h-1 w-12 bg-brand-teal mb-4"></div>
                
                {/* Metric Cards - Updated Colors */}
                <div className="grid grid-cols-2 gap-3 my-6">
                    <div className="bg-white p-3 shadow-sm border border-brand-sky/30">
                        <span className="block text-2xl font-bold text-brand-navy">
                            {selectedCbo.waste_collected || "120"}
                        </span>
                        <span className="text-[10px] text-brand-teal uppercase font-bold">Kg Waste</span>
                    </div>
                    <div className="bg-white p-3 shadow-sm border border-brand-sky/30">
                        <span className="block text-2xl font-bold text-brand-navy">
                            {selectedCbo.trees_planted || "45"}
                        </span>
                        <span className="text-[10px] text-brand-teal uppercase font-bold">Trees</span>
                    </div>
                </div>

                <div className="space-y-3 text-sm text-brand-navy/80">
                    {Object.entries(selectedCbo)
                        .filter(([key]) => key !== 'name' && key !== 'geometry')
                        .map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b border-brand-teal/10 pb-2">
                            <span className="font-semibold text-brand-teal/80 capitalize text-xs">
                                {key.replace('_', ' ')}
                            </span>
                            <span className="text-right font-medium">{value}</span>
                        </div>
                    ))}
                </div>
            </div>
        ) : (
            // Default View
            <div>
                <div className="bg-white p-4 shadow-sm border border-brand-sky/50 mb-6">
                    <p className="text-sm text-brand-navy leading-relaxed">
                        <strong>Overview:</strong><br/>
                        Visualizing the ecological impact of community organizations along the river basin. Select a node to view performance metrics.
                    </p>
                </div>
                
                <h3 className="font-bold text-brand-navy text-xs uppercase tracking-wide mb-3">Legend</h3>
                <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                        <span className="w-8 h-1 bg-brand-sky mr-3"></span>
                        <span className="text-brand-navy">River Channel</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-blue-500 border-2 border-white mr-3"></span>
                        <span className="text-brand-navy">CBO Node</span>
                    </div>
                </div>
            </div>
        )}
      </div>

    </div>
  );
}

export default App;