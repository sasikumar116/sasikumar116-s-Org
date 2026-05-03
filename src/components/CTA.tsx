import { Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="bg-brand-bg py-40 text-center border-b border-brand-accent">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-[60px] md:text-[100px] leading-[0.85] font-black mb-12 tracking-tighter uppercase grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
          SYSTEM_SOLUTIONS<br/><span className="text-brand-highlight">COLLABORATION</span>
        </h2>
        <p className="text-brand-fg/50 text-[10px] font-bold uppercase tracking-[0.4em] mb-12">OPEN_FOR_NEXT_CYCLE_2024</p>
        <div className="flex justify-center">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-fg text-brand-bg text-[10px] font-black uppercase tracking-[0.3em] px-12 py-5 hover:bg-brand-highlight hover:text-brand-fg transition-colors flex items-center gap-3" 
            href="mailto:sasikumar.p@email.com"
          >
            <Mail className="w-4 h-4" strokeWidth={3} /> INITIALIZE_CONTACT
          </motion.a>
        </div>
      </div>
    </section>
  );
}
