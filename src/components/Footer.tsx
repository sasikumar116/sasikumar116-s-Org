export default function Footer() {
  return (
    <footer className="bg-brand-bg py-12">
      <div className="max-w-full px-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[9px] font-bold text-brand-fg/30 uppercase tracking-[0.3em]">
          © 2024 CORE DATA SYSTEMS. STRUCTURAL INTEGRITY GUARANTEED.
        </p>
        <div className="flex gap-10">
          {['LinkedIn', 'GitHub', 'Email', 'Archive'].map((link) => (
            <a 
              key={link}
              className="text-brand-fg/30 text-[9px] font-bold uppercase tracking-[0.2em] hover:text-brand-highlight transition-colors" 
              href="#"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
