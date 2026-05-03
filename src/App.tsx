import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Certifications />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
