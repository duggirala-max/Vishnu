//Built by Duggirala for Vishnu Vardhan
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe } from "../ui/Globe";
import { useRef } from "react";

const markers = [
  { id: "dubai", location: [25.2048, 55.2708] as [number, number], label: "Dubai" },
  { id: "india", location: [20.5937, 78.9629] as [number, number], label: "India" },
];

const arcs = [
  {
    id: "india-dubai",
    from: [20.5937, 78.9629] as [number, number],
    to: [25.2048, 55.2708] as [number, number],
    label: "Silk Road Connection",
  },
];

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="min-h-screen pt-40 pb-24 px-8 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-20 relative z-10"
    >
      <motion.div 
        style={{ y: y1, opacity }}
        className="flex-1 space-y-12 text-left z-20"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-emerald font-black tracking-[0.4em] uppercase text-xs">Premier Global Logistics</span>
          <h1 className="text-7xl md:text-9xl font-black text-gray-900 leading-[0.85] mt-6 tracking-tighter">
            THE NEW <br />
            <span className="text-orange italic">SILK ROAD</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-xl mt-10 leading-snug font-medium italic">
            Connecting the heart of Indian production with the soul of Dubai's retail excellence. High-fidelity trading standards.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap gap-6"
        >
          <button className="btn-orange text-xl shadow-2xl hover:bg-emerald transition-all duration-500 transform hover:-translate-y-1">
            Explore Catalog
          </button>
          <button className="border-2 border-emerald text-emerald hover:bg-emerald hover:text-white transition-all px-10 py-5 rounded-lg font-black text-xl shadow-xl transform hover:-translate-y-1">
            Our Story
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }}
        className="flex-1 w-full max-w-lg lg:max-w-xl aspect-square flex items-center justify-center relative z-10"
      >
        <div className="w-full h-full p-4 relative group">
          <Globe 
            markers={markers}
            arcs={arcs}
            className="w-full h-full relative z-20 drop-shadow-[0_0_50px_rgba(0,104,95,0.2)]"
          />
          {/* Layered architectural glow */}
          <div className="absolute inset-0 bg-emerald/10 blur-[150px] rounded-full -z-10 group-hover:bg-orange/10 transition-colors duration-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 blur-3xl rounded-full -z-20 border border-gray-100/50" />
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-gray-300"
      >
        <span className="text-[10px] font-black uppercase tracking-widest text-emerald opacity-50">Scroll Discovery</span>
        <div className="w-[1px] h-12 bg-gray-100" />
      </motion.div>
    </section>
  );
};
