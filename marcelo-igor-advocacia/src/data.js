// ============================================================
// Dados do site — edite aqui para atualizar contato e serviços
// ============================================================

export const CONTATO = {
  whatsappNumero: "5585996185949",
  whatsappExibicao: "(85) 99618-5949",
  email: "1999migor@gmail.com",
  oab: "OAB/CE nº 54-635",
  endereco: "Rua Desembargador Hermes Parahyba, 1004 — Fortaleza/CE",
  horario: "Atendimento: seg. a sex., 8h às 18h",
};

export const whatsappLink = (mensagem) =>
  `https://wa.me/${CONTATO.whatsappNumero}?text=${encodeURIComponent(mensagem)}`;

export const MSG_PADRAO =
  "Olá, gostaria de uma avaliação do meu caso previdenciário.";

// ---------- Serviços previdenciários ----------
export const SERVICOS_PREVIDENCIARIOS = [
  {
    titulo: "Aposentadoria Rural",
    descricao:
      "Para quem trabalhou no campo, na agricultura familiar ou na pesca — mesmo sem ter contribuído todos os anos. A prova do trabalho rural é a chave.",
    mensagem: "Olá, quero saber sobre aposentadoria rural.",
    icone: "casa-campo",
  },
  {
    titulo: "Aposentadoria Urbana",
    descricao:
      "Por idade ou por tempo de contribuição, incluindo as regras de transição da Reforma. Calculamos o melhor momento e a melhor regra para você.",
    mensagem: "Olá, quero saber sobre aposentadoria urbana.",
    icone: "documento",
  },
  {
    titulo: "Aposentadoria por Invalidez",
    descricao:
      "Quando a doença ou o acidente impede o retorno definitivo ao trabalho. Acompanhamos a perícia e reunimos os laudos que fazem diferença.",
    mensagem: "Olá, quero saber sobre aposentadoria por invalidez.",
    icone: "coracao",
  },
  {
    titulo: "BPC / LOAS",
    descricao:
      "Um salário mínimo por mês para idosos a partir de 65 anos e pessoas com deficiência em situação de baixa renda — sem precisar ter contribuído.",
    mensagem: "Olá, quero saber sobre o BPC/LOAS.",
    icone: "pessoa",
  },
  {
    titulo: "Pensão por Morte",
    descricao:
      "Amparo para cônjuges, companheiros(as) e filhos após a perda de quem sustentava a família. Cuidamos do pedido em um momento tão delicado.",
    mensagem: "Olá, quero saber sobre pensão por morte.",
    icone: "familia",
  },
  {
    titulo: "Auxílio-Acidente",
    descricao:
      "Indenização mensal para quem sofreu acidente e ficou com sequela que reduz a capacidade de trabalho — e pode ser recebida junto com o salário.",
    mensagem: "Olá, quero saber sobre auxílio-acidente.",
    icone: "losango",
  },
  {
    titulo: "Auxílio-Doença",
    descricao:
      "Benefício por incapacidade temporária, para quem precisa se afastar do trabalho para tratar a saúde. Preparamos você para a perícia do INSS.",
    mensagem: "Olá, quero saber sobre auxílio-doença.",
    icone: "saude",
  },
  {
    titulo: "Salário-Maternidade",
    descricao:
      "Para mães seguradas do INSS — inclusive trabalhadoras rurais, desempregadas no período de graça e casos de adoção. Muitas nem sabem que têm direito.",
    mensagem: "Olá, quero saber sobre salário-maternidade.",
    icone: "maternidade",
  },
];

