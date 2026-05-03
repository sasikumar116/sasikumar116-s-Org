import { Award, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

const certs = [
  {
    val: '001',
    title: 'DATA ANALYTICS',
    issuer: 'GOOGLE / COURSERA',
    icon: Award,
  },
  {
    val: '002',
    title: 'PYTHON SCIENCE',
    issuer: 'IBM / EDX',
    icon: Terminal,
  }
];

export default function Certifications() {
  return (
    <section className="bg-brand-bg border-b border-brand-accent p-0" id="certifications">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {certs.map((cert, index) => (
          <motion.div 
            key={cert.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`p-10 flex flex-col justify-center border-brand-accent ${index === 0 ? 'md:border-r' : ''} border-b md:border-b-0 group hover:bg-[#0F0F0F] transition-colors`}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-brand-highlight font-mono text-xs font-bold">{cert.val}</span>
              <div className="h-[1px] flex-1 bg-brand-accent group-hover:bg-brand-highlight transition-colors" />
            </div>
            <h3 className="text-4xl font-black mb-4 tracking-tighter">{cert.title}</h3>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-fg/40">{cert.issuer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
