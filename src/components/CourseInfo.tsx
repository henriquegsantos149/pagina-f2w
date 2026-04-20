import { motion } from 'framer-motion';
import { Clock, BookOpen, MonitorPlay, Award } from 'lucide-react';

export default function CourseInfo() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="sobre" className="relative py-16 md:py-24 bg-black/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Sobre o <span className="text-brand-gradient">Curso</span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto">Tudo que você precisa saber sobre a estrutura do curso Formação 2W.</p>
        </div>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <motion.div variants={item} className="shape-leaf bg-white/[0.03] backdrop-blur-sm border border-white/20 p-8 hover:border-[var(--color-brand-primary)]/50 transition-all group relative overflow-hidden shadow-lg shadow-black/40">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gradient opacity-10 rounded-full blur-[40px] group-hover:opacity-30 transition-opacity"></div>
            <div className="w-14 h-14 shape-leaf bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-[var(--color-brand-primary)]/50 transition-colors">
              <Award className="w-7 h-7 text-[var(--color-brand-primary)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-brand-light)] mb-2 font-primary uppercase">Foco Mão na Massa</h3>
            <p className="text-xl font-impact tracking-wider text-brand-gradient leading-tight">Projeto Final: Construa seu próprio MapViewer Profissional</p>
          </motion.div>

          {/* Card 1 */}
          <motion.div variants={item} className="shape-leaf bg-white/[0.03] backdrop-blur-sm border border-white/20 p-8 hover:border-[var(--color-brand-primary)]/50 transition-all group relative overflow-hidden shadow-lg shadow-black/40">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gradient opacity-10 rounded-full blur-[40px] group-hover:opacity-30 transition-opacity"></div>
            <div className="w-14 h-14 shape-leaf bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-[var(--color-brand-primary)]/50 transition-colors">
              <Clock className="w-7 h-7 text-[var(--color-brand-primary)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-brand-light)] mb-2 font-primary uppercase">Acesso</h3>
            <p className="text-4xl font-impact tracking-wider text-brand-gradient">1 ano</p>
          </motion.div>



          {/* Card 3 */}
          <motion.div variants={item} className="shape-leaf bg-white/[0.03] backdrop-blur-sm border border-white/20 p-8 hover:border-[var(--color-brand-accent)]/50 transition-all group relative overflow-hidden shadow-lg shadow-black/40">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gradient opacity-10 rounded-full blur-[40px] group-hover:opacity-30 transition-opacity"></div>
            <div className="w-14 h-14 shape-leaf bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-[var(--color-brand-accent)]/50 transition-colors">
              <MonitorPlay className="w-7 h-7 text-[var(--color-brand-accent)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-brand-light)] mb-2 font-primary uppercase">Modalidade</h3>
            <p className="text-3xl font-impact tracking-wider text-brand-gradient leading-tight">100% EAD<br/><span className="text-sm font-secondary tracking-normal text-[var(--color-brand-light)]/60 uppercase">Aulas Gravadas</span></p>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
}
