import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 min-h-[600px]">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="md:col-span-7 flex flex-col justify-between p-10 md:border-r border-brand-accent"
      >
        <div>
          <span className="text-brand-highlight font-bold text-[10px] uppercase tracking-[0.3em] mb-10 block">// EST 2024</span>
          <h1 className="text-[100px] md:text-[150px] leading-[0.8] mb-12 select-none tracking-[-0.05em] font-black">
            SASI<br/>KUMAR
          </h1>
        </div>
        
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-4 text-[10px] font-bold uppercase tracking-widest opacity-50">
            <MapPin className="w-3 h-3 text-brand-highlight" />
            <span>HYDERABAD / IN</span>
          </div>
          <p className="text-sm text-brand-fg/60 leading-relaxed uppercase">
            Multidisciplinary Data Analyst. Translating complex system logs into structural intelligence through SQL and Python architecture.
          </p>
        </div>
      </motion.div>
      
      <div className="md:col-span-5 bg-[#0F0F0F] flex items-center justify-center p-10 relative overflow-hidden">
        <div className="w-full aspect-square border border-brand-accent relative flex items-center justify-center">
          <div className="absolute inset-[10%] border-2 border-brand-highlight opacity-50" />
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute opacity-20">
            <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="0.2" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="white" strokeWidth="0.2" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="#FF3E00" strokeWidth="0.1" />
          </svg>
          <img 
            className="w-full h-full object-cover mix-blend-luminosity grayscale opacity-60" 
            referrerPolicy="no-referrer"
            alt="Data analyst workspace"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpdOr1dzq5EDkk2a6iZXRPae2QSwxufjk_rLA0ROBhjDehxt6hxHPX04F3s92y_PMx8Y55CsLFyPkFMXOr3pahjODhBeYe9KK5BMS157-61PLTQf8-2W34u3R2nU4cBm1PK3_HzeSbm0nrFGci_brUrM3YiiduQ61G2okLL7xYXvhDIcjsR1y1TC9aTz6yMZCb7OkiAT9mlPLULc5KuiwwFbhZjkoh4b59Uxigx0Etf8fMJhSW3t_BeRkTrFzN4vuUdAb_kf1pUtLS" 
          />
        </div>
        <div className="absolute bottom-10 right-10 text-[8px] uppercase tracking-[0.4em] origin-right rotate-90 opacity-30 pointer-events-none whitespace-nowrap">
          SYSTEMS_ARCHITECTURE
        </div>
      </div>
    </section>
  );
}
