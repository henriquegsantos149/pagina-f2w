import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-brand-dark)]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-70"></div>
      
      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-brand-dark)]/60 to-[var(--color-brand-dark)] opacity-100 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-16 text-center flex flex-col items-center">
        
        {/* Badges */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-10 md:gap-16 mb-8 md:mb-12"
        >
          {/* Ambiental Pro */}
          <a 
            href="https://www.ambientalpro.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <img 
              src={`${import.meta.env.BASE_URL}logo-ambientalpro.png`} 
              alt="Ambiental Pro" 
              className="h-14 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </a>


        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-[4rem] lg:text-[4.5rem] font-bold tracking-tight mb-6 max-w-5xl uppercase leading-tight font-primary"
        >
          Formação 2W <br className="md:block" />
          <span className="inline-block bg-brand-gradient text-[var(--color-brand-dark)] px-3 py-1 md:px-4 md:py-1 mt-2 mb-1 shape-leaf transform -skew-x-6">
            <span className="inline-block skew-x-6">Do Zero ao MapViewer</span>
          </span> <br className="md:block" />
          Profissional com IA
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-[var(--color-brand-light)]/70 mb-8 md:mb-10 max-w-2xl leading-relaxed font-secondary"
        >
          Você não precisa ser programador para construir sistemas de mapas profissionais, você precisa da abordagem certa com o Vibe Coding.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button 
            onClick={onOpenModal}
            aria-label="Inscreva-se agora na Formação 2W" 
            className="shape-leaf group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-gradient text-[var(--color-brand-dark)] font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(109,166,155,0.3)] hover:shadow-[0_0_35px_rgba(109,166,155,0.5)] cursor-pointer"
          >
            <span className="relative z-10 transition-colors uppercase tracking-wider font-primary">Inscreva-se Agora</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-4 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-[var(--color-brand-secondary)] opacity-70" />
        </motion.div>

      </div>
    </section>
  );
}
