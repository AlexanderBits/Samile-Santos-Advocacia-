import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Clock, 
  ChevronDown, 
  CheckCircle2, 
  MessageCircle,
  Scale,
  Users,
  Shield,
  Briefcase,
  Star,
  Instagram,
  Facebook,
  Linkedin,
  Gavel,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Replace with actual generated paths from current context
const DR_IMAGE = "dra_samile.png"; // User provided image
const OFFICE_IMAGE = "law_office_logo.jpg"; // Updated extension
const SEEK_HELP_IMAGE = "session.png";
const HERO_FULL_IMAGE = "hero_full.jpg";

const FAQ_DATA = [
  {
    question: "Como funciona uma consulta jurídica?",
    answer: "A consulta jurídica é o momento inicial onde analisamos o seu caso detalhadamente. Durante a reunião, você expõe os fatos, apresenta documentos e nós avaliamos as melhores estratégias legais, seja para uma resolução amigável ou para uma ação judicial."
  },
  {
    question: "Quais documentos preciso para iniciar um processo?",
    answer: "Isso varia conforme o tipo de ação, mas geralmente solicitamos RG, CPF, comprovante de residência e todos os documentos que comprovem o seu direito (contratos, prints de conversas, áudios, recibos, etc.)."
  },
  {
    question: "Quanto tempo demora um processo judicial?",
    answer: "O tempo é relativo e depende da complexidade da causa, do volume de trabalho do tribunal e de eventuais recursos. Nossa prioridade é buscar a solução mais célere possível, inclusive através de métodos extrajudiciais quando viável."
  },
  {
    question: "Vocês fazem atendimento online?",
    answer: "Sim, realizamos consultoria jurídica online via videoconferência para clientes em todo o Brasil e no exterior, garantindo a mesma segurança e sigilo do atendimento presencial."
  },
  {
    question: "Como são cobrados os honorários?",
    answer: "Os honorários são estabelecidos conforme a complexidade do caso, seguindo a tabela da OAB. Eles podem incluir um valor inicial (pro labore) e/ou um percentual sobre o êxito da causa."
  }
];

const TREATMENTS = [
  {
    icon: <Scale />,
    title: "Direito Civil e Família",
    desc: "Atuação em divórcios, guarda de filhos, pensão alimentícia, inventários e partilha de bens, priorizando o equilíbrio e a proteção do patrimônio familiar."
  },
  {
    icon: <Shield />,
    title: "Direito do Consumidor",
    desc: "Defesa contra práticas abusivas, cobranças Indevidas, danos morais e problemas com compras ou serviços não entregues conforme o prometido."
  },
  {
    icon: <Briefcase />,
    title: "Direito do Trabalho",
    desc: "Assessoria completa para trabalhadores e empresas, tratando de verbas rescisórias, horas extras, assédio e conformidade com a legislação vigente."
  },
  {
    icon: <Gavel />,
    title: "Direito Previdenciário",
    desc: "Auxílio na obtenção de aposentadorias, benefícios por incapacidade e revisões de benefício junto ao INSS de forma técnica e ágil."
  }
];

