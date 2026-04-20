import { motion } from 'framer-motion';
import { Target, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function ProblemObjective() {
  return (
    <section id="problema" className="py-16 md:py-24 relative overflow-hidden bg-black/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Problem Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 text-[var(--color-brand-primary)] mb-6 font-primary uppercase tracking-[0.2em] font-bold text-sm">
              <AlertTriangle className="w-5 h-5" />
              <span>O Desafio da Inteligência Geográfica</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-primary uppercase leading-tight">
              Do zero à <br className="hidden lg:block"/> <span className="text-brand-gradient">Publicação na Nuvem</span>
            </h2>
            <div className="space-y-6 text-lg text-[var(--color-brand-light)]/70 font-secondary">
              <p>
                A necessidade de manipular e disponibilizar dados espaciais é urgente no mercado ambiental corporativo moderno. Ferramentas avulsas e fluxos engessados limitam a inteligência do negócio.
              </p>
              <p>
                Aprenda a aplicar o método de Vibe Coding, e você não precisará mais dominar todas as linguagens desde a sintaxe para arquitetar um sistema robusto de ponta a ponta. A IA codifica; você gerencia.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Objective Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shape-leaf bg-white/[0.03] backdrop-blur-sm border border-white/20 p-10 relative overflow-hidden shadow-lg shadow-black/40 group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gradient opacity-[0.05] rounded-full blur-[60px] group-hover:opacity-[0.1] transition-opacity"></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 shape-leaf bg-brand-gradient flex items-center justify-center text-[var(--color-brand-dark)] shadow-[0_0_15px_rgba(109,166,155,0.3)]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-primary uppercase tracking-wide text-[var(--color-brand-light)]">Nosso Objetivo</h3>
            </div>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-[var(--color-brand-primary)] shrink-0 shadow-[0_0_10px_var(--color-brand-primary)]"></div>
                <div>
                  <h4 className="font-bold text-[var(--color-brand-light)] mb-1 uppercase tracking-wider text-sm">Vibe Coding</h4>
                  <p className="text-[var(--color-brand-light)]/60 text-sm leading-relaxed">Formar profissionais para conduzir a construção de aplicações geoespaciais usando IA de maneira estratégica e produtiva.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-[var(--color-brand-secondary)] shrink-0 shadow-[0_0_10px_var(--color-brand-secondary)]"></div>
                <div>
                  <h4 className="font-bold text-[var(--color-brand-light)] mb-1 uppercase tracking-wider text-sm">Arquitetura Integrada</h4>
                  <p className="text-[var(--color-brand-light)]/60 text-sm leading-relaxed">Capacitar no uso moderno de Docker, PostgreSQL e ecossistemas focados no alto desempenho.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-[var(--color-brand-accent)] shrink-0 shadow-[0_0_10px_var(--color-brand-accent)]"></div>
                <div>
                  <h4 className="font-bold text-[var(--color-brand-light)] mb-1 uppercase tracking-wider text-sm">Destaque Profissional</h4>
                  <p className="text-[var(--color-brand-light)]/60 text-sm leading-relaxed">Garantir independência técnica, libertando-o de departamentos de TI tradicionais para entrega de valor imediata.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-3 text-[var(--color-brand-accent)] font-bold italic relative z-10">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm tracking-wide">Interface robusta com resultados no mundo real.</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
