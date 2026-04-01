//Built by Duggirala for Vishnu Vardhan
import { motion } from "framer-motion";

const products = [
  {
    title: "Premium Rice Selection",
    description: "Finest long-grain Basmati and non-basmati rice sourced directly from the heart of Indian farmlands. Guaranteed purity and superior moisture retention for perfect culinary results.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Fresh Farm Eggs",
    description: "High-nutrient, Grade-A fresh eggs collected and packaged under strict hygienic conditions. We maintain a reliable cold chain to ensure peak freshness from farm to table.",
    image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Global FMCG Logistics",
    description: "End-to-end supply chain management for fast-moving consumer goods. Our robust network ensures that your products reach the Dubai market with speed and precision.",
    image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Organic Fresh Produce",
    description: "A curated range of 100% certified organic fruits and vegetables. Sustainable farming practices meet the highest international food safety standards for our global partners.",
    image: "https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?auto=format&fit=crop&w=600&q=80"
  }
];

export const ProductGrid = () => {
  return (
    <section id="catalog" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="mb-24 text-center space-y-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase italic">
            GLOBAL <span className="text-emerald">CATALOG</span>
          </h2>
          <div className="h-2 w-32 bg-orange mx-auto rounded-full mt-4" />
          <p className="text-gray-500 max-w-3xl mx-auto text-xl leading-relaxed mt-8 italic font-medium">
            Discover our specialized range of high-performance commodities, carefully curated for the Middle Eastern markets with focus on quality assurance and logistical precision.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col h-full"
          >
            <div className="bg-white shadow-premium border border-gray-100 rounded-[2rem] overflow-hidden flex flex-col h-full hover:shadow-2xl hover:border-emerald/30 transition-all duration-500 transform group-hover:-translate-y-2">
              <div className="relative h-60 overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute top-4 right-4 h-10 w-10 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="h-2 w-2 bg-white rounded-full animate-ping" />
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1 space-y-4">
                <h3 className="text-gray-900 font-black text-2xl leading-none uppercase tracking-tight group-hover:text-emerald transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 italic group-hover:text-gray-700 transition-colors duration-300">
                  {product.description}
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <button className="text-orange font-black text-xs uppercase tracking-[0.2em] flex items-center group-hover:text-emerald transition-all duration-300 transform group-hover:translate-x-1">
                    View Specifications →
                  </button>
                </div>
              </div>
            </div>
            
            {/* Architectural Shadow Fallback */}
            <div className="h-4 w-[85%] bg-black/5 mx-auto -mt-2 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
