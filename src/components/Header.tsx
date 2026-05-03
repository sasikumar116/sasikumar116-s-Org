import { Menu, BarChart3 as Analytics } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="bg-brand-bg border-b border-brand-accent top-0 sticky z-50 h-20 flex items-center">
      <nav className="flex justify-between items-center w-full px-10">
        <div className="flex items-center gap-2">
          <Analytics className="w-5 h-5 text-brand-highlight" />
          <span className="text-xl font-black uppercase tracking-tighter">SASI™</span>
        </div>
        <div className="hidden md:flex gap-10 items-center font-bold text-[10px] uppercase tracking-[0.2em]">
          <a className="text-brand-highlight hover:opacity-100 transition-opacity" href="#">Portfolio</a>
          <a className="text-brand-fg/50 hover:text-brand-fg transition-colors" href="#projects">Archive</a>
          <a className="text-brand-fg/50 hover:text-brand-fg transition-colors" href="#skills">Process</a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            className="text-brand-fg border border-brand-accent px-4 py-2 hover:bg-brand-accent transition-colors" 
            href="mailto:sasikumar.p@email.com"
          >
            Contact
          </motion.a>
        </div>
        <div className="md:hidden">
          <Menu className="w-6 h-6 cursor-pointer text-brand-fg" />
        </div>
      </nav>
    </header>
  );
}
