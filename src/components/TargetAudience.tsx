import { motion } from 'framer-motion';
import { UserCheck, CheckCircle2 } from 'lucide-react';

const profiles = [
  "O Geo-profissional frustrado com o desktop (Biólogos, engenheiros, geógrafos que dominam QGIS mas querem ir para a web)",
  "O desenvolvedor sem contexto geoespacial (Programador front-end ou back-end que quer entrar no mercado Geo)",
  "O analista que quer se destacar (Profissional de dados, Python, Power BI que quer adicionar visão espacial)"
];

export default function TargetAudience() {
  return (
    <section id="publico-alvo" className="py-16 md:py-24 bg-[var(--color-brand-dark)] relative border-t border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gradient opacity-[0.02] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-primary uppercase tracking-wide">
            Para <span className="text-brand-gradient">Quem é</span> o Curso?
          </h2>


          <div className="space-y-4">
            {profiles.map((profile, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 bg-white/[0.03] backdrop-blur-sm border border-white/10 p-4 shape-leaf hover:bg-white/10 transition-colors shadow-lg shadow-black/40"
              >
                <UserCheck className="w-6 h-6 text-[var(--color-brand-secondary)] shrink-0" />
                <span className="font-secondary text-[var(--color-brand-light)]">{profile}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="shape-leaf bg-black/40 border border-[var(--color-brand-primary)]/20 p-10 relative overflow-hidden backdrop-blur-md shadow-2xl shadow-black/60"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-gradient"></div>
            
            <h3 className="text-2xl font-bold font-primary uppercase tracking-wide mb-6">A Abordagem Certa</h3>
            <p className="text-[var(--color-brand-light)]/70 font-secondary leading-relaxed mb-8">
              A grande sacada da Formação 2W é o <strong>Vibe Coding</strong>: usar IA (como o Cursor) para pular as barreiras mais pesadas do código puro.
            </p>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-brand-primary)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[var(--color-brand-light)] font-primary text-xl uppercase tracking-wide">Sem Barreiras para Iniciantes</h4>
                  <p className="text-sm text-[var(--color-brand-light)]/60 font-secondary mt-1">Como o foco é desenvolvimento com IA e ferramentas práticas, você não precisa ter formação prévia em ciências da computação.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-brand-primary)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[var(--color-brand-light)] font-primary text-xl uppercase tracking-wide">Projeto Portfólio Real</h4>
                  <p className="text-sm text-[var(--color-brand-light)]/60 font-secondary mt-1">Esqueça exercícios didáticos isolados. Construa um MapViewer real, funcional e entregável para começar a captar clientes na área Geo.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
