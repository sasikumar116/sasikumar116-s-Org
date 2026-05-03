import { Database, TrendingUp, Globe } from 'lucide-react';
import { motion } from 'motion/react';

const skills = [
  {
    title: 'ENGINEERING',
    icon: Database,
    tags: ['SQL', 'Python', 'Pandas/NumPy', 'ETL Pipelines'],
  },
  {
    title: 'VISUALS',
    icon: TrendingUp,
    tags: ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'CORE',
    icon: Globe,
    tags: ['English (Fluent)', 'Telugu (Native)', 'Hindi', 'Statistics'],
  }
];

export default function Skills() {
  return (
    <section className="bg-brand-bg border-b border-brand-accent p-0" id="skills">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.div 
            key={skill.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`p-10 border-brand-accent ${index !== skills.length - 1 ? 'md:border-r' : ''} border-b md:border-b-0 group hover:bg-[#0F0F0F] transition-colors`}
          >
            <div className="flex justify-between items-start mb-12">
              <span className="text-[10px] font-bold text-brand-fg/30 uppercase tracking-[0.2em]">0{index + 1}</span>
              <skill.icon className="w-5 h-5 text-brand-highlight opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-4xl font-black mb-8 tracking-tighter">{skill.title}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.tags.map(tag => (
                <span 
                  key={tag} 
                  className="border border-brand-accent text-brand-fg/50 text-[9px] font-bold px-3 py-1 uppercase tracking-widest hover:text-brand-highlight hover:border-brand-highlight transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
