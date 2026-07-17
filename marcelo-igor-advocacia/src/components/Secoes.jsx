import { PASSOS, FAQ, CONTATO, whatsappLink } from "../data";
import { Icone, IconeWhatsApp } from "./Icones";
import { Revelar, BotaoWhats } from "./Layout";

export function ComoFunciona() {
  return (
    <section className="como" id="como-funciona">
      <div className="container">
        <Revelar className="cabecalho-secao">
          <span className="eyebrow" style={{ color: "var(--ouro-claro)" }}>
            Como funciona
          </span>
          <h2>Três passos simples para começar</h2>
          <p>
            Você não precisa entender de leis. Nosso trabalho é traduzir o
            Direito e lutar pelo melhor resultado possível.
          </p>
        </Revelar>
        <div className="passos">
          {PASSOS.map((p) => (
            <Revelar key={p.num} className="passo">
              <span className="num">{p.num}</span>
              <h3>{p.titulo}</h3>
              <p>{p.descricao}</p>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Sobre() {
  return (
    <section id="sobre">
      <div className="container sobre-inner">
        <Revelar className="retrato">
          <div className="placeholder">
            <Icone nome="pessoa" tamanho={72} />
            <br />
            Espaço reservado para a foto profissional
            <br />
            de Marcelo Igor
          </div>
        </Revelar>
        <Revelar className="sobre-texto">
          <span
            className="eyebrow"
            style={{
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: 3,
              color: "var(--ouro)",
              fontWeight: 700,
              display: "block",
              marginBottom: 12,
            }}
          >
            Sobre o advogado
          </span>
          <h2>Marcelo Igor</h2>
          <p>
            Advogado com atuação em Direito Previdenciário, Trabalhista, Cível
            e Tributário, voltada a trabalhadores urbanos e rurais, segurados
            do INSS e suas famílias.
          </p>
          <p>
            Acredito que por trás de cada processo existe uma vida inteira de
            trabalho — e que ninguém deveria ser tratado como um número de
            protocolo. Por isso, cada caso recebe atenção individual, do
            primeiro atendimento à decisão final.
          </p>
          <ul className="sobre-lista">
            <li>
              <Icone nome="check" tamanho={20} />
              Atendimento direto com o advogado, sem intermediários
            </li>
            <li>
              <Icone nome="check" tamanho={20} />
              Explicações em linguagem simples, sem "juridiquês"
            </li>
            <li>
              <Icone nome="check" tamanho={20} />
              Atuação administrativa (INSS) e judicial
            </li>
          </ul>
          <BotaoWhats
            mensagem="Olá, Dr. Marcelo, gostaria de conversar sobre meu caso."
            tamanhoIcone={20}
          >
            Conversar com o advogado
          </BotaoWhats>
        </Revelar>
      </div>
    </section>
  );
}

export function PerguntasFrequentes() {
  return (
    <section className="faq" id="duvidas">
      <div className="container">
        <Revelar className="cabecalho-secao">
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2>Perguntas que ouvimos todos os dias</h2>
        </Revelar>
        <Revelar className="faq-lista">
          {FAQ.map((item) => (
            <details key={item.pergunta}>
              <summary>{item.pergunta}</summary>
              <div className="resposta">{item.resposta}</div>
            </details>
          ))}
        </Revelar>
      </div>
    </section>
  );
}

export function CtaFinal() {
  return (
    <section className="cta-final">
      <Revelar className="container">
        <h2>Não deixe seu direito esperando.</h2>
        <p>
          Quanto antes o caso é analisado, mais cedo o benefício pode ser
          concedido — e em muitos casos há valores retroativos a receber.
          Envie uma mensagem e receba uma orientação inicial.
        </p>
        <BotaoWhats>Falar agora no WhatsApp</BotaoWhats>
      </Revelar>
    </section>
  );
}

export function Rodape() {
  return (
    <footer>
      <div className="container rodape-inner">
        <div>
          <h4>Marcelo Igor · Advocacia</h4>
          <p>
            Defesa dos direitos de trabalhadores urbanos e rurais nas áreas
            previdenciária, trabalhista, cível e tributária.
          </p>
          <p style={{ marginTop: 12 }}>{CONTATO.oab}</p>
        </div>
        <div>
          <h4>Áreas de atuação</h4>
          <ul>
            <li>
              <a href="#servicos">
                Previdenciário: aposentadorias, BPC/LOAS e auxílios
              </a>
            </li>
            <li>
              <a href="#outras-areas">
                Trabalhista: rescisão, vínculo, horas extras
              </a>
            </li>
            <li>
              <a href="#outras-areas">Cível: pensão alimentícia e usucapião</a>
            </li>
            <li>
              <a href="#outras-areas">
                Tributário: prescrição e extinção de dívidas
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contato</h4>
          <ul>
            <li>
              <a
                href={whatsappLink("Olá!")}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: {CONTATO.whatsappExibicao}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTATO.email}`}>{CONTATO.email}</a>
            </li>
            <li>{CONTATO.endereco}</li>
            <li>{CONTATO.horario}</li>
          </ul>
        </div>
      </div>
      <div className="rodape-base container">
        © {new Date().getFullYear()} Marcelo Igor — Advocacia. Conteúdo
        informativo, em conformidade com o Código de Ética e Disciplina da
        OAB. Este site não garante resultados; cada caso é analisado
        individualmente.
      </div>
    </footer>
  );
}