const BENEFITS = [
  { number: "01", title: "Segurança Jurídica", desc: "Proteção total dos seus direitos através de uma análise técnica e preventiva de cada situação." },
  { number: "02", title: "Atendimento Humanizado", desc: "Escuta atenta e personalizada, entendendo que cada caso envolve vidas e emoções únicas." },
  { number: "03", title: "Transparência Total", desc: "Atualizações constantes sobre o andamento do seu processo de forma clara e sem juridiquês." },
  { number: "04", title: "Agilidade e Estratégia", desc: "Busca por soluções eficientes, priorizando acordos quando estes forem mais benéficos ao cliente." },
  { number: "05", title: "Ética e Sigilo", desc: "Compromisso absoluto com a confidencialidade e os preceitos éticos da advocacia." },
  { number: "06", title: "Foco em Resultados", desc: "Dedicação integral para alcançar o melhor desfecho possível para a sua demanda jurídica." }
];

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`nav-header ${scrolled ? 'glass shadow-md' : ''}`}>
        <div className="container nav-container">
          <div className="nav-logo">
            Dra. Samile Santos
            <span>Advogada & Consultora Jurídica</span>
          </div>
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#sobre" className="nav-link">O Escritório</a>
            <a href="#especialidades" className="nav-link">Especialidades</a>
            <a href="#faq" className="nav-link">Dúvidas</a>
            <a href="#atendimento" className="nav-link">Atendimento</a>
          </div>
          <button className="sharp-btn" style={{ padding: '0.6rem 1.5rem', fontSize: '0.75rem' }}>
            Agendar Consulta
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero" style={{ 
        backgroundColor: '#FFFFFF',
        minHeight: '94vh',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '180px 0 0', // Increased padding to avoid top-of-section clipping
        position: 'relative',
        overflow: 'visible' // Changed from hidden to avoid clipping the head
      }}>
        <div className="container" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'minmax(400px, 500px) minmax(500px, 700px)', // Widen portrait column even more
          justifyContent: 'center', 
          alignItems: 'stretch', 
          gap: '2.5rem',
          zIndex: 3,
          minHeight: '700px'
        }}>
          {/* Informational Box - White with Gold Border */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
            style={{ 
              padding: '6rem 4rem', // Increased from 4.5rem 3rem
              background: '#FFFFFF', 
              borderLeft: '6px solid var(--secondary)',
              boxShadow: '20px 20px 60px rgba(0, 0, 0, 0.05)',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <span style={{ 
              color: 'var(--secondary)', 
              fontWeight: 700, 
              letterSpacing: '4px', 
              textTransform: 'uppercase', 
              fontSize: '0.85rem',
              display: 'block',
              marginBottom: '1rem',
              fontFamily: 'Montserrat, sans-serif'
            }}>
              Soluções Jurídicas Especializadas
            </span>
            <h1 style={{ 
              fontSize: '3.5rem', 
              lineHeight: '1.2', 
              marginBottom: '0.8rem', 
              color: 'var(--primary)',
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700
            }}>
              Dra. Samile Santos
            </h1>
            <div style={{ 
              marginBottom: '2rem'
            }}>
              <span style={{ 
                fontWeight: 500, 
                fontSize: '1rem', 
                color: 'var(--text-muted)',
                letterSpacing: '1px'
              }}>
                OAB-RJ XXX.XXX | Advocacia & Consultoria
              </span>
            </div>
            <p style={{ 
              fontSize: '1.4rem', 
              lineHeight: '1.5', 
              marginBottom: '3rem', 
              color: 'var(--primary)', 
              fontStyle: 'italic', 
              fontWeight: 500,
              fontFamily: '"Playfair Display", serif',
              opacity: 0.9
            }}>
              "Justiça com ética, agilidade e compromisso total com seus direitos."
            </p>
            <div style={{ display: 'flex' }}>
              <button className="sharp-btn" style={{ 
                backgroundColor: 'var(--primary)', 
                color: 'white',
                padding: '1.2rem 3rem',
                fontSize: '1rem',
                fontWeight: 700,
                border: 'none',
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.2)'
              }}>
                FALAR COM A DRA. <ArrowRight size={22} style={{ marginLeft: '12px' }} />
              </button>
            </div>
          </motion.div>

          {/* Lawyer Portrait - Enquadrada Sem Cortes */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            style={{
              zIndex: 2,
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-start',
              height: '100%',
              overflow: 'visible' 
            }}
          >
            <div style={{ 
              position: 'relative',
              width: '100%',
              height: '100%',
              overflow: 'visible'
            }}>
              <img 
                src={DR_IMAGE} 
                alt="Dra. Samile Santos" 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  display: 'block',
                  transform: 'scale(1.58)', // Slightly smaller for better arm fit
                  transformOrigin: 'top center',
                  marginTop: '-95px', // Adjusted to keep head fully visible
                  // Applied mask directly to image so shifted head isn't clipped
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                }} 
              />
            </div>
          </motion.div>
        </div>
        
        {/* Dark overlay for better text contrast */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          background: 'linear-gradient(to right, rgba(255,255,255,0.6), transparent 70%)',
          zIndex: 1 
        }}></div>
      </section>

      {/* About Section */}
      <section id="sobre" className="container about-section" style={{ paddingTop: '12rem' }}>
        <div className="about-image">
          <img src={OFFICE_IMAGE} alt="Escritório de Advocacia" />
        </div>
        <div className="about-text">
          <div className="section-header" style={{ textAlign: 'left', margin: '0 0 1rem' }}>
            <span>Dra. Samile Santos</span>
            <h2>Excelência e Compromisso na Defesa de Seus Direitos</h2>
          </div>
          <p>
            Dra. Samile Santos é advogada com sólida experiência no sistema jurídico brasileiro, oferecendo suporte estratégico em causas preventivas e contenciosas com foco em transparência e resultados.
          </p>
          <p>
            Nosso escritório utiliza tecnologia de ponta para garantir agilidade e precisão em cada caso, buscando sempre a resolução mais favorável e ética para a proteção total dos seus direitos.
          </p>
          <button className="sharp-btn-secondary" style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
            Conhecer Especialidades
          </button>
        </div>
      </section>

      {/* Specialities Section */}
      <section id="especialidades" className="gradient-bg">
        <div className="container">
          <div className="section-header">
            <span style={{ color: 'var(--secondary)' }}>Áreas de Atuação</span>
            <h2 style={{ color: 'white' }}>Nossas Especialidades Jurídicas</h2>
          </div>
          <div className="treatments-grid">
            {TREATMENTS.map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="treatment-card"
              >
                <div className="treatment-icon">{t.icon}</div>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
                <a href="#" style={{ color: 'var(--secondary)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Saiba mais <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="container info-section">
        <div className="info-content">
          <h2 style={{ fontFamily: 'Playfair Display' }}>Quando Procurar a Justiça?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Muitas questões podem ser resolvidas de forma ágil quando buscamos orientação jurídica no momento certo. Não espere o problema escalar para agir.
          </p>
          <div className="info-grid">
            {[
              "Divórcios e Acordos de Guarda",
              "Problemas com Bancos e Cartões",
              "Rescisões Trabalhistas Indevidas",
              "Ações de Inventário e Herança",
              "Danos Morais e Materiais",
              "Indenizações por Atraso de Voo",
              "Problemas com Planos de Saúde",
              "Defesa em Cobranças Abusivas"
            ].map((item, i) => (
              <div key={i} className="info-item">
                <CheckCircle2 size={18} />
                {item}
              </div>
            ))}
          </div>
          <button className="sharp-btn">
            Consultar meu Caso
          </button>
        </div>
        <div className="info-image">
          <img src={SEEK_HELP_IMAGE} alt="Legal Consultation" />
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header">
            <span>Diferenciais</span>
            <h2>Por que Escolher Nossa Advocacia?</h2>
          </div>
          <div className="benefits-grid">
            {BENEFITS.map((b, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="benefit-card"
              >
                <div className="benefit-number">{b.number}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="container">
        <div className="section-header">
          <span>Relatos</span>
          <h2>A Opinião de Nossos Clientes</h2>
        </div>
        <div className="testimonials-grid">
          {[
            { name: "Mariana Oliveira", text: "Dra. Samile foi impecável no meu processo de divórcio. Sempre muito atenciosa e firme nas negociações. Recomendo muito!" },
            { name: "Ricardo Dias", text: "Excelente atendimento. O escritório resolveu um problema trabalhista que eu já dava como perdido de forma muito ágil." }
          ].map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-content">"{t.text}"</div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h5>{t.name}</h5>
                  <div className="stars">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" style={{ background: '#fdfdfd' }}>
        <div className="container">
            <div className="section-header">
                <span>Dúvidas Frequentes</span>
                <h2>Informações Importantes</h2>
            </div>
            <div className="faq-list">
                {FAQ_DATA.map((item, index) => (
                <div 
                    key={index} 
                    className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                    <div className="faq-question">
                    {item.question}
                    <ChevronDown size={20} style={{ transform: activeFaq === index ? 'rotate(180deg)' : 'rotate(0)' }} />
                    </div>
                    <AnimatePresence>
                        {activeFaq === index && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="faq-answer"
                            >
                                {item.answer}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                ))}
            </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <section id="atendimento" className="container footer-contact">
        <div className="contact-box">
          <h4>Escritório</h4>
          <div className="contact-info">
            <div><Clock size={20} /> Seg a Sex: 09:00 - 18:00</div>
            <div><Phone size={20} /> (21) 9XXXX-XXXX</div>
            <div><MapPin size={20} /> Endereço Profissional - Rio de Janeiro, RJ</div>
          </div>
          <div className="social-links">
            <a href="#" className="social-button"><Instagram size={20} /></a>
            <a href="#" className="social-button"><Facebook size={20} /></a>
            <a href="#" className="social-button"><Linkedin size={20} /></a>
          </div>
        </div>
        <div className="contact-box">
          <h4>Localização</h4>
          <div className="map-container">
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.67!2d-43.17!3d-22.90!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU0JzAwLjAiUyA0M8KwMTAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
               loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="contact-box">
            <h4>Navegação</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href="#home" className="nav-link">Página Inicial</a>
                <a href="#sobre" className="nav-link">Sobre a Dra. Samile</a>
                <a href="#especialidades" className="nav-link">Áreas de Atuação</a>
                <a href="#faq" className="nav-link">Dúvidas Frequentes</a>
            </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <footer className="footer-bottom">
        <div className="container">
          © 2026 Dra. Samile Santos | Advocacia & Consultoria Jurídica. Todos os direitos reservados.
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/55219XXXXXXXX" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
          style={{ width: '100%', height: '100%' }}
        />
      </a>
    </div>
  );
}