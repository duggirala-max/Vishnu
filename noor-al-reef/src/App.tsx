//Built by Duggirala for Vishnu Vardhan
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { ProductGrid } from "./components/sections/ProductGrid";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <div className="relative min-h-screen bg-white">
        <Navbar />
        
        <main>
          <Hero />
          
          {/* Detailed About Section: Luxury Experience */}
          <section id="about" className="py-32 bg-gray-50 overflow-hidden px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1"
              >
                <div className="space-y-8">
                  <div className="inline-block px-4 py-2 bg-emerald/10 text-emerald rounded-full text-xs font-black uppercase tracking-widest">
                    Heritage & Innovation
                  </div>
                  <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                    Bridging <span className="text-emerald">Continents</span> through Quality
                  </h2>
                  <p className="text-gray-600 text-xl leading-relaxed">
                    Operating at the intersection of quality and logistics, Noor Al Reef has established itself as a cornerstone of the India-Dubai food trade corridor. Our commitment to excellence ensures that every product exported carries the hallmark of purity and reliability.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                    <div className="p-6 bg-white shadow-premium rounded-2xl border-l-[6px] border-emerald">
                      <h4 className="font-black text-gray-900 uppercase text-sm mb-2">Direct Sourcing</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">Sourcing the finest grains directly from the premium farmlands of Northern India.</p>
                    </div>
                    <div className="p-6 bg-white shadow-premium rounded-2xl border-l-[6px] border-orange">
                      <h4 className="font-black text-gray-900 uppercase text-sm mb-2">Dubai Logistics</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">Strategic warehousing and efficient distribution across the UAE's retail network.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="flex-1 relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80" 
                  alt="Global Trade Logistics" 
                  className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] relative z-10"
                />
                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-emerald flex items-center justify-center rounded-3xl shadow-2xl text-white font-black text-2xl text-center p-6 z-20">
                  15+ Years Synergy
                </div>
                <div className="absolute -top-10 -left-10 h-64 w-64 bg-orange/10 blur-3xl rounded-full -z-10" />
              </motion.div>
            </div>
          </section>

          <ProductGrid />
          
          {/* Strategic Inquiry: The conversion point */}
          <section id="contact" className="py-32 px-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-emerald p-16 md:p-24 rounded-[3rem] text-white shadow-2xl relative overflow-hidden text-center"
            >
              <div className="relative z-10 space-y-8">
                <span className="text-orange font-black uppercase tracking-[0.3em] text-sm">Join the Network</span>
                <h2 className="text-5xl md:text-7xl font-black italic leading-none tracking-tighter">
                  Strategic Procurement <br className="hidden md:block" /> Inquiry
                </h2>
                <p className="text-emerald-50 text-xl max-w-3xl mx-auto leading-relaxed">
                  Connect with our trade experts for bulk pricing, logistical scheduling, and customized supply chain solutions from India to Dubai. Experience the new Silk Road trade standards.
                </p>
                <div className="pt-6">
                  <button className="bg-orange text-white px-12 py-6 rounded-full text-2xl font-black shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300">
                    Connect via Silk Road
                  </button>
                </div>
              </div>
              
              {/* Background Articulation */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange/20 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
            </motion.div>
          </section>
        </main>

        <footer className="py-20 border-t border-gray-100 px-8 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-1">
                <span className="text-emerald font-black text-3xl tracking-tighter">NOOR</span>
                <span className="text-orange font-black text-3xl tracking-tighter">AL REEF</span>
              </div>
              <p className="text-gray-400 text-sm font-medium">B2B General Trading Excellence.</p>
            </div>
            
            <div className="text-center">
              <p className="text-gray-900 font-bold text-sm mb-2 uppercase tracking-widest">Global Operations</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Dubai Investment Park, Phase 2 <br />
                Dubai, United Arab Emirates
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6 text-gray-500 text-xs uppercase tracking-widest font-black">
              <div className="flex gap-8">
                <a href="#" className="hover:text-emerald transition-colors">Privacy</a>
                <a href="#" className="hover:text-emerald transition-colors">Terms</a>
                <a href="#" className="hover:text-emerald transition-colors">Safety</a>
              </div>
              <p className="text-gray-400 font-normal normal-case">
                © 2025 Noor Al Reef General Trading LLC. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </AnimatePresence>
  );
}

export default App;
