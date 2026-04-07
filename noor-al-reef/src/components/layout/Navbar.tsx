//Built by Duggirala for Vishnu N//
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Catalog", id: "catalog" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "bg-white/98 backdrop-blur-xl shadow-2xl py-2 lg:py-3" : "bg-transparent py-4 lg:py-8"
      } px-6 lg:px-12 flex justify-between items-center`}
    >
      {/* Brand Logo & Name */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => scrollToSection("home")}
      >
        <img 
          src="/logo.png" 
          alt="Noor Al Reef Logo" 
          className="h-10 lg:h-20 w-auto object-contain mix-blend-multiply contrast-125" 
        />
        <div className="flex flex-col -space-y-1 lg:-space-y-2">
          <div className="flex gap-1.5 items-baseline">
            <span className="text-[#00685f] font-black text-xl lg:text-4xl tracking-tighter uppercase leading-none">NOOR</span>
            <span className="text-[#e17726] font-black text-xl lg:text-4xl tracking-tighter uppercase leading-none">AL REEF</span>
          </div>
          <span className="text-gray-900 font-sans font-light text-[9px] lg:text-[14px] uppercase tracking-[0.3em] pl-0.5 opacity-80">
            General Trading LLC
          </span>
        </div>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 lg:gap-16">
        <div className="flex items-center gap-8 lg:gap-12">
          {menuItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-950 font-black uppercase text-[11px] tracking-[0.35em] hover:text-[#00685f] transition-all duration-300 relative group py-2"
            >
              {item.name}
              <div className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#e17726] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          ))}
        </div>
        <button 
          onClick={() => scrollToSection("contact")}
          className="bg-[#00685f] text-white px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-xl shadow-[#00685f]/20 hover:bg-[#e17726] hover:scale-110 transition-all duration-500"
        >
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div 
        className="md:hidden flex flex-col justify-center items-center cursor-pointer p-2 z-[110]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="text-gray-950 w-8 h-8" /> : <Menu className="text-gray-950 w-8 h-8" />}
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen bg-white z-[105] flex flex-col items-center justify-center gap-12 px-8"
          >
            {menuItems.map((item, idx) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-950 font-black text-4xl uppercase tracking-[0.2em] hover:text-[#00685f]"
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => scrollToSection("contact")}
              className="bg-[#e17726] text-white w-full max-w-[300px] py-6 rounded-full text-xl font-black uppercase tracking-widest shadow-2xl"
            >
              Inquiry
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
