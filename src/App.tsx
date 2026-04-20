import Header from './components/Header'
import Hero from './components/Hero'
import SkillsResults from './components/SkillsResults'
import CourseInfo from './components/CourseInfo'
import ProblemObjective from './components/ProblemObjective'
import Curriculum from './components/Curriculum'
import PracticalApplications from './components/PracticalApplications'
import TargetAudience from './components/TargetAudience'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CallToAction from './components/CallToAction'
import StickyCTA from './components/StickyCTA'

function App() {
  return (
    <main className="w-full min-h-screen bg-[var(--color-brand-dark)] text-[var(--color-brand-light)] font-secondary selection:bg-[var(--color-brand-primary)] selection:text-[var(--color-brand-dark)] relative">
      <Header />
      <Hero />
      <ProblemObjective />
      <Curriculum />
      <SkillsResults />
      <PracticalApplications />
      <TargetAudience />
      <CourseInfo />
      <Testimonials />
      <FAQ />
      <CallToAction />
      
      <StickyCTA />
      
      <footer className="bg-black/80 border-t border-white/5 py-12 text-center text-[var(--color-brand-light)]/40 text-sm">
        <p className="font-secondary tracking-widest uppercase mb-2">© {new Date().getFullYear()} Ambiental Pro. Todos os direitos reservados.</p>
        <p className="text-[10px] opacity-30 uppercase tracking-[0.2em]">Formação F2W - Do Zero ao MapViewer Profissional com IA</p>
      </footer>
    </main>
  )
}

export default App
