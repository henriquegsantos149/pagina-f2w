import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Como funciona a modalidade 100% EAD?",
    answer: "O curso é totalmente ministrado de forma online e com aulas gravadas, oferecendo flexibilidade para você estudar nos horários que preferir. Você terá acesso à nossa plataforma virtual de aprendizagem, com vídeos e materiais de apoio."
  },
  {
    question: "Preciso saber programar para cursar?",
    answer: "Não! A grande sacada da Formação 2W é o uso de IA (Vibe Coding). Você usará ferramentas como o Cursor para pular as barreiras mais pesadas do código puro, focando na lógica e no resultado."
  },
  {
    question: "O curso aborda ferramentas de mercado?",
    answer: "Sim. O conteúdo abrange PostgreSQL, PostGIS, GeoServer, Docker, React, entre outras tecnologias modernas de WebGIS exigidas no mercado."
  },
  {
    question: "Qual o tempo de acesso?",
    answer: "Você terá 1 ano de acesso liberado a todo o conteúdo, podendo rever os materiais e as aulas extras."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-[var(--color-brand-dark)] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Perguntas <span className="text-brand-gradient">Frequentes</span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary">Tire suas dúvidas finais sobre o conteúdo da Formação 2W.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`shape-leaf bg-white/[0.03] backdrop-blur-sm border transition-all duration-300 ${isOpen ? 'border-[var(--color-brand-primary)] shadow-[0_0_20px_rgba(149,166,23,0.1)]' : 'border-white/5 hover:border-[var(--color-brand-accent)]/30 shadow-lg shadow-black/40'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group gap-4"
                >
                  <h3 className={`text-lg font-bold font-primary tracking-wide transition-colors duration-300 uppercase ${isOpen ? 'text-[var(--color-brand-secondary)]' : 'text-[var(--color-brand-light)] group-hover:text-white'}`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[var(--color-brand-primary)]/20' : 'bg-white/5 group-hover:bg-white/10'}`}>
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-[var(--color-brand-primary)]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[var(--color-brand-light)]/70" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="h-px w-full bg-white/10 mb-4"></div>
                        <p className="text-[var(--color-brand-light)]/70 font-secondary leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
