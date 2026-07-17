import { useEffect, useRef } from "react";
import { whatsappLink, MSG_PADRAO } from "../data";
import { Icone, IconeWhatsApp } from "./Icones";

// Utilitário: revelação suave ao rolar
export function Revelar({ children, className = "", ...props }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visivel");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`revelar ${className}`} {...props}>
      {children}
    </div>
  );
}

export function BotaoWhats({ mensagem = MSG_PADRAO, children, tamanhoIcone = 22 }) {
  return (
    <a
      className="btn btn-whats"
      href={whatsappLink(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconeWhatsApp tamanho={tamanhoIcone} />
      {children}
    </a>
  );
}

export function Topo() {
  return (
    <header className="topo">
      <div className="container topo-inner">
        <a className="marca" href="#inicio">
          <span className="marca-selo">MI</span>
          <span className="marca-texto">
            <span className="marca-nome">Marcelo Igor</span>
            <br />
            <span className="marca-sub">Advocacia</span>
          </span>
        </a>
        <nav className="menu" aria-label="Navegação principal">
          <a href="#servicos">Previdenciário</a>
          <a href="#outras-areas">Trabalhista, Cível e Tributário</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#sobre">Sobre</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <a
          className="btn-topo"
          href={whatsappLink(MSG_PADRAO)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale conosco
        </a>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-inner">
        <div>
          <span className="eyebrow">
            Previdenciário · Trabalhista · Cível · Tributário
          </span>
          <h1>
            O direito que você construiu a vida inteira{" "}
            <em>merece ser defendido.</em>
          </h1>
          <p className="lead">
            Aposentadorias, benefícios do INSS, direitos trabalhistas, pensão
            alimentícia, usucapião e dívidas tributárias. Analisamos o seu caso
            com atenção, explicamos tudo em linguagem simples e acompanhamos
            você em cada etapa.
          </p>
          <div className="hero-acoes">
            <BotaoWhats>Avaliar meu caso no WhatsApp</BotaoWhats>
            <a className="btn btn-fantasma" href="#servicos">
              Ver áreas de atuação
            </a>
          </div>
          <p className="hero-nota">
            Atendimento presencial e online · Primeira análise do caso sem
            compromisso
          </p>
        </div>
        <div className="selo-wrap" aria-hidden="true">
          <svg className="selo" viewBox="0 0 300 300">
            <defs>
              <path
                id="circulo-texto"
                d="M150,150 m-118,0 a118,118 0 1,1 236,0 a118,118 0 1,1 -236,0"
              />
            </defs>
            <circle
              cx="150"
              cy="150"
              r="132"
              fill="none"
              stroke="#D9B25F"
              strokeWidth="1.5"
              opacity=".8"
            />
            <circle
              cx="150"
              cy="150"
              r="100"
              fill="none"
              stroke="#D9B25F"
              strokeWidth="1"
              opacity=".5"
              strokeDasharray="3 5"
            />
            <text
              fontFamily="Marcellus, serif"
              fontSize="15.5"
              letterSpacing="4.5"
              fill="#D9B25F"
            >
              <textPath href="#circulo-texto">
                SEGURANÇA · DIGNIDADE · APOSENTADORIA · BENEFÍCIOS ·{" "}
              </textPath>
            </text>
          </svg>
          <div className="selo-centro">
            <span className="grande">INSS</span>
            <span className="pequeno">
              Seus direitos,
              <br />
              bem defendidos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaixaConfianca() {
  return (
    <div className="faixa">
      <div className="container faixa-inner">
        <div className="faixa-item">
          <Icone nome="escudo" tamanho={20} />
          Previdenciário, Trabalhista, Cível e Tributário
        </div>
        <div className="faixa-item">
          <Icone nome="mais" tamanho={20} />
          Análise administrativa e judicial
        </div>
        <div className="faixa-item">
          <Icone nome="balao" tamanho={20} />
          Atendimento humano, presencial e online
        </div>
      </div>
    </div>
  );
}

export function WhatsFlutuante() {
  return (
    <a
      className="whats-flutuante"
      href={whatsappLink(MSG_PADRAO)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <span style={{ color: "#fff", display: "grid" }}>
        <IconeWhatsApp tamanho={30} />
      </span>
    </a>
  );
}
