import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    id: 1,
    num: '01',
    title: 'RESTAURANT ANALYTICS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFpjpaDzvksCBt48oPan6Lp225YlhZYrUfinYDLmKEC6-5qHb5zZHJxN95CpyYSsrMYO364ONBvfK5aup7B_tAzsnS-yt2iZBCVmdiaQgvvDJ8fO6x00vEy5l3BSddzfqfq1YbvKTNOY94LuermmdUzpPwssqldH8clCqm63arbtE8ZBoU9dgJxDY6_uhCzxI6jRLSjpUk53p71n7R-vCVLWEU78K-Nv-T2z2Zfa3eMl7ARtZu9P63j_vF8bArgtX70SqCP-uqTQRz',
    tags: ['PYTHON', 'TABLEAU'],
    situation: 'Midsized chain operational efficiency audit.',
    action: 'Deployment of transactional cleaning scripts and radial traffic dashboards.',
    results: '15% labor cost reduction / 12% sales uplift.',
    reverse: false
  },
  {
    id: 2,
    num: '02',
    title: 'ACADEMIC METRICS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIt2AJ-TPlW9EWnfcikV7wzNIxXca44SP5QMezo3QeutLiyT6Sdcd9dY9I4VGwHIxX8pgEs6R5NSiN0rJ8USFq6H3SYBOhSfLpKDxS1THIWehMTTavurwcfNFTpwRVRyjRg-bxQSE46rBCTlP17oAg_OChEEx7Wly--JnW88VDRdvhvUPCuaQJLM3XYrqhCAhC3uSsBlrvw4V-q0hXmsO7JmR7-VnzbY1Kt8J7h2qgn63WZbmLfvcvbsMdoZ2Dz-OgN22vS1Z7U-y8',
    tags: ['SQL', 'EXCEL'],
    situation: 'At-risk student identification system.',
    action: 'Relational database architecture for performance correlation.',
    results: '80% faster reporting / 200+ student interventions.',
    reverse: true
  }
];

export default function Projects() {
  return (
    <section className="bg-brand-bg relative" id="projects">
      <div className="flex flex-col">
        {projects.map((project) => (
          <article 
            key={project.id} 
            className={`grid grid-cols-1 md:grid-cols-2 border-b border-brand-accent last:border-b-0`}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`flex flex-col justify-between p-10 bg-[#0A0A0A] ${project.reverse ? 'md:order-2 md:border-l' : 'md:border-r'} border-brand-accent`}
            >
              <div>
                <div className="flex justify-between items-end mb-12">
                  <span className="text-brand-highlight font-black text-2xl tracking-tighter">{project.num}</span>
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-bold text-brand-fg/30 uppercase tracking-[0.2em] border border-brand-accent px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-6xl font-black mb-8 leading-[0.9] tracking-tighter">{project.title}</h3>
                
                <div className="space-y-8 max-w-sm">
                  <div>
                    <span className="text-[9px] font-bold text-brand-highlight uppercase tracking-[0.3em] block mb-2">// INTENT</span>
                    <p className="text-sm text-brand-fg/60 uppercase leading-snug">{project.situation}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-brand-highlight uppercase tracking-[0.3em] block mb-2">// EXECUTION</span>
                    <p className="text-sm text-brand-fg/60 uppercase leading-snug">{project.action}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-brand-accent">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-highlight mt-1" />
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] block mb-1 opacity-40">OUTPUT</span>
                    <p className="text-lg font-black uppercase tracking-tighter leading-none">{project.results}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className={`relative h-[500px] md:h-auto overflow-hidden bg-[#0F0F0F] ${project.reverse ? 'md:order-1' : ''}`}>
              <img 
                className="w-full h-full object-cover mix-blend-luminosity grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700 cursor-crosshair" 
                alt={project.title}
                referrerPolicy="no-referrer"
                src={project.image} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none md:hidden" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
