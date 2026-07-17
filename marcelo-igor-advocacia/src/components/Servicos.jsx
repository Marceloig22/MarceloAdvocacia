import { SERVICOS_PREVIDENCIARIOS, AREAS_EXTRAS, whatsappLink } from "../data";
import { Icone } from "./Icones";
import { Revelar } from "./Layout";

function Ficha({ servico, classe = "" }) {
  return (
    <div className={`ficha ${classe}`}>
      <span className="icone" aria-hidden="true">
        <Icone nome={servico.icone} />
      </span>
      <h3>{servico.titulo}</h3>
      <p>{servico.descricao}</p>
      <a
        href={whatsappLink(servico.mensagem)}
        target="_blank"
        rel="noopener noreferrer"
      >
        Avaliar meu caso →
      </a>
    </div>
  );
}

export function ServicosPrevidenciarios() {
  return (
    <section id="servicos">
      <div className="container">
        <Revelar className="cabecalho-secao">
          <span className="eyebrow">Direito Previdenciário · INSS</span>
          <h2>Em qual dessas situações você se encontra hoje?</h2>
          <p>
            Cada benefício do INSS tem regras e provas próprias. Identificamos
            o caminho certo para o seu caso e cuidamos de toda a documentação.
          </p>
        </Revelar>
        <div className="grade-servicos">
          {SERVICOS_PREVIDENCIARIOS.map((s) => (
            <Revelar key={s.titulo} className="ficha-wrap">
              <Ficha servico={s} />
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OutrasAreas() {
  return (
    <section className="areas-extra" id="outras-areas">
      <div className="container">
        <Revelar className="cabecalho-secao">
          <span className="eyebrow">Demais áreas de atuação</span>
          <h2>Trabalhista, Cível e Tributário</h2>
          <p>
            Além dos benefícios do INSS, defendemos seus direitos na relação
            de trabalho, na família, no patrimônio e diante do Fisco.
          </p>
        </Revelar>

        {AREAS_EXTRAS.map((area) => (
          <Revelar key={area.titulo} className="grupo-area">
            <div className="titulo-area">
              <h3>{area.titulo}</h3>
              <span className="tag">{area.tag}</span>
            </div>
            <div className="grade-servicos">
              {area.servicos.map((s) => (
                <Ficha key={s.titulo} servico={s} classe={area.classe} />
              ))}
            </div>
          </Revelar>
        ))}
      </div>
    </section>
  );
}
