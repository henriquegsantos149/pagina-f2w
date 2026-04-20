import { motion } from 'framer-motion';

const base = import.meta.env.BASE_URL;

const facultyMembers = [
  {
    name: "Henrique Gonzalez",
    title: "Engenheiro Ambiental (UFRJ)",
    image: `${base}faculty/henrique.png`,
    resume: "Sócio-fundador da Ambiental Pro, com atuação internacional e estudos na Austrália. Especialista em análise espacial de dados e monetização no setor ambiental."
  },
  {
    name: "Dhyogo Miléo Taher",
    title: "Doutor em Engenharia (UFPR)",
    image: `${base}faculty/dhyogo.png`,
    resume: "Referência em tecnologias sustentáveis para remediação. Atua em projetos internacionais com foco em biorremediação, reaproveitamento de resíduos e bioenergia."
  },
  {
    name: "Marcio Alberto",
    title: "Fundador e CEO da Geoinovações®",
    image: `${base}faculty/marcio.png`,
    resume: "Especialista na gestão inteligente de áreas contaminadas e recursos hídricos. Integra geologia, qualidade da água e planejamento urbano na identificação de riscos ambientais."
  },
  {
    name: "Gustavo Rosa",
    title: "Engenheiro de Produção (UFF)",
    image: `${base}faculty/gustavo.png`,
    resume: "Possui 13 anos de experiência em projetos ambientais no Brasil e EUA. Atua com SIG, investigações ambientais, avaliação de risco, e planos de intervenção."
  },
  {
    name: "Bruno Damasio",
    title: "Oceanógrafo e Mestre pela USP",
    image: `${base}faculty/bruno_damasio.png`,
    resume: "Gerente Geral na Aquifero Serviços de Remediação. Lidera projetos no exterior com tecnologias como biorremediação, oxidação in situ e sistemas Pump & Treat."
  },
  {
    name: "Bruno Bezerra",
    title: "Engenheiro Ambiental e Especialista",
    image: `${base}faculty/bruno_bezerra.png`,
    resume: "Diretor da Bezerra Ambiental com mais de 10 anos de experiência em licenciamento. Seu foco é unir conhecimento técnico e prática para soluções ambientais inovadoras."
  },
  {
    name: "Matheus Bertolino",
    title: "Doutorando em Engenharia (UFJF)",
    image: `${base}faculty/matheus.png`,
    resume: "Foco em Tecnologias Ambientais. Atuou na Neoenergia e CESAMA, trazendo vasta experiência em tratamento de água, esgotamento rural e recuperação de áreas."
  }
];

export default function Faculty() {
  return (
    <section id="professores" className="py-16 md:py-24 bg-[var(--color-brand-dark)]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Conheça alguns de <span className="inline-block bg-brand-gradient text-[var(--color-brand-dark)] px-3 py-1 mt-2 mb-1 shape-leaf transform -skew-x-6"><span className="inline-block transform skew-x-6">nossos professores</span></span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto">Aprenda com especialistas de mercado e acadêmicos renomados nas melhores instituições do país.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="shape-leaf bg-white/[0.03] backdrop-blur-sm border border-white/20 overflow-hidden hover:border-[var(--color-brand-accent)]/50 transition-all group hover:shadow-[0_0_30px_rgba(149,166,23,0.15)] flex flex-col shadow-lg shadow-black/40"
            >
              <div className="h-64 overflow-hidden relative shrink-0">
                <img 
                  src={member.image} 
                  alt={`${member.name} – Professor da Formação F2W`} 
                  className="w-full h-full object-cover grayscale-0 md:grayscale opacity-100 md:opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-[var(--color-brand-light)] mb-1 font-primary group-hover:text-[var(--color-brand-primary)] transition-colors">{member.name}</h3>
                    <p className="text-sm text-[var(--color-brand-secondary)] mb-4 font-semibold uppercase tracking-wider">{member.title}</p>
                </div>
                <p className="text-sm text-[var(--color-brand-light)]/60 leading-relaxed border-t border-white/10 pt-4">{member.resume}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
