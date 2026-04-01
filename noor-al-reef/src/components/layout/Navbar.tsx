//Built by Duggirala for Vishnu Vardhan
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 flex justify-between items-center px-12 py-6 navbar-z">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="flex items-center gap-2 group cursor-pointer"
      >
        <img 
          src="/logo.png" 
          alt="Noor Al Reef" 
          className="h-16 object-contain group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="flex flex-col -space-y-1">
          <span className="text-emerald font-black text-2xl tracking-tighter uppercase whitespace-nowrap">NOOR</span>
          <span className="text-orange font-black text-2xl tracking-tighter uppercase whitespace-nowrap">AL REEF</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden lg:flex items-center gap-12"
      >
        {["Home", "Catalog", "About", "Contact"].map((item, idx) => (
          <a 
            key={idx}
            href={`#${item.toLowerCase()}`} 
            className="text-gray-900 font-black uppercase text-xs tracking-[0.35em] hover:text-emerald transition-all duration-300 relative group overflow-hidden py-2"
          >
            {item}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <button className="btn-orange text-xs uppercase tracking-[0.3em] px-8 py-4">
          Strategic Inquiry
        </button>
      </motion.div>
    </nav>
  );
};
