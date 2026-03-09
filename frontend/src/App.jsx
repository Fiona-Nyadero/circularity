// frontend/src/App.jsx
import { useState, useEffect } from 'react';
import NairobiMap from './components/Map';

function App() {
  const [selectedCbo, setSelectedCbo] = useState(null);
  
  // --- Slideshow Logic ---
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedCbo]);

  const nextImage = () => {
    if (selectedCbo?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedCbo.images.length);
    }
  };

  const prevImage = () => {
    if (selectedCbo?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedCbo.images.length) % selectedCbo.images.length);
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-brand-navy">
      
      {/* Map Layer - ONLY VISIBLE WHEN NO CBO IS SELECTED */}
      {!selectedCbo && (
        <div className="absolute inset-0 z-0 h-screen animate-fade-in">
          <NairobiMap onSelectCBO={setSelectedCbo} />
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(2,6,23,0.8)] z-[500]"></div>
        </div>
      )}

      {/* Floating Sidebar (LEFT PANEL - EXACTLY AS PROVIDED) */}
      <div className="absolute top-4 left-4 w-105 max-h-[90vh] overflow-y-auto 
                      rounded-sm z-[1000] p-8 shadow-2xl border-l-4 
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

                <span className="inline-block mb-3 text-[10px] font-bold uppercase tracking-widest text-brand-teal bg-white/50 px-2 py-1 rounded border border-brand-teal/20">
                    {selectedCbo.focus || "Community Node"}
                </span>

                <div className="h-1 w-12 bg-brand-teal mb-4"></div>

                <p className="text-sm text-brand-navy/80 leading-relaxed mb-6 font-light">
                    {selectedCbo.description}
                </p>
                
                {selectedCbo.metrics && (
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        {Object.entries(selectedCbo.metrics).map(([key, value]) => (
                            <div key={key} className="bg-white/60 p-3 shadow-sm border border-brand-sky/30 hover:bg-white transition-colors">
                                <span className="block text-lg font-bold text-brand-navy">
                                    {value}
                                </span>
                                <span className="text-[9px] text-brand-teal uppercase font-bold tracking-wide">
                                    {key}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
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

      {/* Floating Slideshow (RIGHT PANEL - ONLY VISIBLE WHEN CBO SELECTED) */}
      {selectedCbo && (
        <div className="absolute top-4 left-[450px] right-4 h-[90vh] flex flex-col
                        rounded-sm z-[1000] p-2 shadow-2xl border-l-4 border-brand-teal
                        pointer-events-auto bg-brand-beige/90 backdrop-blur-md animate-fade-in
                        hover:bg-brand-beige hover:shadow-3xl transition-all duration-500"
        >
            {/* Slideshow Container */}
            <div className="relative w-full h-full flex-grow bg-brand-navy/10 rounded overflow-hidden shadow-inner group/slider flex items-center justify-center">
                {selectedCbo.images && selectedCbo.images.length > 0 ? (
                    <>
                        {/* Floating Image Counter */}
                        <div className="absolute top-4 right-4 z-10">
                            <span className="text-xs text-white font-bold bg-brand-navy/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-md">
                                {currentImageIndex + 1} / {selectedCbo.images.length}
                            </span>
                        </div>

                        {/* Current Image */}
                        <img 
                            src={selectedCbo.images[currentImageIndex]} 
                            alt={`${selectedCbo.name} field photo`}
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 animate-fade-in"
                            key={currentImageIndex} // Key forces re-render for fade animation
                        />

                        {/* Navigation Arrows (Visible on hover) */}
                        <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
                            <button 
                                onClick={prevImage}
                                className="bg-brand-navy/80 hover:bg-brand-teal text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all transform hover:scale-110 text-xl"
                            >
                                ◀
                            </button>
                            <button 
                                onClick={nextImage}
                                className="bg-brand-navy/80 hover:bg-brand-teal text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all transform hover:scale-110 text-xl"
                            >
                                ▶
                            </button>
                        </div>
                    </>
                ) : (
                    // Empty State Fallback
                    <div className="flex flex-col items-center justify-center text-brand-navy/40">
                        <span className="text-6xl mb-4">📷</span>
                        <p className="text-sm uppercase tracking-widest font-bold">No documentation available</p>
                    </div>
                )}
            </div>
        </div>
      )}

    </div>
  );
}

export default App;