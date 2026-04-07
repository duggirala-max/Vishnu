//Built by Duggirala for Vishnu N//
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { ProductGrid } from "./components/sections/ProductGrid";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, MessageCircle, X } from "lucide-react";

function App() {
  const [contactView, setContactView] = useState<'initial' | 'choice' | 'form'>('initial');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "2cb91d2c-46c4-486c-8681-202590f51d7c",
          ...data,
          subject: "New Strategic Procurement Inquiry"
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  const Modal = ({ title, content, isOpen, onClose }: { title: string, content: React.ReactNode, isOpen: boolean, onClose: () => void }) => (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-4xl max-h-[80vh] overflow-y-auto rounded-3xl shadow-2xl p-8 sm:p-12"
          >
            <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-6 h-6 text-gray-900" />
            </button>
            <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-tight">{title}</h2>
            <div className="prose prose-sm max-w-none text-gray-600 space-y-6 font-medium leading-relaxed">
              {content}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <AnimatePresence>
      <div id="home" className="relative min-h-screen bg-white shadow-premium overflow-x-hidden">
        <Navbar />
        
        <main>
          <Hero />
          
          {/* Detailed About Section: Luxury Experience */}
          <section id="about" className="py-16 lg:py-32 bg-gray-50 overflow-hidden px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1"
              >
                <div className="space-y-8">
                  <div className="inline-block px-4 py-2 bg-emerald/10 text-emerald rounded-full text-xs font-black uppercase tracking-widest">
                    Reliable Trading & Logistics
                  </div>
                  <h2 className="text-2xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight uppercase italic tracking-tighter">
                    Connecting <span className="text-emerald">Global Markets</span> with Ease
                  </h2>
                  <p className="text-gray-600 text-lg lg:text-xl leading-relaxed font-medium">
                    Noor Al Reef is your trusted partner for international trading and logistics. We specialize in sourcing high-quality products and delivering them to Businesses in UAE and across the World. Our team ensures that every step of the process is handled with care and professionalism.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                    <div className="p-6 bg-white shadow-premium rounded-2xl border-l-[6px] border-emerald">
                      <h4 className="font-black text-gray-900 uppercase text-sm mb-2">Expert Sourcing</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">We find the best products from around the world to meet your specific business needs.</p>
                    </div>
                    <div className="p-6 bg-white shadow-premium rounded-2xl border-l-[6px] border-orange">
                      <h4 className="font-black text-gray-900 uppercase text-sm mb-2">Efficient Delivery</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">Our logistics network ensures your goods arrive on time and in perfect condition.</p>
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
                <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 h-32 w-32 lg:h-40 lg:w-40 bg-emerald flex items-center justify-center rounded-2xl lg:rounded-3xl shadow-2xl text-white font-black text-lg lg:text-2xl text-center p-4 lg:p-6 z-20">
                  Fifteen Years of Commercial Synergy
                </div>
                <div className="absolute -top-10 -left-10 h-64 w-64 bg-orange/10 blur-3xl rounded-full -z-10" />
              </motion.div>
            </div>
          </section>

          <ProductGrid />
          
          {/* Strategic Inquiry: The conversion point */}
          <section id="contact" className="py-16 lg:py-32 px-6 lg:px-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#00685f] to-[#004d46] p-8 sm:p-16 lg:p-24 rounded-[2rem] lg:rounded-[3rem] text-white shadow-2xl relative overflow-hidden text-center border border-white/10"
            >
              <div className="relative z-10">
                <div className="space-y-4 mb-12 lg:mb-16">
                  <span className="text-orange font-black uppercase tracking-[0.4em] text-xs">Get in Touch</span>
                  <h2 className="text-[2.5rem] sm:text-5xl lg:text-7xl font-black leading-none tracking-tighter uppercase">
                    Contact Us
                  </h2>
                </div>
                
                {contactView === 'initial' ? (
                  <div>
                    <button 
                      onClick={() => setContactView('choice')}
                      className="bg-orange text-white px-10 py-5 rounded-full text-lg lg:text-xl font-black shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 uppercase tracking-[0.2em]"
                    >
                      Start an Inquiry
                    </button>
                  </div>
                ) : contactView === 'choice' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-8">
                    <button 
                      onClick={() => setContactView('form')}
                      className="bg-white/10 hover:bg-white/20 border border-white/20 p-10 rounded-3xl transition-all group flex flex-col items-center text-center space-y-4"
                    >
                      <div className="h-16 w-16 rounded-full bg-orange/20 flex items-center justify-center group-hover:scale-110 transition-transform mb-2">
                        <Mail className="text-orange w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-black group-hover:text-orange transition-colors uppercase tracking-tight">Email Us</h4>
                      <p className="text-emerald-50 text-sm leading-relaxed">Send us your requirements for a detailed quote.</p>
                    </button>
                    <a 
                      href="https://wa.me/971545230170"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 border border-white/20 p-10 rounded-3xl transition-all group flex flex-col items-center text-center space-y-4"
                    >
                      <div className="h-16 w-16 rounded-full bg-orange/20 flex items-center justify-center group-hover:scale-110 transition-transform mb-2">
                        <MessageCircle className="text-orange w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-black group-hover:text-orange transition-colors uppercase tracking-tight">WhatsApp</h4>
                      <p className="text-emerald-50 text-sm leading-relaxed">Chat with us for immediate assistance.</p>
                    </a>
                  </div>
                ) : (
                  <div className="max-w-4xl mx-auto pt-8">
                    {formStatus === 'success' ? (
                      <div className="py-20 space-y-6">
                        <div className="h-20 w-20 bg-orange rounded-full mx-auto flex items-center justify-center text-3xl">✓</div>
                        <h3 className="text-3xl font-black uppercase">Inquiry Transmitted</h3>
                        <p className="text-emerald-50">Your strategic requirement has been received. A regional coordinator will contact you shortly.</p>
                        <button onClick={() => { setFormStatus('idle'); setContactView('choice'); }} className="text-orange font-black uppercase tracking-widest text-xs border-b border-orange">Return to Options</button>
                      </div>
                    ) : (
                      <form 
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
                        onSubmit={handleSubmit}
                      >
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase font-black tracking-widest text-emerald-100 opacity-70 ml-1">Full Name / Corporate Entity</label>
                          <input name="name" required placeholder="John Doe / Global Industrial" className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-white placeholder:text-white/40 focus:bg-white/20 focus:outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase font-black tracking-widest text-emerald-100 opacity-70 ml-1">Professional Email</label>
                          <input name="email" type="email" required placeholder="john.doe@global-trading.com" className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-white placeholder:text-white/40 focus:bg-white/20 focus:outline-none transition-all" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <label className="text-[10px] uppercase font-black tracking-widest text-emerald-100 opacity-70 ml-1">Strategic Message / Requirement</label>
                          <textarea name="message" required rows={4} placeholder="Describe your procurement or logistical objectives..." className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-white placeholder:text-white/40 focus:bg-white/20 focus:outline-none transition-all resize-none" />
                        </div>
                        <div className="md:col-span-2 pt-4 flex flex-col sm:flex-row gap-4">
                          <button 
                            type="submit" 
                            disabled={formStatus === 'submitting'}
                            className="flex-1 bg-orange text-white py-6 rounded-full text-xl font-black shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50"
                          >
                            {formStatus === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                          </button>
                          <button 
                            type="button"
                            onClick={() => setContactView('choice')}
                            className="px-8 py-6 border-2 border-white/20 text-white font-black uppercase text-xs tracking-widest rounded-full hover:bg-white/10 transition-all"
                          >
                            Go Back
                          </button>
                        </div>
                        {formStatus === 'error' && (
                          <p className="md:col-span-2 text-red-300 text-sm font-bold text-center">There was a transmission error. Please try again or use direct liaison.</p>
                        )}
                      </form>
                    )}
                  </div>
                )}
              </div>
              
              {/* Background Articulation */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange/20 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
            </motion.div>
          </section>
        </main>

        <footer className="py-12 lg:py-20 border-t border-gray-100 px-6 lg:px-8 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-4">
                <img 
                  src="/logo.png" 
                  alt="Noor Al Reef Logo" 
                  className="h-10 lg:h-12 w-auto object-contain mix-blend-multiply contrast-125" 
                />
                <div className="flex gap-1">
                  <span className="text-[#00685f] font-black text-2xl tracking-tighter">NOOR</span>
                  <span className="text-[#e17726] font-black text-2xl tracking-tighter">AL REEF</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm font-medium">B2B General Trading Excellence.</p>
            </div>
            
            <div className="text-center">
              <p className="text-gray-900 font-bold text-sm mb-2 uppercase tracking-widest">Global Operations</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Office no: 404-136, NGI Building <br />
                Port Saeed, Dubai, UAE
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6 text-gray-500 text-xs uppercase tracking-widest font-black">
              <div className="flex gap-8">
                <button onClick={() => setShowPrivacy(true)} className="hover:text-emerald transition-colors">Privacy</button>
                <button onClick={() => setShowTerms(true)} className="hover:text-emerald transition-colors">Terms</button>
              </div>
              <p className="text-gray-400 font-normal normal-case">
                © 2025 Noor Al Reef General Trading LLC. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>

        <Modal 
          isOpen={showPrivacy} 
          onClose={() => setShowPrivacy(false)} 
          title="Privacy Policy"
          content={
            <>
              <p>At Noor Al Reef, we value your privacy. This policy explains how we collect and use your data in accordance with UAE Federal Decree-Law No. 45 of 2021.</p>
              <h3 className="text-gray-900 font-bold uppercase text-sm">Data Collection</h3>
              <p>We collect information you provide through our contact forms, such as your name, email, and business details, solely to respond to your inquiries.</p>
              <h3 className="text-gray-900 font-bold uppercase text-sm">Data Protection</h3>
              <p>We implement secure measures to protect your personal information from unauthorized access. We do not share your data with third parties without your consent.</p>
              <h3 className="text-gray-900 font-bold uppercase text-sm">Your Rights</h3>
              <p>Under UAE law, you have the right to access, correct, or request the deletion of your personal data held by us.</p>
              <p>For any privacy concerns, please contact us through our official channels.</p>
            </>
          }
        />

        <Modal 
          isOpen={showTerms} 
          onClose={() => setShowTerms(false)} 
          title="Terms & Conditions"
          content={
            <>
              <p>By using this website, you agree to these terms. All content and services provided are subject to UAE law.</p>
              <h3 className="text-gray-900 font-bold uppercase text-sm">Use of Website</h3>
              <p>This website is for professional business inquiries. Users are prohibited from using the platform for any illegal activities.</p>
              <h3 className="text-gray-900 font-bold uppercase text-sm">Intellectual Property</h3>
              <p>All trademarks, logos, and content on this site are the property of Noor Al Reef General Trading LLC.</p>
              <h3 className="text-gray-900 font-bold uppercase text-sm">Liability</h3>
              <p>Noor Al Reef is not liable for any damages arising from the use of this website or reliance on the information provided herein.</p>
              <h3 className="text-gray-900 font-bold uppercase text-sm">Dispute Resolution</h3>
              <p>Any disputes related to these terms will be governed by the laws of the United Arab Emirates and handled by the courts of Dubai.</p>
            </>
          }
        />
      </div>
    </AnimatePresence>
  );
}

export default App;
