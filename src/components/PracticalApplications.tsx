import { motion } from 'framer-motion';

const applications = [
  {
    title: "Consultoria e Licenciamento Ambiental",
    description: "Criação de WebGIS e Dashboards (ex: CAR Viewer) para analisar áreas de influência, supressão vegetal e facilitar o processo de licenciamento.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Gestão Pública e Smart Cities",
    description: "Prefeituras e órgãos públicos utilizam mapas interativos para controle urbano corporativo, mapeamento de risco e planejamento de infraestrutura.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Agronegócio e Logística",
    description: "Monitoramento contínuo de lavouras via satélite, cálculo de biomassa (NDVI) e sistemas logísticos baseados em rotas espaciais e geofencing.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Monitoramento e Créditos de Carbono",
    description: "Sistemas complexos que integram banco de dados relacional e visualização em tempo real do desmatamento e gestão de áreas de preservação.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
  }
];

export default function PracticalApplications() {
  return (
    <section id="aplicacoes-praticas" className="py-16 md:py-24 relative bg-black/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Onde Aplicar <span className="text-brand-gradient">na Prática?</span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary">A habilidade de criar sistemas espaciais inteligentes é essencial em múltiplos setores de mercado na atualidade.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {applications.map((app, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col p-0 shape-leaf bg-[var(--color-brand-dark)] border border-white/5 hover:border-[var(--color-brand-primary)]/40 transition-all group shadow-lg shadow-black/40 overflow-hidden"
              >
                <div className="w-full h-48 md:h-56 relative overflow-hidden bg-black/50">
                  <div className="absolute inset-0 bg-[var(--color-brand-dark)]/40 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                  <img src={app.image} alt={app.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-gradient opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[var(--color-brand-light)] font-primary uppercase tracking-wide mb-3 group-hover:text-[var(--color-brand-primary)] transition-colors">{app.title}</h3>
                  <p className="text-[var(--color-brand-light)]/60 font-secondary leading-relaxed">{app.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
