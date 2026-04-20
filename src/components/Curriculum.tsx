import { ChevronDown, Target, LineChart, Globe, MonitorPlay } from 'lucide-react';
import { useState } from 'react';

const modules = [
  {
    title: "Construindo seu primeiro WebGIS",
    objective: "Setup do ambiente, Mapas básicos e publicação imediata.",
    practicalFocus: "Primeiro mapa publicado na web."
  },
  {
    title: "Introdução ao Universo WebGIS",
    objective: "Terminologias, padrões OGC, arquitetura Full Stack Geo.",
    practicalFocus: "Entendimento claro do fluxo de trabalho WebGIS."
  },
  {
    title: "O Início da Prática",
    objective: "Mapas, Rasters, Gráficos interativos e Deploy na nuvem.",
    practicalFocus: "Aplicações práticas de visualização em nuvem."
  },
  {
    title: "Fundamentos de Bancos de Dados Geoespaciais",
    objective: "PostgreSQL/PostGIS, Servidores de Hospedagem (Render, AWS).",
    practicalFocus: "Gerenciamento de dados espaciais robusto."
  },
  {
    title: "Containers e APIs Geo",
    objective: "Docker, GeoServer, Postman, APIs online e Geocodificação.",
    practicalFocus: "Infraestrutura escalável com serviços Geo."
  },
  {
    title: "Introdução ao HTML, CSS e Javascript com Leaflet",
    objective: "Fundamentos da web e construção de mapas dinâmicos.",
    practicalFocus: "Habilidade de manipular mapas via código simples."
  },
  {
    title: "Criando a Interface com Cursor e React",
    objective: "Desenvolvimento Front-end com o auxílio de IA (Vibe Coding).",
    practicalFocus: "Interface de MapViewer moderna e funcional."
  },
  {
    title: "MapViewer Completo",
    objective: "Projeto final integrando toda a stack do curso.",
    practicalFocus: "Portfólio profissional (MapViewer) publicado."
  }
];

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openBonus, setOpenBonus] = useState<number | null>(null);

  return (
    <section id="curriculo" className="py-16 md:py-24 bg-[var(--color-brand-dark)] relative overflow-hidden">
      {/* background grid again for continuity */}
      <div className="absolute inset-0 bg-grid opacity-[0.05]"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Conteúdo <span className="inline-block bg-brand-gradient text-[var(--color-brand-dark)] px-3 py-1 mt-2 mb-1 shape-leaf transform -skew-x-6"><span className="inline-block transform skew-x-6">Programático</span></span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary">8 módulos desenhados para conectar a teoria à prática, mais bônus e aulas extras para te dar segurança no mercado.</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {modules.map((mod, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`shape-leaf bg-white/[0.03] backdrop-blur-sm border transition-all duration-300 ${isOpen ? 'border-[var(--color-brand-primary)] shadow-[0_0_25px_rgba(109,166,155,0.2)]' : 'border-white/10 hover:border-[var(--color-brand-accent)]/40 shadow-lg shadow-black/40'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left group gap-4"
                >
                  <div className="flex items-center gap-4 md:gap-6 flex-1 min-w-0 pr-2">
                    <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 shape-leaf flex items-center justify-center font-bold font-impact text-lg md:text-xl transition-all duration-300 ${isOpen ? 'bg-brand-gradient text-[var(--color-brand-dark)] shadow-[0_0_15px_rgba(109,166,155,0.4)]' : 'bg-white/5 text-[var(--color-brand-light)]/40 group-hover:bg-white/10'}`}>
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <h3 className={`text-base md:text-lg lg:text-xl font-bold font-primary uppercase tracking-wider leading-snug transition-colors duration-300 ${isOpen ? 'text-[var(--color-brand-secondary)]' : 'text-[var(--color-brand-light)]'}`}>
                      {mod.title}
                    </h3>
                  </div>
                  <ChevronDown className={`shrink-0 w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[var(--color-brand-secondary)]' : 'text-[var(--color-brand-light)]/40'}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-8 pt-0 md:pl-26 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)] mt-2.5 shrink-0" />
                      <p className="text-[var(--color-brand-light)]/80 text-base md:text-lg font-secondary">
                        <strong className="text-[var(--color-brand-primary)] uppercase text-xs tracking-widest block mb-1">Objetivo</strong>
                        {mod.objective}
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] mt-2.5 shrink-0" />
                      <p className="text-[var(--color-brand-light)]/80 text-base md:text-lg font-secondary">
                        <strong className="text-[var(--color-brand-accent)] uppercase text-xs tracking-widest block mb-1">Foco Prático</strong>
                        {mod.practicalFocus}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Aulas Extras e Bônus */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 font-primary uppercase tracking-wide text-brand-gradient">
              Aulas Extras, Lives Gravadas & Bônus
            </h2>
            <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary">Destaque-se com conteúdo prático extra e acesso a estudos de caso reais.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className={`shape-leaf bg-white/[0.03] backdrop-blur-sm border transition-all duration-300 ${openBonus === 0 ? 'border-[var(--color-brand-primary)] shadow-[0_0_25px_rgba(109,166,155,0.2)]' : 'border-white/10 hover:border-[var(--color-brand-accent)]/40 shadow-lg'}`}>
              <button onClick={() => setOpenBonus(openBonus === 0 ? null : 0)} className="w-full p-6 md:p-8 flex items-start text-left group relative">
                <ChevronDown className={`absolute top-8 right-8 w-6 h-6 transition-transform duration-300 ${openBonus === 0 ? 'rotate-180 text-[var(--color-brand-primary)]' : 'text-[var(--color-brand-light)]/40 group-hover:text-[var(--color-brand-light)]/70'}`} />
                <div>
                  <div className={`w-12 h-12 shape-leaf flex items-center justify-center mb-6 transition-colors duration-300 ${openBonus === 0 ? 'bg-brand-gradient text-[var(--color-brand-dark)] shadow-[0_0_15px_rgba(109,166,155,0.4)]' : 'bg-white/5 text-[var(--color-brand-primary)]'}`}>
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-bold font-primary pr-8 transition-colors duration-300 ${openBonus === 0 ? 'text-[var(--color-brand-primary)]' : 'text-[var(--color-brand-light)]'}`}>Lives Ambiental Pro</h3>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openBonus === 0 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-8 pt-0 md:px-8">
                  <ul className="space-y-4 text-sm md:text-base font-secondary text-[var(--color-brand-light)]/80">
                    <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> Por trás do desenvolvimento do CAR Viewer</li>
                    <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> Começando do zero no 1º WebGIS</li>
                    <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> Integração Banco de Dados e WebGIS</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className={`shape-leaf bg-white/[0.03] backdrop-blur-sm border transition-all duration-300 ${openBonus === 1 ? 'border-[var(--color-brand-primary)] shadow-[0_0_25px_rgba(109,166,155,0.2)]' : 'border-white/10 hover:border-[var(--color-brand-accent)]/40 shadow-lg'}`}>
              <button onClick={() => setOpenBonus(openBonus === 1 ? null : 1)} className="w-full p-6 md:p-8 flex items-start text-left group relative">
                <ChevronDown className={`absolute top-8 right-8 w-6 h-6 transition-transform duration-300 ${openBonus === 1 ? 'rotate-180 text-[var(--color-brand-primary)]' : 'text-[var(--color-brand-light)]/40 group-hover:text-[var(--color-brand-light)]/70'}`} />
                <div>
                  <div className={`w-12 h-12 shape-leaf flex items-center justify-center mb-6 transition-colors duration-300 ${openBonus === 1 ? 'bg-brand-gradient text-[var(--color-brand-dark)] shadow-[0_0_15px_rgba(109,166,155,0.4)]' : 'bg-white/5 text-[var(--color-brand-primary)]'}`}>
                    <LineChart className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-bold font-primary pr-8 transition-colors duration-300 ${openBonus === 1 ? 'text-[var(--color-brand-primary)]' : 'text-[var(--color-brand-light)]'}`}>Revisão Python & Dashboards</h3>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openBonus === 1 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-8 pt-0 md:px-8">
                  <ul className="space-y-4 text-sm md:text-base font-secondary text-[var(--color-brand-light)]/80">
                    <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> Preparação do ambiente</li>
                    <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> Tabelas e resumo estatístico</li>
                    <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> Gráficos interativos</li>
                    <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> Mapas e processamento de dados</li>
                    <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> Design final do dashboard</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`shape-leaf bg-white/[0.03] backdrop-blur-sm border transition-all duration-300 ${openBonus === 2 ? 'border-[var(--color-brand-primary)] shadow-[0_0_25px_rgba(109,166,155,0.2)]' : 'border-white/10 hover:border-[var(--color-brand-accent)]/40 shadow-lg'}`}>
              <button onClick={() => setOpenBonus(openBonus === 2 ? null : 2)} className="w-full p-6 md:p-8 flex items-start text-left group relative">
                <ChevronDown className={`absolute top-8 right-8 w-6 h-6 transition-transform duration-300 ${openBonus === 2 ? 'rotate-180 text-[var(--color-brand-primary)]' : 'text-[var(--color-brand-light)]/40 group-hover:text-[var(--color-brand-light)]/70'}`} />
                <div>
                  <div className={`w-12 h-12 shape-leaf flex items-center justify-center mb-6 transition-colors duration-300 ${openBonus === 2 ? 'bg-brand-gradient text-[var(--color-brand-dark)] shadow-[0_0_15px_rgba(109,166,155,0.4)]' : 'bg-white/5 text-[var(--color-brand-primary)]'}`}>
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-bold font-primary pr-8 transition-colors duration-300 ${openBonus === 2 ? 'text-[var(--color-brand-primary)]' : 'text-[var(--color-brand-light)]'}`}>Google Earth Engine Descomplicado</h3>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openBonus === 2 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-8 pt-0 md:px-8">
                  <ul className="space-y-4 text-sm md:text-base font-secondary text-[var(--color-brand-light)]/80">
                    <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> Funcionalidades e vantagens do GEE</li>
                    <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> Coleção de imagens e filtros de nuvem</li>
                    <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> Índices espectrais e amostragem</li>
                    <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> Algoritmos de classificação</li>
                    <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> Validação e exportação de dados</li>
                    <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> Deploy no Streamlit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={`shape-leaf bg-white/[0.03] backdrop-blur-sm border transition-all duration-300 w-full ${openBonus === 3 ? 'border-[var(--color-brand-primary)] shadow-[0_0_25px_rgba(109,166,155,0.2)]' : 'border-white/10 hover:border-[var(--color-brand-accent)]/40 shadow-lg'}`}>
            <button onClick={() => setOpenBonus(openBonus === 3 ? null : 3)} className="w-full p-6 md:p-10 flex items-start justify-between text-left group relative">
              <div className="flex gap-4 md:gap-6 flex-col md:flex-row items-start md:items-center">
                <div className={`shrink-0 w-12 h-12 shape-leaf flex items-center justify-center transition-colors duration-300 ${openBonus === 3 ? 'bg-brand-gradient text-[var(--color-brand-dark)] shadow-[0_0_15px_rgba(109,166,155,0.4)]' : 'bg-white/5 text-[var(--color-brand-primary)]'}`}>
                  <MonitorPlay className="w-6 h-6" />
                </div>
                <h3 className={`text-xl md:text-2xl font-bold font-primary transition-colors duration-300 pr-12 md:pr-0 ${openBonus === 3 ? 'text-[var(--color-brand-primary)]' : 'text-[var(--color-brand-light)]'}`}>WebGIS Avançado para Desenvolvedores</h3>
              </div>
              <ChevronDown className={`absolute top-8 right-6 md:right-10 md:static md:-ml-2 w-6 h-6 shrink-0 transition-transform duration-300 ${openBonus === 3 ? 'rotate-180 text-[var(--color-brand-primary)]' : 'text-[var(--color-brand-light)]/40 group-hover:text-[var(--color-brand-light)]/70'}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openBonus === 3 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-6 pb-8 pt-2 md:px-10 md:pl-32 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm md:text-base font-secondary text-[var(--color-brand-light)]/80">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> Fundamentos e arquitetura WebGIS</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> Leaflet.js e OpenLayers na prática</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> Análise espacial e visualização</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> Chart.js, D3.js e Plotly/Dash</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> Flask e Django / GeoDjango</li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> PostgreSQL + PostGIS avançado</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> APIs para geoprocessamento</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> Automação e ETL geoespacial</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> Heatmaps, clusterização e 3D</li>
                  <li className="flex items-start gap-3"><span className="text-[var(--color-brand-primary)] mt-1 text-[10px]">▶</span> Deploy e manutenção em nuvem</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