// ---------- Demais áreas ----------
export const AREAS_EXTRAS = [
  {
    titulo: "Direito Trabalhista",
    tag: "Relações de trabalho",
    classe: "trabalhista",
    servicos: [
      {
        titulo: "Rescisão Indireta",
        descricao:
          'Quando é o patrão quem descumpre a lei — salários atrasados, assédio, falta de FGTS — você pode "demitir" a empresa e sair com todos os direitos de uma demissão sem justa causa.',
        mensagem: "Olá, quero saber sobre rescisão indireta.",
        icone: "maleta",
      },
      {
        titulo: "Adicional de Insalubridade",
        descricao:
          "Trabalha exposto a calor, ruído, produtos químicos ou agentes biológicos? Você pode ter direito a um adicional de 10% a 40% sobre o salário — inclusive de forma retroativa.",
        mensagem: "Olá, quero saber sobre adicional de insalubridade.",
        icone: "sol",
      },
      {
        titulo: "Horas Extras",
        descricao:
          "Jornada além do contratado, intervalos suprimidos ou banco de horas irregular geram direito a horas extras com adicional — e reflexos em férias, 13º e FGTS.",
        mensagem: "Olá, quero saber sobre horas extras.",
        icone: "relogio",
      },
      {
        titulo: "Reconhecimento de Vínculo Empregatício",
        descricao:
          "Trabalhou sem carteira assinada? É possível reconhecer o vínculo na Justiça e recuperar salários, FGTS, férias, 13º e o registro do tempo para a aposentadoria.",
        mensagem:
          "Olá, quero saber sobre reconhecimento de vínculo empregatício.",
        icone: "carteira",
      },
      {
        titulo: "Acidente de Trabalho",
        descricao:
          "Acidentes no serviço ou no trajeto e doenças ocupacionais geram direitos: estabilidade, indenizações, FGTS durante o afastamento e benefícios do INSS.",
        mensagem: "Olá, quero saber sobre acidente de trabalho.",
        icone: "alerta",
      },
    ],
  },
  {
    titulo: "Direito Cível",
    tag: "Família e patrimônio",
    classe: "civel",
    servicos: [
      {
        titulo: "Pensão Alimentícia",
        descricao:
          "Pedido, revisão de valor, execução de pensão atrasada ou exoneração. Buscamos o equilíbrio entre a necessidade de quem recebe e a possibilidade de quem paga.",
        mensagem: "Olá, quero saber sobre pensão alimentícia.",
        icone: "familia",
      },
      {
        titulo: "Usucapião",
        descricao:
          "Mora ou usa um imóvel há anos sem escritura? A usucapião pode transformar a posse em propriedade registrada, garantindo segurança para você e sua família.",
        mensagem: "Olá, quero saber sobre usucapião.",
        icone: "casa",
      },
    ],
  },
  {
    titulo: "Direito Tributário",
    tag: "Dívidas com o Fisco",
    classe: "tributaria",
    servicos: [
      {
        titulo: "Prescrição de Dívida Tributária",
        descricao:
          "Dívidas de impostos como IPTU e IPVA têm prazo: em regra, após 5 anos sem cobrança válida, podem estar prescritas. Analisamos se a sua dívida ainda pode ser exigida e pedimos o cancelamento judicial quando cabível.",
        mensagem:
          "Olá, quero verificar a prescrição de uma dívida tributária.",
        icone: "recibo",
      },
      {
        titulo: "Extinção de Dívida Tributária Federal de Empresas",
        descricao:
          "Análise de débitos da sua empresa junto à Receita Federal e à PGFN em busca de causas de extinção — como prescrição, decadência, pagamentos não reconhecidos e compensações — para reduzir ou encerrar a cobrança e regularizar o CNPJ.",
        mensagem:
          "Olá, quero saber sobre extinção de dívida tributária federal da minha empresa.",
        icone: "banco",
      },
    ],
  },
];

// ---------- Como funciona ----------
export const PASSOS = [
  {
    num: "Passo 1",
    titulo: "Conte sua história",
    descricao:
      "Você entra em contato pelo WhatsApp ou presencialmente e nos conta sua situação: onde trabalhou, por quanto tempo, o que aconteceu.",
  },
  {
    num: "Passo 2",
    titulo: "Análise do seu caso",
    descricao:
      "Estudamos seus documentos, seu CNIS e as regras aplicáveis, e explicamos com clareza quais benefícios você pode ter direito e o que esperar.",
  },
  {
    num: "Passo 3",
    titulo: "Acompanhamento completo",
    descricao:
      "Cuidamos do pedido no INSS e, se houver negativa injusta, levamos seu caso à Justiça — mantendo você informado em cada etapa.",
  },
];

// ---------- FAQ ----------
export const FAQ = [
  {
    pergunta: "O INSS negou meu pedido. Ainda tenho chance?",
    resposta:
      "Sim, na maioria dos casos. Uma negativa do INSS não é o fim: é possível recorrer administrativamente ou entrar com ação na Justiça. Muitos benefícios negados na via administrativa são concedidos judicialmente quando as provas são bem organizadas.",
  },
  {
    pergunta:
      "Trabalhei na roça a vida toda, mas nunca contribuí. Posso me aposentar?",
    resposta:
      "Possivelmente sim. O segurado especial (agricultor familiar, pescador artesanal, entre outros) pode se aposentar comprovando o tempo de atividade rural com documentos como notas de venda da produção, contratos de terra, declarações de sindicato e outros registros — mesmo sem contribuições mensais.",
  },
  {
    pergunta: "Quanto custa contratar um advogado previdenciário?",
    resposta:
      "As condições são explicadas com transparência na primeira conversa, antes de qualquer compromisso. Em muitos casos previdenciários, os honorários são combinados sobre o êxito — ou seja, vinculados ao resultado obtido. Cada situação é avaliada individualmente.",
  },
  {
    pergunta: "Preciso ir até o escritório ou dá para resolver online?",
    resposta:
      "Atendemos das duas formas. Boa parte do processo pode ser feita a distância, pelo WhatsApp e por videochamada, com envio digital de documentos. Quem preferir o atendimento presencial é sempre bem-vindo.",
  },
  {
    pergunta: "Quanto tempo demora para sair o benefício?",
    resposta:
      "Depende do tipo de benefício e da via (administrativa ou judicial). Pedidos no INSS costumam levar alguns meses; ações judiciais podem levar mais tempo. Na análise do seu caso, apresentamos uma expectativa realista de prazos — sem promessas vazias.",
  },
];
