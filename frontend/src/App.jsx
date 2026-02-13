// frontend/src/App.jsx
import { useState } from 'react';
import NairobiMap from './components/Map';

function App() {
  const [selectedCbo, setSelectedCbo] = useState(null);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-brand-navy">
      
      {/* Map Layer */}
      <div className="absolute inset-0 z-0 h-screen">
        <NairobiMap onSelectCBO={setSelectedCbo} />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(2,6,23,0.8)] z-500"></div>
      </div>

      {/* Floating Sidebar */}
      <div className="absolute top-4 left-4 w-96 max-h-[90vh] overflow-y-auto 
                      rounded-sm z-10 p-8 shadow-2xl border-l-4 
                      transition-all duration-500 ease-in-out group

                      pointer-events-auto
                      
                      bg-brand-beige/80 backdrop-blur-md border-brand-teal/30
                      hover:bg-brand-beige hover:border-brand-teal hover:shadow-3xl"
>
        
        {/* Header */}
        <div className="mb-6 border-b border-brand-teal/20 pb-4">
            <h1 className="text-3xl font-serif font-bold tracking-tight transition-all duration-300
                           text-brand-navy/60 group-hover:text-brand-navy">
                Circular Communities
            </h1>
            <p className="text-xs tracking-[0.2em] uppercase font-bold mt-2 transition-all duration-300
                          text-brand-teal/50 group-hover:text-brand-teal">
                Visualizing the Invisible
            </p>
        </div>
        
        {/* Content */}
        {selectedCbo ? (
            <div className="animate-fade-in">
                <button 
                    onClick={() => setSelectedCbo(null)}
                    className="mb-4 text-xs font-bold text-brand-teal hover:text-brand-navy flex items-center uppercase tracking-wide transition-colors"
                >
                    ← Back to Overview
                </button>

                <h2 className="text-xl font-serif font-bold mb-1 transition-colors duration-300
                               text-brand-navy/80 group-hover:text-brand-navy">
                    {selectedCbo.name || "Unknown CBO"}
                </h2>
                <div className="h-1 w-12 bg-brand-teal mb-4"></div>
                
                <div className="grid grid-cols-2 gap-3 my-6">
                    <div className="bg-white/80 group-hover:bg-white p-3 shadow-sm border border-brand-sky/30">
                        <span className="block text-2xl font-bold text-brand-navy">
                            {selectedCbo.waste_collected || "120"}
                        </span>
                        <span className="text-[10px] text-brand-teal uppercase font-bold">Kg Waste</span>
                    </div>
                    <div className="bg-white/80 group-hover:bg-white p-3 shadow-sm border border-brand-sky/30">
                        <span className="block text-2xl font-bold text-brand-navy">
                            {selectedCbo.trees_planted || "45"}
                        </span>
                        <span className="text-[10px] text-brand-teal uppercase font-bold">Trees</span>
                    </div>
                </div>

                <div className="space-y-3 text-sm text-brand-navy/60 group-hover:text-brand-navy/80 transition-colors">
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
            <div>
                <div className="p-4 shadow-sm mb-6">
                    <p className="text-sm leading-relaxed transition-colors duration-300
                                  text-brand-navy/60 group-hover:text-brand-navy">
                        Transforming fragmented community efforts into <span className="font-bold text-brand-teal">visible, quantifiable data</span>.
                    </p>
                    <p className="text-sm leading-loose font-light transition-colors duration-300
                                  text-brand-navy/50 group-hover:text-brand-navy/80">
                        This platform aggregates critical circular economy metrics along the Nairobi River basin to guide systemic regeneration.
                    </p>
                </div>
                
                <div className="pt-8 mt-4">
                    <p className="text-xs text-brand-teal/50 group-hover:text-brand-teal gap-2
                                  uppercase tracking-widest font-semibold flex items-center">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse border border-white"></span>
                        Select a node to explore
                    </p>
                </div>
            </div>
        )}
      </div>

    </div>
  );
}

export default App;