import { motion } from "framer-motion";
import { useState } from "react";

const products = [
  {
    title: "Premium Rice Selection",
    description: "Finest long-grain Basmati and non-basmati rice sourced directly from the heart of Indian farmlands. Guaranteed purity and superior moisture retention for perfect culinary results.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    specs: [
      "Grade 1 Long-Grain Basmati",
      "<12% Moisture Content",
      "8.3mm Average Grain Length",
      "95% Purity Guarantee",
      "Sourced from across the Indian subcontinent",
      "Aged 12-24 months for aroma"
    ]
  },
  {
    title: "Fresh Farm Eggs",
    description: "High-nutrient, Grade-A fresh eggs collected and packaged under strict hygienic conditions. We maintain a reliable cold chain to ensure peak freshness from farm to table.",
    image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&w=600&q=80",
    specs: [
      "Grade A Large Selection",
      "55g - 65g weight per unit",
      "HACCP & ISO Certified",
      "72-hour Farm-to-Logistics turn",
      "Standard UV Sanitization",
      "Salmonella-free certified flocks"
    ]
  },
  {
    title: "Global FMCG Logistics",
    description: "End-to-end supply chain management for fast-moving consumer goods. Our robust network ensures that your products reach the Dubai market with speed and precision.",
    image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=600&q=80",
    specs: [
      "Temperature-controlled fleet",
      "ISO 9001:2015 handling",
      "Real-time tracking integration",
      "Multimodal transport options",
      "Automated customs clearance",
      "Regional distribution network"
    ]
  },
  {
    title: "Organic Fresh Produce",
    description: "A curated range of 100% certified organic fruits and vegetables. Sustainable farming practices meet the highest international food safety standards for our global partners.",
    image: "https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?auto=format&fit=crop&w=600&q=80",
    specs: [
      "100% Certified Organic",
      "Zero synthetic pesticide residue",
      "Non-GMO verification",
      "Daily sourcing cycles",
      "Bio-degradable packaging options",
      "Fair-trade compliant sourcing"
    ]
  }
];

const FlipCard = ({ product, index }: { product: typeof products[0], index: number }) => {
  const isEmerald = index % 2 === 0;
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div 
      className="group h-[500px] [perspective:1000px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div 
        className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="bg-white shadow-premium border border-gray-100 rounded-[2rem] overflow-hidden flex flex-col h-full hover:border-emerald/30 transition-all duration-500">
            <div className="relative h-64 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            <div className="p-8 flex flex-col flex-1 space-y-4">
              <h3 className="text-gray-900 font-black text-2xl uppercase tracking-tight">
                {product.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 italic">
                {product.description}
              </p>
              <div className="pt-4 border-t border-gray-100">
                <span className="text-orange font-black text-xs uppercase tracking-[0.2em] flex items-center">
                  View Specifications →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className={`absolute inset-0 h-full w-full rounded-[2rem] p-8 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] ${isEmerald ? 'bg-emerald' : 'bg-orange'} shadow-2xl`}>
          <div className="h-full flex flex-col">
            <h3 className="font-black text-2xl uppercase tracking-tight mb-8 border-b border-white/20 pb-4">
              Technical <br /> Specifications
            </h3>
            <ul className="space-y-4 flex-1">
              {product.specs.map((spec, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 text-sm font-medium leading-tight"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white shrink-0 mt-1.5" />
                  {spec}
                </motion.li>
              ))}
            </ul>
            <div className="pt-6 mt-auto">
              <div className="h-1 w-12 bg-white/30 rounded-full" />
              <p className="text-[10px] uppercase font-black tracking-widest mt-4 opacity-60">
                Verified Sourcing Hub
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProductGrid = () => {
  return (
    <section id="catalog" className="py-16 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-24 text-center space-y-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black text-gray-900 tracking-tighter uppercase italic">
            GLOBAL <span className="text-emerald">CATALOG</span>
          </h2>
          <div className="h-2 w-32 bg-orange mx-auto rounded-full mt-4" />
          <p className="text-gray-500 max-w-3xl mx-auto text-xl leading-relaxed mt-8 italic font-medium">
            Discover our specialized range of high-performance commodities, carefully curated for the Middle Eastern markets with focus on quality assurance and logistical precision.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {products.map((product, index) => (
          <FlipCard key={index} product={product} index={index} />
        ))}
      </div>
    </section>
  );
};
